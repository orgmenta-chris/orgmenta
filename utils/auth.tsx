// 'Auth' is a module for authentication sessions for a 'user'.

import { instanceSupabaseClient } from "./supabase";
import { ViewTypographyText } from "./typography";
import { ViewContainerStatic } from "./container";
import { ViewIndicatorSpinner } from "./indicator";
import { ViewInputText } from "./input";
import { ViewButtonPressable } from "./button";
import { UtilityStylesheetMain } from "./stylesheet";
import { useReactState } from "./react";
import {
  useQueryerMutation,
  useQueryerQuery,
  useQueryerClient,
} from "./queryer";
import { useAzureSSOStore } from "../states/auth/storeSSO";
import { useEffect, useState } from "react";
import { Modal, View } from "react-native";
import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from "@react-native-google-signin/google-signin";

// STYLES (to be moved to theme once developed)

const styles = UtilityStylesheetMain.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
  },
});

// password reset

export const ViewResetPasswordPrompt = ({ isVisible, onClose }: any) => {
  const [isSuccess, setIsSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [currentUrl, setCurrentUrl] = useState(null);

  const handleResetPassword = async () => {
    /*
    - get current time and 1hr from current time
    - encrypt it to a an access token
    - decrypt the access token after redirection to get the time
    - check if the the time has expired
    - if not, user will be prompted to set the new password
    */
    setIsLoading(true);

    try {
      const { data, error } = await instanceSupabaseClient.auth.updateUser({
        password: newPassword,
      });

      if (error) throw error;

      if (data) {
        console.log(data);

        setIsSuccess(true);
      }
    } catch (error) {
      console.error("Password reset failed:", error);

      throw error;
    }

    setIsLoading(false);
  };

  const resetModal = () => {
    setOldPassword("");
    setNewPassword("");
    setConfirmPassword("");
    setIsSuccess(false);
    onClose();
  };

  return (
    <Modal visible={isVisible} onRequestClose={resetModal}>
      <ViewContainerStatic
        style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
      >
        {isSuccess ? (
          <ViewContainerStatic>
            <ViewTypographyText
              style={{ fontWeight: "bold", textAlign: "center", padding: 10 }}
            >
              Password reset successfully!
            </ViewTypographyText>
            <ViewButtonPressable
              style={{
                flex: 1,
                padding: 5,
                margin: 10,
                borderWidth: 1,
                borderRadius: 5,
                borderColor: "black",
                backgroundColor: "lightblue",
              }}
              onPress={resetModal}
            >
              <ViewTypographyText
                selectable={false}
                style={{ fontWeight: "bold", textAlign: "center" }}
              >
                Close
              </ViewTypographyText>
            </ViewButtonPressable>
          </ViewContainerStatic>
        ) : (
          <View>
            <ViewTypographyText
              style={{ fontWeight: "bold", textAlign: "center", padding: 10 }}
            >
              Enter your old and new passwords
            </ViewTypographyText>
            <ViewInputText
              placeholder="Old Password"
              value={oldPassword}
              onChangeText={setOldPassword}
              secureTextEntry={true}
              style={{
                height: 40,
                margin: 12,
                borderWidth: 1,
                padding: 10,
              }}
            />
            <ViewInputText
              placeholder="New Password"
              value={newPassword}
              onChangeText={setNewPassword}
              secureTextEntry={true}
              style={{
                height: 40,
                margin: 12,
                borderWidth: 1,
                padding: 10,
              }}
            />
            <ViewInputText
              placeholder="Confirm Password"
              value={confirmPassword}
              onChangeText={setConfirmPassword}
              secureTextEntry={true}
              style={{
                height: 40,
                margin: 12,
                borderWidth: 1,
                padding: 10,
              }}
            />
            <ViewButtonPressable
              style={{
                flex: 1,
                padding: 5,
                margin: 10,
                borderWidth: 1,
                borderRadius: 5,
                borderColor: "black",
                backgroundColor: "lightblue",
              }}
              onPress={handleResetPassword}
            >
              <ViewTypographyText
                selectable={false}
                style={{ fontWeight: "bold", textAlign: "center" }}
              >
                Reset Password
              </ViewTypographyText>
              <ViewTypographyText>
                {isLoading ? <ViewIndicatorSpinner /> : null}
              </ViewTypographyText>
            </ViewButtonPressable>
          </View>
        )}
      </ViewContainerStatic>
    </Modal>
  );
};

export const ViewResetPasswordRequest = ({ isVisible, onClose }: any) => {
  const [email, setEmail] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleResetPassword = async () => {
    /*
    - get current time and 1hr from current time
    - encrypt it to a an access token
    - decrypt the access token after redirection to get the time
    - check if the the time has expired
    - if not, user will be prompted to set the new password
    */
    setIsLoading(true);

    try {
      const { data, error } =
        await instanceSupabaseClient.auth.resetPasswordForEmail(email, {
          redirectTo:
            "http://localhost:19006/users/b9795166-24ae-482c-a645-2e51713f00b8/profile",
        });

      if (error) throw error;

      if (data) {
        console.log(data);

        setIsSuccess(true);
      }
    } catch (error) {
      console.error("Password reset failed:", error);

      throw error;
    }

    setIsLoading(false);
  };

  const resetModal = () => {
    setEmail("");
    setIsSuccess(false);
    onClose();
  };

  return (
    <Modal visible={isVisible} onRequestClose={resetModal}>
      <ViewContainerStatic
        style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
      >
        {isSuccess ? (
          <ViewContainerStatic>
            <ViewTypographyText
              style={{ fontWeight: "bold", textAlign: "center", padding: 10 }}
            >
              Password reset link sent successfully!
            </ViewTypographyText>
            <ViewButtonPressable
              style={{
                flex: 1,
                padding: 5,
                margin: 10,
                borderWidth: 1,
                borderRadius: 5,
                borderColor: "black",
                backgroundColor: "lightblue",
              }}
              onPress={resetModal}
            >
              <ViewTypographyText
                selectable={false}
                style={{ fontWeight: "bold", textAlign: "center" }}
              >
                Close
              </ViewTypographyText>
            </ViewButtonPressable>
          </ViewContainerStatic>
        ) : (
          <View>
            <ViewTypographyText
              style={{ fontWeight: "bold", textAlign: "center", padding: 10 }}
            >
              Enter your email to reset your password
            </ViewTypographyText>
            <ViewInputText
              placeholder="Email"
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              style={{
                height: 40,
                margin: 12,
                borderWidth: 1,
                padding: 10,
              }}
            />
            <ViewButtonPressable
              style={{
                flex: 1,
                padding: 5,
                margin: 10,
                borderWidth: 1,
                borderRadius: 5,
                borderColor: "black",
                backgroundColor: "lightblue",
              }}
              onPress={handleResetPassword}
            >
              <ViewTypographyText
                selectable={false}
                style={{ fontWeight: "bold", textAlign: "center" }}
              >
                Request Password Reset
              </ViewTypographyText>
              <ViewTypographyText>
                {isLoading ? <ViewIndicatorSpinner /> : null}
              </ViewTypographyText>
            </ViewButtonPressable>
          </View>
        )}
      </ViewContainerStatic>
    </Modal>
  );
};

export const ViewPasswordReset = () => {
  const [isResetPasswordModalVisible, setIsResetPasswordModalVisible] =
    useState(false);

  const listenToAuthEvent = () => {
    instanceSupabaseClient.auth.onAuthStateChange((event, session) => {
      if (event == "INITIAL_SESSION") {
        console.log(`${event}`, JSON.stringify(session));

        // show screen to update user's password
        setIsResetPasswordModalVisible(true);
      } else {
        console.log("Nothing to see here.");
      }
      // console.log(
      //   `event: ${JSON.stringify(event)}` +
      //     "\n" +
      //     `session: ${JSON.stringify(session)}`
      // );
    });
  };

  useEffect(() => {
    listenToAuthEvent();
  }, []);

  return (
    <ViewContainerStatic>
      <ViewResetPasswordPrompt
        isVisible={isResetPasswordModalVisible}
        onClose={() => setIsResetPasswordModalVisible(false)}
      />
    </ViewContainerStatic>
  );
};

// SIGNUP (Todo / The View is complete, the others are placeholders that are no longer up to date. abstract out of the view into them)

export type TypeAuthSignup = {
  email: string;
  password: string;
  confirmPassword: string;
};

export interface interfaceSuperbaseSignup {
  email: string;
  password: string;
}

export const requestAuthSignup = async ({
  email,
  password,
}: interfaceSuperbaseSignup) => {
  const { data, error } = await instanceSupabaseClient.auth.signUp({
    email,
    password,
  });
  if (error) {
    throw new Error(error.message);
  }
  return data;
};

export const requestSignInWithAzure = async () => {
  const { data, error } = await instanceSupabaseClient.auth.signInWithOAuth({
    provider: "azure",
    options: {
      scopes: "email",
    },
  });

  if (error) throw new Error(error.message);

  return data;
};

export const requestSignInWithTwitter = async () => {
  const { data, error } = await instanceSupabaseClient.auth.signInWithOAuth({
    provider: "twitter",
  });

  if (error) throw new Error(error.message);

  return data;
};

export const requestSignInWithGitHub = async () => {
  const { data, error } = await instanceSupabaseClient.auth.signInWithOAuth({
    provider: "github",
  });

  if (error) throw new Error(error.message);

  return data;
};

// export const requestSignInWithGoogle = async () => {
//   try {
//     await GoogleSignin.hasPlayServices();
//     const userInfo = await GoogleSignin.signIn();
//     if (userInfo.idToken) {
//       const { data, error } =
//         await instanceSupabaseClient.auth.signInWithIdToken({
//           provider: "google",
//           token: userInfo.idToken,
//         });
//       console.log(error, data);
//     } else {
//       throw new Error("no ID token present!");
//     }
//   } catch (error: any) {
//     if (error.code === statusCodes.SIGN_IN_CANCELLED) {
//       console.log("user cancelled the login flow");
//     } else if (error.code === statusCodes.IN_PROGRESS) {
//       console.log("operation (e.g. sign in) is in progress already");
//     } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
//       console.log("play services not available or outdated");
//     } else {
//       console.log("some other error happened");
//     }
//   }
// };

// hook to wrap requestAuthSignup
export const useAuthSignup = ({
  email,
  password,
  confirmPassword,
}: TypeAuthSignup) => {
  const queryerClient = useQueryerClient();
  if (password !== confirmPassword) {
    console.error("Passwords do not match");
  }
  return useQueryerMutation(
    ["auth", "signup"],
    () => requestAuthSignup({ email, password }),
    {
      onSuccess: () => {
        queryerClient.invalidateQueries(["auth", "session"]);
      },
    }
  );
};

export const useAzureSignin = () => {
  const queryerClient = useQueryerClient();
  return useQueryerMutation(
    ["auth", "signup"],
    () => requestSignInWithAzure(),
    {
      onSuccess: () => {
        queryerClient.invalidateQueries(["auth", "session"]);
      },
    }
  );
};

export const useTwitterSignin = () => {
  const queryerClient = useQueryerClient();
  return useQueryerMutation(
    ["auth", "signup"],
    () => requestSignInWithTwitter(),
    {
      onSuccess: () => {
        queryerClient.invalidateQueries(["auth", "session"]);
      },
    }
  );
};

export const useGitHubSignin = () => {
  const queryerClient = useQueryerClient();
  return useQueryerMutation(
    ["auth", "signup"],
    () => requestSignInWithGitHub(),
    {
      onSuccess: () => {
        queryerClient.invalidateQueries(["auth", "session"]);
      },
    }
  );
};

// export const useGoogleSignin = () => {
//   const queryerClient = useQueryerClient();
//   return useQueryerMutation(
//     ["auth", "signup"],
//     () => requestSignInWithGoogle(),
//     {
//       onSuccess: () => {
//         queryerClient.invalidateQueries(["auth", "session"]);
//       },
//     }
//   );
// };

export const ViewAuthSignup = () => {
  const [usernameState, usernameUpdate] = useReactState("");
  const [passwordState, passwordUpdate] = useReactState("");
  const [confirmPasswordState, confirmPasswordUpdate] = useReactState("");
  const signup = useAuthSignup({
    email: usernameState,
    password: passwordState,
    confirmPassword: confirmPasswordState,
  });
  return (
    <ViewContainerStatic>
      <>
        <ViewTypographyText style={{ marginHorizontal: 12 }}>
          Email
        </ViewTypographyText>
        <ViewInputText
          style={styles.input}
          autoComplete="username"
          placeholder="Email"
          onChangeText={(value) => usernameUpdate(value)}
        />
        <ViewTypographyText style={{ marginHorizontal: 12 }}>
          Password
        </ViewTypographyText>
        <ViewInputText
          style={styles.input}
          secureTextEntry={true}
          placeholder="Password"
          onChangeText={(value) => passwordUpdate(value)}
        />
        <ViewTypographyText style={{ marginHorizontal: 12 }}>
          Confirm Password
        </ViewTypographyText>
        <ViewInputText
          style={styles.input}
          secureTextEntry={true}
          placeholder="Confirm password"
          onChangeText={(value) => confirmPasswordUpdate(value)}
        />
        <ViewButtonPressable
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "row",
            backgroundColor: "lightblue",
            gap: 5,
            marginHorizontal: 12,
            marginTop: 5,
            padding: 10,
            borderRadius: 5,
            shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 4,
          }}
          onPress={() => signup.mutate()}
        >
          <ViewTypographyText style={{ textAlign: "center" }}>
            Sign Up
          </ViewTypographyText>
          <ViewTypographyText>
            {signup.isLoading ? <ViewIndicatorSpinner /> : null}
          </ViewTypographyText>
        </ViewButtonPressable>
        {signup.isError ? (
          <ViewTypographyText
            style={{
              textAlign: "center",
              marginTop: 20,
              marginHorizontal: 12,
              padding: 10,
              borderRadius: 5,
              backgroundColor: "#d15953",
            }}
          >
            An error occurred: {(signup.error as any)?.message}
          </ViewTypographyText>
        ) : signup.isSuccess ? (
          <ViewTypographyText
            style={{
              textAlign: "center",
              marginTop: 20,
              marginHorizontal: 12,
              padding: 10,
              borderRadius: 5,
              backgroundColor: "#53d17b",
            }}
          >
            Success! Account has been created successfully!
          </ViewTypographyText>
        ) : null}
      </>
    </ViewContainerStatic>
  );
};

