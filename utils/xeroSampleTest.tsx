import { View, Pressable, Text } from "react-native";
import { accessToken } from "./xero";
import {
  XeroGetAccounts,
  XeroGetAccount,
  XeroCreateAccount,
  XeroUpdateAccount,
  XeroArchiveAccount,
  XeroDeleteAccount,
  XeroGetAttachments,
  XeroGetAttachmentContent,
  XeroUploadAttachment,
  XeroGetBankTransactions,
  XeroCreateOrUpdateBankTransaction,
  XeroDeleteBankTransaction,
  XeroUploadAttachmentToBankTransaction,
  XeroGetBankTransfers,
  XeroCreateBankTransfer,
  XeroGetBatchPayments,
  XeroCreateBatchPayment,
  XeroDeleteBatchPayment,
  XeroGetBrandingThemes,
  XeroGetBrandingTheme,
  XeroGetBudgets,
  XeroGetBudget,
  XeroGetContactGroups,
  XeroCreateContactGroup,
  XeroUpdateContactGroup,
  XeroDeleteContactGroup,
  XeroGetContacts,
  XeroCreateOrUpdateContact,
  XeroArchiveContact,
  XeroGetCreditNotes,
  XeroCreateCreditNote,
  XeroUpdateCreditNote,
  XeroDeleteCreditNote,
  XeroGetCurrencies,
  XeroAddCurrencies,
  XeroGetEmployees,
  XeroCreateEmployees,
  XeroUpdateEmployees,
  XeroDeleteEmployees,
  XeroGetHistory,
  XeroAddNote,
  XeroGetInvoiceRemindersSettings,
  XeroGetInvoices,
  XeroCreateInvoice,
  XeroCreateOrUpdateInvoice,
  XeroEmailInvoice,
  XeroGetItems,
  XeroCreateItem,
  XeroUpdateItem,
  XeroDeleteItem,
  XeroGetJournals,
  XeroGetJournal,
  XeroGetLinkedTransactions,
  XeroGetManualJournals,
  XeroCreateOrUpdateManualJournal,
  XeroGetOrganisation,
  XeroGetOrganisationActions,
  XeroGetOverpayments,
  XeroAllocateOverpayment,
  XeroGetOverpaymentHistory,
  XeroAddNoteToOverpayment,
  XeroDeleteOverpaymentAllocation,
  XeroGetPaymentServices2,
  XeroCreatePaymentService,
  XeroGetPayments,
  XeroCreatePayment,
  XeroDeletePayment,
  XeroGetPrepayments,
  XeroCreatePrepayment,
  XeroDeletePrepayment,
  XeroGetPurchaseOrders,
  XeroCreatePurchaseOrder,
  XeroUpdatePurchaseOrder,
  XeroDeletePurchaseOrder,
  XeroGetQuotes,
  XeroCreateQuote,
  XeroUpdateQuote,
  XeroGetRepeatingInvoices,
  XeroCreateRepeatingInvoice,
  XeroDeleteRepeatingInvoice,
  XeroGetTaxRates,
  XeroCreateTaxRate,
  XeroUpdateTaxRate,
  XeroGetTrackingCategories,
  XeroCreateTrackingCategory,
  XeroUpdateTrackingCategory,
  XeroDeleteTrackingCategory,
  XeroGetUsers,
  XeroCreateUser,
} from "./xeroAccountingAPI";

