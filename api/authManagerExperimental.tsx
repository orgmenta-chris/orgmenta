import { authorize, refresh, AuthConfiguration } from "react-native-app-auth";
import useTokenStore from "../states/api/storeToken";

// react-native-auth-app

const config: AuthConfiguration = {
  issuer:
    "https://login.microsoftonline.com/3d165eb2-cf10-49d6-8947-87ae972e04aa/v2.0",
  clientId: "7b43912a-2a3a-460d-bcd0-eecec5e32c75",
  redirectUrl: "http://localhost:19006/",
  scopes: ["openid", "profile", "email", "offline_access"],
  additionalParameters: { prompt: "select_account" },
  serviceConfiguration: {
    authorizationEndpoint:
      "https://login.microsoftonline.com/common/oauth2/v2.0/authorize",
    tokenEndpoint: "https://login.microsoftonline.com/common/oauth2/v2.0/token",
  },
};

const setToken = useTokenStore((state: any) => state.setToken);
const removeToken = useTokenStore((state: any) => state.removeToken);
const setRefreshToken = useTokenStore((state: any) => state.setRefreshToken);
const removeRefreshToken = useTokenStore(
  (state: any) => state.removeRefreshToken
);
const setExpireTime = useTokenStore((state: any) => state.setExpireTime);
const removeExpireTime = useTokenStore((state: any) => state.removeExpireTime);

const token = useTokenStore((state: any) => state.token);
const expireTime = useTokenStore((state: any) => state.expireTime);
const refreshToken = useTokenStore((state: any) => state.refreshToken);

export class AuthManager {
  static signInAsync = async () => {
    const result = await authorize(config);

    await setToken(result.accessToken);
    await setRefreshToken(result.refreshToken);
    await setExpireTime(result.accessTokenExpirationDate);
  };

  static signOutAsync = async () => {
    await removeToken();
    await removeRefreshToken();
    await removeExpireTime();
  };

  static getAccessToken = async () => {
    // const result = await refresh(config, {
    //   refreshToken: refreshToken,
    // });
    const result = await authorize(config);

    await setToken(result.accessToken);
    await setRefreshToken(result.refreshToken);
    await setExpireTime(result.accessTokenExpirationDate);

    return result.accessToken;
  };
}