
import { ViewPageMain } from "../utils/page";
import { ViewSpaceArray, ViewSpaceSwitch } from "../utils/space";
import { ViewTypographyTextheading } from "../utils/typography";
import { ScrollView } from "react-native";

export default function SpacePage() {
  return (
    <ViewPageMain>
      <ScrollView>
        <ViewTypographyTextheading>Spaces</ViewTypographyTextheading>
        <ViewSpaceSwitch />
        <ViewSpaceArray />
      </ScrollView>
    </ViewPageMain>
  );
}
