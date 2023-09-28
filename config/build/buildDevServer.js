function buildDevServer({port, paths}) {
  return {
    // host: 'mackeeper.lcl',
    port: port || 'auto',
    open: false,
    historyApiFallback: true,
    static: {
      directory: paths.build,
    },
    // proxy: {
    //   '/blog/api': {
    //     target: 'http://app.lcl/',
    //     secure: false,
    //     changeOrigin: true,
    //   },
    // },
  };
}

module.exports = buildDevServer;
