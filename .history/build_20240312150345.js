const { serve, build, buildSync } = require("esbuild");

const envPlugin = {
  name: "env-plugin",
  setup(build) {
    build.onLoad({ filter: /^env$/, nameSpace });
  },
};

async function runBuild() {
  const result = await build({
    absWorkingDir: process.cwd(),
    entryPoints: ["src/index.jsx"],
    outdir: "dist",
    bundle: true,
    format: "esm",
    splitting: true,
    sourcemap: true,
    // 是否生成打包的元信息文件
    metafile: true,
    // 是否进行代码压缩
    minify: false,
    // 是否开启 watch 模式，在 watch 模式下代码变动则会触发重新打包
    watch: false,
    // 是否将产物写入磁盘
    write: true,
  });
  console.log(result);
}
runBuild();
