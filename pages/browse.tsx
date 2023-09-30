
import { ViewPageMain } from "../utils/page";
import { ViewBrowseSearch } from "../utils/browse";
import { ViewTypographyTextheading } from "../utils/typography";
import { ScrollView } from "react-native";

export default function BrowsePage() {
  return (
    <ViewPageMain>
      <ScrollView>
        <ViewTypographyTextheading>Browse</ViewTypographyTextheading>
        <ViewBrowseSearch />
      </ScrollView>
    </ViewPageMain>
  );
}
 