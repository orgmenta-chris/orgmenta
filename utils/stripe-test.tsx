
let StripeProvider: any;

if (Platform.OS !== 'web') {
  StripeProvider = require('@stripe/stripe-react-native').StripeProvider;
}

import { Platform } from "react-native";

export const ViewStripeWrappermobile = ({ publishableKey, children }:any) => {
  console.log('StripeProvider',StripeProvider)
  return (
    <StripeProvider publishableKey={publishableKey}>{children}</StripeProvider>
  );
};

export const ViewStripeWrapperweb = ({ children }:any) => {
  return (
    <>
      {/* (Use some other wrapper here that works on web) */}
      {children}
    </>
  );
};

export const ViewStripeWrappermain = Platform.OS === 'web' ? ViewStripeWrapperweb : ViewStripeWrappermobile

// Terms:
// clients, suppliers, customers
// Examples: client = 'MelbourneIT', supplier='Microsoft', customer='JoesPlumbingCompany'
// bills (client owes supplier) & invoices (customer owes client)
// creditors (supplier), debtors (customers)

// Billing types
// - Advance (1st oct for services rendered in month of october)
// - Arrears (1st oct for services rendered in month of september)
// - Usage based billing (e.g. Azure resources, Google ads )

export const arrayStripeFeatures = [
  // Loisa: Please take any mentioned webhooks with a pinch of salt - Both I and ChatGPT are ignorant :)
  {
    feature: "OrgmentaStripeTable - OrgmentaEntitiesTables sync (ON HOLD? else Chris needs to draft entity-relationship object asap)",
    priority: 1,
    userStory: "Sync between stripe tables and entity 'Items' (and related relationships)",
    workflow: ["todo"]
  },
  {
    feature: "Connect Stripe Account (Orgmenta)",
    whosStripeAccount: 'Orgmenta',
    priority: 1,
    userStory: "As Orgmenta, we need to connect our Stripe account to accept payments.",
    workflow: ["(ONE OFF)"]
  },
  {
    feature: "Client subscribes to orgmenta / changes subscription plan",
    whosStripeAccount: 'Orgmenta',
    priority: 1,
    userStory: "As a client, I want to subscribe to a service or change my current subscription plan..",
    workflow: [
      { step: 1, action: "Frontend UI", task: "Display available subscription plans with a 'Select Plan' Pressable next to each plan."},
      { step: 2, action: "API", task: "On plan click, invoke API endpoint to initiate subscription process when a plan is selected."},
      { step: 3, action: "Backend", task: "Call `POST /v1/subscriptions` to create a new subscription or `POST /v1/subscriptions/{subscription}` to update existing one in Stripe."},
      { step: 4, action: "Stripe Webhook", task: "Listen for `customer.subscription.created` or `customer.subscription.updated` to confirm subscription change."},
      { step: 5, action: "Database", task: "Store subscription ID and other relevant details. (stripe schema tables in orgmenta supabase db"},
      { step: 6, action: "Database", task: "Sync subscription from OrgmentaStripeTable to OrgmentaEntitiesTable (ON HOLD - We will do this later on. Don't worry about this, I just need to create a corresponding 'item' entity for various reasons" },
      { step: 7, action: "Frontend UI", task: "Display confirmation message upon successful subscription or update."}
    ]
  },
  {
    feature: "Connect Stripe Account (Client)",
    whosStripeAccount: 'Client',
    priority: 2,
    userStory: "As a client, I want to connect my Stripe account to make and receive payments.",
    workflow: [
      { step: 1, action: "Frontend UI", task: "List any existing Stripe connection (Supabase Vault?) / Display 'Connect with Stripe' button. / disconnect from stripe button"},
      { step: 2, action: "API", task: "Invoke endpoint (?)"},
      { step: 3, action: "Backend", task: "Handle Stripe OAuth(?) callback to receive `authorization_code`."},
      { step: 4, action: "Backend", task: "Exchange `authorization_code` for `access_token`."},
      { step: 5, action: "Database", task: "Store client’s Stripe `access_token` and other necessary identifiers in Supabase Vault"},
      { step: 6, action: "Database", task: "Sync connection from OrgmentaStripeTable to OrgmentaEntitiesTable (ON HOLD - We will do this later on" },
      { step: 7, action: "Frontend UI", task: "Display db entries (part of the standard focus/entity/relationship queries, CG to handle)" },
    ]
  },
  {
    feature: "Client Stripe Profile View + Update including Stored Payment Methods",
    whosStripeAccount: 'Orgmenta',
    priority: 1,
    userStory: "As a client, I want to update their profile with Orgmenta's Stripe account to keep my information current. (including payment methods)",
    workflow: [
      { step: 1, action: "Frontend UI", task: "Display 'Edit Profile' button. Client clicks on the button."},
      { step: 2, action: "Frontend UI", task: "(From the orgmenta db) Render form fields and values for Stripe-related profile information."},
      { step: 3, action: "Database", task: "Update client profile with new Stripe-related information."},
      { step: 4, action: "Frontend UI", task: "Display db entries (part of the standard focus/entity/relationship queries, CG to handle)" },
      { step: 5, action: "API", task: "Sync from Orgmenta db to Stripe db: Invoke API endpoint to update Stripe customer object /Call `POST /v1/customers/{customer}` to update Stripe customer."},
    ]
  },
  {
    feature: "Client - Manage Stored Payment Methods",
    whosStripeAccount: 'Orgmenta',
    priority: 2,
    userStory: "As a client, I want to manage my stored payment methods for easier future payments.",
    workflow: [
      { step: 1, action: "Frontend UI", task: "(can leave for CG if you want) Link to 'Manage Payment Methods'. (/spaces/[spaceuuid-alias]/billing"},
      { step: 2, action: "Backend", task: "(From where? Entities table, or Stripe tables?) Fetch stored payment methods from Stripe using `GET /v1/payment_methods` filtered by customer ID.<-- or get this from the orgmenta entities table instead? (there will be items for this too - depends on real-time need"},
      { step: 3, action: "Frontend UI", task: "Display list of stored payment methods with edit button next to them. Provide button to add new payment method."},
      { step: 5, action: "Backend", task: "Create new payment method using `POST /v1/payment_methods`."},
      { step: 6, action: "Frontend UI", task: "Provide options to edit or remove existing payment methods."},
      { step: 7, action: "Backend", task: "Update payment method using `POST /v1/payment_methods/{payment_method}`."},
      { step: 8, action: "Backend", task: "Detach payment method using `POST /v1/payment_methods/{payment_method}/detach`."},
      { step: 9, action: "Database", task: "Update client's payment methods in the database (orgmenta stripe tables"},
      { step: 9, action: "Database", task: "Sync between OrgmentaStripeTables and OrgmentaEntities/SpacesTables (ON HOLD(?), will do this later"},
      { step: 10, action: "Frontend UI", task: "Refresh list of stored payment methods."}
    ]
  },
  {
    feature: "Customer Views Invoices in 'Customer Portal' (i.e. an Orgmenta screen that CG will be creating) (does not need to integrate with Stipe directly)",
    whosStripeAccount: 'Client',
    priority: 1,
    userStory: "As a customer, I want to pay an invoice so that I can settle my account.",
    workflow: [
      { step: 1, action: "Frontend UI", task: "List unpaid invoices from the client (from OrgmentaEntitiesTable - part of the standard focus/entity/relationship queries, CG to handle)"},
      { step: 2, action: "Frontend UI", task: "Display a 'Pay Invoice' button next to any unpaid invoice entries. (you can just have a placeholder Pressable for this"},
    ]
  },
  {
    feature: "Customer Pays Invoice",
    whosStripeAccount: 'Client',
    priority: 1,
    userStory: "As a customer, I want to pay an invoice so that I can settle my account.",
    workflow: [
      { step: 1, action: "Frontend UI or InvoiceEmail url", task: "'Pay invoice' button (can have a placeholder Pressable"},
      { step: 2, action: "Backend", task: "Create Stripe PaymentIntent."},
      { step: 3, action: "Frontend UI", task: "Use Stripe.js to handle payment."},
      { step: 4, action: "Backend", task: "Capture the payment."},
      { step: 5, action: "Database", task: "Update invoice status to 'Paid' and display success message to customer."},
      { step: 6, action: "Database", task: "Sync invoice from OrgmentaStripeTable to OrgmentaEntitiesTable (ON HOLD - We will do this later on" },
      { step: 7, action: "Frontend UI", task: "Display db entries (part of the standard focus/entity/relationship queries, CG to handle)" },
    ]
  },
  {
    feature: "Client Views Supplier Bills (does not need to integrate with Stipe directly)",
    whosStripeAccount: 'Client',
    priority: 1,
    userStory: "As a client, I want to see what supplier bills I have (and which have outstanding balances).",
    workflow: [
      { step: 1, action: "Frontend UI", task: "List unpaid bills from the supplier (from OrgmentaEntitiesTable - part of the standard focus/entity/relationship queries, CG to handle)"},
      { step: 2, action: "Frontend UI", task: "Display a 'Pay Bill' button next to any unpaid bill entries. (you can just have a placeholder Pressable for this"},
    ]
  },
  {
    feature: "Client Pays Suppliers",
    whosStripeAccount: 'Client',
    priority: 3,
    userStory: "As a client, I want to pay my suppliers so that I can maintain a healthy business relationship.",
    workflow: [
      { step: 1, action: "Frontend UI", task: "List unpaid bills from suppliers (from OrgmentaEntitiesTable - part of the standard focus/entity/relationship queries, CG to handle)"},
      { step: 2, action: "Backend", task: "Create Stripe PaymentIntent for selected invoice."},
      { step: 3, action: "Frontend UI", task: "Use Stripe.js to handle payment."},
      { step: 4, action: "Backend", task: "Capture the payment."},
      { step: 5, action: "Database", task: "Update bill status to 'Paid'."},
      { step: 6, action: "Backend", task: "Initiate transfer to supplier’s Stripe account."},
      { step: 7, action: "Database", task: "Sync bill from OrgmentaStripeTable to OrgmentaEntitiesTable (ON HOLD - We will do this later on" },
      { step: 8, action: "Frontend UI", task: "Display db entries (part of the standard focus/entity/relationship queries, CG to handle)" },
    ]
  },
  {
    feature: "Dispute Handling",
    status: 'HOLD',
    whosStripeAccount: 'Client',
    priority: 4,
    userStory: "As a business, I want to handle disputes efficiently to maintain customer relationships and comply with regulations.",
    workflow: [
      { step: 1, action: "Backend", task: "Set webhook for `charge.dispute.created`."},
      { step: 2, action: "Backend", task: "Fetch dispute details."},
      { step: 3, action: "Database", task: "Record dispute in the database."},
      { step: 4, action: "Backend", task: "Submit evidence if applicable." }
    ]
  },
  {
    feature: "Chargebacks FROM CUSOTMERS",
    whosStripeAccount: 'Client',
    status: 'HOLD',
    priority: 4,
    userStory: "As a client, I want to manage customer chargebacks on invoices to minimize losses.",
    workflow: [
      { step: 1, action: "Backend", task: "Set webhook for `charge.dispute.created`."},
      { step: 2, action: "Backend", task: "Fetch chargeback details."},
      { step: 3, action: "Database", task: "Record chargeback in the database."},
      { step: 4, action: "Frontend UI", task: "Display db entries (part of the standard focus/entity/relationship queries, CG to handle)" },
      { step: 5, action: "Backend", task: "Future feature: allow client to submit evidence if applicable." }
    ]
  },
  {
    feature: "Chargebacks TO SUPPLIERS",
    whosStripeAccount: 'Client',
    status: 'HOLD',
    priority: 4,
    userStory: "As a client, I want to invoke supplier chargebacks on bills to stop incorrect/unfair charges.",
    workflow: []
  },
  {
    feature: "Discounts, Coupons",
    whosStripeAccount: 'Client',
    status: 'HOLD',
    priority: 4,
  }
];


