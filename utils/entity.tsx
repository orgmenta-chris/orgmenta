import React, { memo } from 'react';
import { v4 as uuid} from 'uuid'
import { instanceSupabaseClient, handleSupabaseResponse } from './supabase'
import { useQuery, useMutation } from '@tanstack/react-query'
import { TextInput, View, Text, Pressable } from 'react-native';
import { Link, useLocation } from 'react-router-dom'

import { View as TableExample,  View as ListExample, View as CalendarExample } from 'react-native';


// Components

export const mapEntityComponents:any= {
  table: TableExample,
  list: ListExample,
  calendar: CalendarExample
};


// Switch

export const ViewEntitySwitch = ({id}:any) => {
  return (
    <View style={{flexDirection:'row'}}>
      <Link style={{padding:5}} to='list'>List</Link>
      <Link style={{padding:5}} to='table'>Table</Link>
      <Link style={{padding:5}} to='calendar'>Calendar</Link>
      {/* <Pressable style={{backgroundColor:'lighblue',padding:5}}>Table</Pressable>
      <Pressable style={{backgroundColor:'lighblue',padding:5}}>List</Pressable>
      <Pressable style={{backgroundColor:'lighblue',padding:5}}>Etc.</Pressable> */}
    </View>
  )
}


// Array

export const useEntityArray = ({...Input})=> {
  const query = useQuery({
      queryKey:['entities','array','add_relevant_props_here'],
      queryFn:()=>{
          return instanceSupabaseClient
              .from("entities")
              .select()
              .limit(10) // temporary limit, feel free to remove this or make pagination dynamic if needed.
              .then(response=>response.data)
      },
      enabled: true
      // ...props
  });
  return query
}

export const ViewEntityArray = memo(({source = 'TableExample' }:any) => {
  // const location = useLocation();
  // const Component = location && mapEntityComponents[location?.pathname?.split('/')?.[3]];
  // return <Component />;
  return <Text>Entity Display goes here </Text>
});