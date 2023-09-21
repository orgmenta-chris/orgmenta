import React, { memo } from 'react';
import { createUuid4, typeUuid4, validateUuid4 } from './uuid' // note that we generate the id for tables here on the client / edge side (not the cloud db side), so that we can make immediate/optimistic changes to the ui & cache.
import { instanceSupabaseClient, handleSupabaseResponse } from './supabase'
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { TextInput, View, Text, Pressable } from 'react-native';
import { Link, useLocation } from 'react-router-dom'
import { ViewListMain } from './list'
import { ViewTableMain,useTableColumns } from '../components/displays/table/table'
import { ViewJsonMain } from './json'
import { ViewPodsMain } from '../components/displays/pods/pods'
import { useState } from 'react'
import { useAttributeUnioned} from './attribute'
import { data } from './static'

// Tabs

export const ViewEntityTabs = ({id}:any) => {
  const path = useLocation().pathname?.split('/')
  return (
    <View style={{flexDirection:'row'}}>
      {/* 
      <Link style={{padding:5}} to='list'>Form</Link> */}
      <Link style={{padding:5, backgroundColor:(path[3]==='pods'?'lightgray':'transparent')}} to={`/entity/` +path[2]+'/pods'}>Pods</Link>
      <Link style={{padding:5, backgroundColor:(path[3]==='form'?'lightgray':'transparent')}} to={`/entity/` +path[2]+'/form'}>Form</Link>
      <Link style={{padding:5, backgroundColor:(path[3]==='list'?'lightgray':'transparent')}} to={`/entity/` +path[2]+'/list'}>List</Link>
      <Link style={{padding:5, backgroundColor:(path[3]==='table'?'lightgray':'transparent')}} to={`/entity/` +path[2]+'/table'}>Table</Link>
      <Link style={{padding:5, backgroundColor:(path[3]==='calendar'?'lightgray':'transparent')}} to={`/entity/` +path[2]+'/calendar'}>Calendar</Link>
      <Link style={{padding:5, backgroundColor:(path[3]==='json'?'lightgray':'transparent')}} to={`/entity/` +path[2]+'/json'}>JSON</Link>
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

export const useEntityArray = (filter_object?:any)=> { // todo: implement filter_array in query function
  const query = useQuery({
      queryKey:['entities','array',filter_object],
      queryFn:()=>{
          return instanceSupabaseClient
              .from("entities_orgmenta")
              // .from("entities")
              .select()
              
              // temp hardcoded filters:
              .contains('categories', [filter_object?.category || 'all']) 

              // .contains('other', { test: 1 }) // Example of how we can add static fields in (e.g. event_start can be in here instead of having to create a new column which is only applicable to events)
              // or we can store this sort of thing in side b of relationships (but that requires a join)
              // todo: implement filter_array here
              .limit(10) // temporary limit, feel free to remove this or make pagination dynamic if needed.
              .then(response=>response.data)
      },
      enabled: true,
      refetchOnMount: true,
  });
  return query
}


// Single

export const useEntitySingle = (props:any)=> { // todo: implement filter_array in query function
  // At the moment, this just uses the categories array (e.g. Accounts > Receivables > Invoices).
  // But once the categories are in supabase (Chris is working on this), this will be changed to use the useQuery function.
  const query = {
    data: data.filter(x=>x.nickname===props.id)?.map(x=>x={...x,title:x.display_singular})
  }
  // const query = useQuery({
  //     queryKey:['entities','single',filter_array],
  //     queryFn:()=>{
  //         return instanceSupabaseClient
  //             .from("entities")
  //             .select('*')
  //             // todo: implement filter_array here
  //             .limit(1)
  //             .then(response=>response.data)
  //     },
  //     enabled: true
  // });
  return query
}


// Count

export const useEntityCount = ({filter_array}:any)=> { // todo: implement filter_array in query function
  const query = useQuery({
      queryKey:['entities','count',filter_array],
      queryFn:()=>{
          return instanceSupabaseClient
              // .from("entities")
              .from("entities_orgmenta")
              .select('*', { count: 'exact', head: true })
               // todo: implement filter_array here
              .then(response=>response)
      },
      enabled: true
  });
  return query
}


// Create

export interface interfaceEntityCreate {
  id: string,
  title: string,
  type: string,
  categories: string[],
  status: string,
  description?: string,
  [key: string]: any
}

export async function validateEntityCreate(
    entity:interfaceEntityCreate,
  ) {
  console.log('todo')
}

export async function requestEntityCreate(
    entity:interfaceEntityCreate,
  ) {
  // console.log('useEntityCreate',entity)
  return await instanceSupabaseClient
    // .from("entities")
    .from("entities_orgmenta")
    .insert(entity)
    .then(handleSupabaseResponse as any)
}

export const useEntityCreate = (props:interfaceEntityCreate) => {
  const queryClient = useQueryClient();
  const { refetch } = useEntityArray()
  return useMutation(
    ["entity", "create"],
    () => requestEntityCreate(props),
    // Future enhancement: Optimistic updates to client side cache. 
    // This will need us to determine which of the queries need to be updated - so we need to find 'filter_object' (see useEntityArray query key)
    // {
    //   onMutate: (newData) => {
    //       // Backup the current cache data
    //       const previousData = queryClient.getQueryData(['entities', 'array']);
    //       // Optimistically update the cache with the new data
    //       queryClient.setQueryData(['entities', 'array'], (oldData:any) => [...oldData, newData]);
    //       // Return the backup to rollback in case of error
    //       return { previousData };
    //   },
    //   onError: (error, newData, context) => {
    //       // Rollback the cache update on error
    //       queryClient.setQueryData(['entities', 'array', filter_object], context.previousData);
    //   },
    //   onSettled: () => {
    //       // Invalidate the query to refetch
    //       queryClient.invalidateQueries(['entities', 'array', filter_object]);
    //   }
    // }
    {
      onSuccess: () => {
        queryClient.invalidateQueries(["entity", "create"]);
        // refetch(); 
      },
    }
  );
}


// Schema

// A hook that filters the useAttributeUnioned data to only show attributes that are relevant to this entity's schema.
// E.g. if this hook is used by an Invoice entity, it will return only the attributes relevant to the invoice (like line_items and balance_due)
// (to do: make dynamic - at the moment it isn't accepting props for the filter)
export const useEntitySchema = () => {
  const query = useAttributeUnioned(["categories","Entity"])
  return query
}

// An example component to show how we can use useEntitySchema
export const ViewEntitySchema = (props:any) => {
  const schema = props.schema;
  return (
    <View style={{flexDirection:'column'}}>
      <Text>ViewEntitySchema</Text>
      {schema?.data?.map((x:any,i:number)=><View key={i} style={{margin:4}}>
        {/* <Text style={{margin:4}}>{Object.keys(x)}</Text> */}
        <Text>{x.focus_columns.display_singular}</Text>
        {/* <Text>{x.auxiliary_columns.display_singular}</Text> */}
      </View>)}
    </View>
  )
}
