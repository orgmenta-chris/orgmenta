import { Text } from "react-native";
import { ViewRouterLink } from "../utils/router";
import { ViewPageMain } from '../utils/page'

export default function UserPage() {
  return (
    <ViewPageMain>
      <Text style={{ fontSize: 24, fontWeight:'800' }}>404 not found</Text>
      <ViewRouterLink to={"main"} style={{ margin: 5 }}>
        <Text style={{ fontSize: 24 }}>Go Home</Text>
      </ViewRouterLink>
      
    </ViewPageMain>
  );
}
