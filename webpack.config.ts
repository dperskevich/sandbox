import path from "path";
import { BuildWebpackConfig } from "./config/build/build-webpack-config";
import { BuildEnv } from "./config/build/types/config";

export default (env: BuildEnv) => {
  const mode = env.mode || "development";
  const isDev = mode === "development";
  const PORT = env.port || 3000;

  const paths = {
    build: path.resolve(__dirname, "build"),
    entry: path.resolve(__dirname, "src", "index.tsx"),
    html: path.resolve(__dirname, "public", "index.html")
  }

  return BuildWebpackConfig({
    mode,
    isDev,
    port: PORT,
    paths
  });
}