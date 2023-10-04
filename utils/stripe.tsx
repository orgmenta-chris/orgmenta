import React from "react";
import { instanceSupabaseClient as client } from "./supabase";
import { Pressable, View, Text } from "react-native";
// import Stripe from "stripe";
import {
  STAGING_STRIPE_SECRET_KEY,
  STAGING_STRIPE_PUBLISHABLE_KEY,
  PRODUCTION_STRIPE_SECRET_KEY,
  PRODUCTION_STRIPE_PUBLISHABLE_KEY,
} from "@env";

let publishableKey: any;
let secretKey: any;

if (__DEV__) {
  publishableKey = `${STAGING_STRIPE_PUBLISHABLE_KEY}`;
  secretKey = `${STAGING_STRIPE_SECRET_KEY}`;
} else {
  publishableKey = `${PRODUCTION_STRIPE_PUBLISHABLE_KEY}`;
  secretKey = `${PRODUCTION_STRIPE_SECRET_KEY}`;
}

// export const stripe = new Stripe(secretKey, {
//   apiVersion: "2023-08-16",
// });

// export const StripeCreateCustomer = async () => {
//   const params: Stripe.CustomerCreateParams = {
//     description: "Test customer - 1",
//   };

//   const customer: Stripe.Customer = await stripe.customers.create(params);

//   console.log(customer);
// };

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
      <Pressable
        onPress={StripeCreateCustomer}
        style={{
          backgroundColor: "#007F",
          padding: 10,
          margin: 10,
          borderRadius: 5,
        }}
      >
        <Text style={{ color: "#FFF" }}>Create Customer</Text>
      </Pressable>
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
