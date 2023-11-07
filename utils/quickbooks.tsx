// This is quickbooks api wrapper functions

let baseURL: string;

if (__DEV__) {
  baseURL = "https://quickbooks.api.intuit.com";
} else {
  baseURL = "https://sandbox-quickbooks.api.intuit.com";
}

export const createQuickBooksAccount = async (props: any) => {
  const {
    accessToken, // Your access token
    accountName,
    acctNum,
    companyID,
    taxCodeRef,
    accountType,
    accountSubType,
    minorVersion = 69, // Change as needed
  } = props;

  const endpoint = `/v3/company/${companyID}/account`;

  const headers = {
    Authorization: `Bearer ${accessToken}`,
    "Content-Type": "application/json",
  };

  const requestBody = {
    Name: accountName,
    AcctNum: acctNum,
    TaxCodeRef: taxCodeRef,
    AccountType: accountType,
    AccountSubType: accountSubType,
  };

  try {
    const response = await fetch(
      `${baseURL}${endpoint}?minorversion=${minorVersion}`,
      {
        method: "POST",
        headers,
        body: JSON.stringify(requestBody),
      }
    );

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error creating QuickBooks account:", error);
    throw error;
  }
};

export const queryQuickBooksAccount = async (props: any) => {
  const {
    accessToken, // Your access token
    selectStatement, // Your custom select statement e.g. select * from Account where Metadata.CreateTime > '2014-12-31'
    companyID,
    minorVersion = 69, // Change as needed
  } = props;

  const endpoint = `/v3/company/${companyID}/query`;

  const headers = {
    Authorization: `Bearer ${accessToken}`,
    "Content-Type": "text/plain",
  };

  try {
    const response = await fetch(
      `${baseURL}${endpoint}?query=${selectStatement}&minorversion=${minorVersion}`,
      {
        method: "GET",
        headers,
      }
    );

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.text(); // Assuming response is text/plain
    return data;
  } catch (error) {
    console.error("Error querying QuickBooks account:", error);
    throw error;
  }
};

export const readQuickBooksAccount = async (props: any) => {
  const {
    accessToken, // Your access token
    accountId,
    companyID,
    minorVersion = 69, // Change as needed
  } = props;

  const endpoint = `/v3/company/${companyID}/account/${accountId}`;

  const headers = {
    Authorization: `Bearer ${accessToken}`,
  };

  try {
    const response = await fetch(
      `${baseURL}${endpoint}?minorversion=${minorVersion}`,
      {
        method: "GET",
        headers,
      }
    );

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error reading QuickBooks account:", error);
    throw error;
  }
};

export const updateQuickBooksAccount = async (props: any) => {
  const {
    accessToken, // Your access token
    accountId, // ID of the account to update
    accountName,
    syncToken, // Sync token for locking
    acctNum,
    currencyRef,
    parentRef,
    description,
    active,
    minorVersion = 69, // Change as needed
  } = props;

  const endpoint = `/v3/company/${accountId}/account`;

  const headers = {
    Authorization: `Bearer ${accessToken}`,
    "Content-Type": "application/json",
  };

  const requestBody = {
    Id: accountId,
    Name: accountName,
    SyncToken: syncToken,
    AcctNum: acctNum,
    CurrencyRef: currencyRef,
    ParentRef: parentRef,
    Description: description,
    Active: active,
    // Add other writable fields here
  };

  try {
    const response = await fetch(
      `${baseURL}${endpoint}?minorversion=${minorVersion}`,
      {
        method: "POST",
        headers,
        body: JSON.stringify(requestBody),
      }
    );

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error updating QuickBooks account:", error);
    throw error;
  }
};

