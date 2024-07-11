import { RuleSetRule } from 'webpack';
import { BuildCssLoaders } from './loaders/build-css-loaders';
import { BuildOptions } from './types/config';

export function BuildLoaders({ isDev }: BuildOptions): RuleSetRule[] {
  // use svgr loader because it allows to import svg as a component
  // othewise putting scr into img rasterizes svg and css fill stops working
  const svgLoader = {
    test: /\.svg$/i,
    issuer: /\.[jt]sx?$/,
    use: ['@svgr/webpack'],
  };

  const assetResourseLoader = {
    test: /\.(gif|png|jpe?g)$/i,
    type: 'asset/resource',
  };

  // Если бы мы использовали js файлы,
  // то нам нужно было бы добавить еще один лоадер - babel-loader.
  // Это транспайлер, который преобразует современный js(x) в старый.
  const tsLoader: RuleSetRule = {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/,
  };

  return [
    // The order of the loaders is important,
    // so extract loaders into variables for the better readability
    svgLoader,
    assetResourseLoader,
    tsLoader,
    BuildCssLoaders(isDev),
  ];
}
