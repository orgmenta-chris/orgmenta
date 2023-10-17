import {
  XERO_STAGING_CLIENT_ID,
  XERO_STAGING_CLIENT_SECRET,
  XERO_ACCESS_TOKEN,
  // @ts-ignore
} from "@env";
import { VaultGetSecret } from "./vault";
import { View, Pressable, Text } from "react-native";
import { accessToken } from "./xero";

let clientID: any = "";
let clientSecret: any = "";

if (__DEV__) {
  clientID = XERO_STAGING_CLIENT_ID;
  clientSecret = XERO_STAGING_CLIENT_SECRET;
} else {
  clientID = VaultGetSecret("XERO_PRODUCTION_CLIENT_ID");
  clientSecret = VaultGetSecret("XERO_PRODUCTION_CLIENT_SECRET");
}

export const XeroGetAccounts = async (props: any) => {
  const { access_token } = props;

  const apiUrl = "https://api.xero.com/api.xro/2.0/Accounts";

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
    console.error("Error fetching accounts:", error);
    throw error;
  }
};

export const XeroGetAccount = async (props: any) => {
  const { access_token, accountID } = props;

  const apiUrl = `https://api.xero.com/api.xro/2.0/Accounts/${accountID}`;

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
    console.error("Error fetching accounts:", error);
    throw error;
  }
};

