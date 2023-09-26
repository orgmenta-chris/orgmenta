// A 'platform' is the operating system and stack that the app is running on.
// https://reactnative.dev/docs
// Note that we can utilise the Platform.select method to dynamically choose a function, like so:
// const ViewRouterProvider = UtilityPlatformMain.select({
//     ios: () => require('NativeRouter'),
//     android: () => require('NativeRouter'),
//     native: () => require('NativeRouter'),
//     web: () => require('BrowserRouter'),
//     default: () => require('BrowserRouter'),
// })();
// This may be useful for cross-platform code sharing.\

import { useEffect } from 'react';
import { Platform, PlatformStatic } from 'react-native';
import 'react-native-url-polyfill/auto'; // https://www.npmjs.com/package/react-native-url-polyfill (needed for react-native to work with supabase and possibly other packages.). This solves any 'URL.hostname is not implemented' issues.

export const UtilityPlatformMain = Platform;

export type TypePlatformMain = PlatformStatic;

export const usePlatformCssweb = () => {
  useEffect(() => {
    if (UtilityPlatformMain.OS === 'web') {
      const style = document.createElement('style');
      style.innerHTML = `
        body {
          font-family: 'Roboto';
        }
        ::-webkit-scrollbar {
          display: none;
        }
      `;
      document.head.appendChild(style);
    }
  }, []);
};