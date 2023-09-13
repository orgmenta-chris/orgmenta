import React from "react";
import { useMsal } from "@azure/msal-react";

const MSAL = () => {
  const { instance, accounts, inProgress } = useMsal();

  if (accounts.length > 0) {
    return (
      <>
        <span>There are currently {accounts.length} users signed in!</span>
        <button onClick={() => instance.logoutPopup()}>Logout</button>
      </>
    );
  } else if (inProgress === "login") {
    return <span>Login is currently in progress!</span>;
  } else {
    return (
      <>
        <span>There are currently no users signed in!</span>
        <button onClick={() => instance.loginPopup()}>Login</button>
      </>
    );
  }
};

export default MSAL;
