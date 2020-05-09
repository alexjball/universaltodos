const { getAppiumService, getSharedConfig } = require('./shared');

const config = getSharedConfig();
config.capabilities = [
  {
    platformName: 'iOS',
    platformVersion: '13.4',
    deviceName: 'iPhone 11',
    automationName: 'XCUITest',
    bundleId: 'org.reactjs.native.example.universaltodos',
    // Specifying the udid skips install of appium dependencies on boot.
    udid: 'D3A4FCCB-C939-408B-9925-D0C76FEB4B12',
    noReset: true,
  },
];
config.services = [getAppiumService()];

exports.config = config;
