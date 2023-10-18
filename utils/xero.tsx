// Placeholder.
// This might involve close work & discussion with Chris, as this is getting technical (in terms of accounting & finance).

// Chris has signed up for Xero, and there is a Demo company that we can use to test. (https://central.xero.com/s/article/Use-the-demo-company)

// References (developer)
// https://developer.xero.com/documentation/getting-started-guide/
// https://developer.xero.com/documentation/guides/how-to-guides/integration-best-practices/
// https://developer.xero.com/
// https://developer.xero.com/documentation/xero-app-store/app-partner-guides/app-partner-steps/

// References (General Xero usage)
// https://central.xero.com/s/?utm_campaign=&utm_content=&sfmc_key=8bcd7eb9769e9eff90bab0e2d323e62a35084f13-R0wgMTAwOSBBIFNNQiBPTkIgLSBTTUIgT25ib2FyZGluZyAtIFdlbGNvbWUgRW1haWw%3D

////////////////////////////////////////////////
// Phase 1:
// Follow https://developer.xero.com/documentation/getting-started-guide/
// Then, same as done for stripe - get every possibly endpoint into supabase functions

////////////////////////////////////////////////
////////////////////////////////////////////////
////////////////////////////////////////////////
////////////////////////////////////////////////
////////////////////////////////////////////////
////////////////////////////////////////////////
////////////////////////////////////////////////
////////////////////////////////////////////////
// Phase 2 (On hold for now, but hopefully before go-live)
// https://developer.xero.com/documentation/guides/how-to-guides/xero-app-launcher
// - App launcher (low pri)
// - Branding within Xero (low pri)
// - Deep linking

////////////////////////////////////////////////
// Phase X (Future / long term)

// When we implement payment sync back into Orgmenta, we may need to contact Xero for this:
// "Financial services for example: banking, payments, lending and insurance amongst others that fall under Section 11 - For prior approval please complete this form."
// 11. Financial services: To use the developer platform to offer financial services through your app, for example lending, insurance, bank feeds, payments, or data products / underwriting, your app and your financial services will need to be approved by us and you may need to sign up to some additional terms. This might include a fee that we’ll let you know about when you sign up. If you’d like to know more about offering financial services, please contact us here.
// This may (unlikely) require incorporating in every country we do business in.
// But regardles, it just means that we need to design for adherance to local financial regulations and compliance standards. For Xero, specific terms would be detailed in your agreement with them, which may require varying degrees of regulatory compliance based on the services you're offering.

////////////////////////////////////////////////
// Phase y (Future / long term)

// When we expand to other markets, we may need to allow 'practices' (accountants, legal firms etc.) to access Xero Practice.
// But, due to multi-space paradigm, this might not be necessary.

// import { requestVaultItem } from "./vault";
// import { UtilityPlatformMain } from "./platform";
// import { instanceSupabaseClient as client } from "./supabase";

// export const stringXeroURL = "https://api.stripe.com/v1";

import {
  XERO_STAGING_CLIENT_ID,
  XERO_STAGING_CLIENT_SECRET,
  XERO_ACCESS_TOKEN,
  // @ts-ignore
} from "@env";
import { VaultGetSecret } from "./vault";
import { Base64 } from "js-base64";

let clientID: any = "";
let clientSecret: any = "";

if (__DEV__) {
  clientID = XERO_STAGING_CLIENT_ID;
  clientSecret = XERO_STAGING_CLIENT_SECRET;
} else {
  clientID = VaultGetSecret("XERO_PRODUCTION_CLIENT_ID");
  clientSecret = VaultGetSecret("XERO_PRODUCTION_CLIENT_SECRET");
}

export const accessToken = XERO_ACCESS_TOKEN;

export const scopes =
  "accounting.transactions accounting.transactions.read accounting.reports.read accounting.reports.tenninetynine.read accounting.budgets.read accounting.journals.read accounting.settings accounting.settings.read accounting.contacts accounting.contacts.read accounting.attachments accounting.attachments.read assets assets.read files files.read payroll.employees payroll.employees.read payroll.payruns payroll.payruns.read payroll.payslip payroll.payslip.read payroll.settings payroll.settings.read payroll.timesheets payroll.timesheets.read projects projects.read";

export const XeroRequestAccessToken = async () => {
  //   console.log(clientID, clientSecret);
  // Define the token endpoint and credentials
  const tokenUrl = "https://identity.xero.com/connect/token";
  const credentials = Base64.encode(`${clientID}:${clientSecret}`);

  // Define the request body parameters
  const requestBody = new URLSearchParams();
  requestBody.append("grant_type", "client_credentials");
  requestBody.append("scope", scopes);

  // Define request options
  const requestOptions = {
    method: "POST",
    headers: {
      Authorization: `Basic ${credentials}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: requestBody,
  };

  // Make the POST request to the token endpoint
  try {
    const response = await fetch(tokenUrl, requestOptions);
    const data = await response.json();

    return data;
  } catch (error) {
    // Handle any errors here
    console.error("Error requesting access token:", error);
    throw error;
  }
};
