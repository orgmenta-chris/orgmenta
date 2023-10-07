import { requestVaultItem } from "./vault";
import { UtilityPlatformMain } from "./platform";
import { instanceSupabaseClient as client } from "./supabase";
import { Pressable, View, Text } from "react-native";
// import Stripe from "stripe";
import {
  STAGING_STRIPE_SECRET_KEY,
  STAGING_STRIPE_PUBLISHABLE_KEY,
} from "@env";

let publishableKey: any;
let secretKey: any;

if (__DEV__) {
  publishableKey = `${STAGING_STRIPE_PUBLISHABLE_KEY}`;
  secretKey = `${STAGING_STRIPE_SECRET_KEY}`;
} else {
  publishableKey = requestVaultItem("PRODUCTION_STRIPE_PUBLISHABLE_KEY");
  secretKey = requestVaultItem("PRODUCTION_STRIPE_SECRET_KEY");
}

const stripeURL = "https://api.stripe.com/v1";

export const StripeGetAccounts = async () => {
  const { data, error } = await client.rpc("get_accounts");

  if (error) console.error(error);
  else return data;
};

export const StripeGetBalance = async () => {
  const { data, error } = await client.rpc("get_balance");

  if (error) console.error(error);
  else return data;
};

export const StripeGetBalanceTransactions = async () => {
  const { data, error } = await client.rpc("get_balance_transactions");

  if (error) console.error(error);
  else return data;
};

export const StripeGetCharges = async () => {
  const { data, error } = await client.rpc("get_charges");

  if (error) console.error(error);
  else return data;
};

export const StripeGetCheckoutSessions = async () => {
  const { data, error } = await client.rpc("get_checkout_sessions");

  if (error) console.error(error);
  else return data;
};

export const StripeGetCustomers = async () => {
  const { data, error } = await client.rpc("get_customers");

  if (error) console.error(error);
  else return data;
};

export const StripeGetDisputes = async () => {
  const { data, error } = await client.rpc("get_disputes");

  if (error) console.error(error);
  else return data;
};

export const StripeGetEvents = async () => {
  const { data, error } = await client.rpc("get_events");

  if (error) console.error(error);
  else return data;
};

export const StripeGetFileLinks = async () => {
  const { data, error } = await client.rpc("get_file_links");

  if (error) console.error(error);
  else return data;
};

export const StripeGetFiles = async () => {
  const { data, error } = await client.rpc("get_files");

  if (error) console.error(error);
  else return data;
};

export const StripeGetInvoices = async () => {
  const { data, error } = await client.rpc("get_invoices");

  if (error) console.error(error);
  else return data;
};

export const StripeGetMandates = async () => {
  const { data, error } = await client.rpc("get_mandates");

  if (error) console.error(error);
  else return data;
};

export const StripeGetPaymentIntents = async () => {
  const { data, error } = await client.rpc("get_payment_intents");

  if (error) console.error(error);
  else return data;
};

export const StripeGetPayouts = async () => {
  const { data, error } = await client.rpc("get_payouts");

  if (error) console.error(error);
  else return data;
};

export const StripeGetPrices = async () => {
  const { data, error } = await client.rpc("get_prices");

  if (error) console.error(error);
  else return data;
};

export const StripeGetProducts = async () => {
  const { data, error } = await client.rpc("get_products");

  if (error) console.error(error);
  else return data;
};

export const StripeGetRefunds = async () => {
  const { data, error } = await client.rpc("get_refunds");

  if (error) console.error(error);
  else return data;
};

export const StripeGetSetupIntents = async () => {
  const { data, error } = await client.rpc("get_setup_intents");

  if (error) console.error(error);
  else return data;
};

export const StripeGetSubscriptions = async () => {
  const { data, error } = await client.rpc("get_subscriptions");

  if (error) console.error(error);
  else return data;
};

export const StripeGetTokens = async () => {
  const { data, error } = await client.rpc("get_tokens");

  if (error) console.error(error);
  else return data;
};

export const StripeGetTopups = async () => {
  const { data, error } = await client.rpc("get_topups");

  if (error) console.error(error);
  else return data;
};