// SIGNOUT

export const requestAuthSignout = async () => {
  await instanceSupabaseClient.auth.signOut();
};

export const requestSSOAuthSignout = async () => {
  await instanceSupabaseClient.auth.signOut();
};

// hook to wrap requestAuthSignout
export const useAuthSignout = () => {
  const queryerClient = useQueryerClient();
  return useQueryerMutation(["auth", "signout"], () => requestAuthSignout(), {
    onSuccess: () => {
      queryerClient.invalidateQueries(["auth", "session"]);
    },
  });
};

export const useAzureSignout = () => {
  const queryerClient = useQueryerClient();
  return useQueryerMutation(
    ["auth", "signout"],
    () => requestSSOAuthSignout(),
    {
      onSuccess: () => {
        queryerClient.invalidateQueries(["auth", "session"]);
      },
    }
  );
};

// SIGNIN (The View is complete, the others are placeholders that are no longer up to date. abstract out of the view into them)

export const ViewAuthSignin = () => {
  const [usernameState, usernameUpdate] = useReactState("");
  const [passwordState, passwordUpdate] = useReactState("");

  const signin = useAuthSignin({
    email: usernameState,
    password: passwordState,
  });

  return (
    <ViewContainerStatic>
      <ViewTypographyText style={{ marginHorizontal: 12 }}>
        Email
      </ViewTypographyText>
      <ViewInputText
        style={styles.input}
        autoComplete="username"
        placeholder="Email"
        onChangeText={(value) => usernameUpdate(value)}
      />
      <ViewTypographyText style={{ marginHorizontal: 12 }}>
        Password
      </ViewTypographyText>
      <ViewInputText
        style={styles.input}
        secureTextEntry={true}
        placeholder="Password"
        onChangeText={(value) => passwordUpdate(value)}
      />
      <ViewButtonPressable
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "row",
          backgroundColor: "lightblue",
          gap: 5,
          marginHorizontal: 12,
          marginTop: 5,
          padding: 10,
          borderRadius: 5,
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.25,
          shadowRadius: 4,
        }}
        onPress={() => signin.mutate()}
      >
        <ViewTypographyText style={{ textAlign: "center" }}>
          Sign In
        </ViewTypographyText>
        <ViewTypographyText>
          {signin.isLoading ? <ViewIndicatorSpinner /> : null}
        </ViewTypographyText>
      </ViewButtonPressable>
      {signin.isError ? (
        <ViewTypographyText
          style={{
            textAlign: "center",
            marginTop: 20,
            marginHorizontal: 12,
            padding: 10,
            borderRadius: 5,
            backgroundColor: "#d15953",
          }}
        >
          An error occurred: {(signin.error as any)?.message}
        </ViewTypographyText>
      ) : signin.isSuccess ? (
        <ViewTypographyText
          style={{
            textAlign: "center",
            marginTop: 20,
            marginHorizontal: 12,
            padding: 10,
            borderRadius: 5,
            backgroundColor: "#53d17b",
          }}
        >
          Logged in successfully!
        </ViewTypographyText>
      ) : null}
    </ViewContainerStatic>
  );
};

