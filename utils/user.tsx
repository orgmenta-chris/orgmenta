// Chris todo.

// the 'user' module is comprised of the following submodules / module relationships
// - auth(/session)
// - profile
// - memberships
// - permissions
// - devices (the windows/apps/devices they log in from)

import React from 'react';
import { ScrollView, TextInput, View, Text, Pressable } from 'react-native';
import { useAttributeUnioned } from './attribute'
import { ViewModalMain } from './modal'

// Widget to just show a link to the main user page (user/[userid])
export const ViewUserAll =() => { 
    
    return (
        <View>
            <Text>[Link to users/all]</Text> 
            <Text>[Link to users/userid]</Text> 
        </View>
    )
}

// Widget to show the active entities for that user (e.g. what is the current event being worked on)
export const ViewUserActivity =() => { 
    return (
        <View>
            <Text>[Next events]</Text>
            <Text>[Link to show all user events]</Text>
        </View>
    )
}

// Widget to show the recent notifications/logs for that user (e.g system alerts, logs for changes to entities that the user is 'following'/assinged to, etc.
export const ViewUserAlerts =() => { 
    
    return (
        <View>
            {/* Presets button so that the user can change the view of what comes through in this widget */}
            <Text>[Presets button]</Text> 
        </View>
    )
}

// Widget to show the recent messages/communications for that user 
export const ViewUserComms =() => { 
    
    return (
        <View>
            {/* Presets button so that the user can change the view of what comes through in this widget */}
            <Text>[Recent messages]</Text> 
            <Text>[Link to all messages (user/userid/messages)</Text>
        </View>
    )
}

// Widget to show the devices that the user has logged in with
export const ViewUserDevice =() => { 
    return (
        <View>
            <Text>[Current Device Info (e.g. sync status)</Text>
            <Text>[Link to all devices (user/userid/devices)</Text>
        </View>
    )
}


// Attributes 

export const useUserAttributes = () => {
    const attributes = useAttributeUnioned(['User'])
    return attributes
} 

export const ViewUserAttributes = () => {
    const attributes = useUserAttributes();
    // console.log('attributes',attributes)
    const keys = attributes?.data?.[0] && Object.keys(attributes.data[0])
    return (<>
        {/* <Text>{JSON.stringify(attributes.data?.[0],null,2)}</Text> */}
        {/* <Text>{JSON.stringify(keys,null,2)}</Text> */}
        {attributes?.data?.map((x,i)=><View key={i}>
            <Text>{x?.focus_columns?.name_singular}</Text> 
            {/* <Text key={i}>{x.side}</Text>  */}
        </View>)}
        <Text>-----</Text> 
    </>)
}


// Modal

export const ViewUserModal = (props:any) => {
    return (
        <ViewModalMain modalName={'user'} backdrop pinnable top={60} >
            <Text>Move auth form here</Text>
            <ViewUserAll/>
            <ViewUserActivity/>
            <ViewUserAlerts/>
            <ViewUserComms/>
            <ViewUserDevice/>
        </ViewModalMain>
    );
  };