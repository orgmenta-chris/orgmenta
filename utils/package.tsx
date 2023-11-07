// 'Package' is a reserved word for a code module.
// Do not use this file unless necessary - It will not be performant.

import { ViewContainerStatic } from "./container";
import { ViewTypographyText } from "./typography";
import { TypeReactComponent } from "./react";

import * as Browse from "./browse";
import * as Space from "./space";
import * as User from "./user";
import * as Bookmark from "./bookmark";
import * as Auxiliary from "./auxiliary";
import * as Device from "./device";

export const declarationsPackageBrowse = Browse;
export const declarationsPackageSpace = Space;
export const declarationsPackageUser = User;
export const declarationsPackageBookmark = Bookmark;
export const declarationsPackageAuxiliary = Auxiliary;
export const declarationsPackageDevice = Device;

export const mapPackageAll = {
  declarationsPackageBrowse,
  declarationsPackageSpace,
  declarationsPackageUser,
  declarationsPackageBookmark,
  declarationsPackageAuxiliary,
  declarationsPackageDevice,
};

// Run `git-ls files utils` then copy into this string (then mapPackagesList will automatically map it):
export const stringPackagesList = `accessibility.tsx
action.tsx
admin.tsx
api.tsx
array.tsx
article.tsx
asset.tsx
attribute.tsx
audio.tsx
auth.tsx
auxiliary.tsx
avatar.tsx
backup.tsx
billing.tsx
board.tsx
bookmark.tsx
browse.tsx
builder.tsx
button.tsx
cache.tsx
calendar.tsx
camera.tsx
card.tsx
chart.tsx
chat.tsx
checkout.tsx
clipboard.tsx
connectwise.tsx
constant.tsx
container.tsx
contents.tsx
context.tsx
control.tsx
convention.tsx
crypto.tsx
csv.tsx
database.tsx
datto.tsx
declaration.tsx
deliverable.tsx
device.tsx
dictionary.tsx
display.tsx
email.tsx
encoder.tsx
entity.tsx
enumerations.tsx
error.tsx
feature.tsx
feedback.tsx
field.tsx
file.tsx
focus.tsx
form.tsx
forum.tsx
framework.tsx
header.tsx
help.tsx
history.tsx
hub.tsx
icon.tsx
image.tsx
indicator.tsx
info.tsx
ingram.tsx
input.tsx
inquiry.tsx
install.tsx
integration.tsx
issue.tsx
itglue.tsx
json.tsx
jurisdiction.tsx
kanban.tsx
keyboard.tsx
landing.tsx
library.tsx
list.tsx
local.tsx
map.tsx
market.tsx
member.tsx
message.tsx
meta.tsx
microsoft.tsx
modal.tsx
module.tsx
nable.tsx
nfc.tsx
notification.tsx
notification/keygeneration.tsx
object.tsx
ocr.tsx
orgmenta.tsx
package.tsx
page.tsx
path.tsx
pax8.tsx
pdf.tsx
phone.tsx
platform.tsx
plugin.tsx
pod.tsx
pos.tsx
preference.tsx
preset.tsx
pricing.tsx
print.tsx
priority.tsx
queryer.tsx
react.tsx
recorder.tsx
relationships.tsx
richtext.tsx
rmm.tsx
roadmap.tsx
router.tsx
scrollbar.tsx
search.tsx
share.tsx
shield.tsx
shortcut.tsx
signature.tsx
sms.tsx
socialnetwork.tsx
space.tsx
state.tsx
status.tsx
statusbar.tsx
storage.tsx
stripe-new.tsx
stripe-test.tsx
stripe.tsx
stripenative.tsx
stylesheet.tsx
supabase.tsx
svg.tsx
sync.tsx
synnex.tsx
tab.tsx
test.tsx
theme.tsx
thread.tsx
timeline.tsx
tooltip.tsx
trayio.tsx
type.tsx
typography.tsx
update.tsx
uptime.tsx
user.tsx
uuid.tsx
vault.tsx
video.tsx
whitelabel.tsx
widget.tsx
window.tsx
workflow.tsx
xero.tsx
xeroAccountingAPI.tsx
xeroAssetsAPI.tsx
xeroBankFeedsAPI.tsx
xeroFilesAPI.tsx
xeroFinanceAPI.tsx
xeroProjectsAPI.tsx
xeroSampleTest.tsx
zapier.tsx
`;

export const mapPackagesList = stringPackagesList.split(`.tsx
`).map((x:string)=>{return{
  file_name:x+'.tsx',
  name_singular:x,
  display_singular:x?.[0]?.toUpperCase()+x.substring(1)
}})

// console.log('mapPackagesList',mapPackagesList)

