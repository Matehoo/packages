# @kodadot1/static

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![Github Actions][github-actions-src]][github-actions-href]
[![Codecov][codecov-src]][codecov-href]

> Magic static void main

## Usage

Install package:

```sh
# npm
npm install @kodadot1/static

# yarn
yarn add @kodadot1/static

# pnpm
pnpm install @kodadot1/static
```

Import:

```js
// ESM
import {} from "@kodadot1/static";

// CommonJS
const {} = require("@kodadot1/static");
```

## Available config files

### 🔧 chains

Static chain files such as decimals, symbol, ss58

### 🔧 endpoints

Map of RPC endpoints for each chain


### 🔧 indexers

Map of subsquid indexer endpoints for each chain

### 🔧 names

Map of chain names for each chain. Suitable for frontend

### 🔧 services

Map of clodflare workers we use

### 🔧 types

Misc types for each config

## License

Made with 💛

Published under [MIT License](./LICENSE).

<!-- Badges -->

[npm-version-src]: https://img.shields.io/npm/v/@kodadot1/static?style=flat-square
[npm-version-href]: https://npmjs.com/package/@kodadot1/static
[npm-downloads-src]: https://img.shields.io/npm/dm/@kodadot1/static?style=flat-square
[npm-downloads-href]: https://npmjs.com/package/@kodadot1/static
[github-actions-src]: https://img.shields.io/github/actions/workflow/status/unjs/@kodadot1/static/ci.yml?branch=main&style=flat-square
[github-actions-href]: https://github.com/unjs/@kodadot1/static/actions?query=workflow%3Aci
[codecov-src]: https://img.shields.io/codecov/c/gh/unjs/@kodadot1/static/main?style=flat-square
[codecov-href]: https://codecov.io/gh/unjs/@kodadot1/static
