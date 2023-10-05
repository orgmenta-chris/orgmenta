
import { View, Pressable, Button } from "react-native";
import { url } from "./../api/authConfig";
import { callMsGraphGET } from "./../api/graphApiCall";
import useTokenStore from "./../states/api/storeToken";
// (move that in here too)


export const ViewMicrosoftTestfetch= ({}: any) => {
  const token = useTokenStore((state: any) => state.token);
  const endpoint = `${url}/me`;
  const fetchData = async (token: string) => {
    const data = await callMsGraphGET(token, endpoint);
  };
  return (
    <View
      style={{
        padding: 10,
        backgroundColor: "blue",
      }}
    >
      <View>
        <Button title="Test Fetch Data" onPress={() => fetchData(token)} />
      </View>
    </View>
  );
};
