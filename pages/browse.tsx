import { Text, View } from "react-native";
import { ViewBrowseSearch } from "../utils/browse"

export default function BrowsePage() {
    return (
        <View>
            <Text style={{ fontSize: 24 }}>Browse</Text>
            <ViewBrowseSearch/>
        </View>
    );
}
