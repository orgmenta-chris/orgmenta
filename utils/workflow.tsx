// Placeholder
// A 'workflow' refers to an automatic procedure / rule being run.
// E.g. the client_administrator may want to automatically parse an email to see if the subject contains 'urgent', and automatically assign the ticket as a p1.

import { Text, View } from "react-native";

export const ViewWorkflowMain = ({ children }: any) => {
  return (
    <View>
      <Text>ViewWorkflowMain placeholder</Text>
      <Text>{children}</Text>
    </View>
  );
};
