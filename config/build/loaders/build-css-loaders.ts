import MiniCssExtractPlugin from 'mini-css-extract-plugin';

export function BuildCssLoaders(isDev: boolean) {
  return {
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
}
