import { ActivityIndicator, Text } from "react-native";
import React, { useEffect } from "react";
import { useMsal, useAccount } from "@azure/msal-react";
import { loginRequest } from "./authConfig";
import useTokenStore from "../states/api/storeToken";
// import { InteractionRequiredAuthError } from "@azure/msal-browser";

const AccessToken = () => {
  const { instance, accounts, inProgress } = useMsal();
  const account = useAccount(accounts[0] || {});

  const setToken = useTokenStore((state: any) => state.setToken);

  // const token = useTokenStore((state: any) => state.token);

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
          } else {
            console.log("something went wrong");
          }
        })
        .catch(async (error) => {
          // if (error instanceof InteractionRequiredAuthError) {
          //   // fallback to interaction when silent call fails
          //   return instance.acquireTokenPopup(loginRequest);
          // }
          // handle other errors
          throw new Error(error);
        });
    }
  }, [account, instance]);

  if (inProgress === "login") {
    return (
      <Text style={{ textAlign: "center" }}>
        <ActivityIndicator />
      </Text>
    );
  }

  // return (
  //   <>
  //     <Text>{token ? "token found" : "no token found"}</Text>
  //     <Text>{account ? "account found" : "no account found"}</Text>
  //   </>
  // );
};

export default AccessToken;
