// Placeholder
// A module for discussion boards.

import { ViewContainerScroll, ViewContainerStatic } from "./container";
import {
  ViewTypographyHeading,
  ViewTypographySubheading,
  ViewTypographySubsubheading,
  ViewTypographyText,
} from "./typography";
import { ViewMessageContainer } from "./message";
import { ViewBoardContainer } from "./board";

// CONTAINER

export const ViewForumContainer = (props: TypeForumContainer) => {
  // A component to show a product / business roadmap
  return (
    <ViewContainerScroll>
      <ViewTypographyHeading>{props.forumTitle}</ViewTypographyHeading>
      <ViewTypographyText>Forum placeholder</ViewTypographyText>
      <ViewTypographyText>(List boards, with links, here.)</ViewTypographyText>
    </ViewContainerScroll>
  );
};

export type TypeForumContainer = {
  forumTitle: string;
};

// BOARD

export const ViewForumBoard = (props: TypeForumBoard) => {
  // A component to show a product / business roadmap
  return (
    <ViewContainerScroll>
      <ViewTypographySubheading>{props.boardTitle}</ViewTypographySubheading>
      <ViewTypographyText>Board placeholder</ViewTypographyText>
      <ViewBoardContainer>
        (list discussions - with links - here.)
      </ViewBoardContainer>
    </ViewContainerScroll>
  );
};

export type TypeForumBoard = {
  boardTitle: string;
};

// DISCUSSION

export const ViewForumDiscussion = (props: TypeForumDiscussion) => {
  // A component to show a product / business roadmap
  return (
    <ViewContainerScroll>
      <ViewTypographySubsubheading>
        {props.discussionTitle}
      </ViewTypographySubsubheading>
      <ViewTypographyText>Discussion placeholder</ViewTypographyText>
      <ViewTypographyText>
        (list ViewForumMessage messages here.)
      </ViewTypographyText>
    </ViewContainerScroll>
  );
};

export type TypeForumDiscussion = {
  discussionTitle: string;
};

// MESSAGE

export const ViewForumMessage = (props: TypeForumMessage) => {
  // A component to show a product / business roadmap
  return (
    <ViewContainerStatic>
      <ViewTypographyHeading>{props.messageTitle}</ViewTypographyHeading>
      <ViewTypographyText>Message placeholder</ViewTypographyText>
      <ViewMessageContainer>
        (put message here.)
      </ViewMessageContainer>
    </ViewContainerStatic>
  );
};

export type TypeForumMessage = {
  messageTitle: string;
};
