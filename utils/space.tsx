// A 'space' is an organisation, business department, division, territory or other company subdivision.

import { v4 as uuid} from 'uuid'
import { instanceSupabaseClient, handleSupabaseResponse } from './supabase'
import { useQuery, useMutation } from '@tanstack/react-query'
import { TextInput, View, Text, Pressable } from 'react-native';


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
    return (
        <View>
            <Text style={{fontWeight:700}}>ViewSpaceArray</Text>
            <Text></Text>
            {/* Testing */}
            <Text>{JSON.stringify(array,null,2)}</Text>
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