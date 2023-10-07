import { Configuration, PublicClientApplication } from "@azure/msal-browser";
import {
  STAGING_AZURE_CLIENT_ID,
  STAGING_AZURE_TENANT_ID,
} from "@env";
import { requestVaultItem } from "../utils/vault";

// Microsoft Authentication Library configuration

let clientIdVar: any;
let tenantIdVar: any;

if (__DEV__) {
  // You are in development mode
  clientIdVar = `${STAGING_AZURE_CLIENT_ID}`;
  tenantIdVar = `${STAGING_AZURE_TENANT_ID}`;
} else {
  // You are in production mode
  clientIdVar = requestVaultItem("PRODUCTION_AZURE_CLIENT_ID");
  tenantIdVar = requestVaultItem("PRODUCTION_AZURE_TENANT_ID");
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
