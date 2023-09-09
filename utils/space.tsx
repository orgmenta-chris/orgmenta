// A 'space' is an organisation, business department, division, territory or other company subdivision.

import { useMemberCreate } from './members'
import React, { memo } from 'react';
import { v4 as uuid} from 'uuid' // note that we generate the id for tables here on the client / edge side (not the cloud db side), so that we can make immediate/optimistic changes to the ui & cache.
import { instanceSupabaseClient, handleSupabaseResponse } from './supabase'
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { ScrollView, View, Text, Pressable } from 'react-native';
import { useTableColumns } from './table'
import { useState, useEffect} from 'react'
import {
    createColumnHelper,
    flexRender,
    getCoreRowModel,
    useReactTable,
    ColumnResizeMode,
    ColumnDef,
} from '@tanstack/react-table'


// Create (note: This just creates the space. You also need to set up tables and other space configurations - see the 'SpaceSetup' functions)

export interface interfaceSpaceCreate {
    // todo
}

export async function requestSpaceCreate(
        space:interfaceSpaceCreate,
    ) {
    return await instanceSupabaseClient
        .from("spaces")
        .insert(space)
        .then(handleSupabaseResponse as any)
}

export const useSpaceCreate = (props:interfaceSpaceCreate) => {
    return useMutation(['space','create'], () => requestSpaceCreate(props))
    // also need to use useMemberCreate or requestMemberCreate here (imported from member) 
    // so that we can add the creator of the space as the default (mandatory) admin level member / owner
}


// Setup (create the space and any necessary tables, load in any blueprint entities, run any necessary server functions, etc.)

export interface interfaceSpaceSetup {
  // todo
}

export async function requestSpaceSetup(
      space:interfaceSpaceSetup,
  ) {
  //todo
}

export const useSpaceSetup = (props:interfaceSpaceSetup) => {
  //todo
  const newSpace = 'create the new space';
  const newTables = 'create the new tables';
  const newMembers = 'add the default (and any other specified) members';
  const runFunctions = 'run the new space functions in order to set row level security policies, load in blueprint entities etc.';
  //etc.
  return 'todo'
}


// Update (todo)

export interface interfaceSpaceUpdate { // todo
    // todo
}

export async function requestSpaceUpdate(// todo
        space:interfaceSpaceUpdate,
    ) {
    //todo
}

export const useSpaceUpdate = (props:interfaceSpaceUpdate) => {// todo
    return useMutation(['space','update'], () => requestSpaceUpdate(props))
}


// Delete (todo) - note that these 'SpaceDelete' functions only remove the space, not the associated tables & data. See the 'SpaceDestroy' functions for that

export interface interfaceSpaceDelete { // todo
  // todo
}

export async function requestSpaceDelete(// todo
      space:interfaceSpaceDelete,
  ) {
  //todo
}

export const useSpaceDelete = (props:interfaceSpaceDelete) => {// todo
  return useMutation(['space','delete'], () => requestSpaceDelete(props))
  // also need to use useMemberDelete/Update or requestMemberDelete/Update here (imported from member) 
  // so that we can remove or deactivate all members / clear them from the members table 
}


// Destroy (todo) - deletes the space, its members, its data and any other related data

export interface interfaceSpaceDestroy { // todo
    // todo
}

export async function requestSpaceDestroy(// todo
        space:interfaceSpaceDestroy,
    ) {
    //todo
}

export const useSpaceDestroy = (props:interfaceSpaceDestroy) => {
  //todo
  const removalConfirmation = 'get explicit approval from all/majority of the space administrators'
  const oldSpace = 'delete the space';
  const oldTables = 'delete the tables';
  const runFunctions = 'run the destroy space functions in order to remove any other remnants'; 
  //etc.
  return 'todo'
}


// Array

export const useSpaceArray = ({...Input})=> {
    const query = useQuery({
        queryKey:['spaces','array','add_relevant_props_here'],
        queryFn:()=>{
            return instanceSupabaseClient
                .from("spaces")
                .select()
                .limit(10) // temporary limit, feel free to remove this or make pagination dynamic if needed.
                .then(response=>response.data)
        },
        enabled: true
        // ...props
    });
    return query
}

