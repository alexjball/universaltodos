const { getSharedConfig } = require('./shared');

const config = getSharedConfig();
config.capabilities = [
  {
    browserName: 'chrome',
    browserVersion: '79',
    outputDir: './specs/logs',
  },
];
config.services = ['chromedriver'];

exports.config = config;
