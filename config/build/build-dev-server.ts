import type { Configuration as DevServerConfiguration } from 'webpack-dev-server';
import { BuildOptions } from './types/config';

export function BuildDevServer(options: BuildOptions): DevServerConfiguration {
  const { port } = options;

  return {
    port,
    // open the browser when the server starts
    open: true,
    historyApiFallback: true,
  };
}
