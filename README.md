# yarn-plugin-unique
Detect duplicate packages that are not allowed to have multiple versions running at the same time

## Usage

1. Import this plugin
```sh
yarn plugin import https://raw.githubusercontent.com/ishowta/yarn-plugin-unique/alpha/bundles/@yarnpkg/plugin-unique.js
```

2. Fill in the `uniquePackages` field in `package.json` with the list of packages you want to make unique.

```json5
{
  ...,
  "uniquePackages": [
    // example
    "react",
    "@chakra-ui/system",
    "prosemirror/model"
  ]
}
```

3. It will be checked every time you run `yarn install`.
