// 'Auth' is a module for authentication sessions for a 'user'.

import { instanceSupabaseClient } from "./supabase";
import {
  useQueryerMutation,
  useQueryerQuery,
  useQueryerClient,
} from "./queryer";

// Signup (Todo)

export interface interfaceAuthSignup {
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
}: interfaceAuthSignup) => {
  const queryClient = useQueryerClient();
  if (password !== confirmPassword) {
    console.log("Passwords do not match");
  }
  return useQueryerMutation(
    ["auth", "signup"],
    () => requestAuthSignup({ email, password }),
    {
      onSuccess: () => {
        queryClient.invalidateQueries(["auth", "session"]);
      },
    }
  );
};

// Signout

export const requestAuthSignout = async () => {
  await instanceSupabaseClient.auth.signOut();
};

// hook to wrap requestAuthSignout
export const useAuthSignout = () => {
  const queryClient = useQueryerClient();
  return useQueryerMutation(["auth", "signout"], () => requestAuthSignout(), {
    onSuccess: () => {
      queryClient.invalidateQueries(["auth", "session"]);
    },
  });
};

// Signin

export interface interfaceAuthSignin {
  email: string;
  password: string;
}

export const requestAuthSignin = async ({
  email,
  password,
}: interfaceAuthSignin) => {
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
export const useAuthSignin = ({ email, password }: interfaceAuthSignin) => {
  const queryClient = useQueryerClient();
  return useQueryerMutation(
    ["auth", "signin"],
    () => requestAuthSignin({ email, password }),
    {
      onSuccess: () => {
        queryClient.invalidateQueries(["auth", "session"]);
      },
    }
  );
};

// Reset (Todo)

export interface interfaceAuthReset {
  email: string;
}

export const requestAuthReset = async (props: interfaceAuthReset) => {
  await instanceSupabaseClient.auth.resetPasswordForEmail(props.email, {
    redirectTo: "https://orgmenta.com/update-password", // Not yet functional
  });
};

// hook to wrap requestAuthReset
export const useAuthReset = ({ email }: interfaceAuthReset) => {
  return useQueryerMutation(["auth", "reset"], () =>
    requestAuthReset({ email })
  );
};

// Session

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

// Options

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
