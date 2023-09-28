const createExpoWebpackConfigAsync = require('@expo/webpack-config');

module.exports = async function (env, argv) {
  const config = await createExpoWebpackConfigAsync(env, argv);

  // Add a rule for handling HTML files
  config.module.rules.push({
    test: /\.html$/,
    use: 'html-loader'
  });

  // Add the alias
  config.resolve.alias = {
    ...config.resolve.alias,
    'react-native-maps': 'react-native-web-maps',
    'react-native-webview': 'react-native-web-webview',
  };

  return config;
};
