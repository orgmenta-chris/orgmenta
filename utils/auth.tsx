
import { TextInput, View, Text, Pressable } from 'react-native';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { useState } from 'react'
import { instanceSupabaseClient } from './supabase'


// Signin

export interface interfaceAuthSignin {
    email: string;
    password: string;
}
  
export const requestAuthSignin = async ({email, password}:interfaceAuthSignin) => {
    // at the moment, only 'signInWithPassword' is supported. Other signin options will be added in the future.
    const { data, error } = await instanceSupabaseClient.auth.signInWithPassword({
      email, 
      password
    })
    if(error) {
      throw new Error(error.message)
    }
    return data
}

export const useAuthSignin = ({ email, password }: interfaceAuthSignin) => {
    const queryClient = useQueryClient();
    return useMutation(['auth', 'signin'], () => requestAuthSignin({ email, password }), {
      onSuccess: () => {
        // console.log('useAuthSignin onSuccess')
        queryClient.invalidateQueries(['auth', 'session']);
      }
    });
};


// Signout

export const requestAuthSignout = async () => {
    // console.log('requestAuthSignout')
    await instanceSupabaseClient.auth.signOut()
}

export const useAuthSignout = () => {
    const queryClient = useQueryClient();
    return useMutation(['auth', 'signout'], () => requestAuthSignout(), {
      onSuccess: () => {
        // console.log('useAuthSignout onSuccess')
        queryClient.invalidateQueries(['auth', 'session']);
      }
    });
};


// Signup (Todo)

export interface interfaceAuthSignup { // Todo
    email: string;
    password: string;
    // todo
}

export const requestAuthSignup = async () => { // Todo
    // Todo
    // await instanceSupabaseClient.auth.....
}

export const useAuthSignup = ({ email, password }:interfaceAuthSignup) => { // Todo
    // Todo
    // return useMutation(['auth','signup'], () => requestAuthSignup())
}


// Reset (Todo)

export interface interfaceAuthReset {
    email: string;
}

export const requestAuthReset = async(props:interfaceAuthReset) => {
    await instanceSupabaseClient.auth.resetPasswordForEmail(
        props.email, 
        {
            redirectTo: 'https://orgmenta.com/update-password', // Not yet functional
        }
    )
}

export const useAuthReset = ({ email }:interfaceAuthReset) => {
    return useMutation(['auth','reset'], () => requestAuthReset({email}))
}


// Session

export const requestAuthSession = async() => {
    return await instanceSupabaseClient.auth.getSession()
}

export const useAuthSession = () => {
    const query = useQuery({
        queryKey:['auth','session'],
        queryFn:()=>
            requestAuthSession()
            .then((response:any)=>{
                // console.log('response',response)
                if(response){
                    return {
                        ...response.data, 
                        isSignedIn: !!response?.data?.session?.user?.email, 
                        currentStatus: response?.data?.session?.user?.email ? 'Signed In' : 'Signed Out', 
                        currentUser: response?.data?.session?.user?.email || 'Guest' 
                    }
                }else{
                    return {
                        name: "Guest"
                    }
                }
            })
            ,
        
    });
    return query;
}


// Form

export const ViewAuthForm = () => {
    const [usernameState, usernameUpdate] = useState('');
    const [passwordState, passwordUpdate] = useState('');
    const session = useAuthSession()
    const signin = useAuthSignin({email: usernameState, password: passwordState})
    const signout = useAuthSignout()
    return (
        <View>
            <Text>Status</Text>
            <Text>{session?.data?.isSignedIn ? ('Signed in as ' + session.data.currentUser) : 'Signed Out (Guest)'}</Text>
            <Text>Username</Text>
            <TextInput
                autoComplete='username'
                placeholder='Username'
                onChangeText={(value) => usernameUpdate(value)}
            />
            <Text>Password</Text>
            <TextInput 
                secureTextEntry={true}
                placeholder='Password'
                onChangeText={(value) => passwordUpdate(value)}
            />
            {session?.data?.isSignedIn 
                ? <Pressable style={{backgroundColor:'lightblue'}} onPress={()=>signout.mutate()}><Text>Sign Out</Text></Pressable>
                : <Pressable style={{backgroundColor:'lightblue'}} onPress={()=>signin.mutate()}><Text>Sign In</Text></Pressable>
            }
            {/* Testing */}
            {/* <Text>Session Object</Text>
            <Text>{JSON.stringify(session,null,2)}</Text>
            <Text>Signin Object</Text>
            <Text>{JSON.stringify(signin,null,2)}</Text> */}
        </View>
    )
}


// Details

export const ViewAuthDetails = () => {
    const session = useAuthSession({})
    return (
        <View style={{maxWidth:500}}>
            <Text style={{fontWeight:700}}>ViewAuthDetails</Text>
            <Text>{session.data && JSON.stringify(session,null,2)}</Text>
        </View>
    )
}
