const { transform } = require("esbuild");
const transformAPI = () => {
  transform("const isNull = (str: string): boolean => str.length > 0;"),
    {
      sourcemap: true,
      loader: "tsx",
    };
};
