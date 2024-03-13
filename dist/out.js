(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __markAsModule = (target) =>
    __defProp(target, "__esModule", { value: true });
  var __commonJS = (cb, mod) =>
    function __require() {
      return (
        mod ||
          (0, cb[__getOwnPropNames(cb)[0]])(
            (mod = { exports: {} }).exports,
            mod
          ),
        mod.exports
      );
    };
  var __reExport = (target, module, copyDefault, desc) => {
    if (
      (module && typeof module === "object") ||
      typeof module === "function"
    ) {
      for (let key of __getOwnPropNames(module))
        if (
          !__hasOwnProp.call(target, key) &&
          (copyDefault || key !== "default")
        )
          __defProp(target, key, {
            get: () => module[key],
            enumerable:
              !(desc = __getOwnPropDesc(module, key)) || desc.enumerable,
          });
    }
    return target;
  };
  var __toESM = (module, isNodeMode) => {
    return __reExport(
      __markAsModule(
        __defProp(
          module != null ? __create(__getProtoOf(module)) : {},
          "default",
          !isNodeMode && module && module.__esModule
            ? { get: () => module.default, enumerable: true }
            : { value: module, enumerable: true }
        )
      ),
      module
    );
  };

  // http-test:https://cdn.skypack.dev/react
  var require_react = __commonJS({
    "http-test:https://cdn.skypack.dev/react"() {
      ok;
    },
  });

  // http-test:https://cdn.skypack.dev/react-dom
  ok;

  // src/env.jsx
  var import_react = __toESM(require_react());
  var Greet = () =>
    /* @__PURE__ */ import_react.default.createElement(
      "h1",
      null,
      "Hello, juejin!"
    );
  (void 0)(
    /* @__PURE__ */ import_react.default.createElement(Greet, null),
    document.getElementById("root")
  );
})();
