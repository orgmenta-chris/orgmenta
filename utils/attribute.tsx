import React, { memo } from 'react';
import { v4 as uuid} from 'uuid' // note that we generate the id for tables here on the client / edge side (not the cloud db side), so that we can make immediate/optimistic changes to the ui & cache.
import { instanceSupabaseClient, handleSupabaseResponse } from './supabase'
import { useQuery, useMutation } from '@tanstack/react-query'
import { TextInput,ScrollView, View, Text, Pressable } from 'react-native';
import { Link, useLocation, Route, Routes } from 'react-router-dom'
import { ViewListMain } from './list'
import { ViewTableMain, useTableColumns } from './table'
import { ViewJsonMain } from './json'
import { ViewIconMain } from './icon'
import { useState, useMemo, useEffect, useReducer} from 'react'
import {
    createColumnHelper,
    flexRender,
    getCoreRowModel,
    useReactTable,
    ColumnResizeMode,
    ColumnDef,
} from '@tanstack/react-table'


// Create

export async function requestAttributeCreate(
    attribute:any,
    ) {
    return await instanceSupabaseClient
      .from("attributes")
      .insert(attribute)
      .then(handleSupabaseResponse as any)
}
  
export const useAttributeCreate = (props:any) => {
    return useMutation(['attribute','create'], () => requestAttributeCreate(props))
}


// Main

export const useAttributeMain = ({}:any)=> {
    const query = useQuery({
        queryKey:['attributes','main','all'],
        queryFn:()=>{
            return instanceSupabaseClient
                .from("attributes")
                .select()
                .then(response=>response.data)
        },
        enabled: true
    });
    return query
}

// Chris is going to enhance this placeholder component
export const ViewAttributeMain = memo(() => {
    const array = useAttributeMain({})
    const attributeColumnNames = ["id","status","a_name_singular","a_name_plural","a_display_singular","a_display_plural","created_at","updated_at","b_name_singular","b_name_plural","b_display_singular","b_display_plural","updated_by","a_cell_field","a_filter_field","b_cell_field","b_filter_field","created_by","a_table_sort","b_table_sort","a_filter_sort","b_filter_sort","a_table_width","b_table_width","a_filter_width","b_filter_width","a_form_field","a_form_width","a_form_sort","b_form_field","b_form_width","b_form_sort","a_options","b_options","a_description","b_description","a_options_min","b_options_min","a_options_max","b_options_max","a_options_default","b_options_default","a_templates","b_templates"];
    const columns = useTableColumns(attributeColumnNames);
    return (<>
        <Text>ViewAttributeMain</Text>
        <ViewAttributeTable data={array.data} columns={columns}/>
        {/* Testing */}
        {/* <View>
            {array?.data?.map((x,i)=>
                <View key={i} style={{backgroundColor:'lightblue',margin:10}}>
                    <Text>{JSON.stringify(x,null,2)}</Text>
                    <Text>{JSON.stringify(x,null,2)}</Text>
                </View>
            )}
        </View> */}
   </>)
});


// Unioned

export const useAttributeUnioned = (class_array=[] as any)=> {
  const searchArray = ["All"].concat(class_array).join(',') // make this dynamic and accept props
  const query = useQuery({
      queryKey:['attributes','unioned',searchArray],
      queryFn:()=>{
          return instanceSupabaseClient
              .from("attributes_unioned")
              .select()
              .or(`class.is.null, class.cd.{${searchArray}}`) // match at least one value from the search array (or if null, assume that it is a universal attribute )
              .then(response=>response.data)
      },
      enabled: true
  });
  return query
}


export const ViewAttributeUnioned = memo(() => {
    const array = useAttributeUnioned({attribute_class:'Entity'})
    const attributeColumnNames = ['id', 'class', 'side', 'status', 'created_at', 'created_by', 'updated_at', 'updated_by', 'form_sort', 'focus_columns', 'auxiliary_columns'];
    const columns = useTableColumns(attributeColumnNames);
    return (<>
        <Text>ViewAttributeUnioned</Text>
        <ViewAttributeTable data={array.data} columns={columns}/>
    </>)
});

export const ViewAttributeTable = ({...Input}) => {
    const columns = Input.columns;
  
    const [columnResizeMode, setColumnResizeMode] = useState<ColumnResizeMode>('onChange')

    // When data is provided, set the data to state
    const [data, setData] = useState([]);
    useEffect(() => {
        if (Input?.data) {
            setData(Input.data);
        }
    }, [Input?.data]);

    const rerender = useReducer(() => ({}), {})[1]

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