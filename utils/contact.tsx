import { useState } from "react";
import { Pressable, ScrollView, Text, TextInput, View } from "react-native";
import { useMutation } from "@tanstack/react-query";
import { instanceSupabaseClient, handleSupabaseResponse } from "./supabase";
import { createUuid4 } from "./uuid";

export const ViewInquiryMain = () => {
  const [state,set] = useState({})
  const create = useInquiryCreate(state);
  return (
    <ScrollView style={{ flexDirection: "column" }}>
      {/* <Text>{JSON.stringify(state, null, 2)}</Text> */}
      <View style={{ flexDirection: "row" }}>
        <Text style={{height: 40, textAlignVertical:'center', flex: 1}}>Name: </Text>
        <TextInput 
          style={{height: 40, textAlignVertical:'center', flex: 3, borderWidth:1}}
          onChangeText={(newData)=>set({...state,name:newData})}
        />
      </View>
      <View style={{ flexDirection: "row" }}>
        <Text style={{height: 40, textAlignVertical:'center', flex: 1}}>Email*: </Text>
        <TextInput 
          style={{height: 40, textAlignVertical:'center', flex: 3, borderWidth:1}}
          onChangeText={(newData)=>set({...state,email:newData})}
        />
      </View>
      <View style={{ flexDirection: "row" }}>
        <Text style={{height: 40, textAlignVertical:'center', flex: 1}}>Message*: </Text>
        <TextInput 
          style={{height: 40, textAlignVertical:'center', flex: 3, borderWidth:1}}
          onChangeText={(newData)=>set({...state,message:newData})}
        />
      </View>
      <Pressable
          disabled={!state?.email || !state?.message}
          style={{ backgroundColor: (state?.name && state?.message ) ? "lightblue" : "gray" }}
          onPress={() => {
            create.mutate();
            set((old) => ({ ...old, id: createUuid4() }));
          }}
        >
        <Text>Submit</Text>
      </Pressable>
      <View style={{ flexDirection: "row" }}>
        <Text style={{textAlign:'center', textAlignVertical:'center', flex: 1}}>
          {/* (status of submission here) */}
          <Text>{JSON.stringify(create, null, 2)}</Text>
        </Text>
      </View>
    </ScrollView>
  );
};


// Create

export async function requestInquiryCreate(data: any) {
  console.log('data',data)
  // return await instanceSupabaseClient
  //   .from("attributes")
  //   .insert(attribute)
  //   .then(handleSupabaseResponse as any);
}

export const useInquiryCreate = (data: any) => {
  return useMutation(["inquiry", "create"], () =>
    requestInquiryCreate(data)
  );
};
