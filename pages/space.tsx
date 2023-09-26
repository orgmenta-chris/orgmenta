import { Text, View } from "react-native";
import { ViewSpaceArray, ViewSpaceSwitch } from "../utils/space";

export default function SpacePage() {
    return (
        <View>
            <Text style={{ fontSize: 24 }}>Spaces</Text>
            <ViewSpaceArray />
            <ViewSpaceSwitch />
        </View>
    );
}
