import { Text, View } from "react-native";
import { ViewAttributeMain, ViewAttributeUnioned } from "../utils/attribute";
import { ViewRouterLink, ViewRouterRoutes, ViewRouterRoute } from "../utils/router";

export default function UserPage() {
  return (
    <View>
      <Text style={{ fontSize: 24 }}>Attributes</Text>
      <View style={{ flexDirection: "row" }}>
        <ViewRouterLink to={"main"} style={{ margin: 5 }}>
          Main
        </ViewRouterLink>
        <ViewRouterLink to={"unioned"} style={{ margin: 5 }}>
          Unioned
        </ViewRouterLink>
      </View>
      <ViewRouterRoutes>
        <ViewRouterRoute path="main" element={<ViewAttributeMain />} />
        <ViewRouterRoute path="unioned" element={<ViewAttributeUnioned />} />
      </ViewRouterRoutes>
      {/* <ViewAttributeMain/> */}
    </View>
  );
}
