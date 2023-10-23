// A module for pricing information and components.
// Placeholder.

import { ViewContainerStatic } from "./container";
import { ViewTypographyText } from "./typography";


// CONTAINER

// Component to show information for a price
export const ViewPricingContainer = (props: any) => {
  return (
    <ViewContainerStatic>
      <ViewTypographyText>ViewPricingInfo placeholder</ViewTypographyText>
      <ViewPricingInfo/>
      <ViewPricingIncluded/>
    </ViewContainerStatic>
  );
};


// INFO

// Component to show information for a price
export const ViewPricingInfo = (props: any) => {
  return (
    <ViewContainerStatic>
      <ViewTypographyText>ViewPricingInfo placeholder</ViewTypographyText>
      <ViewTypographyText>
        {JSON.stringify(defaultPricingTiers, null, 2)}
      </ViewTypographyText>
    </ViewContainerStatic>
  );
};

// INCLUDED

// Component to show what is included in a price
export const ViewPricingIncluded = (props: any) => {
  return (
    <ViewContainerStatic>
      <ViewTypographyText>ViewPricingIncluded placeholder</ViewTypographyText>
    </ViewContainerStatic>
  );
};

// TIERS

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
