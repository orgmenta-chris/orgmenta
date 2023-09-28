import { Text, View } from "react-native";
import { ViewBrowseSearch } from "../utils/browse"
import { ViewSignatureCanvas } from "../utils/signature"

export default function BrowsePage() {
    return (
        <View>
            <ViewSignatureCanvas/>
            <Text style={{ fontSize: 24 }}>Browse</Text>
            <ViewBrowseSearch/>
        </View>
    );
}