export const ViewAzureSignin = () => {
  const signin = useAzureSignin();
  const ssoSession = useAzureSSOStore((state: any) => state.userSession);

  return (
    <ViewContainerStatic>
      {ssoSession ? (
        <ViewButtonPressable
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "row",
            backgroundColor: "lightblue",
            gap: 5,
            marginHorizontal: 12,
            marginTop: 5,
            padding: 10,
            borderRadius: 5,
            shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 4,
          }}
          onPress={() => signin.mutate()}
        >
          <ViewTypographyText style={{ textAlign: "center" }}>
            Sign In With MS Account
          </ViewTypographyText>
        </ViewButtonPressable>
      ) : (
        <ViewTypographyText>
          {/* {signin.isLoading ? <ViewIndicatorSpinner /> : null} */}
          Successfully Logged in to Supabase
        </ViewTypographyText>
      )}

      {signin.isError ? (
        <ViewTypographyText
          style={{
            textAlign: "center",
            marginTop: 20,
            marginHorizontal: 12,
            padding: 10,
            borderRadius: 5,
            backgroundColor: "#d15953",
          }}
        >
          An error occurred: {(signin.error as any)?.message}
        </ViewTypographyText>
      ) : signin.isSuccess ? (
        <ViewTypographyText
          style={{
            textAlign: "center",
            marginTop: 20,
            marginHorizontal: 12,
            padding: 10,
            borderRadius: 5,
            backgroundColor: "#53d17b",
          }}
        >
          Signing you in!
        </ViewTypographyText>
      ) : null}
    </ViewContainerStatic>
  );
};

