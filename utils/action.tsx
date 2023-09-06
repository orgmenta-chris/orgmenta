// An 'Action' is something that can be done to an 'Enitity'.

import React from 'react';
import { TextInput, View, Text, Pressable } from 'react-native';
import { useState } from 'react'
import { Link, useLocation, Route, Routes } from 'react-router-dom'
import { ViewIconMain } from './icon'
import { ViewEntityAdd, useEntityArray, useEntitySingle, useEntitySchema} from './entity'


// Form

export const ViewActionModal = ({}:any) => {
  return (
    <View style={{flexDirection:'column'}}>
        <Text>ViewActionModal - To do</Text>
    </View>
  )
}

export const ViewActionAdd = ({}:any) => {
  const [titleState, titleSet] = useState('');
  const [typeState, typeSet] = useState('');
  const [classState, classSet] = useState('');
  const [statusState, statusSet] = useState('');
  const [descriptionState, descriptionSet] = useState('');
  return (
    <View style={{flexDirection:'column'}}>
      <View style={{flexDirection:'row'}}>
        {/* The following will be made dynamic by Chris (the static fields are a placeholder) */}
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


// Tabs

export const optionsActionTabs = [
  {title:'Inspect',iconName:'eye',iconSource:'Feather', description: "inspect an entity in a popup"},
  {title:'Add',iconName:'plus',iconSource:'Feather', description: "create new entities/entity"},
  {title:'Edit',iconName:'edit',iconSource:'Feather', description: "edit entities/entity"},
  {title:'Sync',iconName:'sync',iconSource:'MaterialIcons', description: "sync and database storage status"},
  {title:'Share',iconName:'share',iconSource:'Feather', description: "share, assign and manage access to entities"},
  {title:'Templates',iconName:'repo-template',iconSource:'Octicons', description: "manage and run rules/templates"},
  // {title:'Display',iconName:'eye',iconSource:'Feather', description: "change the display mode between Calendar, Table, List etc."},// in case we want to make the mode/display choices (calendar, table etc.) within these tabs instead of on their own
]

export const ViewActionTabs = ({}:any) => {
  return (
    <View style={{flexDirection:'row'}}>
      <View style={{flexDirection:'row'}}>
        {optionsActionTabs?.map((x,i)=>
          <Link key={i} style={{padding:5, textDecoration:'none'}} to={x.title.toLowerCase()}>
            {/* {x.title} */}
            <ViewIconMain
                name={x.iconName}
                source={x.iconSource}
                color={'black'}
                size={24}
            />
          </Link>
        )}
      </View>
      <Routes>
        <Route
          path="/add"
          element={<ViewEntityAdd/>}
        />
      </Routes>
    </View>
  )
}

