

import { ViewPageMain } from "../utils/page";
import { ViewTypographyTextheading } from "../utils/typography";
import { ViewInputRichmain } from "../utils/input";
import { Text, View } from "react-native";

export const ViewTestPage = () => {
  return (
    <ViewPageMain>
      <ViewTypographyTextheading>Testing</ViewTypographyTextheading>
      <Text>ViewTestPage Placeholder</Text>
      <ViewInputRichmain/>
    </ViewPageMain>
  );
}
