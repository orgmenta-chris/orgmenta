

import { ViewPageMain } from "../utils/page";
import { useAuthSession } from "../utils/auth";
import { ViewUserAttributes } from "../utils/user";
import { ViewDisplayDynamic } from "../utils/display";
import { ViewTypographyTextheading } from "../utils/typography";
import { Text, View } from "react-native";

export default function UserPage() {
  const session = useAuthSession();
  return (
    <ViewPageMain>
      <ViewTypographyTextheading>User</ViewTypographyTextheading>
      <View style={{ maxWidth: 500 }}>
        <Text style={{ marginBottom: 10 }}>ViewAuthDetails</Text>
        {session.data && (
          <Text>Logged in as: {session.data.session.user.email}</Text>
        )}
      </View>
      <ViewUserAttributes />
      <ViewDisplayDynamic />
    </ViewPageMain>
  );
}
