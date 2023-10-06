// Placeholder.
// 'Contents' will be anchor elements and a table of contents, to be used in a page.

import { Text, View } from "react-native";

export const ViewContentsTable = ({ children }: any) => {
  return (
    <View>
      <Text>ViewContentsTable placeholder</Text>
      <Text>{children}</Text>
    </View>
  );
};

export const ViewContentsAnchor = ({ children }: any) => {
  return (
    <View>
      <Text>ViewContentsAnchor placeholder</Text>
      <Text>{children}</Text>
    </View>
  );
};