export const queryAccountListDetailReport = async (props: any) => {
  const {
    accessToken,
    companyID,
    reportName, // Specify the report name you want to query
    queryParams, // Object containing query parameters
    minorVersion = 69, // Change as needed
  } = props;

  const endpoint = `/v3/company/${companyID}/reports/${reportName}`;

  const headers = {
    Authorization: `Bearer ${accessToken}`,
    Accept: "application/json",
  };

  const queryParameters = new URLSearchParams(queryParams);

  try {
    const response = await fetch(
      `${baseURL}${endpoint}?${queryParameters.toString()}&minorversion=${minorVersion}`,
      {
        method: "GET",
        headers,
      }
    );

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error querying QuickBooks report:", error);
    throw error;
  }
};

export const queryAPAgingDetailReport = async (props: any) => {
  const {
    accessToken, // Your access token
    companyId,
    reportName,
    queryParameters,
    minorVersion = 69, // Change as needed
  } = props;

  const endpoint = `/v3/company/${companyId}/reports/${reportName}`;

  const query = new URLSearchParams(queryParameters);

  const headers = {
    Authorization: `Bearer ${accessToken}`,
    Accept: "application/json",
  };

  try {
    const response = await fetch(
      `${baseURL}${endpoint}?${query.toString()}&minorversion=${minorVersion}`,
      {
        method: "GET",
        headers,
      }
    );

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error querying QuickBooks report:", error);
    throw error;
  }
};

export const queryAPAgingSummaryReport = async (props: any) => {
  const {
    accessToken, // Your access token
    reportName,
    queryParameters,
    minorVersion = 69, // Change as needed
  } = props;

  const endpoint = `/v3/company/4620816365354455380/reports/${reportName}`;

  const headers = {
    Authorization: `Bearer ${accessToken}`,
    Accept: "application/json",
  };

  const queryParams = new URLSearchParams(queryParameters);
  queryParams.set("minorversion", minorVersion);

  try {
    const response = await fetch(
      `${baseURL}${endpoint}?${queryParams.toString()}`,
      {
        method: "GET",
        headers,
      }
    );

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error(`Error querying QuickBooks report ${reportName}:`, error);
    throw error;
  }
};

export const queryARAgingDetailReport = async (props: any) => {
  const {
    accessToken, // Your access token
    companyID,
    reportName, // Name of the report, e.g., 'AgedReceivableDetail'
    queryParameters, // Object containing query parameters
    minorVersion = 69, // Change as needed
  } = props;

  const endpoint = `/v3/company/${companyID}/reports/${reportName}`;

  const headers = {
    Authorization: `Bearer ${accessToken}`,
    Accept: "application/json",
  };

  const queryParams = new URLSearchParams(queryParameters);

  try {
    const response = await fetch(
      `${baseURL}${endpoint}?${queryParams}&minorversion=${minorVersion}`,
      {
        method: "GET",
        headers,
      }
    );

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error querying QuickBooks report:", error);
    throw error;
  }
};

export const queryARAgingSummaryReport = async (props: any) => {
  const {
    accessToken, // Your access token
    companyId,
    reportName,
    queryParameters,
    minorVersion = 69, // Change as needed
  } = props;

  const endpoint = `/v3/company/${companyId}/reports/${reportName}`;

  const query = new URLSearchParams(queryParameters);

  const headers = {
    Authorization: `Bearer ${accessToken}`,
    Accept: "application/json",
  };

  try {
    const response = await fetch(
      `${baseURL}${endpoint}?${query.toString()}&minorversion=${minorVersion}`,
      {
        method: "GET",
        headers,
      }
    );

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error querying QuickBooks report:", error);
    throw error;
  }
};

export const createQuickBooksNoteAttachment = async (props: any) => {
  const {
    accessToken, // Your access token
    note,
    companyID,
    attachableRef,
    minorVersion = 69, // Change as needed
  } = props;

  const endpoint = `/v3/company/${companyID}/attachable`;

  const headers = {
    Authorization: `Bearer ${accessToken}`,
    "Content-Type": "application/json",
  };

  const requestBody = {
    Note: note,
    AttachableRef: attachableRef,
  };

  try {
    const response = await fetch(
      `${baseURL}${endpoint}?minorversion=${minorVersion}`,
      {
        method: "POST",
        headers,
        body: JSON.stringify(requestBody),
      }
    );

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error creating QuickBooks note attachment:", error);
    throw error;
  }
};

