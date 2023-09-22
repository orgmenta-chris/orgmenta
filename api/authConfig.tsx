import { Configuration, PublicClientApplication } from "@azure/msal-browser";
import {
  STAGING_CLIENT_ID,
  STAGING_TENANT_ID,
  PRODUCTION_CLIENT_ID,
  PRODUCTION_TENANT_ID,
} from "@env";

// Microsoft Authentication Library configuration

let clientIdVar: any;
let tenantIdVar: any;

if (__DEV__) {
  // You are in development mode
  clientIdVar = `${STAGING_CLIENT_ID}`;
  tenantIdVar = `${STAGING_TENANT_ID}`;
} else {
  // You are in production mode
  clientIdVar = `${PRODUCTION_CLIENT_ID}`;
  tenantIdVar = `${PRODUCTION_TENANT_ID}`;
}

const msalConfig: Configuration = {
  auth: {
    clientId: `${clientIdVar}`,
    authority: `https://login.microsoftonline.com/${tenantIdVar}`,
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
