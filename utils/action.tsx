// An 'Action' is something that can be done to an 'Entity'.

import React, {useMemo} from 'react';
import { TextInput, View, Text, Pressable } from 'react-native';
import { useState } from 'react'
import { Link, Route, Routes, useLocation } from 'react-router-dom'
import { ViewIconMain } from './icon'
import { ViewControlMain } from './control';
import { useAttributeMain } from './attribute';
import { useEntitySingle } from './entity';
import { ViewFormDynamic } from './form';


export type TypeActionMain = {
  entity_id: string;
}


// Form

export const ViewActionModal = ({}:any) => {
  return (
    <View style={{flexDirection:'column'}}>
        <Text>ViewActionModal - To do</Text>
    </View>
  )
}

export const ViewActionControl = ({}:any) => {
  return (
    <View style={{flexDirection:'column'}}>
      <ViewControlMain/>
    </View>
  ) 
}

export const ViewActionAdd = ({auxiliary, schema, focus}:any) => { 
  let data: any = useMemo(() => {
    let items: any = [];
    if (schema.data && focus.data && auxiliary.data) {
      schema?.data?.forEach((oldItem: any) => {
        let newItem = { ...oldItem, ...oldItem.auxiliary_columns };
        // if the attribute is 'relationship' we know that it is in the relationship table instead of being a column on the entity table.
        if (oldItem.focus_columns.cell_field === "relationship") {
          newItem.table = "relationships";
          newItem.value = "(relationships)"; //'auxiliary.data to be filtered here (todo)'
        } else {
          newItem.table = "entities";
          newItem.value = focus.data?.[0]?.[newItem.name_singular];
        }

        delete newItem.focus_columns;
        delete newItem.auxiliary_columns;
        items.push(newItem);
      });

      return items;
    }
  }, [schema.data, focus.data, auxiliary.data]);
  return (
    <View style={{flexDirection:'column'}}>
      <Text>Add an entity</Text> 
      <ViewFormDynamic data={data} />
      <View style={{flexDirection:'row'}}>
        <Pressable 
          style={{backgroundColor:'lightblue'}}
          onPress={()=>{}}
        ><Text>Create</Text></Pressable>
      </View>
    </View>
  )
}
export const ViewActionEdit = ({}:any) => {
  const [titleState, titleSet] = useState('');
  const [typeState, typeSet] = useState('');
  const [classState, classSet] = useState('');
  const [statusState, statusSet] = useState('');
  const [descriptionState, descriptionSet] = useState('');
  return (
    <View style={{flexDirection:'column'}}>
    <Text>EDIT</Text>
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

export const ViewActionSync = ({}:any) => {
  return (
    <View style={{flexDirection:'column'}}>
    <Text>SYNC</Text>
    </View>
  )
}
export const ViewActionShare = ({}:any) => {
  return (
    <View style={{flexDirection:'column'}}>
    <Text>SHARE</Text>
    </View>
  )
}
export const ViewActionTemplate= ({}:any) => {
  return (
    <View style={{flexDirection:'column'}}>
    <Text>TEMPLATE</Text>
    </View>
  )
}
export const ViewActionLink = ({}:any) => {
  return (
    <View style={{flexDirection:'column'}}>
    <Text>LINK</Text>
    <Text>Create / manage entity relationships here</Text>
    </View>
  )
}


// Tabs

export const optionsActionTabs = [
  {title:'View',iconName:'eye',iconSource:'Feather', description: ""},
  {title:'Control',iconName:'filter',iconSource:'Feather', description: "filter, group and sort"},
  {title:'Add',iconName:'plus',iconSource:'Feather', description: "create new entities/entity"},
  {title:'Edit',iconName:'edit',iconSource:'Feather', description: "edit entities/entity"},
  {title:'Sync',iconName:'sync',iconSource:'MaterialIcons', description: "sync and database storage status"},
  {title:'Share',iconName:'share',iconSource:'Feather', description: "share, assign and manage access to entities"},
  {title:'Template',iconName:'repo-template',iconSource:'Octicons', description: "manage and run rules/templates"},
  {title:'Link',iconName:'paperclip',iconSource:'Feather', description: "link/unlink/manage entity relationships"},
  // {title:'Display',iconName:'eye',iconSource:'Feather', description: "change the display mode between Calendar, Table, List etc."},// in case we want to make the mode/display choices (calendar, table etc.) within these tabs instead of on their own
]

export const ViewActionTabs = ({auxiliary, schema, focus, display}:any) => {
  const paths = useLocation().pathname?.split("/")
  return (
    <View style={{flexDirection:'column'}}>
      <View style={{borderWidth:1}}>
        <Routes>
          <Route
            path="/control"
            element={<ViewActionControl/>}
          />
          <Route
            path="/add"
            element={<ViewActionAdd auxiliary={auxiliary} schema={schema} focus={focus} />}
          />
          <Route
            path="/edit"
            element={<ViewActionEdit/>}
          />
          <Route
            path="/sync"
            element={<ViewActionSync/>}
          />
          <Route
            path="/share"
            element={<ViewActionShare/>}
          />
          <Route
            path="/template"
            element={<ViewActionTemplate/>}
          />
          <Route
            path="/link"
            element={<ViewActionLink/>}
          />
        </Routes>
      </View>
      <View style={{flexDirection:'row', borderWidth:1}}>
        {optionsActionTabs?.map((x,i)=>
          <Link key={i} style={{padding:5, textDecoration:'none', backgroundColor:paths[4]===x.title.toLocaleLowerCase() && 'lightgrey'}} to={x.title.toLowerCase()}>
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
    </View>
  )
}

