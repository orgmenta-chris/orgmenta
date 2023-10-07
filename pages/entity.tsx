// import { ViewPageMain } from "../utils/page";
// import { ViewDisplayDynamic } from "../utils/display";
// import { ViewActionTabs } from "../utils/action";
// import { ViewFocusMain } from "../utils/focus";
// import { useAuxiliaryArray } from "../utils/auxiliary";
// import { useSpaceState, TypeSpaceState } from "../utils/space";
// import { useEntitySingle, useEntitySchema } from "../utils/entity";
// import { useRouterLocation } from "./../utils/router";
// import { View } from "react-native";

// export default function Entity() {
//   const spaceSelected = useSpaceState(["space", "selected"]);
//   const routerPaths = useRouterLocation()?.paths;
//   const focus = useEntitySingle({ entityFocus: routerPaths?.[2] });
//   const auxiliary = useAuxiliaryArray({
//     space_name: (spaceSelected as TypeSpaceState)?.data?.spacename,
//     filters_array: [], //todo
//     column_names: [], //todo
//   });
//   const schema = useEntitySchema();
//   return (
//     <ViewPageMain>
//       {/* Flex View to keep Action tabs at the bottom of the screen */}
//       <View style={{ flex: 1 }}>
//         {/* Show the 'focus' entity (the primary record being viewed) */}
//         <ViewFocusMain />
//         {/* Show the 'auxiliary' entities (secondary records being vieweed, possibly related to the focus) in whichever mode is selected, e.g. Calendar, Table etc. */}
//         <ViewDisplayDynamic
//           auxiliary={auxiliary}
//           schema={schema}
//           focus={focus}
//           display={routerPaths?.[3]}
//         />
//       </View>
//       {/* Show the actions tabs/links (e.g. add,edit,copy,delete,share etc.*/}
//       <ViewActionTabs auxiliary={auxiliary} schema={schema} focus={focus} />
//     </ViewPageMain>
//   );
// }
