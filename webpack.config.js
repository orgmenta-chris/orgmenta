const createExpoWebpackConfigAsync = require('@expo/webpack-config');
const path = require('path'); // Add this line to use path.resolve()

module.exports = async function (env, argv) {
  const config = await createExpoWebpackConfigAsync(env, argv);

  // Add a rule for handling webview
  config.module.rules.push({
    test: /postMock.html$/,
    use: {
      loader: 'file-loader',
      options: {
        name: '[name].[ext]',
      },
    },
  });

  // Add a rule for handling HTML files
  config.module.rules.push({
    test: /\.html$/,
    use: 'html-loader'
  });

  // Modify the alias
  config.resolve.alias = {
    ...config.resolve.alias,
    'react-native$': 'react-native-web',
    'react-native-maps': 'react-native-web-maps',
    'react-native-webview': 'react-native-web-webview',
    '@stripe/stripe-react-native': 'react-native-web', // just prevents web from loading in @stripe/stripe-react-native
  };

  return config;
};
