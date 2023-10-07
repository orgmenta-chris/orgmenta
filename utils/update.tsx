// A module for updating packages, modules, apps etc.
// Where possible, updates will be OTA (Over the Air) rather than via app store updates.
// https://docs.expo.dev/versions/latest/sdk/updates/
// will use a custom server rather than the expo servers - see example rep https://github.com/expo/custom-expo-updates-server

// Limitations:
// Native module changes still require a new binary. OTA updates can only change JavaScript and assets.
// App Store and Google Play have policies about what kinds of updates are permissible via OTA.

// Versioning
// Major version releases ({MAJOR_VERSION_NUMBER}.0.0.0.0) will be via app stores.
// Minor veersions (x.{MINOR_VERSION_NUMBER}.0.0.0) will be OTA
// Increment versions (a.b.c{MINOR_VERSION_NUMBER}.0.0) will be internal development only, pushed to the git 'Staging' repo.
// Development versions (a.b.c.{DEV_VERSION_NUMBER}.0) will be individual dev/team works that are pushed to the git 'Developement' repo once complete
// Task versions (a.b.c.d.{DEV_VERSION_NUMBER}) will be individual dev/team works that are pushed to the git 'Developement' repo once complete
 
// Versioning
// We will likely be using CalVer (https://calver.org/) for Major versions, and Semver for  minor versions and below
// https://nehckl0.medium.com/semver-and-calver-2-popular-software-versioning-schemes-96be80efe36
// Any CalVer usage must be: 2 digit years (23 instead of 2023), and all must be 0 padded (e.g. 2023 Feb 4th would be 23-02-04)
// All minor versions and down must be must be 0 padded (e.g. 01.12.03)

// First release will be 2023.[B.C.D.E]
// Current release is 2023.0.X?.Y?.Z?

import * as Updates from 'expo-updates'; // Note: does not work on web, which will use github pull requests > netlfiy auto deploy.

// Something like:
// async function checkForUpdates() {
//   try {
//     const update = await Updates.checkForUpdateAsync();
//     if (update.isAvailable) {
//       await Updates.fetchUpdateAsync();
//       await Updates.reloadAsync(); // This will reload the app with the new updates
//     }
//   } catch (e) {
//     // Handle error
//   }
// }
