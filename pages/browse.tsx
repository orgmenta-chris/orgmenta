
import { ViewPageMain } from "../utils/page";
import { ViewBrowseSearch } from "../utils/browse";
import { ViewTypographyHeading } from "../utils/typography";
import { ScrollView } from "react-native";

export default function BrowsePage() {
  return (
    <ViewPageMain>
      <ScrollView>
        <ViewTypographyHeading>Browse</ViewTypographyHeading>
        <ViewBrowseSearch />
      </ScrollView>
    </ViewPageMain>
  );
}
