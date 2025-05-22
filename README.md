### TXG Core

> collection of schemas, helpers, validators that is shareable txglobe backend services.

#### Whats inside

> can import the following:

```sh
import utils from 'txg-core/utils'; # utils functions
import schemas from 'txg-core/schemas'; # fastify typebox defined schemas
import types from 'txg-core/types'; # types and interfaces
```

- [x] [Fastify Type Provider Typebox](https://www.npmjs.com/package/@fastify/type-provider-typebox)

#### Collaboration Guide

1. Apply changes here
2. Add unit test on `./tests` directory.
3. Run
   ```sh
   $ npm run build
   ```
4. [Semantic version guide](https://semver.org/)

#### Local Installation Guide

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

#### Installation Guide

    > this repos, was intended for internal use only.

1. To install,
   ```sh
   $ npm install git+ssh://git@github.com:TXGlobe/txg-core.git
   $ npm install git+ssh://git@github.com:TXGlobe/txg-core.git --force # always fetch updates
   ```
2. For updates
   ```sh
   $ npm install txg-core --force # shorthand
   ```
