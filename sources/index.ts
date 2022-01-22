import { miscUtils, Package, Plugin } from "@yarnpkg/core";
import { PortablePath, npath, ppath } from "@yarnpkg/fslib";
import { Project, InstallOptions } from "@yarnpkg/core/lib/Project";
import { groupBy, toPairs } from "lodash-es";
import { exit } from "process";

const FgRed = "\x1b[31m";
const error = (message: string) => {
  console.error(FgRed, `[yarn-plugin-unique] Error: ${message}`);
};

const makeTuple = <T extends unknown[]>(...args: T): T => args;
export function hasOwnProperty<X extends {}, Y extends PropertyKey>(
  obj: X,
  prop: Y
): obj is X & Record<Y, unknown> {
  return prop in obj;
}

type PackageName = string & {};
type Version = string & {};
type Duplicates = [PackageName, [Version, [Package, ...Package[]]][]][];

const targetPackageKey = "uniquePackages";

const getTargetPackageNames = (cwd: PortablePath): string[] | undefined => {
  const isValid = (packages: unknown): packages is string[] =>
    Array.isArray(packages) &&
    packages.every((pName) => typeof pName === "string");

  const packageJsonPath = ppath.resolve(
    cwd,
    npath.toPortablePath("package.json")
  );
  const packageJson = miscUtils.dynamicRequire(packageJsonPath) as Record<
    string,
    unknown
  >;
  if (!hasOwnProperty(packageJson, targetPackageKey)) {
    return undefined;
  }
  const targetPackages = packageJson[targetPackageKey];
  if (!isValid(targetPackages)) {
    error(
      `Invalid form for \`${targetPackageKey}\` field in package.json. Valid forms: \`string[]\`.`
    );
    exit(1);
  }
  return targetPackages;
};

const getDuplicatedPackageGroups = (
  project: Project,
  targetPackageNames: string[]
): Duplicates | undefined => {
  const packagePathName = (p: Package) => `@${p.scope}/${p.name}`;

  const targetPackages = Array.from(project.storedPackages.values()).filter(
    (p) => targetPackageNames.includes(packagePathName(p))
  );
  const targetPackageGroups: Duplicates = toPairs(
    groupBy(targetPackages, packagePathName)
  ).map(([name, group]) => makeTuple(name, toPairs(groupBy(group, "version"))));

  return targetPackageGroups.filter((pg) => pg[1].length >= 2);
};

const printPackageDuplicated = (duplicatedPackageGroups: Duplicates): void => {
  for (const packageGroup of duplicatedPackageGroups) {
    const [packageName, packages] = packageGroup;
    const versions = packages.map((p) => p[0]);
    error(
      `${packageName} is duplicated and not allowed. versions: ${versions.join(
        ", "
      )}`
    );
  }
};

const plugin: Plugin = {
  hooks: {
    afterAllInstalled: (project: Project, options: InstallOptions) => {
      const targetPackageNames = getTargetPackageNames(project.cwd);
      if (targetPackageNames === undefined) {
        return;
      }
      const duplicatedPackageGroups = getDuplicatedPackageGroups(
        project,
        targetPackageNames
      );
      if (duplicatedPackageGroups) {
        printPackageDuplicated(duplicatedPackageGroups);
        exit(1);
      }
    },
  },
};

export default plugin;
