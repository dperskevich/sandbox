import { BuildOptions } from "./types/config";
import type { Configuration as DevServerConfiguration } from "webpack-dev-server";

export function BuildDevServer(options: BuildOptions): DevServerConfiguration {
    const { port } = options;

    return {
        port,
        // open the browser when the server starts
        open: true,
        historyApiFallback: true
    };
}