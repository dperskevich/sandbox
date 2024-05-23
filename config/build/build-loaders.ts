import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { RuleSetRule } from 'webpack';
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

  const scssLoader = {
    test: /\.s[ac]ss$/i,
    use: [
      // in development mode, we want to inject CSS into the DOM using style-loader
      // in production mode, we want to extract CSS into separate files
      isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
      {
        loader: 'css-loader',
        options: {
          modules: {
            // generate module classes for files that contain ".module."
            auto: (resPath: string) => resPath.includes('.module.'),
            // make dev css class names more readable
            localIdentName: isDev
              ? '[path][name]__[local]'
              : '[hash:base64:8]',
          },
        },
      },
      'sass-loader', // Compiles Sass to CSS
    ],
  };

  return [
    // The order of the loaders is important,
    // so extract loaders into variables for the better readability
    svgLoader,
    assetResourseLoader,
    tsLoader,
    scssLoader,
  ];
}
