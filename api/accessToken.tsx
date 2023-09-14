import { Text } from "react-native";
import React, { useEffect } from "react";
import { useMsal, useAccount } from "@azure/msal-react";
import { loginRequest } from "./authConfig";
import useTokenStore from "../states/api/storeToken";

const AccessToken = () => {
  const { instance, accounts, inProgress } = useMsal();
  const account = useAccount(accounts[0] || {});

  const setToken = useTokenStore((state: any) => state.setToken);

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
