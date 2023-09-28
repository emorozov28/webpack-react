const path = require('path');
const BuildWebpackConfig = require('./config/build/buildWebpackConfig');
const _package = require("./config/functions/readAdminVersion");

module.exports = (env) => {
  const paths = {
    admin: path.resolve(__dirname),
    src: path.resolve(__dirname, 'src'),
    entry: path.resolve(__dirname, 'src', 'index.js'),
    build: path.resolve(__dirname, 'public'),
    html: path.resolve(__dirname, 'static', 'index.html'),
  }

  const mode = env.mode || 'development';
  const PORT = env.port || 3000;
  const isDev = mode === 'development';
  const version = _package.getData(isDev).version;
  console.log('version ', version);

  const config = BuildWebpackConfig({
    mode,
    paths,
    isDev,
    port: PORT,
    version
  });

  return config
};