export const deleteQuickBooksAttachable = async (props: any) => {
  const {
    accessToken, // Your access token
    companyID,
    attachableId,
    syncToken,
    minorVersion = 69, // Change as needed
  } = props;

  const endpoint = `/v3/company/${companyID}/attachable?operation=delete&minorversion=${minorVersion}`;

  const headers = {
    Authorization: `Bearer ${accessToken}`,
    "Content-Type": "application/json",
  };

  const requestBody = {
    Id: attachableId,
    SyncToken: syncToken,
  };

  try {
    const response = await fetch(`${baseURL}${endpoint}`, {
      method: "POST",
      headers,
      body: JSON.stringify(requestBody),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error deleting QuickBooks attachable:", error);
    throw error;
  }
};

export const downloadQuickBooksAttachment = async (props: any) => {
  const {
    accessToken, // Your access token
    attachableId,
    companyID,
    minorVersion = 69, // Change as needed
  } = props;

  const endpoint = `/v3/company/${companyID}/download/${attachableId}`;

  const headers = {
    Authorization: `Bearer ${accessToken}`,
  };

  try {
    const response = await fetch(
      `${baseURL}${endpoint}?minorversion=${minorVersion}`,
      {
        method: "GET",
        headers,
      }
    );

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    // Retrieve the temporary download URL from the response
    const downloadURL = await response.text();

    // You can now use this URL to download the file

    return downloadURL;
  } catch (error) {
    console.error("Error downloading QuickBooks attachment:", error);
    throw error;
  }
};

export const queryQuickBooksAttachable = async (props: any) => {
  const {
    accessToken, // Your access token
    objectType, // The specific type of the target object (e.g., "purchase")
    companyId, // The ID of the target object
    selectStatement, // Your select statement for querying attachables
    minorVersion = 69, // Change as needed
  } = props;

  const endpoint = `/v3/company/${companyId}/query?query=${selectStatement}`;

  const headers = {
    Authorization: `Bearer ${accessToken}`,
    "Content-Type": "text/plain",
  };

  try {
    const response = await fetch(
      `${baseURL}${endpoint}&minorversion=${minorVersion}`,
      {
        method: "GET",
        headers,
      }
    );

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.text();
    return data;
  } catch (error) {
    console.error("Error querying QuickBooks attachable:", error);
    throw error;
  }
};

export const getQuickBooksAttachable = async (props: any) => {
  const {
    accessToken, // Your access token
    attachableId,
    companyID,
    minorVersion = 69, // Change as needed
  } = props;

  const endpoint = `/v3/company/${companyID}/attachable/${attachableId}`;

  const headers = {
    Authorization: `Bearer ${accessToken}`,
    Accept: "application/json",
  };

  try {
    const response = await fetch(
      `${baseURL}${endpoint}?minorversion=${minorVersion}`,
      {
        method: "GET",
        headers,
      }
    );

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error reading QuickBooks attachable:", error);
    throw error;
  }
};

export const updateQuickBooksAttachable = async (props: any) => {
  const {
    accessToken, // Your access token
    companyId,
    attachableId,
    syncToken,
    fileName,
    note,
    category,
    contentType,
    placeName,
    attachableRef,
    longitude,
    tag,
    latitude,
    metaData,
  } = props;

  const endpoint = `/v3/company/${companyId}/attachable?minorversion=69`;

  const headers = {
    Authorization: `Bearer ${accessToken}`,
    "Content-Type": "application/json",
  };

  const requestBody = {
    SyncToken: syncToken,
    FileName: fileName,
    Note: note,
    Category: category,
    ContentType: contentType,
    PlaceName: placeName,
    AttachableRef: attachableRef,
    Longitude: longitude,
    Tag: tag,
    Lat: latitude,
    MetaData: metaData,
  };

  try {
    const response = await fetch(`${baseURL}${endpoint}`, {
      method: "POST",
      headers,
      body: JSON.stringify(requestBody),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error updating QuickBooks attachable:", error);
    throw error;
  }
};

export const uploadQuickBooksAttachment = async (props: any) => {
  const {
    accessToken, // Your access token
    entityRefType,
    entityRefValue,
    companyID,
    fileName,
    note, // Optional note
    minorVersion = 69, // Change as needed
  } = props;

  const endpoint = `/v3/company/${companyID}/upload`;

  const headers = {
    Authorization: `Bearer ${accessToken}`,
    "Content-Type": "multipart/form-data",
  };

  const formData = new FormData();

  formData.append(
    "AttachableRef",
    JSON.stringify([
      {
        EntityRef: {
          type: entityRefType,
          value: entityRefValue,
        },
      },
    ])
  );
  formData.append("ContentType", "multipart/form-data");
  formData.append("FileName", fileName);

  if (note) {
    formData.append("Note", note);
  }

  try {
    const response = await fetch(
      `${baseURL}${endpoint}?minorversion=${minorVersion}`,
      {
        method: "POST",
        headers,
        body: formData,
      }
    );

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error uploading QuickBooks attachment:", error);
    throw error;
  }
};

export const queryBalanceSheetReport = async (props: any) => {
  const {
    accessToken, // Your access token
    reportName,
    companyID,
    queryParameters,
    minorVersion = 69, // Change as needed
  } = props;

  const endpoint = `/v3/company/${companyID}/reports/${reportName}`;

  const headers = {
    Authorization: `Bearer ${accessToken}`,
    Accept: "application/json",
  };

  const queryParams = new URLSearchParams(queryParameters);

  try {
    const response = await fetch(
      `${baseURL}${endpoint}?${queryParams.toString()}&minorversion=${minorVersion}`,
      {
        method: "GET",
        headers,
      }
    );

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error querying QuickBooks report:", error);
    throw error;
  }
};

export const executeQuickBooksBatchRequest = async (props: any) => {
  const {
    accessToken, // Your access token
    companyID,
    batchItems,
  } = props;

  const endpoint = `/v3/company/${companyID}/batch`;

  const headers = {
    Authorization: `Bearer ${accessToken}`,
    "Content-Type": "application/json",
  };

  const requestBody = {
    BatchItemRequest: batchItems,
  };

  try {
    const response = await fetch(`${baseURL}${endpoint}`, {
      method: "POST",
      headers,
      body: JSON.stringify(requestBody),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error executing QuickBooks batch request:", error);
    throw error;
  }
};

export const createQuickBooksBill = async (props: any) => {
  const {
    accessToken, // Your access token
    vendorRef,
    lines,
    companyID,
    currencyRef,
    minorVersion = 69, // Change as needed
  } = props;

  const endpoint = `/v3/company/${companyID}/bill`;

  const headers = {
    Authorization: `Bearer ${accessToken}`,
    "Content-Type": "application/json",
  };

  const requestBody = {
    VendorRef: vendorRef,
    Line: lines,
  };

  if (currencyRef) {
    // @ts-ignore
    requestBody.CurrencyRef = currencyRef;
  }

  try {
    const response = await fetch(
      `${baseURL}${endpoint}?minorversion=${minorVersion}`,
      {
        method: "POST",
        headers,
        body: JSON.stringify(requestBody),
      }
    );

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error creating QuickBooks bill:", error);
    throw error;
  }
};

export const deleteQuickBooksBill = async (props: any) => {
  const {
    accessToken, // Your access token
    billId,
    syncToken = "0", // Default to 0 as per the documentation
    companyID,
    minorVersion = 69, // Change as needed
  } = props;

  const endpoint = `/v3/company/${companyID}/bill`;

  const headers = {
    Authorization: `Bearer ${accessToken}`,
    "Content-Type": "application/json",
  };

  const requestBody = {
    Id: billId,
    SyncToken: syncToken,
  };

  try {
    const response = await fetch(
      `${baseURL}${endpoint}?operation=delete&minorversion=${minorVersion}`,
      {
        method: "POST",
        headers,
        body: JSON.stringify(requestBody),
      }
    );

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error deleting QuickBooks bill:", error);
    throw error;
  }
};

export const queryQuickBooksBill = async (props: any) => {
  const {
    accessToken, // Your access token
    selectStatement,
    companyID,
    minorVersion = 69, // Change as needed
  } = props;

  const endpoint = `/v3/company/${companyID}/query`;

  const headers = {
    Authorization: `Bearer ${accessToken}`,
    "Content-Type": "application/text",
  };

  try {
    const response = await fetch(
      `${baseURL}${endpoint}?query=${selectStatement}&minorversion=${minorVersion}`,
      {
        method: "GET",
        headers,
      }
    );

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.text(); // Response is text, not JSON
    return data;
  } catch (error) {
    console.error("Error querying QuickBooks bill:", error);
    throw error;
  }
};

export const readQuickBooksBill = async (props: any) => {
  const {
    accessToken, // Your access token
    billId,
    companyID,
    minorVersion = 69, // Change as needed
  } = props;

  const endpoint = `/v3/company/${companyID}/bill/${billId}`;

  const headers = {
    Authorization: `Bearer ${accessToken}`,
    Accept: "application/json",
    // You can add more headers as needed
  };

  try {
    const response = await fetch(
      `${baseURL}${endpoint}?minorversion=${minorVersion}`,
      {
        method: "GET",
        headers,
      }
    );

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error reading QuickBooks bill:", error);
    throw error;
  }
};

export const updateQuickBooksBill = async (props: any) => {
  const {
    accessToken, // Your access token
    billId, // The ID of the bill to update
    syncToken, // The sync token of the bill
    companyID,
    vendorRef, // Vendor reference
    lineItems, // An array of line items for the bill
    otherBillFields, // Other writable fields as needed
    minorVersion = 69, // Change as needed
  } = props;

  const endpoint = `/v3/company/${companyID}/bill`;

  const headers = {
    Authorization: `Bearer ${accessToken}`,
    "Content-Type": "application/json",
  };

  const requestBody = {
    Id: billId,
    SyncToken: syncToken,
    VendorRef: vendorRef,
    Line: lineItems,
    // Add other writable fields here as needed
  };

  try {
    const response = await fetch(
      `${baseURL}${endpoint}?minorversion=${minorVersion}`,
      {
        method: "POST",
        headers,
        body: JSON.stringify(requestBody),
      }
    );

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error updating QuickBooks bill:", error);
    throw error;
  }
};

export const createQuickBooksBillPayment = async (props: any) => {
  const {
    accessToken, // Your access token
    vendorRef,
    totalAmt,
    payType,
    lineItems,
    currencyRef,
    creditCardPayment,
    checkPayment,
    minorVersion = 69, // Change as needed
    companyID, // Your company ID
  } = props;

  const endpoint = `/v3/company/${companyID}/billpayment`;

  const headers = {
    Authorization: `Bearer ${accessToken}`,
    "Content-Type": "application/json",
  };

  const requestBody = {
    VendorRef: vendorRef,
    TotalAmt: totalAmt,
    PayType: payType,
    Line: lineItems,
    CurrencyRef: currencyRef,
    CreditCardPayment: creditCardPayment,
    CheckPayment: checkPayment,
  };

  try {
    const response = await fetch(
      `${baseURL}${endpoint}?minorversion=${minorVersion}`,
      {
        method: "POST",
        headers,
        body: JSON.stringify(requestBody),
      }
    );

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error creating QuickBooks bill payment:", error);
    throw error;
  }
};

export const voidQuickBooksBillPayment = async (props: any) => {
  const {
    accessToken, // Your access token
    billPaymentId,
    syncToken,
    companyID,
    minorVersion = 69, // Change as needed
  } = props;

  const endpoint = `/v3/company/${companyID}/billpayment`;

  const headers = {
    Authorization: `Bearer ${accessToken}`,
    "Content-Type": "application/json",
  };

  const requestBody = {
    SyncToken: syncToken,
    Id: billPaymentId,
    sparse: true,
  };

  try {
    const response = await fetch(
      `${baseURL}${endpoint}?operation=update&include=void&minorversion=${minorVersion}`,
      {
        method: "POST",
        headers,
        body: JSON.stringify(requestBody),
      }
    );

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error voiding QuickBooks bill payment:", error);
    throw error;
  }
};

export const deleteQuickBooksBillPayment = async (props: any) => {
  const {
    accessToken, // Your access token
    companyId,
    billPaymentId,
    syncToken = "0", // Provide the appropriate sync token
    minorVersion = 69, // Change as needed
  } = props;

  const endpoint = `/v3/company/${companyId}/billpayment?operation=delete`;

  const headers = {
    Authorization: `Bearer ${accessToken}`,
    "Content-Type": "application/json",
  };

  const requestBody = {
    SyncToken: syncToken,
    Id: billPaymentId,
  };

  try {
    const response = await fetch(
      `${baseURL}${endpoint}&minorversion=${minorVersion}`,
      {
        method: "POST",
        headers,
        body: JSON.stringify(requestBody),
      }
    );

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error deleting QuickBooks bill payment:", error);
    throw error;
  }
};

export const queryQuickBooksBillPayment = async (props: any) => {
  const {
    accessToken, // Your access token
    selectStatement, // Your select statement for the query
    companyID,
    minorVersion = 69, // Change as needed
  } = props;

  const endpoint = `/v3/company/${companyID}/query?query=${selectStatement}`;

  const headers = {
    Authorization: `Bearer ${accessToken}`,
  };

  try {
    const response = await fetch(
      `${baseURL}${endpoint}&minorversion=${minorVersion}`,
      {
        method: "GET",
        headers,
      }
    );

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.text(); // You mentioned 'Content type: application/text'
    return data;
  } catch (error) {
    console.error("Error querying QuickBooks bill payment:", error);
    throw error;
  }
};

export const getQuickBooksBillPayment = async (props: any) => {
  const {
    accessToken, // Your access token
    companyID,
    billPaymentId,
    minorVersion = 69, // Change as needed
  } = props;

  const endpoint = `/v3/company/${companyID}/billpayment/${billPaymentId}`;

  const headers = {
    Authorization: `Bearer ${accessToken}`,
    "Content-Type": "application/text",
  };

  try {
    const response = await fetch(
      `${baseURL}${endpoint}?minorversion=${minorVersion}`,
      {
        method: "GET",
        headers,
      }
    );

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.text(); // Use response.text() for plain text response
    return data;
  } catch (error) {
    console.error("Error reading QuickBooks bill payment:", error);
    throw error;
  }
};

export const updateQuickBooksBillPayment = async (props: any) => {
  const {
    accessToken,
    syncToken,
    vendorRef,
    txnDate,
    totalAmt,
    companyID,
    payType,
    privateNote,
    lineItems,
    billPaymentId,
    checkPayment,
    metaData,
    minorVersion = 69, // Change as needed
  } = props;

  const endpoint = `/v3/company/${companyID}/billpayment`;

  const headers = {
    Authorization: `Bearer ${accessToken}`,
    "Content-Type": "application/json",
  };

  const requestBody = {
    SyncToken: syncToken,
    VendorRef: vendorRef,
    TxnDate: txnDate,
    TotalAmt: totalAmt,
    PayType: payType,
    PrivateNote: privateNote,
    Line: lineItems,
    Id: billPaymentId,
    CheckPayment: checkPayment,
    MetaData: metaData,
  };

  try {
    const response = await fetch(
      `${baseURL}${endpoint}?minorversion=${minorVersion}`,
      {
        method: "POST",
        headers,
        body: JSON.stringify(requestBody),
      }
    );

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error updating QuickBooks bill payment:", error);
    throw error;
  }
};

export const createQuickBooksBudget = async (props: any) => {
  const {
    accessToken, // Your access token
    companyID,
    startDate,
    endDate,
    budgetEntryType,
    name,
    budgetType,
    budgetDetail,
    minorVersion = 69, // Change as needed
  } = props;

  const endpoint = `/v3/company/${companyID}/budget`;

  const headers = {
    Authorization: `Bearer ${accessToken}`,
    "Content-Type": "application/json",
  };

  const requestBody = {
    Budget: {
      StartDate: startDate,
      EndDate: endDate,
      BudgetEntryType: budgetEntryType,
      Name: name,
      BudgetType: budgetType,
      BudgetDetail: budgetDetail,
    },
  };

  try {
    const response = await fetch(
      `${baseURL}${endpoint}?minorversion=${minorVersion}`,
      {
        method: "POST",
        headers,
        body: JSON.stringify(requestBody),
      }
    );

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error creating QuickBooks budget:", error);
    throw error;
  }
};

export const deleteQuickBooksBudget = async (props: any) => {
  const {
    accessToken, // Your access token
    budgetId,
    companyID,
    syncToken,
    minorVersion = 69, // Change as needed
  } = props;

  const baseURL = "https://quickbooks.api.intuit.com"; // Production Base URL
  const endpoint = `/v3/company/${companyID}/budget?operation=delete`;

  const headers = {
    Authorization: `Bearer ${accessToken}`,
    "Content-Type": "application/json",
  };

  const requestBody = {
    Budget: {
      SyncToken: syncToken,
      Id: budgetId,
    },
  };

  try {
    const response = await fetch(
      `${baseURL}${endpoint}&minorversion=${minorVersion}`,
      {
        method: "POST",
        headers,
        body: JSON.stringify(requestBody),
      }
    );

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error deleting QuickBooks budget:", error);
    throw error;
  }
};

export const queryQuickBooksBudget = async (props: any) => {
  const {
    accessToken, // Your access token
    selectStatement,
    companyID,
    minorVersion = 69, // Change as needed
  } = props;

  const endpoint = `/v3/company/${companyID}/query`;

  const headers = {
    Authorization: `Bearer ${accessToken}`,
    "Content-Type": "application/text", // Content type is specified as 'application/text'
  };

  try {
    const response = await fetch(
      `${baseURL}${endpoint}?query=${selectStatement}&minorversion=${minorVersion}`,
      {
        method: "GET",
        headers,
      }
    );

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    // Assuming you expect text data in the response
    const data = await response.text();
    return data;
  } catch (error) {
    console.error("Error querying QuickBooks budget:", error);
    throw error;
  }
};

export const getQuickBooksBudget = async (props: any) => {
  const {
    accessToken, // Your access token
    budgetId,
    companyID,
    minorVersion = 69, // Change as needed
  } = props;

  const endpoint = `/v3/company/${companyID}/budget/${budgetId}`;

  const headers = {
    Authorization: `Bearer ${accessToken}`,
    "Content-Type": "application/text",
  };

  try {
    const response = await fetch(
      `${baseURL}${endpoint}?minorversion=${minorVersion}`,
      {
        method: "GET",
        headers,
      }
    );

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.text(); // Response body is text
    return data;
  } catch (error) {
    console.error("Error reading QuickBooks budget:", error);
    throw error;
  }
};