export const XeroTestAccountFunctions = () => {
  const xeroFunctions = [
    {
      name: "Get Accounts",
      func: XeroGetAccounts,
      props: {
        access_token: accessToken, // Replace with your actual access token
      },
    },
    {
      name: "Get Account by ID",
      func: XeroGetAccount,
      props: {
        access_token: accessToken, // Replace with your actual access token
        accountID: "9ee28149-32a9-4661-8eab-a28738696983", // Replace with the actual account ID
      },
    },
    {
      name: "Create Account",
      func: XeroCreateAccount,
      props: {
        access_token: accessToken, // Replace with your actual access token
        accountData: {
          // Replace with the account data you want to create
          Code: "201",
          Name: "Sales - clearance lines",
          Type: "SALES",
        },
      },
    },
    {
      name: "Update Account",
      func: XeroUpdateAccount,
      props: {
        access_token: accessToken, // Replace with your actual access token
        accountID: "87161656-5d2e-4834-8f54-2499666bda67", // Replace with the actual account ID
        updatedData: {
          // Replace with the updated account data
          Code: "304",
          Name: "Clearing - EFTPOS",
          Type: "CURRENT",
        },
      },
    },
    {
      name: "Archive Account",
      func: XeroArchiveAccount,
      props: {
        access_token: accessToken, // Replace with your actual access token
        accountID: "87161656-5d2e-4834-8f54-2499666bda67", // Replace with the actual account ID
      },
    },
    {
      name: "Delete Account",
      func: XeroDeleteAccount,
      props: {
        access_token: accessToken, // Replace with your actual access token
        accountID: "87161656-5d2e-4834-8f54-2499666bda67", // Replace with the actual account ID
      },
    },
    {
      name: "Get Attachments",
      func: XeroGetAttachments,
      props: {
        access_token: accessToken, // Replace with your actual access token
        endpoint: "invoices", // Replace with the appropriate endpoint
        documentGuid: "document_guid_here", // Replace with the actual document GUID
      },
    },
    {
      name: "Get Attachment Content",
      func: XeroGetAttachmentContent,
      props: {
        access_token: accessToken, // Replace with your actual access token
        endpoint: "invoices", // Replace with the appropriate endpoint
        documentGuid: "document_guid_here", // Replace with the actual document GUID
        filename: "attachment_filename_here", // Replace with the actual attachment filename
      },
    },
    {
      name: "Upload Attachment",
      func: XeroUploadAttachment,
      props: {
        access_token: accessToken, // Replace with your actual access token
        endpoint: "invoices", // Replace with the appropriate endpoint
        documentGuid: "document_guid_here", // Replace with the actual document GUID
        filename: "attachment_filename_here", // Replace with the actual attachment filename
        attachmentData: "raw_attachment_data_here", // Replace with the actual attachment data
      },
    },
    // Functions for managing bank transactions
    {
      name: "Get Bank Transactions",
      func: XeroGetBankTransactions,
      props: {
        access_token: accessToken, // Replace with your actual access token
        filter: "filter_parameters_here", // Replace with filter parameters if needed
      },
    },
    {
      name: "Create or Update Bank Transaction",
      func: XeroCreateOrUpdateBankTransaction,
      props: {
        access_token: accessToken, // Replace with your actual access token
        bankTransactionData: {
          // Replace with the bank transaction data you want to create or update
        },
      },
    },
    {
      name: "Delete Bank Transaction",
      func: XeroDeleteBankTransaction,
      props: {
        access_token: accessToken, // Replace with your actual access token
        bankTransactionID: "bank_transaction_id_here", // Replace with the actual bank transaction ID
      },
    },
    {
      name: "Upload Attachment to Bank Transaction",
      func: XeroUploadAttachmentToBankTransaction,
      props: {
        access_token: accessToken, // Replace with your actual access token
        bankTransactionID: "bank_transaction_id_here", // Replace with the actual bank transaction ID
        filename: "attachment_filename_here", // Replace with the actual attachment filename
        attachmentData: "raw_attachment_data_here", // Replace with the actual attachment data
      },
    },
    // Functions for managing bank transfers
    {
      name: "Get Bank Transfers",
      func: XeroGetBankTransfers,
      props: {
        access_token: accessToken, // Replace with your actual access token
      },
    },
    {
      name: "Create Bank Transfer",
      func: XeroCreateBankTransfer,
      props: {
        access_token: accessToken, // Replace with your actual access token
        bankTransferData: {
          // Replace with the bank transfer data you want to create
        },
      },
    },
    {
      name: "Get Batch Payments",
      func: XeroGetBatchPayments,
      props: {
        access_token: accessToken, // Replace with your actual access token
      },
    },
    {
      name: "Create Batch Payment",
      func: XeroCreateBatchPayment,
      props: {
        access_token: accessToken, // Replace with your actual access token
        batchPaymentData: {
          // Replace with the batch payment data you want to create
          // (e.g., batch payment details)
        },
      },
    },
    {
      name: "Delete Batch Payment",
      func: XeroDeleteBatchPayment,
      props: {
        access_token: accessToken, // Replace with your actual access token
        batchPaymentID: "batchPaymentID", // Replace with the actual batch payment ID
        status: "DELETED",
      },
    },
    {
      name: "Get Branding Themes",
      func: XeroGetBrandingThemes,
      props: {
        access_token: accessToken, // Replace with your actual access token
      },
    },
    {
      name: "Get Branding Theme by ID",
      func: XeroGetBrandingTheme,
      props: {
        access_token: accessToken, // Replace with your actual access token
        BrandingThemeID: "BrandingThemeID", // Replace with the actual Branding Theme ID
      },
    },
    {
      name: "Get Budgets",
      func: XeroGetBudgets,
      props: {
        access_token: accessToken, // Replace with your actual access token
      },
    },
    {
      name: "Get Budget by ID",
      func: XeroGetBudget,
      props: {
        access_token: accessToken, // Replace with your actual access token
        budgetID: "budgetID", // Replace with the actual budget ID
      },
    },
    {
      name: "Get Contact Groups",
      func: XeroGetContactGroups,
      props: {
        access_token: accessToken, // Replace with your actual access token
      },
    },
    {
      name: "Create Contact Group",
      func: XeroCreateContactGroup,
      props: {
        access_token: accessToken, // Replace with your actual access token
        Name: "ContactGroupName", // Replace with the desired contact group name
      },
    },
    {
      name: "Update Contact Group",
      func: XeroUpdateContactGroup,
      props: {
        access_token: accessToken, // Replace with your actual access token
        ContactGroupID: "ContactGroupID", // Replace with the actual Contact Group ID
        Name: "UpdatedGroupName", // Replace with the updated contact group name
      },
    },
    {
      name: "Delete Contact Group",
      func: XeroDeleteContactGroup,
      props: {
        access_token: accessToken, // Replace with your actual access token
        ContactGroupID: "ContactGroupID", // Replace with the actual Contact Group ID
        Status: "DELETED",
      },
    },
    {
      name: "Get Contacts",
      func: XeroGetContacts,
      props: {
        access_token: accessToken, // Replace with your actual access token
      },
    },
    {
      name: "Create or Update Contact",
      func: XeroCreateOrUpdateContact,
      props: {
        access_token: accessToken, // Replace with your actual access token
        contactData: {
          // Replace with the contact data you want to create or update
          // (e.g., contact details)
        },
      },
    },
    {
      name: "Archive Contact",
      func: XeroArchiveContact,
      props: {
        access_token: accessToken, // Replace with your actual access token
        contactID: "contactID", // Replace with the actual contact ID
      },
    },
    {
      name: "Get Credit Notes",
      func: XeroGetCreditNotes,
      props: {
        access_token: accessToken, // Replace with your actual access token
      },
    },
    {
      name: "Create Credit Note",
      func: XeroCreateCreditNote,
      props: {
        access_token: accessToken, // Replace with your actual access token
        creditNoteData: {
          // Replace with the credit note data you want to create
          // (e.g., credit note details)
        },
      },
    },
    {
      name: "Update Credit Note",
      func: XeroUpdateCreditNote,
      props: {
        access_token: accessToken, // Replace with your actual access token
        creditNoteID: "creditNoteID", // Replace with the actual credit note ID
        updatedData: {
          // Replace with the updated credit note data
          // (e.g., updated credit note details)
        },
      },
    },
    {
      name: "Delete Credit Note",
      func: XeroDeleteCreditNote,
      props: {
        access_token: accessToken, // Replace with your actual access token
        creditNoteID: "creditNoteID", // Replace with the actual credit note ID
      },
    },
    {
      name: "Get Currencies",
      func: XeroGetCurrencies,
      props: {
        access_token: accessToken, // Replace with your actual access token
      },
    },
    {
      name: "Add Currencies",
      func: XeroAddCurrencies,
      props: {
        access_token: accessToken, // Replace with your actual access token
        currencyData: {
          // Replace with the currency data you want to add
          Code: "USD",
          Description: "United States Dollar",
        },
      },
    },
    {
      name: "Get Employees",
      func: XeroGetEmployees,
      props: {
        access_token: accessToken, // Replace with your actual access token
      },
    },
    {
      name: "Create Employees",
      func: XeroCreateEmployees,
      props: {
        access_token: accessToken, // Replace with your actual access token
        employeesData: {
          // Replace with the employee data you want to create
          FirstName: "John",
          LastName: "Doe",
          EmailAddress: "john.doe@example.com",
        },
      },
    },
    {
      name: "Update Employees",
      func: XeroUpdateEmployees,
      props: {
        access_token: accessToken, // Replace with your actual access token
        employeesData: {
          // Replace with the updated employee data
          FirstName: "Updated John",
          LastName: "Updated Doe",
          EmailAddress: "updated.john.doe@example.com",
        },
      },
    },
    {
      name: "Delete Employees",
      func: XeroDeleteEmployees,
      props: {
        access_token: accessToken, // Replace with your actual access token
        employeeID: "employeeIdHere", // Replace with the actual employee ID
      },
    },
    {
      name: "Get History",
      func: XeroGetHistory,
      props: {
        access_token: accessToken, // Replace with your actual access token
        endpoint: "invoices", // Replace with the actual endpoint
        guid: "invoiceGuidHere", // Replace with the actual invoice GUID
      },
    },
    {
      name: "Add Note",
      func: XeroAddNote,
      props: {
        access_token: accessToken, // Replace with your actual access token
        endpoint: "invoices", // Replace with the actual endpoint
        guid: "invoiceGuidHere", // Replace with the actual invoice GUID
        noteDetails: "This is a test note.", // Replace with the note details
      },
    },
    {
      name: "Get Invoice Reminders Settings",
      func: XeroGetInvoiceRemindersSettings,
      props: {
        access_token: accessToken, // Replace with your actual access token
      },
    },
    {
      name: "Get Invoices",
      func: XeroGetInvoices,
      props: {
        access_token: accessToken,
      },
    },
    {
      name: "Create Invoice",
      func: XeroCreateInvoice,
      props: {
        access_token: accessToken,
        invoiceData: {
          // Replace with the invoice data you want to create
          Type: "ACCREC",
          Contact: {
            ContactID: "your_contact_id",
          },
          Date: "2023-10-12",
          DueDate: "2023-10-19",
          LineAmountTypes: "Inclusive",
          LineItems: [
            {
              Description: "Sample item",
              Quantity: 1,
              UnitAmount: 100.0,
              AccountCode: "200",
            },
          ],
        },
      },
    },
    {
      name: "Create or Update Invoice",
      func: XeroCreateOrUpdateInvoice,
      props: {
        access_token: accessToken,
        invoiceData: {
          // Replace with the invoice data you want to create or update
          Type: "ACCREC",
          Contact: {
            ContactID: "your_contact_id",
          },
          Date: "2023-10-12",
          DueDate: "2023-10-19",
          LineAmountTypes: "Inclusive",
          LineItems: [
            {
              Description: "Sample item",
              Quantity: 1,
              UnitAmount: 100.0,
              AccountCode: "200",
            },
          ],
        },
      },
    },
    {
      name: "Email Invoice",
      func: XeroEmailInvoice,
      props: {
        access_token: accessToken,
        invoiceId: "your_invoice_id",
      },
    },
    {
      name: "Get Items",
      func: XeroGetItems,
      props: {
        access_token: accessToken,
      },
    },
    {
      name: "Create Item",
      func: XeroCreateItem,
      props: {
        access_token: accessToken,
        itemData: {
          // Replace with the item data you want to create
          Code: "ITEM001",
          Name: "Sample Item",
          Description: "A sample item for testing",
          PurchaseDetails: {
            UnitPrice: 50.0,
            TaxType: "NONE",
          },
          SalesDetails: {
            UnitPrice: 100.0,
            AccountCode: "200",
            TaxType: "OUTPUT2",
          },
        },
      },
    },
    {
      name: "Update Item",
      func: XeroUpdateItem,
      props: {
        access_token: accessToken,
        itemID: "your_item_id",
        updatedData: {
          // Replace with the updated item data
          Name: "Updated Item Name",
          Description: "Updated description",
        },
      },
    },
    {
      name: "Delete Item",
      func: XeroDeleteItem,
      props: {
        access_token: accessToken,
        itemID: "your_item_id",
      },
    },
    {
      name: "Get Journals",
      func: XeroGetJournals,
      props: {
        access_token: accessToken,
      },
    },
    {
      name: "Get Journal by ID",
      func: XeroGetJournal,
      props: {
        access_token: accessToken,
        journalID: "your_journal_id",
      },
    },
    {
      name: "Get Linked Transactions",
      func: XeroGetLinkedTransactions,
      props: {
        access_token: accessToken,
        LinkedTransactionID: "your_linked_transaction_id",
      },
    },
    // Add other functions for linked transactions
    {
      name: "Get Manual Journals",
      func: XeroGetManualJournals,
      props: {
        access_token: accessToken,
        parameters: {
          // Add optional query parameters if needed
          DateTo: "2023-10-11",
          Status: "POSTED",
        },
      },
    },
    {
      name: "Create or Update Manual Journal",
      func: XeroCreateOrUpdateManualJournal,
      props: {
        access_token: accessToken,
        manualJournalData: {
          // Replace with the manual journal data you want to create or update
          Date: "2023-10-12",
          Narration: "Testing manual journal",
          JournalLines: [
            {
              LineAmount: 100.0,
              AccountCode: "200",
            },
          ],
        },
      },
    },
    {
      name: "Get Organisation",
      func: XeroGetOrganisation,
      props: {
        access_token: accessToken,
      },
    },
    {
      name: "Get Organisation Actions",
      func: XeroGetOrganisationActions,
      props: {
        access_token: accessToken,
      },
    },
    {
      name: "Get Overpayments",
      func: XeroGetOverpayments,
      props: {
        access_token: accessToken,
      },
    },
    {
      name: "Allocate Overpayment",
      func: XeroAllocateOverpayment,
      props: {
        access_token: accessToken,
        overpaymentID: "your_overpayment_id",
        allocations: {
          Amount: 50.0,
          InvoiceID: "your_invoice_id",
        },
      },
    },
    {
      name: "Get Overpayment History",
      func: XeroGetOverpaymentHistory,
      props: {
        access_token: accessToken,
        overpaymentID: "your_overpayment_id",
      },
    },
    {
      name: "Add Note to Overpayment",
      func: XeroAddNoteToOverpayment,
      props: {
        access_token: accessToken,
        overpaymentID: "your_overpayment_id",
        note: "This is a test note.",
      },
    },
    {
      name: "Delete Overpayment Allocation",
      func: XeroDeleteOverpaymentAllocation,
      props: {
        access_token: accessToken,
        overpaymentID: "your_overpayment_id",
        allocationID: "your_allocation_id",
      },
    },
    {
      name: "Get Payment Services",
      func: XeroGetPaymentServices2,
      props: {
        access_token: accessToken, // Replace with your actual access token
      },
    },
    {
      name: "Create Payment Service",
      func: XeroCreatePaymentService,
      props: {
        access_token: accessToken, // Replace with your actual access token
        paymentServiceData: {
          PaymentServiceName: "Awesome Pay",
          PaymentServiceUrl:
            "https://www.awesomepay.com/?invoiceNo=[INVOICENUMBER]&currency=[CURRENCY]&amount=[AMOUNTDUE]&shortCode=[SHORTCODE]",
          PayNowText: "Pay via AwesomePay",
        },
      },
    },
    {
      name: "Get Payments",
      func: XeroGetPayments,
      props: {
        access_token: accessToken, // Replace with your actual access token
      },
    },
    {
      name: "Create Payment",
      func: XeroCreatePayment,
      props: {
        access_token: accessToken, // Replace with your actual access token
        paymentData: {
          // Replace with payment data you want to create
        },
      },
    },
    {
      name: "Delete Payment",
      func: XeroDeletePayment,
      props: {
        access_token: accessToken, // Replace with your actual access token
        paymentID: "paymentID_to_delete", // Replace with the actual payment ID
      },
    },
    {
      name: "Get Prepayments",
      func: XeroGetPrepayments,
      props: {
        access_token: accessToken, // Replace with your actual access token
      },
    },
    {
      name: "Create Prepayment",
      func: XeroCreatePrepayment,
      props: {
        access_token: accessToken, // Replace with your actual access token
        prepaymentData: {
          // Replace with prepayment data you want to create
        },
      },
    },
    {
      name: "Delete Prepayment",
      func: XeroDeletePrepayment,
      props: {
        access_token: accessToken, // Replace with your actual access token
        prepaymentID: "prepaymentID_to_delete", // Replace with the actual prepayment ID
      },
    },
    {
      name: "Get Purchase Orders",
      func: XeroGetPurchaseOrders,
      props: {
        access_token: accessToken, // Replace with your actual access token
      },
    },
    {
      name: "Create Purchase Order",
      func: XeroCreatePurchaseOrder,
      props: {
        access_token: accessToken, // Replace with your actual access token
        purchaseOrderData: {
          // Replace with purchase order data you want to create
        },
      },
    },
    {
      name: "Update Purchase Order",
      func: XeroUpdatePurchaseOrder,
      props: {
        access_token: accessToken, // Replace with your actual access token
        purchaseOrderID: "purchaseOrderID_to_update", // Replace with the actual purchase order ID
        updatedData: {
          // Replace with updated purchase order data
        },
      },
    },
    {
      name: "Delete Purchase Order",
      func: XeroDeletePurchaseOrder,
      props: {
        access_token: accessToken, // Replace with your actual access token
        purchaseOrderID: "purchaseOrderID_to_delete", // Replace with the actual purchase order ID
      },
    },
    {
      name: "Get Quotes",
      func: XeroGetQuotes,
      props: {
        access_token: accessToken, // Replace with your actual access token
      },
    },
    {
      name: "Create Quote",
      func: XeroCreateQuote,
      props: {
        access_token: accessToken, // Replace with your actual access token
        quoteData: {
          // Replace with quote data you want to create
        },
      },
    },
    {
      name: "Update Quote",
      func: XeroUpdateQuote,
      props: {
        access_token: accessToken, // Replace with your actual access token
        quoteData: {
          // If updating an existing quote, provide the QuoteID in the quoteData
        },
      },
    },
    {
      name: "Get Repeating Invoices",
      func: XeroGetRepeatingInvoices,
      props: {
        access_token: accessToken,
      },
    },
    {
      name: "Create Repeating Invoice",
      func: XeroCreateRepeatingInvoice,
      props: {
        access_token: accessToken,
        repeatingInvoiceData: {
          // Replace with the repeating invoice data you want to create
          // Example data structure:
          Name: "Monthly Rent Invoice",
          Schedule: "MONTHLY",
          Type: "ACCREC",
          Status: "DRAFT",
          // ...otherRepeatingInvoiceFields,
        },
      },
    },
    {
      name: "Delete Repeating Invoice",
      func: XeroDeleteRepeatingInvoice,
      props: {
        access_token: accessToken,
        repeatingInvoiceID: "your_repeating_invoice_id", // Replace with the actual repeating invoice ID
      },
    },
    {
      name: "Get Tax Rates",
      func: XeroGetTaxRates,
      props: {
        access_token: accessToken,
      },
    },
    {
      name: "Create Tax Rate",
      func: XeroCreateTaxRate,
      props: {
        access_token: accessToken,
        taxRateData: {
          // Replace with the tax rate data you want to create
          // Example data structure:
          Name: "GST",
          TaxType: "OUTPUT",
          DisplayTaxRate: 10.0,
          // ...otherTaxRateFields,
        },
      },
    },
    {
      name: "Update Tax Rate",
      func: XeroUpdateTaxRate,
      props: {
        access_token: accessToken,
        taxRateData: {
          // Replace with the updated tax rate data
          Name: "GST (Updated)",
          // ...otherUpdatedTaxRateFields,
        },
      },
    },
    {
      name: "Get Tracking Categories",
      func: XeroGetTrackingCategories,
      props: {
        access_token: accessToken,
      },
    },
    {
      name: "Create Tracking Category",
      func: XeroCreateTrackingCategory,
      props: {
        access_token: accessToken,
        trackingCategoryData: {
          // Replace with the tracking category data you want to create
          // Example data structure:
          Name: "Department",
          // ...otherTrackingCategoryFields,
        },
      },
    },
    {
      name: "Update Tracking Category",
      func: XeroUpdateTrackingCategory,
      props: {
        access_token: accessToken,
        trackingCategoryID: "your_tracking_category_id", // Replace with the actual tracking category ID
        updatedData: {
          // Replace with the updated tracking category data
          Name: "Department (Updated)",
          // ...otherUpdatedTrackingCategoryFields,
        },
      },
    },
    {
      name: "Delete Tracking Category",
      func: XeroDeleteTrackingCategory,
      props: {
        access_token: accessToken,
        trackingCategoryID: "your_tracking_category_id", // Replace with the actual tracking category ID
      },
    },
    {
      name: "Get Users",
      func: XeroGetUsers,
      props: {
        access_token: accessToken,
        // Add optional parameters if needed
        // UserID: "user_id",
        // ModifiedAfter: "timestamp",
        // where: "filter",
        // order: "order",
      },
    },
    {
      name: "Create User",
      func: XeroCreateUser,
      props: {
        access_token: accessToken,
        userData: {
          // Replace with the user data you want to create
          // Example data structure:
          FirstName: "John",
          LastName: "Doe",
          EmailAddress: "johndoe@example.com",
          // ...otherUserDataFields,
        },
      },
    },
  ];

  const executeXeroFunction = async (func: Function, props: any) => {
    try {
      const data = await func(props);
      console.log(JSON.stringify(data, null, 2));
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View>
      {xeroFunctions.map((funcInfo, index) => (
        <Pressable
          key={index}
          onPress={() => executeXeroFunction(funcInfo.func, funcInfo.props)}
          style={{
            backgroundColor: "#007AFF",
            padding: 10,
            margin: 10,
            borderRadius: 5,
          }}
        >
          <Text style={{ color: "#FFF" }}>{funcInfo.name}</Text>
        </Pressable>
      ))}
    </View>
  );
};
