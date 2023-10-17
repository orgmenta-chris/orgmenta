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

export const XeroGetFeedConnection = async (props: any) => {
  const { access_token, FeedConnectionId } = props;

  const apiUrl = `https://api.xero.com/bankfeeds.xro/1.0/FeedConnections/${FeedConnectionId}`;

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
    console.error("Error fetching Feed Connection:", error);
    throw error;
  }
};

export const XeroGetFeedConnections = async (props: any) => {
  const { access_token, page, pageSize } = props;
  const apiUrl = `https://api.xero.com/bankfeeds.xro/1.0/FeedConnections?page=${page}&pageSize=${pageSize}`;

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
    console.error("Error fetching Feed Connections:", error);
    throw error;
  }
};

export const XeroCreateFeedConnections = async (props: any) => {
  const { access_token, feedConnectionData } = props;

  const apiUrl = "https://api.xero.com/bankfeeds.xro/1.0/FeedConnections";

  const headers = {
    Authorization: `Bearer ${access_token}`,
    "Content-Type": "application/json",
  };

  try {
    const response = await fetch(apiUrl, {
      method: "POST",
      headers: headers,
      body: JSON.stringify(feedConnectionData),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error creating Feed Connections:", error);
    throw error;
  }
};

export const XeroDeleteFeedConnections = async (props: any) => {
  const { access_token, deleteRequests } = props;

  const apiUrl =
    "https://api.xero.com/bankfeeds.xro/1.0/FeedConnections/DeleteRequests";

  const headers = {
    Authorization: `Bearer ${access_token}`,
    "Content-Type": "application/json",
  };

  try {
    const response = await fetch(apiUrl, {
      method: "POST",
      headers: headers,
      body: JSON.stringify(deleteRequests),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error deleting Feed Connections:", error);
    throw error;
  }
};

export const XeroGetFeedConnectionById = async (props: any) => {
  const { access_token, feedConnectionID } = props;

  const apiUrl = `https://api.xero.com/bankfeeds.xro/1.0/FeedConnections/${feedConnectionID}`;

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
    console.error("Error fetching feed connection:", error);
    throw error;
  }
};

export const XeroGetFeedConnections2 = async (props: any) => {
  const { access_token } = props;

  const apiUrl = "https://api.xero.com/bankfeeds.xro/1.0/FeedConnections";

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
    console.error("Error fetching feed connections:", error);
    throw error;
  }
};

export const XeroCreateFeedConnections2 = async (props: any) => {
  const { access_token, feedConnectionData } = props;

  const apiUrl = "https://api.xero.com/bankfeeds.xro/1.0/FeedConnections";

  const headers = {
    Authorization: `Bearer ${access_token}`,
    "Content-Type": "application/json",
  };

  try {
    const response = await fetch(apiUrl, {
      method: "POST",
      headers: headers,
      body: JSON.stringify(feedConnectionData),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error creating feed connections:", error);
    throw error;
  }
};