export const ViewTwitterSignin = () => {
  const signin = useTwitterSignin();
  const ssoSession = useAzureSSOStore((state: any) => state.userSession);

  return (
    <ViewContainerStatic>
      {ssoSession ? (
        <ViewButtonPressable
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "row",
            backgroundColor: "lightblue",
            gap: 5,
            marginHorizontal: 12,
            marginTop: 5,
            padding: 10,
            borderRadius: 5,
            shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 4,
          }}
          onPress={() => signin.mutate()}
        >
          <ViewTypographyText style={{ textAlign: "center" }}>
            Sign In With X Account
          </ViewTypographyText>
        </ViewButtonPressable>
      ) : (
        <ViewTypographyText>
          {/* {signin.isLoading ? <ViewIndicatorSpinner /> : null} */}
          Successfully Logged in to Supabase
        </ViewTypographyText>
      )}

      {signin.isError ? (
        <ViewTypographyText
          style={{
            textAlign: "center",
            marginTop: 20,
            marginHorizontal: 12,
            padding: 10,
            borderRadius: 5,
            backgroundColor: "#d15953",
          }}
        >
          An error occurred: {(signin.error as any)?.message}
        </ViewTypographyText>
      ) : signin.isSuccess ? (
        <ViewTypographyText
          style={{
            textAlign: "center",
            marginTop: 20,
            marginHorizontal: 12,
            padding: 10,
            borderRadius: 5,
            backgroundColor: "#53d17b",
          }}
        >
          Signing you in!
        </ViewTypographyText>
      ) : null}
    </ViewContainerStatic>
  );
};

