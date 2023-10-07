// generateKeys.js
const webpush = require('web-push');

function generateVapidKeys() {
  const vapidKeys = webpush.generateVAPIDKeys();
  console.log('Public Key:', vapidKeys.publicKey);
  console.log('Private Key:', vapidKeys.privateKey);
}

generateVapidKeys()

// Instructions
// 
// 1. In your CLI, run `node keygeneration.js` to generate public & private keys.
// The keys will be logged to the console.
//
// 2. save the public key to app.json:
// {
//   "expo": {
//     "notification": {
//       "vapidPublicKey": "YOUR_VAPID_PUBLIC_KEY_HERE"
//     }
//   }
// }
//
// 3. Store the private key on a server (not implemented yet)
// (to be confirmed - supabase?)
// On your server, you will use the VAPID private key to send push notifications to the web app when triggered. 
// This server-side component can be a simple serverless function or a backend service that handles sending push notifications.
//
// 4. Implement in web worker (not yet implemented) - something like this:
// "you can use the PushManager API provided by the browser to request and receive push notifications. 
// Here's an example of how to request permissions and subscribe to push notifications:""
// if ('PushManager' in window) {
//   navigator.serviceWorker.register('/service-worker.js')
//     .then(function(registration) {
//       return registration.pushManager.getSubscription()
//         .then(async function(subscription) {
//           if (subscription) {
//             return subscription;
//           }

//           const response = await fetch('/subscribe', {
//             method: 'POST',
//             headers: {
//               'Content-Type': 'application/json',
//             },
//             body: JSON.stringify({
//               publicKey: 'YOUR_VAPID_PUBLIC_KEY',
//             }),
//           });

//           const subscriptionData = await response.json();
//           return registration.pushManager.subscribe(subscriptionData);
//         });
//     })
//     .catch(function(error) {
//       console.error('Error registering service worker:', error);
//     });
// }