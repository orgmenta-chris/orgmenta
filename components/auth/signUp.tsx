// import { useState } from "react";
// import { useAuthSignup } from "../../utils/auth"; 
// import {
//   Text,
//   TextInput,
//   Pressable,
//   View,
//   StyleSheet,
//   ActivityIndicator,
// } from "react-native";
// import React from "react";

// const SignUp = () => {
//   const [usernameState, usernameUpdate] = useState("");
//   const [passwordState, passwordUpdate] = useState("");
//   const [confirmPasswordState, confirmPasswordUpdate] = useState("");

//   const signup = useAuthSignup({
//     email: usernameState,
//     password: passwordState,
//     confirmPassword: confirmPasswordState,
//   });

//   return (
//     <View>
//       <>
//         <Text style={{ marginHorizontal: 12 }}>Email</Text>
//         <TextInput
//           style={styles.input}
//           autoComplete="username"
//           placeholder="Email"
//           onChangeText={(value) => usernameUpdate(value)}
//         />
//         <Text style={{ marginHorizontal: 12 }}>Password</Text>
//         <TextInput
//           style={styles.input}
//           secureTextEntry={true}
//           placeholder="Password"
//           onChangeText={(value) => passwordUpdate(value)}
//         />
//         <Text style={{ marginHorizontal: 12 }}>Confirm Password</Text>
//         <TextInput
//           style={styles.input}
//           secureTextEntry={true}
//           placeholder="Confirm password"
//           onChangeText={(value) => confirmPasswordUpdate(value)}
//         />
//         <Pressable
//           style={{
//             flex: 1,
//             justifyContent: "center",
//             alignItems: "center",
//             flexDirection: "row",
//             backgroundColor: "lightblue",
//             gap: 5,
//             marginHorizontal: 12,
//             marginTop: 5,
//             padding: 10,
//             borderRadius: 5,
//             shadowColor: "#000",
//             shadowOffset: {
//               width: 0,
//               height: 2,
//             },
//             shadowOpacity: 0.25,
//             shadowRadius: 4,
//           }}
//           onPress={() => signup.mutate()}
//         >
//           <Text style={{ textAlign: "center" }}>Sign Up</Text>
//           <Text>{signup.isLoading ? <ActivityIndicator /> : null}</Text>
//         </Pressable>

//         {signup.isError ? (
//           <Text
//             style={{
//               textAlign: "center",
//               marginTop: 20,
//               marginHorizontal: 12,
//               padding: 10,
//               borderRadius: 5,
//               backgroundColor: "#d15953",
//             }}
//           >
//             An error occurred: {signup.error?.message}
//           </Text>
//         ) : signup.isSuccess ? (
//           <Text
//             style={{
//               textAlign: "center",
//               marginTop: 20,
//               marginHorizontal: 12,
//               padding: 10,
//               borderRadius: 5,
//               backgroundColor: "#53d17b",
//             }}
//           >
//             Success! Account has been created successfully!
//           </Text>
//         ) : null}
//       </>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   input: {
//     height: 40,
//     margin: 12,
//     borderWidth: 1,
//     padding: 10,
//     borderRadius: 5,
//   },
// });

// export default SignUp;
