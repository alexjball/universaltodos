const {
  getWebPreset,
  getIOSPreset,
  getAndroidPreset,
} = require("jest-expo/config/getPlatformPreset");
const { withWatchPlugins } = require("jest-expo/config/withWatchPlugins");

module.exports = Object.assign(
  withWatchPlugins({
    projects: [
      // Create a new project for each platform.
      getWebPreset(),
      getIOSPreset(),
      getAndroidPreset(),
    ],
  })
);