export const ViewGitHubSignin = () => {
  const signin = useGitHubSignin();
  const ssoSession = useAzureSSOStore((state: any) => state.userSession);

  return (
    <ViewContainerStatic>
      {ssoSession ? (
        <ViewButtonPressable
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "row",
            backgroundColor: "lightblue",
            gap: 5,
            marginHorizontal: 12,
            marginTop: 5,
            padding: 10,
            borderRadius: 5,
            shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 4,
          }}
          onPress={() => signin.mutate()}
        >
          <ViewTypographyText style={{ textAlign: "center" }}>
            Sign In With GitHub Account
          </ViewTypographyText>
        </ViewButtonPressable>
      ) : (
        <ViewTypographyText>
          {/* {signin.isLoading ? <ViewIndicatorSpinner /> : null} */}
          Successfully Logged in to Supabase
        </ViewTypographyText>
      )}

      {signin.isError ? (
        <ViewTypographyText
          style={{
            textAlign: "center",
            marginTop: 20,
            marginHorizontal: 12,
            padding: 10,
            borderRadius: 5,
            backgroundColor: "#d15953",
          }}
        >
          An error occurred: {(signin.error as any)?.message}
        </ViewTypographyText>
      ) : signin.isSuccess ? (
        <ViewTypographyText
          style={{
            textAlign: "center",
            marginTop: 20,
            marginHorizontal: 12,
            padding: 10,
            borderRadius: 5,
            backgroundColor: "#53d17b",
          }}
        >
          Signing you in!
        </ViewTypographyText>
      ) : null}
    </ViewContainerStatic>
  );
};

