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

export const ViewRoadmapContainer = (props:any) => {
  // A component to show a product / business roadmap
  return (
    <ViewContainerScroll>
      <ViewTypographyHeading>Roadmap</ViewTypographyHeading>
      <ViewRoadmapFeedback />
      <ViewRoadmapTimeline {...props}/>
    </ViewContainerScroll>
  );
};

// FEEDBACK

export const ViewRoadmapFeedback = () => {
  // Allow signed in users to provide comments/ feedback on a roadmap item
  return (
    <ViewTypographyText>
      {`ViewRoadmapFeedback placeholder\nSign in/up to request features or comment on roadmap items`}
    </ViewTypographyText>
  );
};

// TIMELINE

export const ViewRoadmapTimeline = (props:any) => {
  // Display the roadmap items in a timeline
  return (
    <ViewTypographyText>
      {`Timeline placeholder.\nRoadmap timeline (Title, summary + priorities, dates etc.) here.\n`}
      {JSON.stringify(props.roadmap,null,2)}
    </ViewTypographyText>
  );
};
