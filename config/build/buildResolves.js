function buildResolves({paths}) {
  return {
    extensions: ['.jsx', '.js'],
    preferAbsolute: true,
    modules: [paths.src, 'node_modules'],
    mainFiles: ['index'],
    alias: {
      '@src': paths.src
    }
  }
}

module.exports = buildResolves;
