// A 'space' is a bucket to hold an organisation, group, non-profit, department or personal space.

import { instanceSupabaseClient, handleSupabaseResponse } from './supabase'
import { useQuery, useMutation, useQueryClient, UseQueryOptions } from '@tanstack/react-query'
import { ScrollView, View, Text, Pressable } from 'react-native';
import { useTableColumns } from '../components/displays/table/table'
import { useState, useEffect} from 'react'
import { Link } from "react-router-dom";
import {
    createColumnHelper,
    flexRender,
    getCoreRowModel,
    useReactTable,
    ColumnResizeMode,
    ColumnDef,
} from '@tanstack/react-table'
import { ViewModalMain } from './modal'


// Meta

export const metaSpaceInfo = {
  description: `A 'space' is an environment for an organisation, business department, division, territory or other company subdivision.`,
  features: [
    "Create",
    "Setup",
    "Update",
    "Delete",
    "Array",
    "Item",
    "Active",
    "Table"
  ]
}


// Create

export const metaSpaceCreate = {
  description: 'Create a space in the spaces table',
  notes: 'This only creates a space table row - For full space setup, see the Setup feature',
  type: "interfaceSpaceCreate",
  request: "requestSpaceCreate",
  hook: "useSpaceCreate",
}

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

export const metaSpaceSetup = {
  description: 'Create a space, default members, relevant tables, entities, relationships, rules etc.',
  notes: '',
  type: "interfaceSpaceSetup",
  request: "requestSpaceCSetup",
  hook: "useSpaceSetup",
}

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
  return ['todo',newSpace,newTables,newMembers,runFunctions] // todo (doesn't do anything currently)
}


// Update (todo)

export const metaSpaceUpdate = {
  description: '',
  notes: '',
  type: "interfaceSpaceSetup",
  request: "requestSpaceCSetup",
  hook: "useSpaceSetup",
}

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


// Delete (todo) - note that these 'SpaceDelete' functions only remove the space, not its associated tables & data. See the 'SpaceDestroy' functions for full purge of space & related data.

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
  return ['todo',removalConfirmation,oldSpace,oldTables,runFunctions] // todo (doesn't do anything currently)
}


// Array

export const useSpaceArray = ({...Input}) => {
    const query = useQuery({
        queryKey: ['spaces', 'array', 'add_relevant_props_here'],
        queryFn: async () => {
            const response = await instanceSupabaseClient
            .from("spaces")
            .select()
            .limit(10);
          return response.data;
        },
        enabled: true
    } as UseQueryOptions<any[], unknown>); // Specify the expected types for data and error.
    return query;
}

export const ViewSpaceArray = () => {
    const array = useSpaceArray({});
    const attributeColumnNames =["id","created_at","db_android_allowed","db_ios_allowed","db_web_allowed","db_windows_allowed","name_display_singular","name_display_plural","name_store_singular","name_store_plural"];
    const columns = useTableColumns(attributeColumnNames);
    return (
        <View>
        <Text style={{fontWeight:'700'}}>ViewSpaceArray</Text>
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
        queryFn:async ()=>{
            const response = await instanceSupabaseClient
            .from("spaces")
            .select()
            .eq('id', id)
            .single();
          return response.data;
        },
        enabled: id && true,
        // ...props
    } as UseQueryOptions<any[], unknown>); // Specify the expected types for data and error.
    return query;
}

