const { serve, build, buildSync } = require("esbuild");
async function runBuild() {
  const result = await build({
    absWorkingDir: process.cwd(),
    entryPoints: ["src/index.jsx"],
    outdir: "dist",
    bundle: true,
    format: "esm",
  });
}
