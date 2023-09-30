// Placeholder
// A 'mask' refers to a 'privacy mask' or 'redacted information', i.e. a cover or cloak / privacy shield on password fields, secure data etc.

import { Text, View } from "react-native";

export const ViewMaskMain = ({ children }: any) => {
  return (
    <View>
      <Text>ViewMaskMain placeholder</Text>
      <Text>to be cloaked: </Text>
      {children}
    </View>
  );
};