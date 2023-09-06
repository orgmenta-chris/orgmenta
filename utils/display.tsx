// A 'display' is a way of viewing entities, their relationships, and their attributes.
// It is a 'perspective into the graph'.
// You can view entities and their relationships in different displays (e.g. Table, list, calendar) and filters.


import React, { memo, useMemo } from 'react';
import { v4 as uuid} from 'uuid'
import { View, Text } from 'react-native';
import { Link, useLocation, Route, Routes } from 'react-router-dom'
import { ViewListMain } from './list'
import { ViewTableMain,useTableColumns } from './table'
import { ViewJsonMain } from './json'
import { ViewIconMain } from './icon'
import { ViewPodsMain, ViewPodExample, ViewPodInfo, ViewPodTabs } from './pods'
import { ViewFormMain } from './form'
import { useEntityArray, useEntitySingle, useEntitySchema} from './entity'
import { ViewWidgetMain } from './widget'

// Main

export const ViewDisplayMain = memo(({component = 'table' }:any) => { // todo: auxiliary data doesn't have relationship ids yet
  const path = useLocation().pathname?.split('/')?.[3];// this should be passed as the component  prop instead of hardcoded here
  const Component = location && mapDisplayComponents[path] ? mapDisplayComponents[path] : mapDisplayComponents['list']; // may need to memoize/useCallback this
  const auxiliary = useEntityArray({});
  const focus = useEntitySingle({});
  const schema = useEntitySchema();
  return (
    // temp view to constrain heights of children
    <View style={{height:400}}>
      <Component auxiliary={auxiliary} schema={schema} focus={focus}/>
    </View>
  )
});


// Displays
// These components transform the entity/schema/relationships data then provide them to the relevant component
// (e.g. ViewDisplayTable transforms entities data, then provides them to the table component from table.js )
// Chris is owning the below components.

export const ViewDisplayList = (props:any) => {
  const schema = props.schema;
  const columns = useTableColumns(schema.data?.map(x=>x.focus_columns.name_singular));
  const auxiliary = props.auxiliary;
  return (
    
    <View style={{flexDirection:'column'}}>
    {/* 
      direction={'column'}
      title={'List Display'}
      summary={''}
      collapsible={false}
      help={'(todo)'}
      backgroundColor={'lightgray'}
    >*/}
      <ViewListMain 
        columns={columns}
        data={auxiliary.data}
      />
     {/* </ViewWidgetMain> */}
    </View>
  )
}

export const ViewDisplayPods = (props:any) => {
  const schema = props.schema;
  const auxiliary = props.auxiliary;
  const focus = props.focus;
  const data = 'make focus into an array and concat with aux'
  return (
    
    <View style={{flexDirection:'column'}}>
    {/* 
      direction={'column'}
      title={'Pods Display'}
      summary={'Pin properties, charts and other useful widgets for this entity'}
      collapsible={false}
      help={'(todo)'}
      backgroundColor={'lightgray'}
    >*/}
      <ViewPodsMain 
        items={auxiliary}
        schema={schema.data}
      >
          <ViewPodInfo/>
          <ViewPodTabs/>
          <ViewPodExample/>
          <ViewPodExample/>
          <ViewPodExample/>
      </ViewPodsMain>
     {/* </ViewWidgetMain> */}
    </View>
  )
}

export const ViewDisplayForm = (props:any) => { // Chris todo: auxiliary data doesn't have relationship ids yet, so 'if(oldItem.focus_columns.cell_field==='relationship'){' does nothing yet

  // create the appropriate schema for the form
  let data:any = useMemo(()=>{

    let items:any = [];

    if(props.schema && props.focus.data && props.auxiliary){

      props?.schema?.data?.forEach((oldItem:any)=>{

        let newItem = {...oldItem,...oldItem.focus_columns}; 
        // if the attribute is 'relationship' we know that it is in the relationship table instead of being a column on the entity table.
        if(oldItem.focus_columns.cell_field==='relationship'){
          newItem.table = 'relationships'
          newItem.value = '(relationships)' //'props.auxiliary.data to be filtered here (todo)'
        }else{
          newItem.table = 'entities'
          newItem.value = props.focus.data?.[0]?.[newItem.name_singular];
        }

        delete newItem.focus_columns;
        delete newItem.auxiliary_columns;
        items.push(newItem)

      });

      return items

    }

  },[props.schema, props.focus.data, props.auxiliary])

  return (
    
    <View style={{flexDirection:'column', height:"100%"}}>
    {/* 
      direction={'column'}
      title={'Form Display'}
      summary={''}
      collapsible={false}
      help={'(todo)'}
      backgroundColor={'lightgray'}
    >*/}
      <ViewFormMain 
        data={data}
      />
     {/* </ViewWidgetMain> */}
    </View>
  )
}

export const ViewDisplayTable = (props:any) => {
  const schema = props.schema;
  const columns = useTableColumns(schema.data?.map(x=>x.focus_columns.name_singular));
  const auxiliary = props.auxiliary;
  return (
    
    <View style={{flexDirection:'column'}}>
    {/* 
      direction={'column'}
      title={'Table Display'}
      summary={''}
      collapsible={false}
      help={'(todo)'}
      backgroundColor={'lightgray'}
    >*/}
      <ViewTableMain 
        columns={columns}
        data={auxiliary.data}
      />
     {/* </ViewWidgetMain> */}
    </View>
  )
}

