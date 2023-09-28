const buildDevServer = require('./buildDevServer');
const buildPlugins = require('./buildPlugins');
const buildResolves = require('./buildResolves');
const buildLoaders = require('./buildLoaders');

function BuildWebpackConfig(options) {
  const { paths, mode, isDev, version } = options;

  return {
    mode: mode,
    entry: paths.entry,
    output: {
      filename: `js/bundle-${version}.js`,
      path: paths.build,
      publicPath: '/',
      clean: true,
    },
    devServer: isDev ? buildDevServer(options) : undefined,
    devtool: isDev ? 'inline-source-map' : undefined,
    plugins: buildPlugins(options),
    module: {
      rules: buildLoaders(options),
    },
    resolve: buildResolves(options)
  };
}

module.exports = BuildWebpackConfig;
