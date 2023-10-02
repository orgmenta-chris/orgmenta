import { useWindowDimensions } from "./window";
import { View } from "react-native";

export const ViewPageMain = ({ children, marginEnabled = true }: any) => {
  const windowDimensions = useWindowDimensions();
  return (
    <View
      style={{
        flex: 1,
        marginLeft: marginEnabled && windowDimensions.width > 768 ? "15%" : 0,
        marginRight: marginEnabled && windowDimensions.width > 768 ? "15%" : 0,
      }}
    >
      {children}
    </View>
  );
};
