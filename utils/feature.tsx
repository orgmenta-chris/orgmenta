// 'Features' are attributes of products that are sold by a company.
// Placeholder file (to provide easy components etc. to quickly create cards that display feature information, link to deliverables/roadmap etc.)

// A module for business/product roadmaps.

import {
  ViewTypographyHeading,
  ViewTypographySubheading,
  ViewTypographyText,
  ViewTypographySubsubheading,
  ViewTypographyCycling,
} from "./typography";
import { ViewContainerScroll, ViewContainerStatic } from "./container";

// CONTAINER

export const ViewFeatureContainer = (props:any) => {
  // A component to show a product / business roadmap
  return (
    <ViewContainerScroll>
      <ViewTypographyHeading>Features</ViewTypographyHeading>
      <ViewFeatureFeedback />
      <ViewFeatureList {...props}/>
    </ViewContainerScroll>
  );
};

// FEEDBACK

export const ViewFeatureFeedback = () => {
  // Allow signed in users to upvote/ provide comments/ feedback on a roadmap item. This (via the community module) will eventually offer full 'uservoice' features.
  return (
    <ViewTypographyText>
      {`ViewFeatureFeedback placeholder\nSign in/up to request features or comment on roadmap items`}
    </ViewTypographyText>
  );
};

// TIMELINE

export const ViewFeatureList = (props:any) => {
  // Display the roadmap items in a timeline
  return (
    <ViewTypographyText>
      {`Timeline placeholder.\nFeature timeline (Title, summary + priorities, dates etc.) here.\n`}
      {JSON.stringify(props.roadmap,null,2)}
    </ViewTypographyText>
  );
};
