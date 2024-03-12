const { serve, build, buildSync } = require("esbuild");
async function runBuild() {
  const result = await build({
    absWorkingDir: process.cwd(),
  });
}
