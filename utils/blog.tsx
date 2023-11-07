import { ViewContainerStatic } from "./container";
import { ViewTypographyText } from "./typography";

export const ViewBlogMain = ({posts}:any) => {
  return (
    <ViewContainerStatic>
      <ViewTypographyText>Blog placeholder</ViewTypographyText>
    </ViewContainerStatic>
  );
};

export const ViewBlogPost = ({posts}:any) => {
  return (
    <ViewContainerStatic>
      <ViewTypographyText>BlogPost placeholder</ViewTypographyText>
    </ViewContainerStatic>
  );
};

export const ViewBlogCategories = ({posts}:any) => {
  return (
    <ViewContainerStatic>
      <ViewTypographyText>BlogCategories placeholder</ViewTypographyText>
    </ViewContainerStatic>
  );
};

export const ViewBlogTimeline = ({posts}:any) => {
  return (
    <ViewContainerStatic>
      <ViewTypographyText>BlogTimeline placeholder</ViewTypographyText>
    </ViewContainerStatic>
  );
};
