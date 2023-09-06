import React, { memo } from 'react';
import { v4 as uuid} from 'uuid'
import { instanceSupabaseClient, handleSupabaseResponse } from './supabase'
import { useQuery, useMutation } from '@tanstack/react-query'
import { TextInput, View, Text, Pressable } from 'react-native';
import { Link, useLocation, Route, Routes } from 'react-router-dom'
import { ViewListMain } from './list'
import { ViewTableMain,useTableColumns } from './table'
import { ViewJsonMain } from './json'
import { ViewIconMain } from './icon'
import { ViewPodsMain } from './pods'
import { ViewFormMain } from './form'
import { useState } from 'react'
import { useAttributeUnioned} from './attribute'


// Tabs

export const ViewEntityTabs = ({id}:any) => {
  const path = useLocation().pathname?.split('/')
  return (
    <View style={{flexDirection:'row'}}>
      {/* 
      <Link style={{padding:5}} to='list'>Form</Link> */}
      <Link style={{padding:5, backgroundColor:(path[3]==='pods'&&'lightgray')}} to={`/entity/` +path[2]+'/pods'}>Pods</Link>
      <Link style={{padding:5, backgroundColor:(path[3]==='form'&&'lightgray')}} to={`/entity/` +path[2]+'/form'}>Form</Link>
      <Link style={{padding:5, backgroundColor:(path[3]==='list'&&'lightgray')}} to={`/entity/` +path[2]+'/list'}>List</Link>
      <Link style={{padding:5, backgroundColor:(path[3]==='table'&&'lightgray')}} to={`/entity/` +path[2]+'/table'}>Table</Link>
      <Link style={{padding:5, backgroundColor:(path[3]==='calendar'&&'lightgray')}} to={`/entity/` +path[2]+'/calendar'}>Calendar</Link>
      <Link style={{padding:5, backgroundColor:(path[3]==='json'&&'lightgray')}} to={`/entity/` +path[2]+'/json'}>JSON</Link>
      {/* <Link style={{padding:5}} to={`/entity/` +path[2]+'/kanban'}>Kanban</Link> */}
      {/* <Link style={{padding:5}} to={`/entity/` +path[2]+'/timeline'}>Timeline</Link> */}
      {/* <Link style={{padding:5}} to={`/entity/` +path[2]+'/threads'}>Threads</Link> */}
      {/* <Link style={{padding:5}} to={`/entity/` +path[2]+'/path'}>Path</Link> */}
      {/* <Link style={{padding:5}} to={`/entity/` +path[2]+'/nodes'}>Nodes</Link> */}
      {/* <Link style={{padding:5}} to={`/entity/` +path[2]+'/spacial'}>Spacial</Link> */}
      {/* <Link style={{padding:5}} to={`/entity/` +path[2]+'/map'}>Map</Link> */}
      {/* <Link style={{padding:5}} to={`/entity/` +path[2]+'/chart'}>Chart</Link> */}
    </View>
  )
}


// Array

export const useEntityArray = ({filter_array}:any)=> { // todo: implement filter_array in query function
  const query = useQuery({
      queryKey:['entities','array',filter_array],
      queryFn:()=>{
          return instanceSupabaseClient
              .from("entities")
              .select()
              // .contains('other', { test: 1 }) // Example of how we can add static fields in (e.g. event_start can be in here instead of having to create a new column which is only applicable to events)
              // or we can store this sort of thing in side b of relationships (but that requires a join)
              // todo: implement filter_array here
              .limit(10) // temporary limit, feel free to remove this or make pagination dynamic if needed.
              .then(response=>response.data)
      },
      enabled: true
  });
  return query
}


// Single

export const useEntitySingle = ({filter_array}:any)=> { // todo: implement filter_array in query function
  const query = useQuery({
      queryKey:['entities','single',filter_array],
      queryFn:()=>{
          return instanceSupabaseClient
              .from("entities")
              .select('*')
              // todo: implement filter_array here
              .limit(1)
              .then(response=>response.data)
      },
      enabled: true
  });
  return query
}


// Count

export const useEntityCount = ({filter_array}:any)=> { // todo: implement filter_array in query function
  const query = useQuery({
      queryKey:['entities','count',filter_array],
      queryFn:()=>{
          return instanceSupabaseClient
              .from("entities")
              .select('*', { count: 'exact', head: true })
               // todo: implement filter_array here
              .then(response=>response)
      },
      enabled: true
  });
  return query
}


// Form

