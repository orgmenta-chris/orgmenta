// import { ViewIconMain } from "../../../utils/icon";
// import { useWindowDimensions } from  "../../../utils/window";
// import { useModalVisibility } from "../../../utils/modal";
// import { useBookmarkActive, TypeBookmarkActive } from "../../../utils/bookmark";
// import { Text, Pressable } from "react-native";

// export default function BookmarkWidget() {
//   const window = useWindowDimensions();
//   const bookmarksActive = useBookmarkActive({}) as TypeBookmarkActive;
//   return (
//     <Pressable
//       onPress={useModalVisibility('bookmark')}
//       style={{
//         alignItems: 'center',
//         justifyContent: 'flex-start',
//         flex: 1,
//         flexDirection: 'row'
//       }}
//     >
//       <ViewIconMain
//         name={'bookmark'}
//         source={'Feather'}
//         color={'white'}
//         size={30}
//         style={{
//           alignItems: 'center', 
//           justifyContent: 'center',
//         }}
//       />
//         {window?.width > 600 && <Text selectable={false} numberOfLines={1} style={{minWidth:"100%", paddingLeft: 10, color:'white'}}>{bookmarksActive?.data?.title}</Text>}
//     </Pressable>
//   );
// }