import { msalInstance, loginRequest } from "./authConfig";

export const callMsGraphGET = async (accessToken: string, endpoint: string) => {
  if (!accessToken) {
    const account = msalInstance.getActiveAccount();
    if (!account) {
      throw Error(
        "No active account! Verify a user has been signed in and setActiveAccount has been called."
      );
    }

    const response = await msalInstance.acquireTokenSilent({
      ...loginRequest,
      account: account,
    });
    accessToken = response.accessToken;
  }

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
  if (!accessToken) {
    const account = msalInstance.getActiveAccount();
    if (!account) {
      throw Error(
        "No active account! Verify a user has been signed in and setActiveAccount has been called."
      );
    }

    const response = await msalInstance.acquireTokenSilent({
      ...loginRequest,
      account: account,
    });
    accessToken = response.accessToken;
  }

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
  if (!accessToken) {
    const account = msalInstance.getActiveAccount();
    if (!account) {
      throw Error(
        "No active account! Verify a user has been signed in and setActiveAccount has been called."
      );
    }

    const response = await msalInstance.acquireTokenSilent({
      ...loginRequest,
      account: account,
    });
    accessToken = response.accessToken;
  }

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

export const callMsGraphDELETE = async (accessToken: string, endpoint: string) => {
  if (!accessToken) {
    const account = msalInstance.getActiveAccount();
    if (!account) {
      throw Error(
        "No active account! Verify a user has been signed in and setActiveAccount has been called."
      );
    }

    const response = await msalInstance.acquireTokenSilent({
      ...loginRequest,
      account: account,
    });
    accessToken = response.accessToken;
  }

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
