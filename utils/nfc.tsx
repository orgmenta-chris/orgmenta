// Placeholder for phase 2
// Will eventually be used by pos.tsx in order to take payments by card.

///////////////////////
// https://github.com/revtel/react-native-nfc-manager
// Something like this: 
// import NfcManager, {Ndef} from 'react-native-nfc-manager';

// // Initialize NFC
// NfcManager.start();

// // Read NFC Tag
// NfcManager.setEventListener(NfcEvents.DiscoverTag, (tag) => {
//   console.log('New tag discovered', tag);
//   NfcManager.setAlertMessageIOS('Tag received');
//   NfcManager.unregisterTagEvent().catch(() => {});
// });

// // Start Scanning
// NfcManager.registerTagEvent();

// Then use Stripe.tsx to handlePayment etc.
// And use vault to store cc credentials (if appropriate security audit has been undertaken). (disable this for now)


///////////////////////
// Will need to add this sort of permission:
// iOS Configuration: Open ios/YourProjectName/AppDelegate.m and add the NFC entitlement.

// Android Configuration: Open android/app/src/main/AndroidManifest.xml and add NFC permissions.

// xml
// Copy code
// <uses-permission android:name="android.permission.NFC" />