export const ViewEntityAdd = ({}:any) => {
  const [titleState, titleSet] = useState('');
  const [typeState, typeSet] = useState('');
  const [classState, classSet] = useState('');
  const [statusState, statusSet] = useState('');
  const [descriptionState, descriptionSet] = useState('');
  return (
    <View style={{flexDirection:'column'}}>
      <View style={{flexDirection:'row'}}>
        <Text>Title</Text>
        <TextInput onChangeText={(value)=>titleSet(value)}></TextInput>
      </View>
      <View style={{flexDirection:'row'}}>
        <Text>Type</Text>
        <TextInput onChangeText={(value)=>typeSet(value)}></TextInput>
      </View>
      <View style={{flexDirection:'row'}}>
        <Text>Class</Text>
        <TextInput onChangeText={(value)=>classSet(value)}></TextInput>
      </View>
      <View style={{flexDirection:'row'}}>
        <Text>Status</Text>
        <Pressable 
          style={{backgroundColor:statusState==='0. New'? 'gray' : 'lightblue', margin: 2, padding: 4}}
          onPress={()=>statusSet('0. New')}
        ><Text>0. New</Text></Pressable>
        <Pressable 
          style={{backgroundColor:statusState==='1. Respond'? 'gray' : 'lightblue', margin: 2, padding: 4}}
          onPress={()=>statusSet('1. Respond')}
        ><Text>1. Respond</Text></Pressable>
        <Pressable 
          style={{backgroundColor:statusState==='2. Active'? 'gray' : 'lightblue', margin: 2, padding: 4}}
          onPress={()=>statusSet('2. Active')}
        ><Text>2. Active</Text></Pressable>
        <Pressable 
          style={{backgroundColor:statusState==='3. Waiting'? 'gray' : 'lightblue', margin: 2, padding: 4}}
          onPress={()=>statusSet('3. Waiting')}
        ><Text>3. Waiting</Text></Pressable>
        <Pressable 
          style={{backgroundColor:statusState==='4. Hold'? 'gray' : 'lightblue', margin: 2, padding: 4}}
          onPress={()=>statusSet('4. Hold')}
        ><Text>4. Hold</Text></Pressable>
        <Pressable 
          style={{backgroundColor:statusState==='5. Evaluate'? 'gray' : 'lightblue', margin: 2, padding: 4}}
          onPress={()=>statusSet('5. Evaluate')}
        ><Text>5. Evaluate</Text></Pressable>
        <Pressable 
          style={{backgroundColor:statusState==='6. Cancelled'? 'gray' : 'lightblue', margin: 2, padding: 4}}
          onPress={()=>statusSet('6. Cancelled')}
        ><Text>6. Cancelled</Text></Pressable>
        <Pressable 
          style={{backgroundColor:statusState==='7. Complete'? 'gray' : 'lightblue', margin: 2, padding: 4}}
          onPress={()=>statusSet('7. Complete')}
        ><Text>7. Complete</Text></Pressable>
      </View>
      <View style={{flexDirection:'row'}}>
        <Text>Description</Text>
        <TextInput onChangeText={(value)=>descriptionSet(value)}></TextInput>
      </View>
      <View style={{flexDirection:'row'}}>
        <Pressable 
          style={{backgroundColor:'lightblue'}}
          onPress={()=>console.log({
            title: titleState,
            type: typeState,
            class: classState,
            status:statusState,
            description: descriptionState
          })}
        ><Text>Create</Text></Pressable>
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


// Create

export interface interfaceEntityCreate {
  id: string,
  title: string,
  type: string,
  class: string,
  status: string,
  description?: string,
  [key: string]: any
}

export async function requestEntityCreate(
    entity:interfaceEntityCreate,
  ) {
  return await instanceSupabaseClient
    .from("entities")
    .insert(entity)
    .then(handleSupabaseResponse as any)
}

export const useEntityCreate = (props:interfaceEntityCreate) => {
  return useMutation(['entity','create'], () => requestEntityCreate(props))
}


// Schema

// A hook that filters the useAttributeUnioned data to only show attributes that are relevant to this entity's schema.
// E.g. if this hook is used by an Invoice entity, it will return only the attributes relevant to the invoice (like line_items and balance_due)
// (to do: make dynamic - at the moment it isn't accepting props for the filter)
export const useEntitySchema = () => {
  const query = useAttributeUnioned(["Invoice","Entity"])
  return query
}

// An example component to show how we can use useEntitySchema
export const ViewEntitySchema = ({}:any) => {
  const schema = props.schema;
  return (
    <View style={{flexDirection:'column'}}>
      <Text>ViewEntitySchema</Text>
      {schema?.data?.map((x,i)=><View key={i} style={{margin:4}}>
        {/* <Text style={{margin:4}}>{Object.keys(x)}</Text> */}
        <Text>{x.focus_columns.display_singular}</Text>
        {/* <Text>{x.auxiliary_columns.display_singular}</Text> */}
      </View>)}
    </View>
  )
}