export const StripeGetTransfers = async () => {
  const { data, error } = await client.rpc("get_transfers");

  if (error) console.error(error);
  else return data;
};

// This is a test component to test the supabase-stripe db functions

export const UseStripeFunctions = ({}: any) => {
  const TestArray = [
    { name: "Get Accounts", func: StripeGetAccounts },
    { name: "Get Balance", func: StripeGetBalance },
    { name: "Get Balance Transactions", func: StripeGetBalanceTransactions },
    { name: "Get Charges", func: StripeGetCharges },
    { name: "Get Checkout Sessions", func: StripeGetCheckoutSessions },
    { name: "Get Customers", func: StripeGetCustomers },
    { name: "Get Disputes", func: StripeGetDisputes },
    { name: "Get Events", func: StripeGetEvents },
    { name: "Get File Links", func: StripeGetFileLinks },
    { name: "Get Files", func: StripeGetFiles },
    { name: "Get Invoices", func: StripeGetInvoices },
    { name: "Get Mandates", func: StripeGetMandates },
    { name: "Get Payment Intents", func: StripeGetPaymentIntents },
    { name: "Get Payouts", func: StripeGetPayouts },
    { name: "Get Prices", func: StripeGetPrices },
    { name: "Get Products", func: StripeGetProducts },
    { name: "Get Refunds", func: StripeGetRefunds },
    { name: "Get Setup Intents", func: StripeGetSetupIntents },
    { name: "Get Subscriptions", func: StripeGetSubscriptions },
    { name: "Get Tokens", func: StripeGetTokens },
    { name: "Get Topups", func: StripeGetTopups },
    { name: "Get Transfers", func: StripeGetTransfers },
  ];

  const executeFunction = async (func: () => Promise<any>) => {
    try {
      const data = await func();
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View>
      {TestArray.map((elem, index) => {
        return (
          <Pressable
            key={index}
            onPress={() => executeFunction(elem.func)}
            style={{
              backgroundColor: "#007AFF",
              padding: 10,
              margin: 10,
              borderRadius: 5,
            }}
          >
            <Text style={{ color: "#FFF" }}>{elem.name}</Text>
          </Pressable>
        );
      })}
    </View>
  );
};

export const StripeCreatePaymentMethod = async (props: any) => {
  const { cardNumber, expMonth, expYear, cvc } = props;

  const paymentMethodData = new URLSearchParams({
    type: "card",
    "card[number]": cardNumber,
    "card[exp_month]": expMonth,
    "card[exp_year]": expYear,
    "card[cvc]": cvc,
  });

  try {
    const response = await fetch(`${stripeURL}/payment_methods`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${secretKey}`,
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: paymentMethodData.toString(),
    });

    if (response.ok) {
      const paymentMethod = await response.json();
      console.log("Payment Method created:", paymentMethod);
    } else {
      console.error("Error creating Payment Method:", response.statusText);
    }
  } catch (error) {
    console.error("An error occurred:", error);
  }
};

export const StripeCreateCustomer = async (props: any) => {
  const { description } = props;

  const customerData = new URLSearchParams({
    description: description,
  });

  try {
    const response = await fetch(`${stripeURL}/customers`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${secretKey}`,
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: customerData.toString(),
    });

    if (response.ok) {
      const customer = await response.json();
      console.log("Customer created:", customer);
    } else {
      console.error("Error creating Customer:", response.statusText);
    }
  } catch (error) {
    console.error("An error occurred:", error);
  }
};

export const StripeDeleteCustomer = async (props: any) => {
  const { customerId } = props;

  try {
    const response = await fetch(`${stripeURL}/customers/${customerId}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${secretKey}`,
      },
    });

    if (response.ok) {
      console.log("Customer deleted successfully.");
    } else {
      console.error("Error deleting Customer:", response.statusText);
    }
  } catch (error) {
    console.error("An error occurred:", error);
  }
};

