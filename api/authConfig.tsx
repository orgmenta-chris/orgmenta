// import { Configuration, PublicClientApplication } from "@azure/msal-browser";
import PublicClientApplication from "react-native-msal";
import type {
  MSALConfiguration /*, etc */,
  MSALSilentParams,
} from "react-native-msal";
// @ts-ignore
import { STAGING_AZURE_CLIENT_ID, STAGING_AZURE_TENANT_ID } from "@env";
import { result } from "underscore";
import useTokenStore from "../states/api/storeToken";
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

// const getToken = useTokenStore((state: any) => state.token);

export const scopes = [
  "User.ReadWrite.All",
  "Mail.ReadWrite",
  "Mail.ReadWrite.Shared",
  "Calendars.ReadWrite",
  "Calendars.ReadWrite.Shared",
];

const msalConfig: MSALConfiguration = {
  auth: {
    clientId: `${clientIdVar}`,
    authority: `https://login.microsoftonline.com/${tenantIdVar}`,
    redirectUri: "/",
  },
};

// export const msalSilentConfig: MSALSilentParams = {
//   account: getToken!.account || "", // or get this by filtering the result from `pca.getAccounts` (see below)
//   scopes,
//   forceRefresh: true,
// };

export const url = "https://graph.microsoft.com/v1.0";

// Public Client Application Instance

// export const msalInstance = new PublicClientApplication(msalConfig);

export const publicClientApplication = new PublicClientApplication(msalConfig);

// Get Access Token within a react component refer to accessToken.tsx
