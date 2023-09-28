const MiniCssExtractPlugin = require('mini-css-extract-plugin');

function buildLoaders({isDev}) {

  const javascriptLoader = {
    test: /\.(js|jsx)$/,
    exclude: /node_modules/,
    use: {
      loader: 'babel-loader',
      options: {
        presets: ['@babel/preset-react']
      }
    }
  }

  const scssLoader = {
    test: /\.s[ac]ss$/i,
    use: [
      isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
      {
        loader: 'css-loader',
        options: {
          modules: {
            auto: (resPath) => Boolean(resPath.includes('.module.')),
            localIdentName: isDev ? '[path][name]__[local]--[hash:base64:5]' : '[hash:base64:8]'
          }

        }
      },
      'sass-loader',
    ],
  };

  return [
    javascriptLoader,
    scssLoader
  ]
}

module.exports = buildLoaders;
