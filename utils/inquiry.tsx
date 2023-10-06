import { useState } from "react";
import { Pressable, ScrollView, Text, TextInput, View } from "react-native";
import { useMutation } from "@tanstack/react-query";
import { instanceSupabaseClient, handleSupabaseResponse } from "./supabase";

// Main

interface TypeInquiryMain {
  name?: string;
  email?: string;
  message?: string;
}

export const ViewInquiryMain = () => {
  const [state, set] = useState<TypeInquiryMain>({});
  const create = useInquiryCreate(state, ()=>set({}));
  return (
    <ScrollView style={{ flexDirection: "column"}}>
      {/* <Text>{JSON.stringify(state, null, 2)}</Text> */}
      <View style={{ flexDirection: "row", margin:5,   }}>
        <Text style={{height: 30, verticalAlign:'middle', flex: 1}}>Name: </Text>
        <TextInput 
          value={state.name || ''}
          style={{height: 30, verticalAlign:'middle', flex: 3, borderWidth:1}}
          onChangeText={(newData)=>set({...state,name:newData})}
        />
      </View>
      <View style={{ flexDirection: "row", margin:5,   }}>
        <Text style={{height: 30, verticalAlign:'middle', flex: 1}}>Email*: </Text>
        <TextInput
          value={state.email || ''} 
          style={{height: 30, verticalAlign:'middle', flex: 3, borderWidth:1}}
          onChangeText={(newData)=>set({...state,email:newData})}
        />
      </View>
      <View style={{ flexDirection: "row", margin:5,   }}>
        <Text style={{height: 30, verticalAlign:'middle', flex: 1}}>Message*: </Text>
        <TextInput 
          value={state.message || ''}
          style={{height: 30, verticalAlign:'middle', flex: 3, borderWidth:1}}
          onChangeText={(newData)=>set({...state,message:newData})}
        />
      </View>
      <Pressable
          disabled={!state?.email || !state?.message}
          style={{ borderRadius:5, padding: 10, margin:5,  backgroundColor: (state?.email && state?.message ) ? "lightblue" : "gray" }}
          onPress={() => {
            create.mutate();
          }}
        >
        <Text>Submit</Text>
      </Pressable>
      <View style={{ flexDirection: "row" }}>
        <Text style={{textAlign:'center', verticalAlign:'middle', flex: 1}}>
          <Text>
            {create.isLoading && `Submitting...`}
            {create.isError && `Error: ${JSON.stringify(create.error,null,2)}`}
            {create.isSuccess && `Submitted. Thank you, we will respond ASAP.`}
          </Text>
        </Text>
      </View>
    </ScrollView>
  );
};


// Create

export async function requestInquiryCreate(data: any) {
  return await instanceSupabaseClient
    .from("inquiries")
    .insert(data)
    .then(handleSupabaseResponse as any);
}

export const useInquiryCreate = (data: any, resetState: () => void) => {
  return useMutation(["inquiry", "create"], () => requestInquiryCreate(data), {
    onSuccess: () => {
      resetState();
    },
  });
};