export const ViewSpaceArray = () => {
    const array = useSpaceArray({});
    const attributeColumnNames =["id","created_at","db_android_allowed","db_ios_allowed","db_web_allowed","db_windows_allowed","name_display_singular","name_display_plural","name_store_singular","name_store_plural"];
    const columns = useTableColumns(attributeColumnNames);
    return (
        <View>
        <Text style={{fontWeight:700}}>ViewSpaceArray</Text>
            <ViewSpaceTable data={array.data} columns={columns}/>
        </View>
    )
}


// Item

export interface interfaceSpaceItem {
    id: string
}

export const useSpaceItem = ({id}:interfaceSpaceItem)=> {
    const query = useQuery({
        queryKey:['spaces',id],
        queryFn:()=>{
            return instanceSupabaseClient
                .from("spaces")
                .select()
                .eq('id', id)
                .single()
                .then(response=>response.data)
        },
        enabled: id && true,
        // ...props
    });
    return query
}

export const ViewSpaceItem = ({id}:interfaceSpaceItem) => {
    const item = useSpaceItem({id});
    return (
        <View>
            <Text style={{fontWeight:700}}>ViewSpaceItem</Text>
            <Text></Text>
            {/* Testing */}
            <Text>{JSON.stringify(item,null,2)}</Text>
        </View>
    )
}


// Active

// This is a useQuery query that just returns a blank object (it doesn't query anything).
// Then the user can switch active companies, which will update this query.
export const useSpaceActive = ({...Input})=> {
  const query = useQuery({
      queryKey:['spaces',"active"],
      queryFn:()=>{ return {} },
      enabled: false,
      initialData: {
        id: null,
        title:'No active space',
      }
      // ...props
  });
  return query
}

export const updateSpaceActive = ({space}:any)=> {
  const client = useQueryClient();
  client.setQueryData(
    ['spaces',"active"],
    space
  )
}




// Table
// This is currently a hardocded basic table, but will use the proper modular table component built by Loisa
export const ViewSpaceTable = ({...Input}) => {
    const columns = Input.columns;
  
    const [columnResizeMode, setColumnResizeMode] = useState<ColumnResizeMode>('onChange')

    // When data is provided, set the data to state
    const [data, setData] = useState([]);
    useEffect(() => {
        if (Input?.data) {
            setData(Input.data);
        }
    }, [Input?.data]);

    const table = useReactTable({
      data,
      columns,
      columnResizeMode, //https://tanstack.com/table/v8/docs/examples/react/column-sizing
      getCoreRowModel: getCoreRowModel(),
      //   debugTable: true, // logs to console
      //   debugHeaders: true, // logs to console
      //   debugColumns: true, // logs to console
    })
    
    return (
        <View style={{flex:1}}>
          <View style={{flex:1}}>
            <ScrollView style={{flex:1, overflow:"scroll"}}
              stickyHeaderIndices={[0]}
            >
            <View>
              {table.getHeaderGroups().map((headerGroup,hgroupIndex) => (
                <View key={headerGroup.id} style={{flexDirection:'row'}}>
                  {headerGroup.headers.map((header, headerIndex) => (<View key={headerIndex}>
                    <Text key={header.id} 
                      style={{ fontWeight:"bold",minWidth:"200px", borderWidth:1}}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </Text>
                  </View>))}
                </View>
              ))}
            </View>
              {table.getRowModel().rows.map(row => (
                <View key={row.id}  style={{flexDirection:'row', width:"100px"}}>
                  {row.getVisibleCells().map((cell,cellIndex) => (
                    <Text key={cell.id} style={{  minWidth:"200px", borderWidth:1}}>
                      {flexRender(cell.column.columnDef.cell, cell.getContext())}
                    </Text>
                  ))}
                </View>
              ))}
            </ScrollView>
          </View>
          <View/>
        </View>
    )
}  
  

// Sync
// Future feature: Spaces will be able to share entityrelationships between each other.
// e.g. a user could see their tasks in both their work organisation, and their personal space (albeit heavily redacted in the personal space)

// function+component to 'share entities to another space'

// function+component to 'accept the share invite fromanother space'

// function to periodically sync any 'shared entities'

// function+component to edit the share configuration

// functon+component to unlink the share.

// component to see the status of the share