export const StripeCreatePaymentIntent = async (props: any) => {
  const { amount, currency, customer, description } = props;

  // @ts-ignore
  const paymentIntentData = new URLSearchParams({
    amount,
    currency,
    customer,
    description,
    "automatic_payment_methods[enabled]": true,
  });

  try {
    const response = await fetch(`${stripeURL}/payment_intents`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${secretKey}`,
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: paymentIntentData.toString(),
    });

    if (response.ok) {
      const paymentIntent = await response.json();
      console.log("Payment Intent created:", paymentIntent);
    } else {
      console.error("Error creating Payment Intent:", response.statusText);
    }
  } catch (error) {
    console.error("An error occurred:", error);
  }
};

export const StripeConfirmPaymentIntent = async (props: any) => {
  const { paymentIntentId, paymentMethodId, recipientEmail } = props;

  const confirmPaymentData = new URLSearchParams({
    payment_method: paymentMethodId,
    receipt_email: recipientEmail,
  });

  try {
    const response = await fetch(
      `${stripeURL}/payment_intents/${paymentIntentId}/confirm`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${secretKey}`,
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: confirmPaymentData.toString(),
      }
    );

    if (response.ok) {
      const confirmedPaymentIntent = await response.json();
      console.log("Payment Intent confirmed:", confirmedPaymentIntent);
    } else {
      console.error("Error confirming Payment Intent:", response.statusText);
    }
  } catch (error) {
    console.error("An error occurred:", error);
  }
};

export const StripeCancelPaymentIntent = async (props: any) => {
  const { paymentIntentId } = props;

  try {
    const response = await fetch(
      `${stripeURL}/payment_intents/${paymentIntentId}/cancel`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${secretKey}`,
        },
      }
    );

    if (response.ok) {
      const canceledPaymentIntent = await response.json();
      console.log("Payment Intent canceled:", canceledPaymentIntent);
    } else {
      console.error("Error canceling Payment Intent:", response.statusText);
    }
  } catch (error) {
    console.error("An error occurred:", error);
  }
};

export const StripeCreateSetupIntent = async (props: any) => {
  const {
    customer,
    description,
    paymentMethod,
    automaticPaymentMethodsEnabled,
  } = props;

  // @ts-ignore
  const setupIntentData = new URLSearchParams({
    customer,
    description,
    payment_method: paymentMethod,
    "automatic_payment_methods[enabled]": false,
  });

  try {
    const response = await fetch(`${stripeURL}/setup_intents`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${secretKey}`,
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: setupIntentData.toString(),
    });

    if (response.ok) {
      const setupIntent = await response.json();
      console.log("Setup Intent created:", setupIntent);
    } else {
      console.error("Error creating Setup Intent:", response.statusText);
    }
  } catch (error) {
    console.error("An error occurred:", error);
  }
};

const StripeCreateSession = async (props: any) => {
  const {
    success_url,
    cancel_url,
    line_items,
    client_reference_id,
    mode,
    currency,
    customer,
    customer_email,
  } = props;

  const sessionData = new URLSearchParams({
    success_url,
    cancel_url,
    "line_items[0][price]": line_items.price,
    "line_items[0][quantity]": line_items.quantity,
    client_reference_id,
    mode,
    currency,
    customer,
    customer_email,
  });

  try {
    const response = await fetch(`${stripeURL}/checkout/sessions`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${secretKey}`,
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: sessionData.toString(),
    });

    if (response.ok) {
      const session = await response.json();
      console.log("Session created:", session);
    } else {
      console.error("Error creating session:", response.statusText);
    }
  } catch (error) {
    console.error("An error occurred:", error);
  }
};

const StripeExpireSession = async (props: any) => {
  const { session_id } = props;

  try {
    const response = await fetch(
      `${stripeURL}/checkout/sessions/${session_id}/expire`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${secretKey}`,
        },
      }
    );

    if (response.ok) {
      console.log("Session expired successfully.");
    } else {
      console.error("Error expiring session:", response.statusText);
    }
  } catch (error) {
    console.error("An error occurred:", error);
  }
};

