// Chris is working on this.
// A field is an input (or static) data field, with optional label
// This module will offer a dynamic field component (will display the correct comonents based on the )
// It can also offer a static field component as a wrapper for input components (tbc, depending on performance of the dynamic component)

import { View, Text,  TextInput,  Text as DropdownExample, Text as TogglesExample } from 'react-native';


// Tabs

export const ViewFieldTabs = ({id}:any) => { // todo
    return (
      <View style={{flexDirection:'row'}}>
        {/*  todo (a component that allows you to switch between field components) */}
      </View>
    )
}


// Main

export interface interfaceFieldMain {
  [x: string]: any; // catch-all (fields are dynamic)
  label:string,
  value?:any,
  defaultValue?:any,
  placeholder?:any,
  options?:any[],
  component?:any // type of field, e.g. TextInput
}


// A component that displays the correct field component dynamically.
// If the field type is known, then use that component module directly instead of using this one to dynamically select it.
export const ViewFieldMain = ({item}:{item:interfaceFieldMain}) => {
  const Component = mapFieldComponents[item?.form_field ? 'textinput' : 'text']; // this may benefit from usecallback or memoization of some sort?
  return (
    <View style={{flexDirection:'row'}}>
      <Text style={{flex:1, fontWeight: '500'}}>{item?.label || '[No label found]'}: </Text>

      {/* <View  style={{flex:1}}><Component>{item.value}</Component></View> */}
      <View  style={{flex:1}}><Component defaultValue={item.value}/></View>
      
      {/* <Text style={{flex:1, fontWeight: 500}}>{item?.form_sort}: </Text>   */}
    </View>
  )
}


// A default component if a 'field' wasn't specified for a field
export const ViewFieldMissing = () => {
  return (
    <Text style={{}}>
      ['component' property missing]
    </Text>
  )
}


// Components

export const mapFieldComponents:any= {
  missing:ViewFieldMissing,
  text: Text,
  textinput: TextInput,
  dropdown: DropdownExample,
  toggles: TogglesExample
};
