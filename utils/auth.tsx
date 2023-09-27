// 'Auth' is a module for authentication sessions for a 'user'.

import { instanceSupabaseClient } from "./supabase";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

// Signup (Todo)

export interface interfaceAuthSignup {
    email: string;
    password: string;
    confirmPassword: string;
}

export interface interfaceSuperBaseSignup {
    email: string;
    password: string;
}

export const requestAuthSignup = async ({
  email,
  password,
}: interfaceSuperBaseSignup) => {
  const { data, error } = await instanceSupabaseClient.auth.signUp({
    email,
    password,
  });
  if (error) {
    throw new Error(error.message);
  }
  return data;
};

export const useAuthSignup = ({
  // hook to wrap requestAuthSignup
  email,
  password,
  confirmPassword,
}: interfaceAuthSignup) => {
  const queryClient = useQueryClient();

  if (password !== confirmPassword) {
    console.log("Passwords do not match");
  }

    return useMutation(
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

export const useAuthSignout = () => {
    const queryClient = useQueryClient();

    return useMutation(["auth", "signout"], () => requestAuthSignout(), {
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

export const useAuthSignin = ({ email, password }: interfaceAuthSignin) => {
    const queryClient = useQueryClient();

    return useMutation(
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

export const useAuthReset = ({ email }: interfaceAuthReset) => {
    return useMutation(["auth", "reset"], () => requestAuthReset({ email }));
};

// Session

export const requestAuthSession = async () => {
    return await instanceSupabaseClient.auth.getSession();
};

export const useAuthSession = () => {
    const query = useQuery({
        queryKey: ["auth", "session"],
        queryFn: () =>
            requestAuthSession().then((response: any) => {
                // console.log('response',response)
                if (response) {
                    return {
                        ...response.data,
                        isSignedIn: !!response?.data?.session?.user?.email,
                        currentStatus: response?.data?.session?.user?.email
                            ? "Signed In"
                            : "Signed Out",
                        currentUser:
                            response?.data?.session?.user?.email || "Guest",
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

export const optionsAuthMain = [
  // list of available options to the user regarding their session
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
