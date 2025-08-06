<<<<<<< HEAD
process.env.CHROME_BIN = require('puppeteer').executablePath();
=======
// karma.conf.js
// Chrome バイナリのパスを取得
if (!process.env.CHROME_BIN) {
  try {
    // Puppeteer が取得した Chromium を使用
    process.env.CHROME_BIN = require('puppeteer').executablePath();
  } catch (e) {
    // Puppeteer が利用できない場合は環境変数に任せる
  }
}
>>>>>>> 9438e6e84cb6d311700a96a5c1673d7694c445c6

module.exports = function (config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine', '@angular-devkit/build-angular'],
    plugins: [
      require('karma-jasmine'),
      require('karma-chrome-launcher'),
      require('karma-jasmine-html-reporter'),
      require('karma-coverage'),
      require('@angular-devkit/build-angular/plugins/karma'),
    ],
    client: {
      clearContext: false
    },
    coverageReporter: {
      dir: require('path').join(__dirname, './coverage'),
      subdir: '.',
      reporters: [{ type: 'html' }, { type: 'text-summary' }]
    },
    reporters: ['progress', 'kjhtml'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['ChromeHeadlessNoSandbox'],
    customLaunchers: {
      ChromeHeadlessNoSandbox: {
        base: 'ChromeHeadless',
        flags: ['--no-sandbox', '--disable-setuid-sandbox']
      }
    },
    singleRun: true,
    restartOnFileChange: true
  });
};
