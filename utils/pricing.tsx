// A module for pricing information and components.
// Placeholder.

import { View, Text } from "react-native";

export const defaultPricingTiers = [
  {
    title: "Copper",
  },
  {
    title: "Bronze",
  },
  {
    title: "Silver",
  },
  {
    title: "Gold",
  },
  {
    title: "Platinum",
  },
];

export const ViewPricingInfo = (props: any) => {
  return (
    <View>
      <Text>ViewPricingInfo placeholder</Text>
      <Text>{JSON.stringify(defaultPricingTiers, null, 2)}</Text>
    </View>
  );
};
