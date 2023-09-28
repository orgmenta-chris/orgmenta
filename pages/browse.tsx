import { Text, View } from "react-native";
import { ViewBrowseSearch } from "../utils/browse"
import { ViewSignatureCanvas } from "../utils/signature"
import Example from "../utils/timeline"

export default function BrowsePage() {
    return (
        <View>
            {/* <ViewSignatureCanvas/> */}
            <Example/>
            <Text style={{ fontSize: 24 }}>Browse</Text>
            <ViewBrowseSearch/>
        </View>
    );
}
