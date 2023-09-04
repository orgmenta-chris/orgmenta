// Chris is working on this.
// A 'member' is a contact (group or individual) that is a member of a space. 
// It has its own table (rather than being part of the entities table) so that we can use this for row level security.

import { v4 as uuid} from 'uuid'
import { instanceSupabaseClient, handleSupabaseResponse } from './supabase'
import { useQuery, useMutation } from '@tanstack/react-query'
import { TextInput, View, Text, Pressable } from 'react-native';


// Create

export interface interfaceMemberCreate {
    // todo
}

export async function requestMemberCreate(
        member:interfaceMemberCreate,
    ) {
    return await instanceSupabaseClient
        .from("members")
        .insert(member)
        .then(handleSupabaseResponse as any)
}

export const useMemberCreate = (props:interfaceMemberCreate) => {
    return useMutation(['member','create'], () => requestMemberCreate(props))
}


// Update (todo)

export interface interfaceMemberUpdate { // todo
    // todo
}

export async function requestMemberUpdate(// todo
        member:interfaceMemberUpdate,
    ) {
    //todo
}

export const useMemberUpdate = (props:interfaceMemberUpdate) => {// todo
    return useMutation(['member','update'], () => requestMemberUpdate(props))
}


// Delete (todo)

export interface interfaceMemberDelete { // todo
    // todo
}

export async function requestMemberDelete(// todo
        member:interfaceMemberDelete,
    ) {
    //todo
}

export const useMemberDelete = (props:interfaceMemberDelete) => {// todo
    return useMutation(['member','delete'], () => requestMemberDelete(props))
}


// Array

export const useMemberArray = ({...Input})=> {
    const query = useQuery({
        queryKey:['members','array','add_relevant_props_here'],
        queryFn:()=>{
            return instanceSupabaseClient
                .from("members")
                .select()
                .limit(10) // temporary limit, feel free to remove this or make pagination dynamic if needed.
                .then(response=>response.data)
        },
        enabled: true
        // ...props
    });
    return query
}

export const ViewMemberArray = () => {
    const array = useMemberArray({});
    return (
        <View>
            <Text style={{fontWeight:700}}>ViewMemberArray</Text>
            <Text></Text>
            {/* Testing */}
            <Text>{JSON.stringify(array,null,2)}</Text>
        </View>
    )
}


// Item

export interface interfaceMemberItem {
    id: string
}

export const useMemberItem = ({id}:interfaceMemberItem)=> {
    const query = useQuery({
        queryKey:['members',id],
        queryFn:()=>{
            return instanceSupabaseClient
                .from("members")
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

export const ViewMemberItem = ({id}:interfaceMemberItem) => {
    const item = useMemberItem({id});
    return (
        <View>
            <Text style={{fontWeight:700}}>ViewMemberItem</Text>
            <Text></Text>
            {/* Testing */}
            <Text>{JSON.stringify(item,null,2)}</Text>
        </View>
    )
}