const isProd = process.env.NODE_ENV === "production";

export const assetPrefix = isProd
  ? "https://cdn.statically.io/gh/NaveenDA/naveenda.github.io/gh-pages/"
  : "";