// Future features:
// Metered Billing: Pay-as-you-go billing based on consumption.
// Payment Scheduling: Setting up future payments.
// Tax Rate Calculation: Automated tax calculation during payment process.
// CUSTOMERS Saving Payment Methods: Saving a card or other payment method for future use. (and view them in their customer portal)
// Stripe Radar: Anti-fraud checks and risk evaluation.
// Credit Ratings syncing
// ACH (USA payment method via bank transfer)
// {
//   feature: "ACH Payments",
//   userStory: "As a client, I want to pay via ACH to lower transaction fees.",
//   workflow: [
//     { step: 1, action: "Frontend UI", task: "Display ACH payment option."},
//     { step: 2, action: "Backend", task: "Create Stripe Source object for ACH."},
//     { step: 3, action: "Frontend UI", task: "Verify bank account."},
//     { step: 4, action: "Backend", task: "Finalize ACH payment." },
//     { step: 5, action: "Database", task: "Record payment status."}
//   ]
// },

// Stripe resources
// Stripe API Documentation: https://stripe.com/docs/api
// Stripe Coupons and Discounts: https://stripe.com/docs/billing/subscriptions/discounts
// Stripe Tax Rates: https://stripe.com/docs/billing/taxes/tax-rates
// Stripe Saved Payment Methods: https://stripe.com/docs/payments/save-during-payment
// Stripe Metered Billing: https://stripe.com/docs/billing/subscriptions/metered-billing
// Stripe Radar: https://stripe.com/docs/radar
// Stripe Scheduling Payments: https://stripe.com/docs/billing/subscriptions/payment