import React, { memo } from 'react';
import { createUuid4, typeUuid4, validateUuidType } from './uuid' // note that we generate the id for tables here on the client / edge side (not the cloud db side), so that we can make immediate/optimistic changes to the ui & cache.
import { instanceSupabaseClient, handleSupabaseResponse } from './supabase'
import { useQuery, useMutation } from '@tanstack/react-query'
import { TextInput, View, Text, Pressable } from 'react-native';
import { ViewListMain } from './list'
// import { ViewTableMain,useTableColumns } from './table'
// import { ViewJsonMain } from './json'
import { useState } from 'react'
import { useAttributeUnioned} from './attribute'


// Array

export const requestAuxiliaryArray = (filter_array:any)=> { // todo: implement filter_array in query function
    const query = 
        instanceSupabaseClient
        .from("entities-auxiliary")
        .select()
    if(filter_array?.related){ query
        .contains('related', 'examplefocusid') 
    }
    query
        .limit(10) // temporary limit, feel free to remove this or make pagination dynamic if needed.
        .then(response=>response.data)
    return query
  }

export const useAuxiliaryArray = ({filter_array}: { filter_array: string | number }) => {
    const queryKey: (string | number)[] = ['auxiliary', 'array', filter_array];
    const queryFn = async () => {
      const response = await instanceSupabaseClient
        .from("auxiliary")
        .select('id')
        .limit(10);
      return response.data;
    };
    const query = useQuery<any, Error>(queryKey, queryFn, { enabled: true });
    return query;
}


// Form

export const ViewAuxiliaryExample = ({}:any) => {
  const [titleState, titleSet] = useState('');
  return (
    <View style={{flexDirection:'column'}}>
      <View style={{flexDirection:'row'}}>
        <Text>Title</Text>
        <TextInput onChangeText={(value)=>titleSet(value)}></TextInput>
      </View>
      {/* <View style={{flexDirection:'row'}}>
        <Text>Testing:</Text>
        <Text>{titleState}</Text>
        <Text>{typeState}</Text>
        <Text>{classState}</Text>
        <Text>{statusState}</Text>
        <Text>{descriptionState}</Text>
      </View> */}
    </View>
  )
}
