// 'module' is a reserved word for a unit in the 'Business framework/model/methodology'.
// For code modules, see 'package'
// C assigned.

import { ViewBrowseSearch } from "./browse";
import { ViewContainerScroll } from "./container";
import { ViewJsonContainer } from "./json";
import { ViewPageMain } from "./page";
import { ViewTypographyHeading, ViewTypographySubheading } from "./typography";

export const ViewFrameworkPage = (data: any) => {
  return (
    <ViewPageMain>
      <ViewContainerScroll>
        <ViewTypographyHeading>Framework</ViewTypographyHeading>
        <ViewTypographySubheading>
          The business framework
        </ViewTypographySubheading>
        <ViewFrameworkJson data={data.data}/>
      </ViewContainerScroll>
    </ViewPageMain>
  );
};

export const ViewFrameworkJson = (data: any) => {
  return <ViewJsonContainer data={data.data} />;
};