const StripeCreateLink = async (props: any) => {
  const { line_items } = props;

  const linkData = new URLSearchParams({
    "line_items[0][price]": line_items.price,
    "line_items[0][quantity]": line_items.quantity,
  });

  try {
    const response = await fetch(`${stripeURL}/payment_links`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${secretKey}`,
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: linkData.toString(),
    });

    if (response.ok) {
      const link = await response.json();
      console.log("Link created:", link);
    } else {
      console.error("Error creating link:", response.statusText);
    }
  } catch (error) {
    console.error("An error occurred:", error);
  }
};

const StripeExpireLink = async (props: any) => {
  const { link_id } = props;

  try {
    const response = await fetch(`${stripeURL}/payment_links/${link_id}`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${secretKey}`,
      },
      body: "active=false",
    });

    if (response.ok) {
      console.log("Link expired successfully.");
    } else {
      console.error("Error expiring link:", response.statusText);
    }
  } catch (error) {
    console.error("An error occurred:", error);
  }
};

const StripeCreateInvoice = async (props: any) => {
  const { customer } = props;

  const invoiceData = new URLSearchParams({
    customer,
  });

  try {
    const response = await fetch(`${stripeURL}/invoices`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${secretKey}`,
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: invoiceData.toString(),
    });

    if (response.ok) {
      const invoice = await response.json();
      console.log("Invoice created:", invoice);
    } else {
      console.error("Error creating invoice:", response.statusText);
    }
  } catch (error) {
    console.error("An error occurred:", error);
  }
};

const StripeFinalizeInvoice = async (props: any) => {
  const { invoice_id } = props;

  try {
    const response = await fetch(
      `${stripeURL}/invoices/${invoice_id}/finalize`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${secretKey}`,
        },
      }
    );

    if (response.ok) {
      console.log("Invoice finalized successfully.");
    } else {
      console.error("Error finalizing invoice:", response.statusText);
    }
  } catch (error) {
    console.error("An error occurred:", error);
  }
};

const StripeCollectPayment = async (props: any) => {
  const { invoice_id } = props;

  try {
    const response = await fetch(`${stripeURL}/invoices/${invoice_id}/pay`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${secretKey}`,
      },
    });

    if (response.ok) {
      console.log("Payment collected successfully.");
    } else {
      console.error("Error collecting payment:", response.statusText);
    }
  } catch (error) {
    console.error("An error occurred:", error);
  }
};

const StripeSendInvoiceForManualPayment = async (props: any) => {
  const { invoice_id } = props;

  try {
    const response = await fetch(`${stripeURL}/invoices/${invoice_id}/send`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${secretKey}`,
      },
    });

    if (response.ok) {
      console.log("Invoice sent for manual payment successfully.");
    } else {
      console.error(
        "Error sending invoice for manual payment:",
        response.statusText
      );
    }
  } catch (error) {
    console.error("An error occurred:", error);
  }
};

const StripeVoidInvoice = async (props: any) => {
  const { invoice_id } = props;
  try {
    const response = await fetch(`${stripeURL}/invoices/${invoice_id}/void`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${secretKey}`,
      },
    });

    if (response.ok) {
      console.log("Invoice voided successfully.");
    } else {
      console.error("Error voiding invoice:", response.statusText);
    }
  } catch (error) {
    console.error("An error occurred:", error);
  }
};

const StripeCreateInvoiceItem = async (props: any) => {
  const { customer, price } = props;

  const invoiceItemData = new URLSearchParams({
    customer,
    price,
  });

  try {
    const response = await fetch(`${stripeURL}/invoiceitems`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${secretKey}`,
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: invoiceItemData.toString(),
    });

    if (response.ok) {
      const invoiceItem = await response.json();
      console.log("Invoice item created:", invoiceItem);
    } else {
      console.error("Error creating invoice item:", response.statusText);
    }
  } catch (error) {
    console.error("An error occurred:", error);
  }
};

