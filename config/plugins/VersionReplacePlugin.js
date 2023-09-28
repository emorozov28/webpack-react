const fs = require('fs');

class VersionReplacePlugin {
  constructor(options) {
    this.versionChanged = false;
    this.packagePath = options.packagePath;
    this.version = options.version;
    this.htmlFilePath = options.htmlFilePath;
  }

  apply(compiler) {
    compiler.hooks.environment.tap('VersionReplacePlugin', () => {
      if (!this.versionChanged) {
        const packageJsonPath = this.packagePath;
        // Отримуємо вміст package.json
        const packageJson = require(packageJsonPath);
        packageJson.version = this.version;

        // Отримуємо вміст index.blade.php
        // const htmlFilePath = this.htmlFilePath;
        // const html = fs.readFileSync(htmlFilePath, 'utf-8');

        // Змінюємо версію стилів, скриптів
        // const updatedHtml = html
        //   .replace(/<html[^>]*data-version="[^"]+"/, `<html data-version="${this.version}"`)
        //   .replace(/src="{{cdn\('admin\/js\/[^']+\.js', '', false\)}}"/g, `src="{{cdn('admin/js/bundle-${this.version}.js', '', false)}}"`)
        //   .replace(/href="{{cdn\('admin\/css\/[^']+\.css', '', false\)}}"/g, `href="{{cdn('admin/css/main-${this.version}.css', '', false)}}"`);

        // Зберігаємо оновлений package.json та index.blade.php
        fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2));
        // fs.writeFileSync(htmlFilePath, updatedHtml);

        this.versionChanged = true;
      }
    });
  }
}

module.exports = VersionReplacePlugin;