// export const ViewGoogleSignIn = () => {
//   const signin = useGoogleSignin();
//   const ssoSession = useAzureSSOStore((state: any) => state.userSession);

//   GoogleSignin.configure({
//     scopes: ["https://www.googleapis.com/auth/drive.readonly"],
//     webClientId: "YOUR CLIENT ID FROM GOOGLE CONSOLE",
//   });

//   return (
//     <ViewContainerStatic>
//       {ssoSession ? (
//         <GoogleSigninButton
//           size={GoogleSigninButton.Size.Wide}
//           color={GoogleSigninButton.Color.Dark}
//           onPress={() => signin.mutate()}
//         />
//       ) : (
//         <ViewTypographyText>
//           {/* {signin.isLoading ? <ViewIndicatorSpinner /> : null} */}
//           Successfully Logged in to Supabase
//         </ViewTypographyText>
//       )}

//       {signin.isError ? (
//         <ViewTypographyText
//           style={{
//             textAlign: "center",
//             marginTop: 20,
//             marginHorizontal: 12,
//             padding: 10,
//             borderRadius: 5,
//             backgroundColor: "#d15953",
//           }}
//         >
//           An error occurred: {(signin.error as any)?.message}
//         </ViewTypographyText>
//       ) : signin.isSuccess ? (
//         <ViewTypographyText
//           style={{
//             textAlign: "center",
//             marginTop: 20,
//             marginHorizontal: 12,
//             padding: 10,
//             borderRadius: 5,
//             backgroundColor: "#53d17b",
//           }}
//         >
//           Signing you in!
//         </ViewTypographyText>
//       ) : null}
//     </ViewContainerStatic>
//   );
// };