const StripeDeleteInvoiceItem = async (props: any) => {
  const { invoiceItem_id } = props;

  try {
    const response = await fetch(
      `${stripeURL}/invoiceitems/${invoiceItem_id}`,
      {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${secretKey}`,
        },
      }
    );

    if (response.ok) {
      console.log("Invoice item deleted successfully.");
    } else {
      console.error("Error deleting invoice item:", response.statusText);
    }
  } catch (error) {
    console.error("An error occurred:", error);
  }
};

const StripeCreateSubscription = async (props: any) => {
  const { customer, items } = props;

  const subscriptionData = new URLSearchParams({
    customer,
    "items[0][price]": items[0].price,
  });

  try {
    const response = await fetch(`${stripeURL}/subscriptions`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${secretKey}`,
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: subscriptionData.toString(),
    });

    if (response.ok) {
      const subscription = await response.json();
      console.log("Subscription created:", subscription);
    } else {
      console.error("Error creating subscription:", response.statusText);
    }
  } catch (error) {
    console.error("An error occurred:", error);
  }
};

const StripeCancelSubscription = async (props: any) => {
  const { subscription_id } = props;

  try {
    const response = await fetch(
      `${stripeURL}/subscriptions/${subscription_id}`,
      {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${secretKey}`,
        },
      }
    );

    if (response.ok) {
      console.log("Subscription canceled successfully.");
    } else {
      console.error("Error canceling subscription:", response.statusText);
    }
  } catch (error) {
    console.error("An error occurred:", error);
  }
};

const StripeCreateSchedule = async (props: any) => {
  const { customer, start_date, end_behavior, phases } = props;

  const scheduleData = new URLSearchParams({
    customer,
    start_date,
    end_behavior,
    "phases[0][items][0][price]": phases[0].items[0].price,
    "phases[0][items][0][quantity]": phases[0].items[0].quantity,
    "phases[0][iterations]": phases[0].iterations,
  });

  try {
    const response = await fetch(`${stripeURL}/subscription_schedules`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${secretKey}`,
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: scheduleData.toString(),
    });

    if (response.ok) {
      const schedule = await response.json();
      console.log("Schedule created:", schedule);
    } else {
      console.error("Error creating schedule:", response.statusText);
    }
  } catch (error) {
    console.error("An error occurred:", error);
  }
};

