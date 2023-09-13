import { Text } from "react-native";
import React, { useState, useEffect } from "react";
import { useMsal, useAccount } from "@azure/msal-react";
import { loginRequest } from "./authConfig";

const AccessToken = () => {
  const { instance, accounts, inProgress } = useMsal();
  const account = useAccount(accounts[0] || {});
  const [token, setToken] = useState("");

  useEffect(() => {
    if (account) {
      instance
        .acquireTokenSilent({
          ...loginRequest,
          account: account,
        })
        .then((response) => {
          if (response) {
            setToken(response.accessToken);
          }
        });
    }

  }, [account, instance]);

  if (inProgress === "login") {
    return <Text>Login is currently in progress!</Text>;
  }
};

export default AccessToken;
