// A 'space' is an organisation, business department, division, territory or other company subdivision.

import { useMemberCreate } from './members'
import React, { memo } from 'react';
import { v4 as uuid} from 'uuid' // note that we generate the id for tables here on the client / edge side (not the cloud db side), so that we can make immediate/optimistic changes to the ui & cache.
import { instanceSupabaseClient, handleSupabaseResponse } from './supabase'
import { useQuery, useMutation } from '@tanstack/react-query'
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


// Create

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


// Delete (todo)

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
  