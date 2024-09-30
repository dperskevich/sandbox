import webpack, { DefinePlugin } from 'webpack';
import path from 'path';
import { BuildPaths } from '../build/types/config';
import { BuildCssLoaders } from '../build/loaders/build-css-loaders';

export default ({ config }: { config: webpack.Configuration }) => {
  const paths: BuildPaths = {
    build: '',
    html: '',
    entry: '',
    src: path.resolve(__dirname, '..', '..', 'src'),
  };

  config.resolve!.modules = [
    paths.src,
    'node_modules',
  ];
  config.resolve?.extensions?.push('.ts', '.tsx');
  config.module?.rules?.push(BuildCssLoaders(true));

  config.plugins?.push(new DefinePlugin({
    __IS_DEV__: true,
  }));

  return config;
};
