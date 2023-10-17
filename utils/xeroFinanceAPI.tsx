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

export const XeroGetAccountUsage = async (props: any) => {
  const { access_token, startMonth, endMonth } = props;

  const apiUrl = `https://api.xero.com/finance.xro/1.0/accountingactivities/accountusage?startMonth=${startMonth}&endMonth=${endMonth}`;

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
    console.error("Error fetching account usage:", error);
    throw error;
  }
};

export const XeroGetLockHistory = async (props: any) => {
  const { access_token, endDate } = props;

  const apiUrl = `https://api.xero.com/finance.xro/1.0/accountingactivities/lockhistory?endDate=${endDate}`;

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
      throw Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching lock history:", error);
    throw error;
  }
};

export const XeroGetReportHistory = async (props: any) => {
  const { access_token, endDate } = props;

  const apiUrl = `https://api.xero.com/finance.xro/1.0/accountingactivities/reporthistory?endDate=${endDate}`;

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
    console.error("Error fetching report history:", error);
    throw error;
  }
};

export const XeroGetUserActivities = async (props: any) => {
  const { access_token, dataMonth } = props;

  const apiUrl = `https://api.xero.com/finance.xro/1.0/accountingactivities/useractivities?dataMonth=${dataMonth}`;

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
    console.error("Error fetching user activities:", error);
    throw error;
  }
};

export const XeroGetBankStatementsPlus = async (props: any) => {
  const { access_token, BankAccountID, FromDate, ToDate, SummaryOnly } = props;

  const apiUrl = `https://api.xero.com/finance.xro/1.0/bankstatementsplus/statements?BankAccountID=${BankAccountID}&FromDate=${FromDate}&ToDate=${ToDate}&SummaryOnly=${SummaryOnly}`;

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
    console.error("Error fetching bank statements plus:", error);
    throw error;
  }
};

export const XeroCreateAccount = async (props: any) => {
  const { access_token, accountData } = props;

  const apiUrl = "https://api.xero.com/finance.xro/1.0/accounts";

  const headers = {
    Authorization: `Bearer ${access_token}`,
    "Content-Type": "application/json",
  };

  try {
    const response = await fetch(apiUrl, {
      method: "PUT",
      headers: headers,
      body: JSON.stringify(accountData),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error creating account:", error);
    throw error;
  }
};

export const XeroGetCashValidation = async (props: any) => {
  const { access_token, balanceDate, asAtSystemDate, beginDate } = props;

  const apiUrl = "https://api.xero.com/finance.xro/1.0/cashvalidation";

  // Construct query parameters
  const queryParams = [];
  if (balanceDate) queryParams.push(`balanceDate=${balanceDate}`);
  if (asAtSystemDate) queryParams.push(`asAtSystemDate=${asAtSystemDate}`);
  if (beginDate) queryParams.push(`beginDate=${beginDate}`);

  // Combine query parameters into the URL
  const fullUrl = `${apiUrl}?${queryParams.join("&")}`;

  const headers = {
    Authorization: `Bearer ${access_token}`,
    Accept: "application/json",
  };

  try {
    const response = await fetch(fullUrl, {
      method: "GET",
      headers: headers,
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching cash validation data:", error);
    throw error;
  }
};

export const XeroGetBalanceSheet = async (props: any) => {
  const { access_token, balanceDate } = props;

  const apiUrl = `https://api.xero.com/finance.xro/1.0/financialstatements/balancesheet`;

  const headers = {
    Authorization: `Bearer ${access_token}`,
    Accept: "application/json",
  };

  const params = new URLSearchParams();
  if (balanceDate) {
    params.append("balanceDate", balanceDate);
  }

  const url = apiUrl + (params.toString() ? `?${params.toString()}` : "");

  try {
    const response = await fetch(url, {
      method: "GET",
      headers: headers,
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching balance sheet:", error);
    throw error;
  }
};

export const XeroGetCashflowStatement = async (props: any) => {
  const { access_token, startDate, endDate } = props;

  const apiUrl = `https://api.xero.com/finance.xro/1.0/financialstatements/cashflow`;

  const headers = {
    Authorization: `Bearer ${access_token}`,
    Accept: "application/json",
  };

  const params = new URLSearchParams();
  if (startDate) {
    params.append("startDate", startDate);
  }
  if (endDate) {
    params.append("endDate", endDate);
  }

  const url = apiUrl + (params.toString() ? `?${params.toString()}` : "");

  try {
    const response = await fetch(url, {
      method: "GET",
      headers: headers,
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching cashflow statement:", error);
    throw error;
  }
};

export const XeroGetProfitAndLossStatement = async (props: any) => {
  const { access_token, startDate, endDate } = props;

  const apiUrl = `https://api.xero.com/finance.xro/1.0/financialstatements/profitandloss`;

  const headers = {
    Authorization: `Bearer ${access_token}`,
    Accept: "application/json",
  };

  const params = new URLSearchParams();
  if (startDate) {
    params.append("startDate", startDate);
  }
  if (endDate) {
    params.append("endDate", endDate);
  }

  const url = apiUrl + (params.toString() ? `?${params.toString()}` : "");

  try {
    const response = await fetch(url, {
      method: "GET",
      headers: headers,
    });

    if (!response.ok) {
      throw Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching profit and loss statement:", error);
    throw error;
  }
};
