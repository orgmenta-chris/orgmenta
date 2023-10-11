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

// SIGNUP (Todo / The View is complete, the others are placeholders that are no longer up to date. abstract out of the view into them)

export type TypeAuthSignup = {
  email: string;
  password: string;
  confirmPassword: string;
}

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

// hook to wrap requestAuthSignout
export const useAuthSignout = () => {
  const queryerClient = useQueryerClient();
  return useQueryerMutation(["auth", "signout"], () => requestAuthSignout(), {
    onSuccess: () => {
      queryerClient.invalidateQueries(["auth", "session"]);
    },
  });
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
      <ViewTypographyText style={{ marginHorizontal: 12 }}>Email</ViewTypographyText>
      <ViewInputText
        style={styles.input}
        autoComplete="username"
        placeholder="Email"
        onChangeText={(value) => usernameUpdate(value)}
      />
      <ViewTypographyText style={{ marginHorizontal: 12 }}>Password</ViewTypographyText>
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
        <ViewTypographyText style={{ textAlign: "center" }}>Sign In</ViewTypographyText>
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
}

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
