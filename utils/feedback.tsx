// A module that will allow users to interact with roadmaps,

import { ViewRoadmapContainer } from "./roadmap";
import { ViewFeatureFeedback, ViewFeatureList } from "./feature";
import { ViewForumContainer } from "./forum";
import { ViewContainerScroll } from "./container";
import { ViewTypographyHeading } from "./typography";


// CONTAINER

export const ViewFeedbackContainer = (props:any) => {
  // A component to show a product / business roadmap
  return (
    <ViewContainerScroll>
      <ViewTypographyHeading>Features</ViewTypographyHeading>
      <ViewFeatureFeedback />
      <ViewFeatureList {...props}/>
    </ViewContainerScroll>
  );
};
