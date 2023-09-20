import { instanceSupabaseClient } from './supabase'
import { useQuery } from '@tanstack/react-query'
import { TextInput, View, Text } from 'react-native';
import { useState } from 'react'


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