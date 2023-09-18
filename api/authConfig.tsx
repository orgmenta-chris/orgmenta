import {
  Configuration,
  LogLevel,
  PublicClientApplication,
} from "@azure/msal-browser";

// Microsoft Authentication Library configuration

const msalConfig: Configuration = {
  auth: {
    clientId: "7b43912a-2a3a-460d-bcd0-eecec5e32c75",
    authority:
      "https://login.microsoftonline.com/3d165eb2-cf10-49d6-8947-87ae972e04aa",
    redirectUri: "/",
    postLogoutRedirectUri: "/",
  },
  system: {
    allowNativeBroker: false,
    loggerOptions: {
      loggerCallback: (level, message, containsPii) => {
        if (containsPii) {
          return;
        }
        switch (level) {
          case LogLevel.Error:
            console.error(message);
            return;
          case LogLevel.Info:
            console.info(message);
            return;
          case LogLevel.Verbose:
            console.debug(message);
            return;
          case LogLevel.Warning:
            console.warn(message);
            return;
          default:
            return;
        }
      },
    },
  },
};

export const loginRequest = {
  scopes: [
    "User.ReadWrite.All",
    "Mail.ReadWrite",
    "Mail.ReadWrite.Shared",
    "Calendars.ReadWrite",
    "Calendars.ReadWrite.Shared",
  ],
};

export const url = "https://graph.microsoft.com/v1.0";

// Public Client Application Instance

export const msalInstance = new PublicClientApplication(msalConfig);

// Get Access Token using the Public Client Application Instance

// Get Access Token outside of react component

export const acquireAccessToken = async () => {
  const activeAccount = msalInstance.getActiveAccount();

  const accounts = msalInstance.getAllAccounts();

  if (!activeAccount && accounts.length === 0) {
    /*
     * User is not signed in. Throw error or wait for user to login.
     * Do not attempt to log a user in outside of the context of MsalProvider
     */

    throw new Error(
      "No signed in users found. Please ensure that there is a signed in user."
    );
  }
  const request = {
    ...loginRequest,
    account: activeAccount || accounts[0],
  };

  const authResult = await msalInstance.acquireTokenSilent(request);

  return authResult.accessToken;
};

// Get Access Token within a react component refer to accessToken.tsx
