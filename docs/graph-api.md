# Microsoft Graph API implementation

This documentation provides a guide on how the Microsoft Graph API using the Microsoft Authentication Library (MSAL) is implemented in the application. MSAL simplifies the process of authenticating users and acquiring access tokens to interact with Microsoft services, including Microsoft Graph.

> The project files are available in `api` directory.

### Libraries

Here is a list of the libraries used in this implementation:

- [msal-browser](https://github.com/AzureAD/microsoft-authentication-library-for-js/tree/msal-lts/lib/msal-browser)
- [msal-react](https://github.com/AzureAD/microsoft-authentication-library-for-js/tree/msal-lts/lib/msal-react)
- [Microsoft Graph API](https://learn.microsoft.com/en-us/graph/)

## Getting Started

Given that we need authentication through out our application, we need have wrapped the entirety of our application in the `MsalProvider` component.

We first initialize an instance of `PublicClientApplication` then pass this to `MsalProvider` as a prop - (we have done this in `App.tsx`).

_example:_

```javascript
import React from "react";
import ReactDOM from "react-dom";

import { MsalProvider } from "@azure/msal-react";
import { Configuration, PublicClientApplication } from "@azure/msal-browser";

import App from "./app.jsx";

// MSAL configuration
const configuration: Configuration = {
  auth: {
    clientId: "client-id",
  },
};

const pca = new PublicClientApplication(configuration);

// Component
const AppProvider = () => (
  <MsalProvider instance={pca}>
    <App />
  </MsalProvider>
);

ReactDOM.render(<AppProvider />, document.getElementById("root"));
```

## Microsoft Graph API Implementation Reference

As stated earlier, all the project files for this feature are available in the `api` directory.

The following are the files you will find in the `api` directory:

- `authConfig.ts`
- `accessToken.tsx`
- `graphApiCall.ts`
- `graphFunctions.ts`

Let us go through what each of these files do in summary.

### authConfig.ts

`authConfig.ts` is configuring and initializing Microsoft Authentication Library (MSAL) for use in our application. Here's a summary of what the code is doing:

**Importing Necessary Modules:**

- The code imports the `Configuration` and `PublicClientApplication` classes from the `@azure/msal-browser` library, which is used for handling authentication and authorization with Microsoft services.

**MSAL Configuration:**

- It defines an object `msalConfig` of type `Configuration` that contains configuration settings for MSAL.
- `clientId` is set to a specific client ID, which represents your application in Microsoft Azure Active Directory (Azure AD).
- `authority` specifies the identity provider (Azure AD) endpoint for authentication.
- `redirectUri` and `postLogoutRedirectUri` are URLs to which the user is redirected after successful login and logout, respectively.

**`loginRequest` Object:**

- An object `loginRequest` is defined with an array of scopes. These scopes represent the permissions your application is requesting from the user when accessing Microsoft Graph API. These permissions include reading and writing user data, mail, and calendars.

**`url` Variable:**

- It sets the `url` variable to the base URL of the Microsoft Graph API (https://graph.microsoft.com/v1.0), which our application will use to make requests for user data.

**Public Client Application Instance:**

- An instance of the `PublicClientApplication` class is created using the `msalConfig` object. This instance is used to interact with Azure AD for authentication and token management.

**Exporting msalInstance:**

The `msalInstance` is exported, making it available for use in other parts of your application. This instance can be used to acquire access tokens for making authenticated requests to Microsoft services.

> The `msalInstance` is a crucial component for handling authentication within this application, and it will be used to obtain access tokens for making secure API requests to Microsoft services like Microsoft Graph.

### accessToken.tsx

`accessToken.tsx` is a React Native component responsible for acquiring and managing an access token for authentication purposes. Here's a summary of what the code does:

**Imports:**

- The code imports necessary modules and functions for React Native, Azure MSAL (Microsoft Authentication Library) for React, and other dependencies.
- It imports the `loginRequest` configuration from `authConfig.ts`.

**Functional Component Definition:**

It defines a functional component called `AccessToken`.

**MSAL and State Hooks:**

- It uses the `useMsal` hook from `@azure/msal-react` to access the MSAL instance, account information, and authentication status.
- It uses the `useAccount` hook to retrieve the first account from the accounts array (if available).
- It uses a custom hook `useTokenStore` to access the `setToken` function, for storing the acquired access token.

**Use Effect:**

- Inside a `useEffect` block, the code checks if an account exists.
- If an account exists, it attempts to acquire an access token silently using `instance.acquireTokenSilent`. This method is used to obtain a token without displaying a popup dialog, given the account context and specified scopes in `loginRequest`.
- If successful, it sets the acquired access token using the `setToken` function.
- If an error occurs, it checks if the error is an `InteractionRequiredAuthError`. If so, it falls back to acquiring the token interactively by calling `instance.acquireTokenPopup(loginRequest)`.
- Other errors are thrown as exceptions.

**Conditional Rendering:**

- While the authentication is in progress (`inProgress === "login"`), it displays an ActivityIndicator, indicating that the login process is ongoing.
- There is commented-out code that is for displaying the presence of a token and account, but it's currently inactive.

> In summary, this code is part of an authentication flow within our React Native application using Azure MSAL for authentication. It attempts to silently acquire an access token for the authenticated user and handles various authentication scenarios, falling back to interactive authentication if necessary. The acquired token is stored for use in making secure API requests. During the authentication process, it displays an activity indicator to provide feedback to the user.

### graphApiCall.ts

`graphApiCall.ts` contains functions for making HTTP requests to the Microsoft Graph API using access tokens acquired through Azure MSAL (Microsoft Authentication Library). Here's a summary of what each function does:

**callMsGraphGET:**

- This function is responsible for making a `GET` request to the Microsoft Graph API.
- It takes two parameters: `accessToken` (the access token required for authentication) and `endpoint` (the URL of the API endpoint to call).
- If there is no `accessToken`, it attempts to acquire a token silently using `msalInstance.acquireTokenSilent` based on the `loginRequest` configuration.
- It constructs the request headers with the Authorization header containing the access token.
- It makes the `GET` request using the fetch API, passing in the endpoint URL and headers.
  The response is converted to `JSON` using `.json()`.
- Any errors that occur during the request are logged to the console.

**callMsGraphPOST:**

- This function is similar to `callMsGraphGET` but is designed for making `POST` requests.
- In addition to the `accessToken` and `endpoint`, it takes a `requestBody` parameter that represents the data to be sent in the request body as `JSON`.
- It constructs the request headers and options for a `POST` request, including the body property with the serialized `requestBody`.

**callMsGraphPATCH:**

- This function is similar to `callMsGraphPOST` but is designed for making `PATCH` requests.
  It also takes the `accessToken`, `endpoint`, and `requestBody` as parameters.
- It constructs the request headers and options for a `PATCH` request, including the body property with the serialized `requestBody`.

**callMsGraphDELETE:**

- This function is similar to `callMsGraphGET` but is designed for making `DELETE` requests.
- It takes the `accessToken` and `endpoint` as parameters.
- It constructs the request headers and options for a `DELETE` request.

> In summary, these functions are used to make various types of authenticated requests to the Microsoft Graph API. They handle token acquisition, construct request headers, and make HTTP requests using the `fetch` API. If no `accessToken` is provided, they attempt to acquire one silently using MSAL. Any errors during the requests are logged to the console. These functions encapsulate the common logic for making authenticated API calls, making it easier to interact with the Microsoft Graph API in our React Native application.

### graphFunctions.ts

`graphFunctions.ts` defines a set of functions responsible for making various API calls to the Microsoft Graph API. These functions are organized into categories like _**Mail folder functions**_, _**Messages functions**_, and _**Calendar functions**_, and they perform different operations on these resources. Here's a summary of what each category of functions does:

**Mail Folder Functions:**

- `me`: Retrieves information about the authenticated user.
- `listMailFolders`: Lists the mail folders for the authenticated user.
- `mailFolder`: Retrieves information about a specific mail folder.
- `createMailFolder`: Creates a new mail folder.
- `getMailFolder`: Retrieves information about a specific mail folder.
- `updateMailFolder`: Updates the properties of a mail folder.
- `deleteMailFolder`: Deletes a mail folder.
- `copyMailFolder`: Copies a mail folder.
- `listMessagesInMailFolder`: Lists messages in a specific mail folder.

**Messages Functions:**

- `listMessages`: Lists messages in the authenticated user's mailbox.
- `getMessage`: Retrieves information about a specific message.
- `updateMessage`: Updates the properties of a message.
- `deleteMessage`: Deletes a message.
- `copyMessage`: Copies a message.
- `moveMessage`: Moves a message.
- `replyToMessage`: Replies to a message.
- `forwardMessage`: Forwards a message.
- `sendMessage`: Sends a new mail message.

**Calendar Functions:**

- `listCalendars`: Lists calendars for the authenticated user.
- `getCalendar`: Retrieves information about the user's calendar.
- `listEvents`: Lists calendar events.
- `getEvent`: Retrieves information about a specific calendar event.
- `createEvent`: Creates a new calendar event.
- `updateEvent`: Updates the properties of a calendar event.
- `deleteEvent`: Deletes a calendar event.

In each function, an API endpoint URL is constructed based on the url imported from `authConfig.ts`. These functions make use of other functions (`callMsGraphGET`, `callMsGraphPOST`, `callMsGraphPATCH`, `callMsGraphDELETE`) from `graphApiCall.ts` to make authenticated HTTP requests to the Microsoft Graph API using the provided access token (`token`). After making the API call, the retrieved data is logged to the console, _**and there's a comment indicating where you can perform additional actions with the data**_.

> In summary, `graphFunctions.ts` defines a collection of functions that serve as a wrapper for interacting with the Microsoft Graph API, making it easier to perform various operations on mail folders, messages, and calendar events. These functions abstract away the details of making HTTP requests and provide a higher-level interface for working with Microsoft Graph resources.
