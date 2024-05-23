import { Configuration } from 'webpack';
import { BuildLoaders } from './build-loaders';
import { BuildPlugins } from './build-plugins';
import { BuildResolvers } from './build-resolvers';
import { BuildOptions } from './types/config';
import { BuildDevServer } from './build-dev-server';

export const BuildWebpackConfig = (options: BuildOptions): Configuration => {
  const { mode, paths, isDev } = options;

  return {
    mode,
    entry: paths.entry,
    output: {
      filename: '[name].[contenthash].js',
      assetModuleFilename: 'assets/[name][ext]',
      path: paths.build,
      clean: true,
    },
    watch: isDev,
    // stats: {
    //     children: true
    // },
    resolve: BuildResolvers(options),
    plugins: BuildPlugins(options),
    module: {
      rules: BuildLoaders(options),
    },
    // when all files combined into bundle.js it's hard to debug
    // so we need to leave source maps for debugging to have a proper stack trace.
    // devtool uses SourceMapDevToolPlugin under the hood,
    // but we can user it directly to have more control over source maps (dev/prod modes)
    devtool: isDev ? 'inline-source-map' : undefined,
    devServer: isDev ? BuildDevServer(options) : undefined,
  };
};
