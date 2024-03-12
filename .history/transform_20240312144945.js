const { transform } = require("esbuild");
const transformAPI = async () => {
  const res = await transform(
    "const isNull = (str: string): boolean => str.length > 0;",
    {
      sourcemap: true,
      loader: "tsx",
    }
  );
};
