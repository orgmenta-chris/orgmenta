const { getDefaultConfig } = require('expo/metro-config');

const defaultConfig = getDefaultConfig(__dirname);

module.exports = {
  ...defaultConfig,
  resolver: {
    ...defaultConfig.resolver,
    extraNodeModules: {
      ...defaultConfig.resolver.extraNodeModules,
      'react-native': 'react-native-web',
    },
  },
  server: {
    host: '0.0.0.0',
  },
};
