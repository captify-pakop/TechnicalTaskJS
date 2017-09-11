exports.config = {
  specs: [
    './src/test/tests/**/**/*.js',
  ],
  maxInstances: 1,
  timeoutsImplicitWait: 3 * 1000,
  retryTimeout: 10 * 10000,
  retryNumber: 1,
  retryIntervalTime: 500,
  retryErrorMessage: 'expected condition were not achieved!',
  capabilities: [{
    maxInstances: 1,
    browserName: 'chrome',
    chromeOptions: {
      args: ['--no-sandbox', 'disable-setuid-sandbox', 'allow-insercure-localhost', '--browsertime.xvfb', '-verbose'],
    },
  }],
  windowDimension: { width: 2200, height: 1400 },
  sync: true,
  logLevel: 'silent',
  coloredLogs: true,
  bail: 0,
  screenshotPath: './errorShots/',
  baseUrl:'https://www.booking.com/',
  yearLimit:'2018',
  waitforTimeout: 20000,
  connectionRetryTimeout: 900000,
  connectionRetryCount: 10,
  services: ['selenium-standalone'],
  seleniumLogs: './context/selenium-logs',
  seleniumArgs: {
    drivers: {
      chrome: {
        version: 2.28,
        baseURL: 'https://chromedriver.storage.googleapis.com',
      },
    },
  },
  seleniumInstallArgs: {
    drivers: {
      chrome: {
        version: 2.28,
        baseURL: 'https://chromedriver.storage.googleapis.com',
      },
    },
  },
  framework: 'mocha',
  reporters: ['spec'],
  mochaOpts: {
    ui: 'bdd',
    timeout: 400000,
    // timeout: 999999999,
  }
  ,
}
;
