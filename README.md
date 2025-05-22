### TXG Core

> collection of schemas, helpers, validators that is shareable txglobe backend services.

#### Whats inside

- [x] [Fastify Type Provider Typebox](https://www.npmjs.com/package/@fastify/type-provider-typebox)

#### Collaboration Guide

1. Apply changes here
2. Add unit test on `./test` directory.
3. Run
   ```sh
   $ npm run build
   ```
4. Every changes here should update the version, with [semantic version guide](https://semver.org/)

### Local Installation Guide

1. Take a look on any `project's package.json`.
2. Add this line
   ```json
   {
     "dependencies": {
       "txg-core": "file:../txg-core" // relative path
     }
   }
   ```
3. Usage can be,

   ```sh
   # Selective
   $ import { utilFunctionHere } from "txg-core/utils";

   # Greedy
   $ import utils from "txg-core/utils";
   ```
