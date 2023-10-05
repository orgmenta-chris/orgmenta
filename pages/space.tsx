
import { ViewPageMain } from "../utils/page";
import { ViewSpaceLinks, ViewSpaceArray, ViewSpaceCurrent, ViewSpaceSwitch } from "../utils/space";
import { ViewTypographyTextheading } from "../utils/typography";
import { ScrollView } from "react-native";

export default function SpacePage() {
  return (
    <ViewPageMain>
      <ScrollView>
        <ViewTypographyTextheading>Spaces</ViewTypographyTextheading>
        <ViewSpaceLinks />
        <ViewSpaceCurrent />
        <ViewSpaceSwitch />
        <ViewSpaceArray />
      </ScrollView>
    </ViewPageMain>
  );
}
