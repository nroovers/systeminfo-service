/**
 * Build script using esbuild for the systeminfo-service project.
 *
 * - Bundles the TypeScript entry point (`src/index.ts`) for Node.js (targeting Node 22).
 * - Outputs the bundled file to `dist/index.js` with source maps and minification.
 * - Excludes specified external dependencies from the bundle.
 * - Copies static assets from `src/assets` to `dist/assets` after a successful build.
 *
 * @fileoverview Build script for systeminfo-service using esbuild.
 */
const esbuild = require("esbuild");
const fs = require("fs");
const path = require("path");

/**
 * Recursively copies files and directories from a source path to a destination path.
 *
 * If the source is a directory, all its contents (including subdirectories) are copied recursively.
 * If the source is a file, it is copied directly to the destination.
 *
 * @param {string} src - The path to the source file or directory.
 * @param {string} dest - The path to the destination file or directory.
 */
const copyRecursiveSync = (src, dest) => {
  if (!fs.existsSync(src)) return;

  const stat = fs.statSync(src);
  if (stat.isDirectory()) {
    if (!fs.existsSync(dest)) fs.mkdirSync(dest, { recursive: true });

    for (const file of fs.readdirSync(src)) {
      copyRecursiveSync(path.join(src, file), path.join(dest, file));
    }
  } else {
    fs.copyFileSync(src, dest);
  }
};

esbuild
  .build({
    entryPoints: ["src/index.ts"],
    bundle: true,
    platform: "node",
    outfile: "dist/index.js",
    sourcemap: true,
    target: ["node22"],
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
  .then(() => {
    // Copy static assets
    copyRecursiveSync("src/assets", "dist/assets");
    console.log("Assets copied successfully.");
  })
  .catch(() => process.exit(1));