export const arrayPackagesList = [
  "accessibility",
  "action",
  "admin",
  "api",
  "array",
  "article",
  "asset",
  "attribute",
  "audio",
  "auth",
  "auxiliary",
  "avatar",
  "backup",
  "billing",
  "board",
  "bookmark",
  "browse",
  "builder",
  "button",
  "cache",
  "calendar",
  "camera",
  "card",
  "chart",
  "chat",
  "checkout",
  "clipboard",
  "connectwise",
  "constant",
  "container",
  "contents",
  "context",
  "control",
  "convention",
  "crypto",
  "csv",
  "database",
  "datto",
  "declaration",
  "deliverable",
  "device",
  "dictionary",
  "display",
  "email",
  "encoder",
  "entity",
  "enumerations",
  "error",
  "feature",
  "feedback",
  "field",
  "file",
  "focus",
  "form",
  "forum",
  "framework",
  "header",
  "help",
  "history",
  "hub",
  "icon",
  "image",
  "indicator",
  "info",
  "ingram",
  "input",
  "inquiry",
  "install",
  "integration",
  "issue",
  "itglue",
  "json",
  "jurisdiction",
  "kanban",
  "keyboard",
  "landing",
  "library",
  "list",
  "local",
  "map",
  "market",
  "member",
  "message",
  "meta",
  "microsoft",
  "modal",
  "module",
  "nable",
  "nfc",
  "notification",
  "object",
  "ocr",
  "orgmenta",
  "package",
  "page",
  "path",
  "pax8",
  "pdf",
  "phone",
  "platform",
  "plugin",
  "pod",
  "pos",
  "preference",
  "preset",
  "pricing",
  "print",
  "priority",
  "queryer",
  "react",
  "recorder",
  "relationships",
  "richtext",
  "rmm",
  "roadmap",
  "router",
  "scrollbar",
  "search",
  "share",
  "shield",
  "shortcut",
  "signature",
  "sms",
  "socialnetwork",
  "space",
  "state",
  "status",
  "statusbar",
  "storage",
  "stripe",
  "stylesheet",
  "supabase",
  "svg",
  "sync",
  "synnex",
  "tab",
  "table",
  "test",
  "theme",
  "thread",
  "timeline",
  "tooltip",
  "trayio",
  "type",
  "typography",
  "update",
  "uptime",
  "user",
  "uuid",
  "vault",
  "video",
  "whitelabel",
  "widget",
  "window",
  "workflow",
  "xero",
  "zapier",
  "zustand",
];
export const arrayPackageDeclarations = Object.keys(mapPackageAll);

// NAME

export const splitPackageName = ({packageName, splitBy}:any) => {
  return packageName?.split(
    new RegExp(splitBy, "gi" /*Regex: g=Global, i=CaseInsensitive*/)
  );
};
//or:
// export const extractPackageNames = (key: string) => {
//   const splitKey = key.split("Package");
//   return splitKey[1];
// };

// export const arrayPackageNames =
//   arrayPackageDeclarations.map(extractPackageNames);

// MODULE

// export const DynamicPackageModule = (packageName: any) =>
//   require(`./${packageName}`);

// export const UtilityPackageList2: { [key: string]: any } =
//   arrayPackagesList.map((packageName: string) => [
//     packageName,
//     require(`./${packageName.toLowerCase()}`),
//   ]);

// export const UtilityPackageList: { [key: string]: any } = {
//   accessibility: require("./accessibility"),
//   action: require("./action"),
// };

// console.log('browse',Object.keys(declarationsPackageBrowse));
// console.log('space',Object.keys(declarationsPackageSpace));
// console.log('user',Object.keys(declarationsPackageUser));
// console.log('bookmark',Object.keys(declarationsPackageBookmark));
// console.log('auxiliary',Object.keys(declarationsPackageAuxiliary));
// console.log('device',Object.keys(declarationsPackageDevice));

// export const filterPackageList = (module: {
//   [key: string]: any;
// }): {
//   packageViews: { [key: string]: TypeReactComponent };
//   packageHooks: { [key: string]: any };
//   packageOther: { [key: string]: any };
// } => {
//   const packageViews: { [key: string]: TypeReactComponent } = {};
//   const packageHooks: { [key: string]: TypeReactComponent } = {};
//   const packageOther: { [key: string]: TypeReactComponent } = {};
//   Object.keys(module).forEach((key) => {
//     if (key.startsWith("View")) {
//       packageViews[key] = module[key];
//     } else if (key.startsWith("use")) {
//       packageHooks[key] = module[key];
//     } else {
//       packageOther[key] = module[key];
//     }
//   });
//   return { packageViews, packageHooks, packageOther };
// };

// export const ViewPackageItem = ({ packageName }: any) => {
//   const packageDeclarations = UtilityPackageList[packageName];
//   const packageSorted = filterPackageList(packageDeclarations);
//   return (
//     <ViewContainerStatic>
//       <ViewTypographyText>
//         {JSON.stringify(packageSorted, null, 2)}
//       </ViewTypographyText>
//     </ViewContainerStatic>
//   );
// };


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
