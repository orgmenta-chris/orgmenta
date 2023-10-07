
// import { useModalVisibility } from "../../../utils/modal";
// import { useState } from "react";
// import { Pressable, Image, ImageProps } from "react-native";

// export default function OrgmentaWidget() {
//   // const orgmentaActive = useOrgmentaActive({}) as TypeOrgmentaActive;
//   const [widgetHover, setWidgetHover] = useState(false);
//   return (
//     <Pressable
//       style={{flexDirection: 'row',justifyContent: 'center', height: '100%'}}
//       onPress={useModalVisibility('orgmenta')}
//       onHoverIn={() => setWidgetHover(true)}
//       onHoverOut={() => setWidgetHover(false)}
//     >
//       <Image
//         resizeMode={'cover'}
//         style={{
//           width: widgetHover ? 150 : 50,
//           height: "120%",
//           top:-5
//         }}
//         source={widgetHover ? require('../../../assets/logo/full/white.png') : require('../../../assets/logo/symbol/white.png')}
//       />
//     </Pressable>
//   );
// }