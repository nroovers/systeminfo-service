const esbuild = require('esbuild');

esbuild.build({
  entryPoints: ['src/index.ts'],
  bundle: true,
  platform: 'node',
  outfile: 'dist/index.js',
  sourcemap: true,
  target: ['node24'],  // adjust to your Node.js version
  tsconfig: 'tsconfig.json',
  minify: true,
  external: [
    'express',
    'cors',
    'morgan',
    'express-mung',
    'systeminformation',
    'dotenv'
  ],
}).catch(() => process.exit(1));