export type TypeAuthSignin = {
  email: string;
  password: string;
};

export const requestAuthSignin = async ({
  email,
  password,
}: TypeAuthSignin) => {
  // at the moment, only 'signInWithPassword' is supported. Other signin options will be added in the future.
  const { data, error } = await instanceSupabaseClient.auth.signInWithPassword({
    email,
    password,
  });
  if (error) {
    throw new Error(error.message);
  }
  return data;
};

// hook to wrap requestAuthSignin
export const useAuthSignin = ({ email, password }: TypeAuthSignin) => {
  const queryerClient = useQueryerClient();
  return useQueryerMutation(
    ["auth", "signin"],
    () => requestAuthSignin({ email, password }),
    {
      onSuccess: () => {
        queryerClient.invalidateQueries(["auth", "session"]);
      },
    }
  );
};

// RESET (Todo)

export type TypeAuthReset = {
  email: string;
};

// request a password reset
export const requestAuthReset = async (props: TypeAuthReset) => {
  await instanceSupabaseClient.auth.resetPasswordForEmail(props.email, {
    redirectTo: "https://orgmenta.com/update-password", // Not yet functional
  });
};

// hook to wrap requestAuthReset
export const useAuthReset = ({ email }: TypeAuthReset) => {
  return useQueryerMutation(["auth", "reset"], () =>
    requestAuthReset({ email })
  );
};

// SESSION

export const requestAuthSession = async () => {
  return await instanceSupabaseClient.auth.getSession();
};

export const refreshAuthSession = async () => {
  const { data: sessionData, error: sessionError } =
    await instanceSupabaseClient.auth.getSession();

  // @ts-ignore
  if (sessionData && sessionData?.expires_at * 1000 < Date.now()) {
    // console.log(sessionData);

    const { data: refreshData, error: refreshError } =
      await instanceSupabaseClient.auth.refreshSession();

    if (refreshData) console.log(refreshData);

    if (refreshError) throw refreshError;
  } else console.log("session not expired");

  if (sessionError) throw sessionError;
};

// hook to wrap requestAuthSession
export const useAuthSession = () => {
  const query = useQueryerQuery({
    queryKey: ["auth", "session"],
    queryFn: () =>
      requestAuthSession().then((response: any) => {
        const currentUser = response?.data?.session?.user?.email || "Guest";
        // Nicknames - These are temporary - We will add a 'nickname' field in the db to replace this.
        const nickLower = currentUser.split("@")?.[0];
        const nickUpper =
          nickLower.charAt(0).toUpperCase() + nickLower.slice(1);
        if (response) {
          return {
            ...response.data,
            isSignedIn: !!response?.data?.session?.user?.email,
            currentStatus: response?.data?.session?.user?.email
              ? "Signed In"
              : "Signed Out",
            currentUser,
            nickLower,
            nickUpper,
          };
        } else {
          return {
            name: "Guest",
          };
        }
      }),
  });
  return query;
};

// OPTIONS

// list of available options to the user regarding their session
export const optionsAuthMain = [
  {
    title: "Switch",
    iconName: "arrow-switch",
    iconSource: "Octicons",
    description: "Switch to another user/guest",
  },
  {
    title: "Signin",
    iconName: "login",
    iconSource: "MaterialIcons",
    description: "Sign in/up",
  },
  {
    title: "Signout",
    iconName: "logout",
    iconSource: "MaterialIcons",
    description: "Sign out",
  },
  {
    title: "ForgotPassword",
    iconName: "questioncircleo",
    iconSource: "AntDesign",
    description: "Forgot Password/Username?",
  },
];
