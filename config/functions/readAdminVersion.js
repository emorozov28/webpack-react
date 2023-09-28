const fs = require('fs');

const _package = {
  getData: (env) => {
    if (_package.version && _package.data) {
      return {
        data: _package.data,
        version: _package.version
      };
    }

    let data = fs.readFileSync('package.json', 'utf8');
    let versionString = '';

    data = data.replace(/"version": "(.*?)"/, (match, p1) => {
      p1 = p1.split('.');

      let version = {
        major: p1[0],
        prod: env ? p1[1] : parseInt(p1[1]) + 1,
        dev: env ? parseInt(p1[2]) + 1 : p1[2]
      };

      versionString = `${version.major}.${version.prod}.${version.dev}`;
      return `"version": "${versionString}"`;
    });

    _package.version = versionString;
    _package.data = data;

    return {
      data: data,
      version: versionString
    };
  },
  version: null,
  data: null
};

module.exports = _package;
