import { Configuration, PublicClientApplication } from "@azure/msal-browser";

// Microsoft Authentication Library configuration

const msalConfig: Configuration = {
  auth: {
    clientId: "7b43912a-2a3a-460d-bcd0-eecec5e32c75",
    authority:
      "https://login.microsoftonline.com/3d165eb2-cf10-49d6-8947-87ae972e04aa",
    redirectUri: "/",
    postLogoutRedirectUri: "/",
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

// Get Access Token within a react component refer to accessToken.tsx
