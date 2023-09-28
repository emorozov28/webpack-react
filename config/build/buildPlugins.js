const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const VersionReplacePlugin = require('../plugins/VersionReplacePlugin');

function buildPlugins({paths, isDev, version}) {

  return [
    new webpack.ProvidePlugin({
      React: 'react',
    }),
    new VersionReplacePlugin({
      packagePath: `${paths.admin}/package.json`,
      htmlFilePath: paths.html,
      version: version,
    }),
    new HtmlWebpackPlugin({
      template: paths.html
    }),
    new MiniCssExtractPlugin({
      filename: `css/main-${version}.css`,
      chunkFilename: `css/main-${version}.css`
    })
  ]
}

module.exports = buildPlugins;