export const ViewSpaceItem = ({id}:interfaceSpaceItem) => {
    const item = useSpaceItem({id});
    return (
        <View>
            <Text style={{fontWeight:'700'}}>ViewSpaceItem</Text>
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

export const ViewSpaceTable = ({...Input}) => { // This is currently a hardocded basic table, but will use the proper modular table component built by Loisa
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
                      style={{ fontWeight:"bold",minWidth:200, borderWidth:1}}>
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
                <View key={row.id}  style={{flexDirection:'row', width:100}}>
                  {row.getVisibleCells().map((cell,cellIndex) => (
                    <Text key={cell.id} style={{  minWidth:200, borderWidth:1}}>
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
  

// Modal (to appear when SpaceWidget is clicked on)

export const ViewSpaceModal = (props:any) => {
  return (
      <ViewModalMain modalName={'space'} backdrop pinnable bottom={60} >
        <Link to={`/spaces/${'SPACEIDHERE'}/pods`}>SPACE</Link>
        <Link to={`/spaces/all/pods`}>ALL SPACES</Link>
      </ViewModalMain>
  );
};


// State (save a space's data to state. E.g. 'Selected' uses this to save the current/active space.)

export const useSpaceState = (id:any) => {
  // const queryClient = useQueryClient();
  const query = useQuery({
          queryKey: ['state',id], 
          queryFn: ()=>null,
          staleTime: Infinity, // This means the data will never become stale automatically
          refetchOnWindowFocus:false
  });
  return query;
}


// Set (set values to a space's state)

export const useSpaceSet = (id:string, newData:any) => {
  const queryClient = useQueryClient();
  return () => {
      queryClient.setQueryData(['space',id], (oldData: any) => {
        // This just does a shallow merge with newData properties overwriting any presceding properties.
        // future versions should utilise underscore.js + any custom merge functionality if needed.
        const data =  { ...oldData, ...newData }; 
        return data
      });
    };
}


// // Selected

// export const useSpaceSelected = (id:string, newData:any) => {
//   const selected = useSpaceState('selected');
//   const select = (id:string)=>{useSpaceSet('selected',id)};
//   return {
//     selected, select
//   }
// }


// Pinned

export const useModalPinned = (modalName:string) => {
  const queryClient = useQueryClient();
  return () => {
      queryClient.setQueryData(['space', modalName], (oldData: any) => {
        return {...oldData, pinned: !oldData?.pinned};
      });
    };
}


// Toggle

export const ViewModalToggle = ({modalName}:any) => { // Example button to toggle the modal state value
    return (
        <Pressable onPress={useModalPinned(modalName)}><Text>Toggle</Text></Pressable>
    )
}


// State

export const useModalState = (modalName:string) => {
    // const queryClient = useQueryClient();
    const query = useQuery({
            queryKey: ['space',modalName], 
            queryFn: ()=>null,
            // initialData: () => queryClient.getQueryData(['modal', modalName]) || null,
            // staleTime: Infinity // This means the data will never become stale automatically
            refetchOnWindowFocus:false
    });
    return query;
}

export const ViewModalState = ({modalName}:any) => {
  const modalState = useModalState(modalName);
  return (<>
      <ViewModalToggle/>
      <Text>{JSON.stringify(modalState?.data,null,2)}</Text>
  </>)
}


// Switch 

export const ViewSpaceSwitch = (props: any) => { // A widget to switch between spaces / make a different space active
  const array = useSpaceArray({});
  const selected = useSpaceState(['space','selected']);
  
  // Call the hook at the top level and get the updater function
  const updateSelected = useSpaceSet('selected', '1');

  const select = (id: string) => {
    // console.log(1)
    updateSelected();  // Use the updater function here
  };

  return (
    <View style={{}}>
      <Text>array{JSON.stringify(array?.data, null, 2)}</Text>
      <Text>selected{JSON.stringify(selected, null, 2)}</Text>
      <Pressable onPress={useSpaceSet('selected','test')}>
        <Text>select</Text>
      </Pressable>
      <ViewModalState modalName={'selected'}/>
    </View>
  );
};


// Sync
// Future feature: Spaces will be able to share entityrelationships between each other.
// e.g. a user could see their tasks in both their work organisation, and their personal space (albeit heavily redacted in the personal space)

// function+component to 'share entities to another space'

// function+component to 'accept the share invite fromanother space'

// function to periodically sync any 'shared entities'

// function+component to edit the share configuration

// functon+component to unlink the share.

// component to see the status of the share
