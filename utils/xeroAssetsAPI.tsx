import {
  XERO_STAGING_CLIENT_ID,
  XERO_STAGING_CLIENT_SECRET,
  XERO_ACCESS_TOKEN,
  // @ts-ignore
} from "@env";
import { VaultGetSecret } from "./vault";
import { View, Pressable, Text } from "react-native";

let clientID: any = "";
let clientSecret: any = "";

if (__DEV__) {
  clientID = XERO_STAGING_CLIENT_ID;
  clientSecret = XERO_STAGING_CLIENT_SECRET;
} else {
  clientID = VaultGetSecret("XERO_PRODUCTION_CLIENT_ID");
  clientSecret = VaultGetSecret("XERO_PRODUCTION_CLIENT_SECRET");
}

import { accessToken } from "./xero";

export const XeroGetAssetTypes = async (props: any) => {
  const { access_token } = props;
  const apiUrl = "https://api.xero.com/assets.xro/1.0/AssetTypes";

  const headers = {
    Authorization: `Bearer ${access_token}`,
    Accept: "application/json",
  };

  try {
    const response = await fetch(apiUrl, {
      method: "GET",
      headers: headers,
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching asset types:", error);
    throw error;
  }
};

export const XeroCreateOrUpdateAssetType = async (props: any) => {
  const { access_token, assetTypeData } = props;
  const apiUrl = "https://api.xero.com/assets.xro/1.0/AssetTypes";

  const headers = {
    Authorization: `Bearer ${access_token}`,
    "Content-Type": "application/json",
  };

  try {
    const response = await fetch(apiUrl, {
      method: "POST", // Use POST to create or update
      headers: headers,
      body: JSON.stringify(assetTypeData),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error creating/updating asset type:", error);
    throw error;
  }
};

export const XeroGetAssets = async (props: any) => {
  const {
    access_token,
    assetId,
    status,
    page,
    pageSize,
    orderBy,
    sortDirection,
    filterBy,
  } = props;

  const apiUrl = `https://api.xero.com/assets.xro/1.0/Assets${
    assetId ? `/${assetId}` : ""
  }`;

  const headers = {
    Authorization: `Bearer ${access_token}`,
    Accept: "application/json",
  };

  const queryParams = new URLSearchParams();
  if (status) queryParams.append("status", status);
  if (page) queryParams.append("page", page);
  if (pageSize) queryParams.append("pageSize", pageSize);
  if (orderBy) queryParams.append("orderBy", orderBy);
  if (sortDirection) queryParams.append("sortDirection", sortDirection);
  if (filterBy) queryParams.append("filterBy", filterBy);

  try {
    const response = await fetch(
      apiUrl + (queryParams.toString() ? `?${queryParams.toString()}` : ""),
      {
        method: "GET",
        headers: headers,
      }
    );

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching assets:", error);
    throw error;
  }
};

export const XeroCreateOrUpdateAsset = async (props: any) => {
  const { access_token, assetData } = props;

  const apiUrl = "https://api.xero.com/assets.xro/1.0/Assets";

  const headers = {
    Authorization: `Bearer ${access_token}`,
    "Content-Type": "application/json",
  };

  try {
    const response = await fetch(apiUrl, {
      method: assetData.assetId ? "POST" : "POST", // Use POST for creating and updating
      headers: headers,
      body: JSON.stringify(assetData),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error creating or updating asset:", error);
    throw error;
  }
};

export const XeroGetSettings = async (props: any) => {
  const { access_token } = props;

  const apiUrl = "https://api.xero.com/assets.xro/1.0/Settings";

  const headers = {
    Authorization: `Bearer ${access_token}`,
    Accept: "application/json",
  };

  try {
    const response = await fetch(apiUrl, {
      method: "GET",
      headers: headers,
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching settings:", error);
    throw error;
  }
};


