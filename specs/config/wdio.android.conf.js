const { getAppiumService, getSharedConfig } = require('./shared');

const config = getSharedConfig();
config.capabilities = [
  {
    // Assumes an emulator is running
    platformName: 'Android',
    automationName: 'UiAutomator2',
    appPackage: 'com.universaltodos',
    appActivity: '.MainActivity',
    noReset: true,
  },
];
config.services = [getAppiumService()];

exports.config = config;
