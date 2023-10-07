

// import { ViewPageMain } from "../utils/page";
// import { useAuthSession } from "../utils/auth";
// import { ViewUserAttributes } from "../utils/user";
// import { ViewDisplayDynamic } from "../utils/display";
// import { ViewTypographyHeading } from "../utils/typography";
// import { useUserSingle } from "../utils/user";
// import { Text, View } from "react-native";

// export default function UserPage() {
//   const auth = useAuthSession();
//   const user = useUserSingle(auth?.data?.session?.id);
//   console.log(auth?.data)
//   return (
//     <ViewPageMain>
//       <ViewTypographyHeading>User</ViewTypographyHeading>
//       <View style={{ maxWidth: 500 }}>
//         <Text style={{ marginBottom: 10 }}>ViewAuthDetails</Text>
//         {auth.data && (
//           <Text>Logged in as: {auth?.data?.session?.user?.email}</Text>
//         )}
//       </View>
//       <ViewUserAttributes />
//       <ViewDisplayDynamic />
//     </ViewPageMain>
//   );
// }
