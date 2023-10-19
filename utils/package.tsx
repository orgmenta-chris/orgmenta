// 'Package' is a reserved word for a code module.
// Placeholder

import { ViewContainerStatic } from "./container";
import { ViewTypographyText } from "./typography";
import { TypeReactComponent } from "./react";

// C todo. To list available packages. (web solution needed.)
// import { Platform } from 'react-native';
// let RNFS;
// if (Platform.OS !== 'web') {
//   //todo
// }
// export const listFiles = async (folderPath: string): Promise<string[] | null> => {
//   if (Platform.OS === 'web') {
//     // This part will only work in a Node.js environment, not in the browser.
//     try {
//       return readdirSync(folderPath);
//     } catch (error) {
//       return null;
//     }
//   } else {
//     // This part will work on mobile using React Native.
//     try {
//       const result = await RNFS.readDir(folderPath);
//       return result.map((fileInfo: any) => fileInfo.name);
//     } catch (error) {
//       return null;
//     }
//   }
// };

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