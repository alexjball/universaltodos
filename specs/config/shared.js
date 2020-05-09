exports.getSharedConfig = () => ({
  runner: 'local',
  port: 4723,
  specs: ['specs/**.spec.js'],
  // Max number of parallel test instances per capability
  maxInstances: 1,
  logLevel: 'info',
  bail: 0,
  baseUrl: 'http://localhost',
  waitforTimeout: 10000,
  connectionRetryTimeout: 120000,
  connectionRetryCount: 3,
  framework: 'mocha',
  reporters: ['spec'],
  mochaOpts: {
    ui: 'bdd',
    timeout: 3600000,
  },
});

exports.getAppiumService = () => [
  'appium',
  {
    logPath: './specs/logs',
  },
];
