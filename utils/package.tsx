// 'Package' is a reserved word for a code module.
// Placeholder

import { ViewContainerStatic } from "./container";
import { ViewTypographyText } from "./typography";
import { TypeReactComponent } from "./react";

export const UtilityPackageList: { [key: string]: any } = {
  accessibility: require("./accessibility"),
  action: require("./action"),
};

export const filterPackageList = (module: {
  [key: string]: any;
}): { packageViews: { [key: string]: TypeReactComponent }; packageHooks: { [key: string]: any };packageOther: { [key: string]: any } } => {
  const packageViews: { [key: string]: TypeReactComponent } = {};
  const packageHooks: { [key: string]: TypeReactComponent } = {};
  const packageOther: { [key: string]: TypeReactComponent } = {};
  Object.keys(module).forEach((key) => {
    if (key.startsWith("View")) {
      packageViews[key] = module[key];
    }
    else if (key.startsWith("use")) {
      packageHooks[key] = module[key];
    }
    else {
      packageOther[key] = module[key];
    }
  });
  return { packageViews, packageHooks, packageOther};
};

export const ViewPackageItem = ({packageName}:any) => {
  const packageDeclarations = UtilityPackageList[packageName];
  const packageSorted = filterPackageList(packageDeclarations)
  return (
    <ViewContainerStatic>
      <ViewTypographyText>
        {JSON.stringify(packageSorted,null,2)}
      </ViewTypographyText>
    </ViewContainerStatic>
  )
}