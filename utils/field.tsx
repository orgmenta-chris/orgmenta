// Chris is working on this.
// A field is an input (or static) data field, with optional label
// This module will offer a dynamic field component (will display the correct comonents based on the )
// It can also offer a static field component as a wrapper for input components (tbc, depending on performance of the dynamic component)


import { View, Text,  TextInput,  Text as DropdownExample, Text as TogglesExample } from 'react-native';


// Components

export const mapFieldComponents:any= {
    TextInput,
    DropdownExample,
    TogglesExample
};


// Tabs

export const ViewFieldTabs = ({id}:any) => { // todo
    return (
      <View style={{flexDirection:'row'}}>
        {/*  todo (a component that allows you to switch between field components) */}
      </View>
    )
}


// Main

// A component that displays the correct field component dynamically.
export const ViewFieldMain = ({component='TextInput'}:any) => {
    const Component = mapFieldComponents[component]; // this may benefit from usecallback or memoization of some sort?
    return (
      <View style={{flexDirection:'row'}}>
        <Component default='test'/>
      </View>
    )
}
