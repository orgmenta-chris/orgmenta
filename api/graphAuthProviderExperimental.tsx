import { AuthManager } from "./authManagerExperimental";

export class GraphAuthProvider {
  getAccessToken = async () => {
    const token = await AuthManager.getAccessToken();
    return token || "";
  };
}
