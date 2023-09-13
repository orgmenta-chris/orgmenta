import {
  InteractionType,
  PublicClientApplication,
  Configuration,
} from "@azure/msal-browser";
import { AuthCodeMSALBrowserAuthenticationProvider } from "@microsoft/microsoft-graph-client/authProviders/authCodeMsalBrowser";
import { Client } from "@microsoft/microsoft-graph-client";

// @azure/msal-browser

const msalConfig: Configuration = {
  auth: {
    clientId: "7b43912a-2a3a-460d-bcd0-eecec5e32c75",
    authority:
      "https://login.microsoftonline.com/3d165eb2-cf10-49d6-8947-87ae972e04aa",
    redirectUri: "http://localhost:19006",
  },
};

export const pca = new PublicClientApplication(msalConfig);

export const callMsGraph = (token: string, endpoint: string) => {
  let res: any;

  const headers = {
    Authorization: `Bearer ${token}`,
    "Content-Type": "application/json",
  };

  // Make the API request
  fetch(`https://graph.microsoft.com/v1.0/${endpoint}`, {
    method: "GET",
    headers: headers,
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP Error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then((data) => (res = data))
    .catch((error) => {
      throw new Error(error);
    });

  return res;
};

// export const initializeMsal = async () => {
//   try {
//     await pca.handleRedirectPromise(); // Handle any redirect response
//   } catch (error) {
//     console.error("Error handling redirect:", error);
//   }
// };

// // Initialize MSAL
// // initializeMsal();

// // Authenticate to get the user's account

// export const auth = async () => {
//   const authResult = await pca.acquireTokenPopup({
//     scopes: ["User.Read"],
//   });

//   if (!authResult.account) {
//     throw new Error("Could not authenticate");
//   }

//   return authResult;
// };

// // @microsoft/microsoft-graph-client/authProviders/authCodeMsalBrowser
// const authProvider = new AuthCodeMSALBrowserAuthenticationProvider(pca, {
//   account: auth().then((res) => res.account),
//   interactionType: InteractionType.Popup,
//   scopes: ["User.Read"],
// });

// const graphClient = Client.initWithMiddleware({
//   authProvider: authProvider,
// });

// // graph api functions

// export const fetchUserProfile = async () => {
//   try {
//     let userDetails = await graphClient.api("/me").get();
//     console.log(userDetails);
//   } catch (error) {
//     throw error;
//   }
// };
