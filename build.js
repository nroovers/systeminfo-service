const esbuild = require("esbuild");

esbuild
  .build({
    entryPoints: ["src/index.ts"],
    bundle: true,
    platform: "node",
    outfile: "dist/index.js",
    sourcemap: true,
    target: ["node24"],
    tsconfig: "tsconfig.json",
    minify: true,
    external: [
      "express",
      "cors",
      "morgan",
      "express-mung",
      "systeminformation",
      "dotenv",
      "node-cache",
      "nodemon",
      "ts-node",
      "tsconfig-paths",
    ],
  })
  .catch(() => process.exit(1));