export const XeroCreateAccount = async (props: any) => {
  const { access_token, accountData } = props;

  const apiUrl = "https://api.xero.com/api.xro/2.0/Accounts";

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

export const XeroUpdateAccount = async (props: any) => {
  const { access_token, accountID, updatedData } = props;

  const apiUrl = `https://api.xero.com/api.xro/2.0/Accounts/${accountID}`;

  const headers = {
    Authorization: `Bearer ${access_token}`,
    "Content-Type": "application/json",
  };

  try {
    const response = await fetch(apiUrl, {
      method: "POST",
      headers: headers,
      body: JSON.stringify(updatedData),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error updating account:", error);
    throw error;
  }
};

export const XeroArchiveAccount = async (props: any) => {
  const { access_token, accountID } = props;

  const apiUrl = `https://api.xero.com/api.xro/2.0/Accounts/${accountID}`;

  const headers = {
    Authorization: `Bearer ${access_token}`,
    "Content-Type": "application/json",
  };

  const archiveData = {
    AccountID: accountID,
    Status: "ARCHIVED",
  };

  try {
    const response = await fetch(apiUrl, {
      method: "POST",
      headers: headers,
      body: JSON.stringify(archiveData),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error archiving account:", error);
    throw error;
  }
};

export const XeroDeleteAccount = async (props: any) => {
  const { access_token, accountID } = props;

  const apiUrl = `https://api.xero.com/api.xro/2.0/Accounts/${accountID}`;

  const headers = {
    Authorization: `Bearer ${access_token}`,
  };

  try {
    const response = await fetch(apiUrl, {
      method: "DELETE",
      headers: headers,
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    return "Account deleted successfully";
  } catch (error) {
    console.error("Error deleting account:", error);
    throw error;
  }
};

export const XeroGetAttachments = async (props: any) => {
  const { access_token, endpoint, documentGuid } = props;
  const apiUrl = `https://api.xero.com/api.xro/2.0/${endpoint}/${documentGuid}/Attachments/`;

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
    console.error("Error fetching attachments:", error);
    throw error;
  }
};

export const XeroGetAttachmentContent = async (props: any) => {
  const { access_token, endpoint, documentGuid, filename } = props;
  const apiUrl = `https://api.xero.com/api.xro/2.0/${endpoint}/${documentGuid}/Attachments/${filename}`;

  const headers = {
    Authorization: `Bearer ${access_token}`,
  };

  try {
    const response = await fetch(apiUrl, {
      method: "GET",
      headers: headers,
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    // Return the raw attachment content
    return response.text();
  } catch (error) {
    console.error("Error fetching attachment content:", error);
    throw error;
  }
};

export const XeroUploadAttachment = async (props: any) => {
  const { access_token, endpoint, documentGuid, filename, attachmentData } =
    props;
  const apiUrl = `https://api.xero.com/api.xro/2.0/${endpoint}/${documentGuid}/Attachments/${filename}`;

  const headers = {
    Authorization: `Bearer ${access_token}`,
    "Content-Type": "image/png", // Update with the appropriate content type
  };

  try {
    const response = await fetch(apiUrl, {
      method: "POST",
      headers: headers,
      body: attachmentData, // Raw attachment content
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error uploading attachment:", error);
    throw error;
  }
};

export const XeroGetBankTransactions = async (props: any) => {
  const { access_token, filter } = props;
  const apiUrl = `https://api.xero.com/api.xro/2.0/BankTransactions${
    filter ? `?${filter}` : ""
  }`;

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
    console.error("Error fetching bank transactions:", error);
    throw error;
  }
};

export const XeroCreateOrUpdateBankTransaction = async (props: any) => {
  const { access_token, bankTransactionData } = props;
  const apiUrl = "https://api.xero.com/api.xro/2.0/BankTransactions";

  const headers = {
    Authorization: `Bearer ${access_token}`,
    "Content-Type": "application/json",
  };

  try {
    const response = await fetch(apiUrl, {
      method: "POST", // Use PUT for updates
      headers: headers,
      body: JSON.stringify(bankTransactionData),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error creating or updating bank transaction:", error);
    throw error;
  }
};

export const XeroDeleteBankTransaction = async (props: any) => {
  const { access_token, bankTransactionID } = props;
  const apiUrl = `https://api.xero.com/api.xro/2.0/BankTransactions/${bankTransactionID}`;

  const headers = {
    Authorization: `Bearer ${access_token}`,
    "Content-Type": "application/json",
  };

  try {
    const response = await fetch(apiUrl, {
      method: "POST",
      headers: headers,
      body: JSON.stringify({ Status: "DELETED" }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    return true; // Successful deletion
  } catch (error) {
    console.error("Error deleting bank transaction:", error);
    throw error;
  }
};

export const XeroUploadAttachmentToBankTransaction = async (props: any) => {
  const { access_token, bankTransactionID, filename, attachmentData } = props;
  const apiUrl = `https://api.xero.com/api.xro/2.0/BankTransactions/${bankTransactionID}/Attachments/${filename}`;

  const headers = {
    Authorization: `Bearer ${access_token}`,
    "Content-Type": "image/png", // Update with the appropriate content type
    "Content-Length": attachmentData.length.toString(),
  };

  try {
    const response = await fetch(apiUrl, {
      method: "POST",
      headers: headers,
      body: attachmentData,
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error uploading attachment to bank transaction:", error);
    throw error;
  }
};

export const XeroGetBankTransfers = async (props: any) => {
  const { access_token } = props;

  const apiUrl = "https://api.xero.com/api.xro/2.0/BankTransfers";

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
    console.error("Error fetching bank transfers:", error);
    throw error;
  }
};

export const XeroCreateBankTransfer = async (props: any) => {
  const { access_token, bankTransferData } = props;

  const apiUrl = "https://api.xero.com/api.xro/2.0/BankTransfers";

  const headers = {
    Authorization: `Bearer ${access_token}`,
    "Content-Type": "application/json",
  };

  try {
    const response = await fetch(apiUrl, {
      method: "PUT",
      headers: headers,
      body: JSON.stringify(bankTransferData),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error creating bank transfer:", error);
    throw error;
  }
};

export const XeroGetBatchPayments = async (props: any) => {
  const { access_token } = props;
  const apiUrl = "https://api.xero.com/api.xro/2.0/BatchPayments";

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
    console.error("Error fetching batch payments:", error);
    throw error;
  }
};

export const XeroCreateBatchPayment = async (props: any) => {
  const { access_token, batchPaymentData } = props;
  const apiUrl = "https://api.xero.com/api.xro/2.0/BatchPayments";

  const headers = {
    Authorization: `Bearer ${access_token}`,
    "Content-Type": "application/json",
  };

  try {
    const response = await fetch(apiUrl, {
      method: "PUT",
      headers: headers,
      body: JSON.stringify(batchPaymentData),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error creating batch payment:", error);
    throw error;
  }
};

export const XeroDeleteBatchPayment = async (props: any) => {
  const { access_token, batchPaymentID, status } = props;
  const apiUrl = `https://api.xero.com/api.xro/2.0/BatchPayments/${batchPaymentID}`;

  const headers = {
    Authorization: `Bearer ${access_token}`,
    "Content-Type": "application/json",
  };

  const deleteData = {
    BatchPaymentID: batchPaymentID,
    Status: status, // Status should be "DELETED"
  };

  try {
    const response = await fetch(apiUrl, {
      method: "POST",
      headers: headers,
      body: JSON.stringify(deleteData),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error deleting batch payment:", error);
    throw error;
  }
};

export const XeroGetBrandingThemes = async (props: any) => {
  const { access_token } = props;
  const apiUrl = "https://api.xero.com/api.xro/2.0/BrandingThemes";
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
    console.error("Error fetching branding themes:", error);
    throw error;
  }
};

export const XeroGetBrandingTheme = async (props: any) => {
  const { access_token, BrandingThemeID } = props;
  const apiUrl = `https://api.xero.com/api.xro/2.0/BrandingThemes/${BrandingThemeID}`;
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
    console.error("Error fetching branding theme:", error);
    throw error;
  }
};

export const XeroGetPaymentServices = async (props: any) => {
  const { access_token, BrandingThemeID } = props;
  const apiUrl = `https://api.xero.com/api.xro/2.0/BrandingThemes/${BrandingThemeID}/PaymentServices`;
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
    console.error("Error fetching payment services:", error);
    throw error;
  }
};

export const XeroApplyPaymentService = async (props: any) => {
  const { access_token, BrandingThemeID, PaymentServiceID } = props;
  const apiUrl = `https://api.xero.com/api.xro/2.0/BrandingThemes/${BrandingThemeID}/PaymentServices`;
  const headers = {
    Authorization: `Bearer ${access_token}`,
    "Content-Type": "application/json",
  };

  const requestBody = {
    PaymentServices: [{ PaymentServiceID }],
  };

  try {
    const response = await fetch(apiUrl, {
      method: "POST",
      headers: headers,
      body: JSON.stringify(requestBody),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error applying payment service:", error);
    throw error;
  }
};

export const XeroGetBudgets = async (props: any) => {
  const { access_token } = props;

  const apiUrl = "https://api.xero.com/api.xro/2.0/Budgets";

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
    console.error("Error fetching budgets:", error);
    throw error;
  }
};

export const XeroGetBudget = async (props: any) => {
  const { access_token, budgetID } = props;

  const apiUrl = `https://api.xero.com/api.xro/2.0/Budgets/${budgetID}`;

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
    console.error("Error fetching budget:", error);
    throw error;
  }
};

export const XeroGetContactGroups = async (props: any) => {
  const { access_token, ContactGroupID } = props;

  const apiUrl = ContactGroupID
    ? `https://api.xero.com/api.xro/2.0/ContactGroups/${ContactGroupID}`
    : "https://api.xero.com/api.xro/2.0/ContactGroups";

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
    console.error("Error fetching contact groups:", error);
    throw error;
  }
};

export const XeroCreateContactGroup = async (props: any) => {
  const { access_token, Name } = props;

  const apiUrl = "https://api.xero.com/api.xro/2.0/ContactGroups";

  const headers = {
    Authorization: `Bearer ${access_token}`,
    "Content-Type": "application/json",
  };

  const requestData = { Name };

  try {
    const response = await fetch(apiUrl, {
      method: "POST",
      headers: headers,
      body: JSON.stringify(requestData),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error creating contact group:", error);
    throw error;
  }
};

export const XeroUpdateContactGroup = async (props: any) => {
  const { access_token, ContactGroupID, Name } = props;

  const apiUrl = `https://api.xero.com/api.xro/2.0/ContactGroups/${ContactGroupID}`;

  const headers = {
    Authorization: `Bearer ${access_token}`,
    "Content-Type": "application/json",
  };

  const requestData = { ContactGroupID, Name };

  try {
    const response = await fetch(apiUrl, {
      method: "POST",
      headers: headers,
      body: JSON.stringify(requestData),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error updating contact group:", error);
    throw error;
  }
};

export const XeroDeleteContactGroup = async (props: any) => {
  const { access_token, ContactGroupID, Status } = props;

  const apiUrl = `https://api.xero.com/api.xro/2.0/ContactGroups/${ContactGroupID}`;

  const headers = {
    Authorization: `Bearer ${access_token}`,
    "Content-Type": "application/json",
  };

  const requestData = { ContactGroupID, Status: "DELETED" };

  try {
    const response = await fetch(apiUrl, {
      method: "POST",
      headers: headers,
      body: JSON.stringify(requestData),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error deleting contact group:", error);
    throw error;
  }
};

export const XeroGetContacts = async (props: any) => {
  const { access_token, contactID } = props;

  const apiUrl = `https://api.xero.com/api.xro/2.0/Contacts/${contactID}`;

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
    console.error("Error fetching contact:", error);
    throw error;
  }
};

export const XeroCreateOrUpdateContact = async (props: any) => {
  const { access_token, contactData } = props;

  const apiUrl = "https://api.xero.com/api.xro/2.0/Contacts";

  const headers = {
    Authorization: `Bearer ${access_token}`,
    "Content-Type": "application/json",
  };

  try {
    const method = contactData.ContactID ? "PUT" : "POST"; // Use PUT for updates, POST for new contacts
    const response = await fetch(apiUrl, {
      method: method,
      headers: headers,
      body: JSON.stringify(contactData),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error creating/updating contact:", error);
    throw error;
  }
};

export const XeroArchiveContact = async (props: any) => {
  const { access_token, contactID } = props;

  const apiUrl = `https://api.xero.com/api.xro/2.0/Contacts/${contactID}`;

  const headers = {
    Authorization: `Bearer ${access_token}`,
    "Content-Type": "application/json",
  };

  const archiveData = {
    ContactID: contactID,
    ContactStatus: "ARCHIVED",
  };

  try {
    const response = await fetch(apiUrl, {
      method: "PUT",
      headers: headers,
      body: JSON.stringify(archiveData),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error archiving contact:", error);
    throw error;
  }
};

export const XeroGetCreditNotes = async (props: any) => {
  const { access_token } = props;
  const apiUrl = "https://api.xero.com/api.xro/2.0/CreditNotes";
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
    console.error("Error fetching credit notes:", error);
    throw error;
  }
};

export const XeroCreateCreditNote = async (props: any) => {
  const { access_token, creditNoteData } = props;
  const apiUrl = "https://api.xero.com/api.xro/2.0/CreditNotes";
  const headers = {
    Authorization: `Bearer ${access_token}`,
    "Content-Type": "application/json",
  };

  try {
    const response = await fetch(apiUrl, {
      method: "POST",
      headers: headers,
      body: JSON.stringify(creditNoteData),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error creating credit note:", error);
    throw error;
  }
};

export const XeroUpdateCreditNote = async (props: any) => {
  const { access_token, creditNoteID, updatedData } = props;
  const apiUrl = `https://api.xero.com/api.xro/2.0/CreditNotes/${creditNoteID}`;
  const headers = {
    Authorization: `Bearer ${access_token}`,
    "Content-Type": "application/json",
  };

  try {
    const response = await fetch(apiUrl, {
      method: "POST",
      headers: headers,
      body: JSON.stringify(updatedData),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error updating credit note:", error);
    throw error;
  }
};

export const XeroDeleteCreditNote = async (props: any) => {
  const { access_token, creditNoteID } = props;
  const apiUrl = `https://api.xero.com/api.xro/2.0/CreditNotes/${creditNoteID}`;
  const headers = {
    Authorization: `Bearer ${access_token}`,
  };

  try {
    const response = await fetch(apiUrl, {
      method: "DELETE",
      headers: headers,
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    return "Credit note deleted successfully";
  } catch (error) {
    console.error("Error deleting credit note:", error);
    throw error;
  }
};

export const XeroGetCurrencies = async (props: any) => {
  const { access_token } = props;

  const apiUrl = "https://api.xero.com/api.xro/2.0/Currencies";

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
    console.error("Error fetching currencies:", error);
    throw error;
  }
};

export const XeroAddCurrencies = async (props: any) => {
  const { access_token, currencyData } = props;

  const apiUrl = "https://api.xero.com/api.xro/2.0/Currencies";

  const headers = {
    Authorization: `Bearer ${access_token}`,
    "Content-Type": "application/json",
  };

  try {
    const response = await fetch(apiUrl, {
      method: "PUT",
      headers: headers,
      body: JSON.stringify(currencyData),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error adding currencies:", error);
    throw error;
  }
};

export const XeroGetEmployees = async (props: any) => {
  const { access_token } = props;

  const apiUrl = "https://api.xero.com/api.xro/2.0/Employees";

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
    console.error("Error fetching employees:", error);
    throw error;
  }
};

export const XeroCreateEmployees = async (props: any) => {
  const { access_token, employeesData } = props;

  const apiUrl = "https://api.xero.com/api.xro/2.0/Employees";

  const headers = {
    Authorization: `Bearer ${access_token}`,
    "Content-Type": "application/json",
  };

  try {
    const response = await fetch(apiUrl, {
      method: "POST",
      headers: headers,
      body: JSON.stringify(employeesData),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error creating employees:", error);
    throw error;
  }
};

export const XeroUpdateEmployees = async (props: any) => {
  const { access_token, employeesData } = props;

  const apiUrl = "https://api.xero.com/api.xro/2.0/Employees";

  const headers = {
    Authorization: `Bearer ${access_token}`,
    "Content-Type": "application/json",
  };

  try {
    const response = await fetch(apiUrl, {
      method: "PUT",
      headers: headers,
      body: JSON.stringify(employeesData),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error updating employees:", error);
    throw error;
  }
};

export const XeroDeleteEmployees = async (props: any) => {
  const { access_token, employeeID } = props;

  const apiUrl = `https://api.xero.com/api.xro/2.0/Employees/${employeeID}`;

  const headers = {
    Authorization: `Bearer ${access_token}`,
  };

  try {
    const response = await fetch(apiUrl, {
      method: "DELETE",
      headers: headers,
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    return "Employee deleted successfully";
  } catch (error) {
    console.error("Error deleting employee:", error);
    throw error;
  }
};

export const XeroGetHistory = async (props: any) => {
  const { access_token, endpoint, guid } = props;

  const apiUrl = `https://api.xero.com/api.xro/2.0/${endpoint}/${guid}/history`;

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
    return data.HistoryRecords;
  } catch (error) {
    console.error("Error retrieving history:", error);
    throw error;
  }
};

export const XeroAddNote = async (props: any) => {
  const { access_token, endpoint, guid, noteDetails } = props;

  const apiUrl = `https://api.xero.com/api.xro/2.0/${endpoint}/${guid}/history`;

  const headers = {
    Authorization: `Bearer ${access_token}`,
    "Content-Type": "application/json",
  };

  const requestBody = {
    HistoryRecords: [
      {
        Details: noteDetails,
      },
    ],
  };

  try {
    const response = await fetch(apiUrl, {
      method: "PUT",
      headers: headers,
      body: JSON.stringify(requestBody),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    return data.HistoryRecords;
  } catch (error) {
    console.error("Error adding note:", error);
    throw error;
  }
};

export const XeroGetInvoiceRemindersSettings = async (props: any) => {
  const { access_token } = props;

  const apiUrl = "https://api.xero.com/api.xro/2.0/InvoiceReminders/Settings";

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
    console.error("Error fetching invoice reminders settings:", error);
    throw error;
  }
};

export const XeroInvoiceRemindersFunctionalityRequest = async (props: any) => {
  // This function is used to request additional functionality for invoice reminders.
  // As per the Xero documentation, the specific functionality you're requesting may not be available.
  // Therefore, this function is a placeholder for potential future functionality.

  // This function doesn't make an API call but serves as a request to Xero for specific features.

  console.log("Invoice Reminder functionality NOT available via the API");
  console.log(
    "This is a very basic endpoint, but Xero may consider additional functionality requests."
  );
  console.log("Please follow their guidelines and feature requests for this.");
};

export const XeroGetInvoices = async (props: any) => {
  const { access_token } = props;
  const apiUrl = "https://api.xero.com/api.xro/2.0/Invoices";

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
    console.error("Error fetching invoices:", error);
    throw error;
  }
};

export const XeroCreateInvoice = async (props: any) => {
  const { access_token, invoiceData } = props;
  const apiUrl = "https://api.xero.com/api.xro/2.0/Invoices";

  const headers = {
    Authorization: `Bearer ${access_token}`,
    "Content-Type": "application/json",
  };

  try {
    const response = await fetch(apiUrl, {
      method: "PUT",
      headers: headers,
      body: JSON.stringify(invoiceData),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error creating invoice:", error);
    throw error;
  }
};

export const XeroCreateOrUpdateInvoice = async (props: any) => {
  const { access_token, invoiceData } = props;
  const apiUrl = "https://api.xero.com/api.xro/2.0/Invoices";

  const headers = {
    Authorization: `Bearer ${access_token}`,
    "Content-Type": "application/json",
  };

  try {
    const response = await fetch(apiUrl, {
      method: "POST",
      headers: headers,
      body: JSON.stringify(invoiceData),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error creating or updating invoice:", error);
    throw error;
  }
};

export const XeroEmailInvoice = async (props: any, invoiceId: string) => {
  const { access_token } = props;
  const apiUrl = `https://api.xero.com/api.xro/2.0/Invoices/${invoiceId}/Email`;

  const headers = {
    Authorization: `Bearer ${access_token}`,
  };

  try {
    const response = await fetch(apiUrl, {
      method: "POST",
      headers: headers,
    });

    if (response.status === 204) {
      // Email successfully triggered, no content (204) is expected response
      return true;
    } else if (response.status === 400) {
      throw new Error(`Bad request or rate limit hit. Status: 400`);
    } else {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
  } catch (error) {
    console.error("Error triggering email for the invoice:", error);
    throw error;
  }
};

export const XeroGetItems = async (props: any) => {
  const { access_token } = props;
  const apiUrl = "https://api.xero.com/api.xro/2.0/Items";
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
    console.error("Error fetching items:", error);
    throw error;
  }
};

export const XeroCreateItem = async (props: any) => {
  const { access_token, itemData } = props;
  const apiUrl = "https://api.xero.com/api.xro/2.0/Items";
  const headers = {
    Authorization: `Bearer ${access_token}`,
    "Content-Type": "application/json",
  };

  try {
    const response = await fetch(apiUrl, {
      method: "POST",
      headers: headers,
      body: JSON.stringify(itemData),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error creating item:", error);
    throw error;
  }
};

export const XeroUpdateItem = async (props: any) => {
  const { access_token, itemID, updatedData } = props;
  const apiUrl = `https://api.xero.com/api.xro/2.0/Items/${itemID}`;
  const headers = {
    Authorization: `Bearer ${access_token}`,
    "Content-Type": "application/json",
  };

  try {
    const response = await fetch(apiUrl, {
      method: "PUT",
      headers: headers,
      body: JSON.stringify(updatedData),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error updating item:", error);
    throw error;
  }
};

export const XeroDeleteItem = async (props: any) => {
  const { access_token, itemID } = props;
  const apiUrl = `https://api.xero.com/api.xro/2.0/Items/${itemID}`;
  const headers = {
    Authorization: `Bearer ${access_token}`,
  };

  try {
    const response = await fetch(apiUrl, {
      method: "DELETE",
      headers: headers,
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    return "Item deleted successfully";
  } catch (error) {
    console.error("Error deleting item:", error);
    throw error;
  }
};

export const XeroGetJournals = async (props: any) => {
  const { access_token } = props;

  const apiUrl = "https://api.xero.com/api.xro/2.0/Journals";

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
    console.error("Error fetching journals:", error);
    throw error;
  }
};

export const XeroGetJournal = async (props: any) => {
  const { access_token, journalID } = props;

  const apiUrl = `https://api.xero.com/api.xro/2.0/Journals/${journalID}`;

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
    console.error("Error fetching journal:", error);
    throw error;
  }
};

export const XeroGetLinkedTransactions = async (props: any) => {
  const {
    access_token,
    LinkedTransactionID,
    Page,
    SourceTransactionID,
    ContactID,
    Status,
  } = props;

  let apiUrl = "https://api.xero.com/api.xro/2.0/LinkedTransactions";

  // Add optional parameters to the URL
  if (LinkedTransactionID) {
    apiUrl += `/${LinkedTransactionID}`;
  }

  const queryParams = [];
  if (Page) {
    queryParams.push(`page=${Page}`);
  }
  if (SourceTransactionID) {
    queryParams.push(`SourceTransactionID=${SourceTransactionID}`);
  }
  if (ContactID) {
    queryParams.push(`ContactID=${ContactID}`);
  }
  if (Status) {
    queryParams.push(`Status=${Status}`);
  }
  if (queryParams.length > 0) {
    apiUrl += `?${queryParams.join("&")}`;
  }

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
    console.error("Error fetching linked transactions:", error);
    throw error;
  }
};

export const XeroCreateLinkedTransaction = async (props: any) => {
  const {
    access_token,
    SourceTransactionID,
    SourceLineItemID,
    ContactID,
    TargetTransactionID,
    TargetLineItemID,
  } = props;

  const apiUrl = "https://api.xero.com/api.xro/2.0/LinkedTransactions";

  const headers = {
    Authorization: `Bearer ${access_token}`,
    "Content-Type": "application/json",
  };

  const linkedTransactionData = {
    SourceTransactionID,
    SourceLineItemID,
    ContactID,
    TargetTransactionID,
    TargetLineItemID,
  };

  try {
    const response = await fetch(apiUrl, {
      method: "POST",
      headers: headers,
      body: JSON.stringify(linkedTransactionData),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error creating linked transaction:", error);
    throw error;
  }
};

export const XeroUpdateLinkedTransaction = async (props: any) => {
  const {
    access_token,
    LinkedTransactionID,
    ContactID,
    TargetTransactionID,
    TargetLineItemID,
  } = props;

  const apiUrl = `https://api.xero.com/api.xro/2.0/LinkedTransactions/${LinkedTransactionID}`;

  const headers = {
    Authorization: `Bearer ${access_token}`,
    "Content-Type": "application/json",
  };

  const linkedTransactionData = {
    LinkedTransactionID,
    ContactID,
    TargetTransactionID,
    TargetLineItemID,
  };

  try {
    const response = await fetch(apiUrl, {
      method: "POST",
      headers: headers,
      body: JSON.stringify(linkedTransactionData),
    });

    if (!response.ok) {
      throw Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error updating linked transaction:", error);
    throw error;
  }
};

export const XeroDeleteLinkedTransaction = async (props: any) => {
  const { access_token, LinkedTransactionID } = props;

  const apiUrl = `https://api.xero.com/api.xro/2.0/LinkedTransactions/${LinkedTransactionID}`;

  const headers = {
    Authorization: `Bearer ${access_token}`,
  };

  try {
    const response = await fetch(apiUrl, {
      method: "DELETE",
      headers: headers,
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    return "Linked transaction deleted successfully";
  } catch (error) {
    console.error("Error deleting linked transaction:", error);
    throw error;
  }
};

export const XeroGetManualJournals = async (props: any) => {
  const { access_token, parameters } = props;

  let apiUrl = `https://api.xero.com/api.xro/2.0/ManualJournals`;

  const headers = {
    Authorization: `Bearer ${access_token}`,
    Accept: "application/json",
  };

  // Construct the URL with optional query parameters
  if (parameters) {
    apiUrl += `?${new URLSearchParams(parameters).toString()}`;
  }

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
    console.error("Error fetching manual journals:", error);
    throw error;
  }
};

export const XeroCreateOrUpdateManualJournal = async (props: any) => {
  const { access_token, manualJournalData } = props;

  const apiUrl = "https://api.xero.com/api.xro/2.0/ManualJournals";

  const headers = {
    Authorization: `Bearer ${access_token}`,
    "Content-Type": "application/json",
  };

  try {
    const response = await fetch(apiUrl, {
      method: "POST", // Use POST to create or update manual journals
      headers: headers,
      body: JSON.stringify(manualJournalData),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error creating or updating manual journal:", error);
    throw error;
  }
};

export const XeroGetOrganisation = async (props: any) => {
  const { access_token } = props;
  const apiUrl = "https://api.xero.com/api.xro/2.0/Organisation";

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
    console.error("Error fetching organization:", error);
    throw error;
  }
};

export const XeroGetOrganisationActions = async (props: any) => {
  const { access_token } = props;
  const apiUrl = "https://api.xero.com/api.xro/2.0/Organisation/Actions";

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
    console.error("Error fetching organization actions:", error);
    throw error;
  }
};

export const XeroGetOverpayments = async (props: any) => {
  const { access_token } = props;

  const apiUrl = "https://api.xero.com/api.xro/2.0/Overpayments";

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
    console.error("Error fetching Overpayments:", error);
    throw error;
  }
};

export const XeroAllocateOverpayment = async (props: any) => {
  const { access_token, overpaymentID, allocations } = props;

  const apiUrl = `https://api.xero.com/api.xro/2.0/Overpayments/${overpaymentID}/Allocations`;

  const headers = {
    Authorization: `Bearer ${access_token}`,
    "Content-Type": "application/json",
  };

  const allocationData = {
    Amount: allocations.Amount,
    Invoice: {
      InvoiceID: allocations.InvoiceID,
    },
  };

  try {
    const response = await fetch(apiUrl, {
      method: "PUT",
      headers: headers,
      body: JSON.stringify(allocationData),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const responseData = await response.json();
    return responseData;
  } catch (error) {
    console.error("Error allocating Overpayment:", error);
    throw error;
  }
};

export const XeroGetOverpaymentHistory = async (props: any) => {
  const { access_token, overpaymentID } = props;

  const apiUrl = `https://api.xero.com/api.xro/2.0/Overpayments/${overpaymentID}/History`;

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
    console.error("Error fetching Overpayment history:", error);
    throw error;
  }
};

export const XeroAddNoteToOverpayment = async (props: any) => {
  const { access_token, overpaymentID, note } = props;

  const apiUrl = `https://api.xero.com/api.xro/2.0/Overpayments/${overpaymentID}/History`;

  const headers = {
    Authorization: `Bearer ${access_token}`,
    "Content-Type": "application/json",
  };

  const noteData = {
    HistoryRecords: [
      {
        Details: note,
      },
    ],
  };

  try {
    const response = await fetch(apiUrl, {
      method: "PUT",
      headers: headers,
      body: JSON.stringify(noteData),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const responseData = await response.json();
    return responseData;
  } catch (error) {
    console.error("Error adding note to Overpayment:", error);
    throw error;
  }
};

export const XeroDeleteOverpaymentAllocation = async (props: any) => {
  const { access_token, overpaymentID, allocationID } = props;

  const apiUrl = `https://api.xero.com/api.xro/2.0/Overpayments/${overpaymentID}/Allocations/${allocationID}`;

  const headers = {
    Authorization: `Bearer ${access_token}`,
  };

  try {
    const response = await fetch(apiUrl, {
      method: "DELETE",
      headers: headers,
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const responseData = await response.json();
    return responseData;
  } catch (error) {
    console.error("Error deleting Overpayment allocation:", error);
    throw error;
  }
};

export const XeroGetPaymentServices2 = async (props: any) => {
  const { access_token } = props;

  const apiUrl = "https://api.xero.com/api.xro/2.0/PaymentServices";

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
    console.error("Error fetching payment services:", error);
    throw error;
  }
};

export const XeroCreatePaymentService = async (props: any) => {
  const { access_token, paymentServiceData } = props;

  const apiUrl = "https://api.xero.com/api.xro/2.0/PaymentServices";

  const headers = {
    Authorization: `Bearer ${access_token}`,
    "Content-Type": "application/json",
  };

  try {
    const response = await fetch(apiUrl, {
      method: "PUT",
      headers: headers,
      body: JSON.stringify(paymentServiceData),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error creating payment service:", error);
    throw error;
  }
};

export const XeroGetPayments = async (props: any) => {
  const { access_token, paymentID } = props;

  const apiUrl = `https://api.xero.com/api.xro/2.0/Payments/${paymentID}`;

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
    console.error("Error fetching payment:", error);
    throw error;
  }
};

export const XeroCreatePayment = async (props: any) => {
  const { access_token, paymentData } = props;

  const apiUrl = "https://api.xero.com/api.xro/2.0/Payments";

  const headers = {
    Authorization: `Bearer ${access_token}`,
    "Content-Type": "application/json",
  };

  try {
    const response = await fetch(apiUrl, {
      method: "PUT",
      headers: headers,
      body: JSON.stringify(paymentData),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error creating payment:", error);
    throw error;
  }
};

export const XeroDeletePayment = async (props: any) => {
  const { access_token, paymentID } = props;

  const apiUrl = `https://api.xero.com/api.xro/2.0/Payments/${paymentID}`;

  const headers = {
    Authorization: `Bearer ${access_token}`,
    "Content-Type": "application/json",
  };

  const deleteData = {
    Status: "DELETED",
  };

  try {
    const response = await fetch(apiUrl, {
      method: "POST",
      headers: headers,
      body: JSON.stringify(deleteData),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    return "Payment deleted successfully";
  } catch (error) {
    console.error("Error deleting payment:", error);
    throw error;
  }
};

export const XeroGetPrepayments = async (props: any) => {
  const { access_token } = props;

  const apiUrl = "https://api.xero.com/api.xro/2.0/Prepayments";

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
    console.error("Error fetching prepayments:", error);
    throw error;
  }
};

export const XeroCreatePrepayment = async (props: any) => {
  const { access_token, prepaymentData } = props;

  const apiUrl = "https://api.xero.com/api.xro/2.0/Prepayments";

  const headers = {
    Authorization: `Bearer ${access_token}`,
    "Content-Type": "application/json",
  };

  try {
    const response = await fetch(apiUrl, {
      method: "PUT",
      headers: headers,
      body: JSON.stringify(prepaymentData),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error creating prepayment:", error);
    throw error;
  }
};

export const XeroDeletePrepayment = async (props: any) => {
  const { access_token, prepaymentID } = props;

  const apiUrl = `https://api.xero.com/api.xro/2.0/Prepayments/${prepaymentID}`;

  const headers = {
    Authorization: `Bearer ${access_token}`,
  };

  try {
    const response = await fetch(apiUrl, {
      method: "DELETE",
      headers: headers,
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    return "Prepayment deleted successfully";
  } catch (error) {
    console.error("Error deleting prepayment:", error);
    throw error;
  }
};

export const XeroGetPurchaseOrders = async (props: any) => {
  const { access_token } = props;
  const apiUrl = "https://api.xero.com/api.xro/2.0/PurchaseOrders";
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
    console.error("Error fetching purchase orders:", error);
    throw error;
  }
};

export const XeroCreatePurchaseOrder = async (props: any) => {
  const { access_token, purchaseOrderData } = props;
  const apiUrl = "https://api.xero.com/api.xro/2.0/PurchaseOrders";
  const headers = {
    Authorization: `Bearer ${access_token}`,
    "Content-Type": "application/json",
  };

  try {
    const response = await fetch(apiUrl, {
      method: "POST",
      headers: headers,
      body: JSON.stringify(purchaseOrderData),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error creating purchase order:", error);
    throw error;
  }
};

export const XeroUpdatePurchaseOrder = async (props: any) => {
  const { access_token, purchaseOrderID, updatedData } = props;
  const apiUrl = `https://api.xero.com/api.xro/2.0/PurchaseOrders/${purchaseOrderID}`;
  const headers = {
    Authorization: `Bearer ${access_token}`,
    "Content-Type": "application/json",
  };

  try {
    const response = await fetch(apiUrl, {
      method: "POST",
      headers: headers,
      body: JSON.stringify(updatedData),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error updating purchase order:", error);
    throw error;
  }
};

export const XeroDeletePurchaseOrder = async (props: any) => {
  const { access_token, purchaseOrderID } = props;
  const apiUrl = `https://api.xero.com/api.xro/2.0/PurchaseOrders/${purchaseOrderID}`;
  const headers = {
    Authorization: `Bearer ${access_token}`,
    "Content-Type": "application/json",
  };

  try {
    const response = await fetch(apiUrl, {
      method: "POST",
      headers: headers,
      body: JSON.stringify({ Status: "DELETED" }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error deleting purchase order:", error);
    throw error;
  }
};

export const XeroGetQuotes = async (props: any) => {
  const { access_token } = props;

  const apiUrl = "https://api.xero.com/api.xro/2.0/Quotes";

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
    console.error("Error fetching quotes:", error);
    throw error;
  }
};

export const XeroCreateQuote = async (props: any) => {
  const { access_token, quoteData } = props;

  const apiUrl = "https://api.xero.com/api.xro/2.0/Quotes";

  const headers = {
    Authorization: `Bearer ${access_token}`,
    "Content-Type": "application/json",
  };

  try {
    const response = await fetch(apiUrl, {
      method: "POST",
      headers: headers,
      body: JSON.stringify(quoteData),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error creating quote:", error);
    throw error;
  }
};

export const XeroUpdateQuote = async (props: any) => {
  const { access_token, quoteData } = props;
  // If updating an existing quote, provide the QuoteID in the quoteData

  const apiUrl = "https://api.xero.com/api.xro/2.0/Quotes";

  const headers = {
    Authorization: `Bearer ${access_token}`,
    "Content-Type": "application/json",
  };

  try {
    const response = await fetch(apiUrl, {
      method: "PUT",
      headers: headers,
      body: JSON.stringify(quoteData),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error updating quote:", error);
    throw error;
  }
};

export const XeroGetRepeatingInvoices = async (props: any) => {
  const { access_token } = props;

  const apiUrl = "https://api.xero.com/api.xro/2.0/RepeatingInvoices";

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
    console.error("Error fetching repeating invoices:", error);
    throw error;
  }
};

export const XeroCreateRepeatingInvoice = async (props: any) => {
  const { access_token, repeatingInvoiceData } = props;

  const apiUrl = "https://api.xero.com/api.xro/2.0/RepeatingInvoices";

  const headers = {
    Authorization: `Bearer ${access_token}`,
    "Content-Type": "application/json",
  };

  try {
    const response = await fetch(apiUrl, {
      method: "POST",
      headers: headers,
      body: JSON.stringify(repeatingInvoiceData),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error creating repeating invoice:", error);
    throw error;
  }
};

export const XeroDeleteRepeatingInvoice = async (props: any) => {
  const { access_token, repeatingInvoiceID } = props;

  const apiUrl = `https://api.xero.com/api.xro/2.0/RepeatingInvoices/${repeatingInvoiceID}`;

  const headers = {
    Authorization: `Bearer ${access_token}`,
    "Content-Type": "application/json",
  };

  const deleteData = {
    Status: "DELETED",
  };

  try {
    const response = await fetch(apiUrl, {
      method: "POST",
      headers: headers,
      body: JSON.stringify(deleteData),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error deleting repeating invoice:", error);
    throw error;
  }
};

export const XeroGetTaxRates = async (props: any) => {
  const { access_token } = props;

  const apiUrl = "https://api.xero.com/api.xro/2.0/TaxRates";

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
    console.error("Error fetching TaxRates:", error);
    throw error;
  }
};

export const XeroCreateTaxRate = async (props: any) => {
  const { access_token, taxRateData } = props;

  const apiUrl = "https://api.xero.com/api.xro/2.0/TaxRates";

  const headers = {
    Authorization: `Bearer ${access_token}`,
    "Content-Type": "application/json",
  };

  try {
    const response = await fetch(apiUrl, {
      method: "POST",
      headers: headers,
      body: JSON.stringify(taxRateData),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error creating TaxRate:", error);
    throw error;
  }
};

export const XeroUpdateTaxRate = async (props: any) => {
  const { access_token, taxRateData } = props;

  const apiUrl = "https://api.xero.com/api.xro/2.0/TaxRates";

  const headers = {
    Authorization: `Bearer ${access_token}`,
    "Content-Type": "application/json",
  };

  try {
    const response = await fetch(apiUrl, {
      method: "PUT",
      headers: headers,
      body: JSON.stringify(taxRateData),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error updating TaxRate:", error);
    throw error;
  }
};

export const XeroGetTrackingCategories = async (props: any) => {
  const { access_token } = props;
  const apiUrl = "https://api.xero.com/api.xro/2.0/TrackingCategories";
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
    console.error("Error fetching tracking categories:", error);
    throw error;
  }
};

export const XeroCreateTrackingCategory = async (props: any) => {
  const { access_token, trackingCategoryData } = props;
  const apiUrl = "https://api.xero.com/api.xro/2.0/TrackingCategories";
  const headers = {
    Authorization: `Bearer ${access_token}`,
    "Content-Type": "application/json",
  };

  try {
    const response = await fetch(apiUrl, {
      method: "PUT",
      headers: headers,
      body: JSON.stringify(trackingCategoryData),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error creating tracking category:", error);
    throw error;
  }
};

export const XeroUpdateTrackingCategory = async (props: any) => {
  const { access_token, trackingCategoryID, updatedData } = props;
  const apiUrl = `https://api.xero.com/api.xro/2.0/TrackingCategories/${trackingCategoryID}`;
  const headers = {
    Authorization: `Bearer ${access_token}`,
    "Content-Type": "application/json",
  };

  try {
    const response = await fetch(apiUrl, {
      method: "POST",
      headers: headers,
      body: JSON.stringify(updatedData),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error updating tracking category:", error);
    throw error;
  }
};

export const XeroDeleteTrackingCategory = async (props: any) => {
  const { access_token, trackingCategoryID } = props;
  const apiUrl = `https://api.xero.com/api.xro/2.0/TrackingCategories/${trackingCategoryID}`;
  const headers = {
    Authorization: `Bearer ${access_token}`,
  };

  try {
    const response = await fetch(apiUrl, {
      method: "DELETE",
      headers: headers,
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    return "Tracking category deleted successfully";
  } catch (error) {
    console.error("Error deleting tracking category:", error);
    throw error;
  }
};

export const XeroGetUsers = async (props: any) => {
  const { access_token, UserID, ModifiedAfter, where, order } = props;

  // Construct the URL with optional parameters
  let apiUrl = "https://api.xero.com/api.xro/2.0/Users";
  if (UserID) {
    apiUrl += `/${UserID}`;
  }

  // Construct the query parameters
  const queryParams = new URLSearchParams();
  if (ModifiedAfter) {
    queryParams.append("ModifiedAfter", ModifiedAfter);
  }
  if (where) {
    queryParams.append("where", where);
  }
  if (order) {
    queryParams.append("order", order);
  }

  // Append query parameters to the URL
  if (queryParams.toString() !== "") {
    apiUrl += `?${queryParams.toString()}`;
  }

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
    console.error("Error fetching users:", error);
    throw error;
  }
};

export const XeroCreateUser = async (props: any) => {
  const { access_token, userData } = props;

  const apiUrl = "https://api.xero.com/api.xro/2.0/Users";

  const headers = {
    Authorization: `Bearer ${access_token}`,
    "Content-Type": "application/json",
  };

  try {
    const response = await fetch(apiUrl, {
      method: "POST", // You may need to adjust this if the API provides a different method
      headers: headers,
      body: JSON.stringify(userData),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error creating user:", error);
    throw error;
  }
};