const StripeCancelSchedule = async (props: any) => {
  const { schedule_id } = props;

  try {
    const response = await fetch(
      `${stripeURL}/subscription_schedules/${schedule_id}/cancel`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${secretKey}`,
        },
      }
    );

    if (response.ok) {
      console.log("Schedule canceled successfully.");
    } else {
      console.error("Error canceling schedule:", response.statusText);
    }
  } catch (error) {
    console.error("An error occurred:", error);
  }
};

export const UseNewStripeWrapperFunctions = ({}: any) => {
  const functionList = [
    {
      name: "Create Payment Method",
      func: StripeCreatePaymentMethod,
      props: {
        cardNumber: "4242424242424242",
        expMonth: "8",
        expYear: "2020",
        cvc: "314",
      },
    },
    {
      name: "Create Customer",
      func: StripeCreateCustomer,
      props: {
        description:
          "My First Test Customer (created for API docs at https://www.stripe.com/docs/api)",
      },
    },
    {
      name: "Delete Customer",
      func: StripeDeleteCustomer,
      props: {
        customerId: "cus_OlQC9LpQYWhiBw", // Replace with actual customer ID
      },
    },
    {
      name: "Create Payment Intent",
      func: StripeCreatePaymentIntent,
      props: {
        amount: 2000,
        currency: "aud",
        customer: "cus_LlTIL3okdM8Drj",
        description: "This is a description of the payment intent",
      },
    },
    {
      name: "Confirm Payment Intent",
      func: StripeConfirmPaymentIntent,
      props: {
        paymentIntentId: "pi_3NxsjJHzhtZCgq3k0eiwYsFE",
        paymentMethodId: "pm_card_visa",
        recipientEmail: "kitakayaloisa@gmail.com",
      },
    },
    {
      name: "Cancel Payment Intent",
      func: StripeCancelPaymentIntent,
      props: {
        paymentIntentId: "pi_3NxsjJHzhtZCgq3k0eiwYsFE", // Replace with actual payment intent ID
      },
    },
    {
      name: "Create Setup Intent",
      func: StripeCreateSetupIntent,
      props: {
        customer: "cus_LlTIL3okdM8Drj",
        description: "This is a description for the setup intent",
        paymentMethod: "pm_card_visa",
        automaticPaymentMethodsEnabled: true,
      },
    },
    {
      name: "Create Session",
      func: StripeCreateSession,
      props: {
        success_url: "https://example.com/success",
        cancel_url: "https://example.com/cancel",
        line_items: {
          price: "price_123",
          quantity: 1,
        },
        client_reference_id: "client_ref_123",
        mode: "payment",
        currency: "usd",
        customer: "cus_LlTIL3okdM8Drj",
        customer_email: "customer@example.com",
      },
    },
    {
      name: "Expire Session",
      func: StripeExpireSession,
      props: {
        session_id: "cs_test_session_123", // Replace with actual session ID
      },
    },
    {
      name: "Create Link",
      func: StripeCreateLink,
      props: {
        line_items: {
          price: "price_456",
          quantity: 2,
        },
      },
    },
    {
      name: "Expire Link",
      func: StripeExpireLink,
      props: {
        link_id: "link_test_789", // Replace with actual link ID
      },
    },
    {
      name: "Create Invoice",
      func: StripeCreateInvoice,
      props: {
        customer: "cus_LlTIL3okdM8Drj",
      },
    },
    {
      name: "Finalize Invoice",
      func: StripeFinalizeInvoice,
      props: {
        invoice_id: "in_test_invoice_123", // Replace with actual invoice ID
      },
    },
    {
      name: "Collect Payment",
      func: StripeCollectPayment,
      props: {
        invoice_id: "in_test_invoice_456", // Replace with actual invoice ID
      },
    },
    {
      name: "Send Invoice for Manual Payment",
      func: StripeSendInvoiceForManualPayment,
      props: {
        invoice_id: "in_test_invoice_789", // Replace with actual invoice ID
      },
    },
    {
      name: "Void Invoice",
      func: StripeVoidInvoice,
      props: {
        invoice_id: "in_test_invoice_789", // Replace with actual invoice ID
      },
    },
    {
      name: "Create Invoice Item",
      func: StripeCreateInvoiceItem,
      props: {
        customer: "cus_LlTIL3okdM8Drj",
        price: "price_item_123",
      },
    },
    {
      name: "Delete Invoice Item",
      func: StripeDeleteInvoiceItem,
      props: {
        invoiceItem_id: "ii_test_item_123", // Replace with actual invoice item ID
      },
    },
    {
      name: "Create Subscription",
      func: StripeCreateSubscription,
      props: {
        customer: "cus_LlTIL3okdM8Drj",
        items: [
          {
            price: "price_subscription_123",
          },
        ],
      },
    },
    {
      name: "Cancel Subscription",
      func: StripeCancelSubscription,
      props: {
        subscription_id: "sub_test_subscription_123", // Replace with actual subscription ID
      },
    },
    {
      name: "Create Schedule",
      func: StripeCreateSchedule,
      props: {
        customer: "cus_LlTIL3okdM8Drj",
        start_date: "2023-01-01",
        end_behavior: "release",
        phases: [
          {
            items: [
              {
                price: "price_schedule_item_123",
                quantity: 1,
              },
            ],
            iterations: 3,
          },
        ],
      },
    },
    {
      name: "Cancel Schedule",
      func: StripeCancelSchedule,
      props: {
        schedule_id: "sch_test_schedule_123", // Replace with actual schedule ID
      },
    },
  ];

  const executeFunction = async (func: Function, props: any) => {
    try {
      const data = await func(props);
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View>
      {functionList.map((elem, index) => (
        <Pressable
          key={index}
          onPress={() => executeFunction(elem.func, elem.props)}
          style={{
            backgroundColor: "#007AFF",
            padding: 10,
            margin: 10,
            borderRadius: 5,
          }}
        >
          <Text style={{ color: "#FFF" }}>{elem.name}</Text>
        </Pressable>
      ))}
    </View>
  );
};
