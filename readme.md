## Packages

### Resolve path aliases with `tsconfig-paths`

This project uses TypeScript path aliases to make imports cleaner and easier to manage (e.g., `@utils/*` instead of long relative paths). However, Node.js and `ts-node` don’t natively recognize these aliases when running the code.

To fix this, we use the `tsconfig-paths` package, which reads the path alias settings from `tsconfig.json` and helps Node.js resolve these aliases correctly at runtime. This ensures that when running or debugging the project with `ts-node`, imports using path aliases work without errors.


### Production Build with `esbuild`

We use [esbuild](https://esbuild.github.io/) to bundle and compile our TypeScript code into a single JavaScript file for production. Esbuild offers extremely fast builds, supports the TypeScript path aliases defined in `tsconfig.json`, and bundles the entire project into one output file, making deployment easier and cleaner.

To keep the bundle lightweight, certain dependencies like `express`, `cors`, and others are marked as external so they are loaded from `node_modules` at runtime instead of being bundled.

To build and run the project in production, simply run:

```bash
npm run build
npm run start