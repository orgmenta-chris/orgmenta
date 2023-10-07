
import { ViewPageMain } from "../utils/page";
import { ViewSpaceLinks, ViewSpaceArray, ViewSpaceCurrent, ViewSpaceSwitch } from "../utils/space";
import { ViewTypographyHeading } from "../utils/typography";
import { ScrollView } from "react-native";

export default function SpacePage() {
  return (
    <ViewPageMain>
      <ScrollView>
        <ViewTypographyHeading>Spaces</ViewTypographyHeading>
        <ViewSpaceLinks />
        <ViewSpaceCurrent />
        <ViewSpaceSwitch />
        <ViewSpaceArray />
      </ScrollView>
    </ViewPageMain>
  );
}
