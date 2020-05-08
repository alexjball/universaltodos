const createExpoWebpackConfigAsync = require('@expo/webpack-config');

module.exports = async function (env, argv) {
  const config = await createExpoWebpackConfigAsync(
    {
      ...env,
      babel: {
        dangerouslyAddModulePathsToTranspile: [
          'react-native-elements',
          'react-native-vector-icons',
          'react-native-ratings',
        ],
      },
    },
    argv
  );
  return config;
};
