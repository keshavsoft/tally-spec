# tally-spec

Single source of truth for TallyPrime schema definitions, TDL contracts, and canonical API routes.

## Overview

`tally-spec` decouples Tally domain knowledge and route specifications from execution runtimes. It is consumed by downstream packages such as `tally-xml-tdl` and `tally-simple-json` alongside `@keshavsoft/api-tree`.

$$\text{Runtime Tree} = \underbrace{\text{@keshavsoft/api-tree}}_{\text{Generic Routing Engine}} \;+\; \underbrace{\text{tally-spec}}_{\text{Domain Knowledge (source.json + api.json)}} \;+\; \underbrace{\text{executor}}_{\text{Execution Flavor (XML vs Clean JSON)}}$$

## Installation

```bash
npm install tally-spec
```

## Usage

### Direct Import (ESM)

```javascript
import { source, apiPaths } from "tally-spec";

console.log(apiPaths);
// [
//   "tally.company.fetch",
//   "tally.masters.unit.all",
//   ...
// ]
```

### JSON Subpath Imports

```javascript
import source from "tally-spec/source.json" with { type: "json" };
import apiPaths from "tally-spec/api.json" with { type: "json" };
```

### Wiring with `@keshavsoft/api-tree`

```javascript
import apiTree from "@keshavsoft/api-tree";
import { source, apiPaths } from "tally-spec";
import executor from "./my-tally-executor.js";

const app = apiTree(source, apiPaths, executor);

// Call generated tree
const units = await app.masters.unit.all();
```

## License

MIT © [KeshavSoft](https://github.com/keshavsoft)
