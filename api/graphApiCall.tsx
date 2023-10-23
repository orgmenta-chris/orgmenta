import { MSALAccount, MSALResult } from "react-native-msal";
import { publicClientApplication /* msalSilentConfig */ } from "./authConfig";
import useTokenStore from "../states/api/storeToken";

// const getToken = useTokenStore((state: any) => state.token) || undefined;

export const callMsGraphGET = async (accessToken: string, endpoint: string) => {
  // if (!accessToken) {
  //   const account: MSALAccount | undefined =
  //     await publicClientApplication.getAccount(getToken!.account.identifier);
  //   if (!account) {
  //     throw Error(
  //       "No active account! Verify a user has been signed in and setActiveAccount has been called."
  //     );
  //   }

  //   const result: MSALResult | undefined =
  //     await publicClientApplication.acquireTokenSilent(msalSilentConfig);

  //   // @ts-ignore
  //   accessToken = result?.accessToken;
  // }

  const headers = new Headers();
  const bearer = `Bearer ${accessToken}`;

  headers.append("Authorization", bearer);

  const options = {
    method: "GET",
    headers: headers,
  };

  return fetch(endpoint, options)
    .then((response) => response.json())
    .catch((error) => console.log(error));
};

export const callMsGraphPOST = async (
  accessToken: string,
  endpoint: string,
  requestBody: any
) => {
  // if (!accessToken) {
  //   const account: MSALAccount | undefined =
  //     await publicClientApplication.getAccount(getToken!.account.identifier);
  //   if (!account) {
  //     throw Error(
  //       "No active account! Verify a user has been signed in and setActiveAccount has been called."
  //     );
  //   }

  //   const result: MSALResult | undefined =
  //     await publicClientApplication.acquireTokenSilent(msalSilentConfig);

  //   // @ts-ignore
  //   accessToken = result?.accessToken;
  // }

  const headers = new Headers();
  const bearer = `Bearer ${accessToken}`;

  headers.append("Authorization", bearer);

  const options = {
    method: "POST",
    headers: headers,
    body: JSON.stringify(requestBody),
  };

  return fetch(endpoint, options)
    .then((response) => response.json())
    .catch((error) => console.log(error));
};

export const callMsGraphPATCH = async (
  accessToken: string,
  endpoint: string,
  requestBody: any
) => {
  // if (!accessToken) {
  //   const account: MSALAccount | undefined =
  //     await publicClientApplication.getAccount(getToken!.account.identifier);
  //   if (!account) {
  //     throw Error(
  //       "No active account! Verify a user has been signed in and setActiveAccount has been called."
  //     );
  //   }

  //   const result: MSALResult | undefined =
  //     await publicClientApplication.acquireTokenSilent(msalSilentConfig);

  //   // @ts-ignore
  //   accessToken = result?.accessToken;
  // }

  const headers = new Headers();
  const bearer = `Bearer ${accessToken}`;

  headers.append("Authorization", bearer);

  const options = {
    method: "PATCH",
    headers: headers,
    body: JSON.stringify(requestBody),
  };

  return fetch(endpoint, options)
    .then((response) => response.json())
    .catch((error) => console.log(error));
};

export const callMsGraphDELETE = async (
  accessToken: string,
  endpoint: string
) => {
  // if (!accessToken) {
  //   const account: MSALAccount | undefined =
  //     await publicClientApplication.getAccount(getToken!.account.identifier);
  //   if (!account) {
  //     throw Error(
  //       "No active account! Verify a user has been signed in and setActiveAccount has been called."
  //     );
  //   }

  //   const result: MSALResult | undefined =
  //     await publicClientApplication.acquireTokenSilent(msalSilentConfig);

  //   // @ts-ignore
  //   accessToken = result?.accessToken;
  // }

  const headers = new Headers();
  const bearer = `Bearer ${accessToken}`;

  headers.append("Authorization", bearer);

  const options = {
    method: "DELETE",
    headers: headers,
  };

  return fetch(endpoint, options)
    .then((response) => response.json())
    .catch((error) => console.log(error));
};