export const ViewDisplayCalendar = (props:any) => {
  const schema = props.schema;
  const auxiliary = props.auxiliary;
  return (
    
    <View style={{flexDirection:'column'}}>
    {/* 
      direction={'column'}
      title={'Calendar Display'}
      summary={''}
      collapsible={false}
      help={'(todo)'}
      backgroundColor={'lightgray'}
    >*/}
      <Text>Calendar todo</Text>
     {/* </ViewWidgetMain> */}
    </View>
  )
}

export const ViewDisplayJson = (props:any) => {
  const schema = props.schema;
  const auxiliary = props.auxiliary;
  const columns = useTableColumns(schema.data?.map((x:any)=>x.focus_columns.name_singular));
  return (
    <View style={{flexDirection:'column'}}>
    {/* 
      direction={'column'}
      title={'JSON Display'} 
      summary={''}
      collapsible={false}
      help={'(todo)'}
      backgroundColor={'lightgray'}
    >*/}
      <ViewJsonMain schema={schema} auxiliary={auxiliary} columns={columns} />
    {/* </ViewWidgetMain> */}
    </View>
  )
}


// Components

export const mapDisplayComponents:any= {
  list: ViewDisplayList, 
  pods: ViewDisplayPods,
  form: ViewDisplayForm,
  table: ViewDisplayTable,
  calendar: ViewDisplayCalendar,
  json: ViewJsonMain,
};


// Tabs

// Contextual tabs (i.e. these will eventually grey out if not applicable to the current focused entity)
export const ViewDisplayTabs = ({id}:any) => {
  const path = useLocation().pathname?.split('/')
  return (
    <View style={{flexDirection:'row'}}>
      <Link style={{padding :5, backgroundColor:(path[3]==='pods'&&'lightgray')}} to={`/entity/` +path[2]+'/pods'}>Pods</Link>{/* CG handling the pods component/module */}
      <Link style={{padding:5, backgroundColor:(path[3]==='form'&&'lightgray')}} to={`/entity/` +path[2]+'/form'}>Form</Link>{/* CG handling the form component/module*/}
      <Link style={{padding:5, backgroundColor:(path[3]==='list'&&'lightgray')}} to={`/entity/` +path[2]+'/list'}>List</Link>{/*Loisa Handling the list component/module */}
      <Link style={{padding:5, backgroundColor:(path[3]==='table'&&'lightgray')}} to={`/entity/` +path[2]+'/table'}>Table</Link>{/*Loisa Handling the table component/module */}
      <Link style={{padding:5, backgroundColor:(path[3]==='calendar'&&'lightgray')}} to={`/entity/` +path[2]+'/calendar'}>Calendar</Link>{/*Loisa Handling the calendar component/module */}
      <Link style={{padding:5, backgroundColor:(path[3]==='maps'&&'lightgray')}} to={`/entity/` +path[2]+'/maps'}>Maps</Link>{/*Loisa Handling the maps component/module */}
      <Link style={{padding:5, backgroundColor:(path[3]==='json'&&'lightgray')}} to={`/entity/` +path[2]+'/json'}>JSON</Link>{/*Loisa Handling the json component/module */}
      {/* <Link style={{padding:5, backgroundColor:(path[3]==='kanban'&&'lightgray')}} to={`/entity/` +path[2]+'/kanban'}>Kanban</Link> */}{/* On hold */}
      {/* <Link style={{padding:5, backgroundColor:(path[3]==='gantt'&&'lightgray')}} to={`/entity/` +path[2]+'/gantt'}>Gantt</Link> */}{/* On hold */}
      {/* <Link style={{padding:5, backgroundColor:(path[3]==='timeline'&&'lightgray')}} to={`/entity/` +path[2]+'/timeline'}>Timeline</Link> */}{/* On hold */}
      {/* <Link style={{padding:5, backgroundColor:(path[3]==='threads'&&'lightgray')}} to={`/entity/` +path[2]+'/threads'}>Threads</Link> */}{/* On hold */}
      {/* <Link style={{padding:5, backgroundColor:(path[3]==='chart'&&'lightgray')}} to={`/entity/` +path[2]+'/chart'}>Chart/Statistics</Link> */}{/* On hold */}
      {/* <Link style={{padding:5, backgroundColor:(path[3]==='path'&&'lightgray')}} to={`/entity/` +path[2]+'/path'}>Path</Link> */}{/* On hold */}
      {/* <Link style={{padding:5, backgroundColor:(path[3]==='nodes'&&'lightgray')}} to={`/entity/` +path[2]+'/nodes'}>Nodes</Link> */}{/* On hold */}
      {/* <Link style={{padding:5, backgroundColor:(path[3]==='spacial'&&'lightgray')}} to={`/entity/` +path[2]+'/spacial'}>Spacial</Link> */}{/* On hold */}
    </View>
  )
}
