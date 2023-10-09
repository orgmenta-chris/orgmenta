import { TextInput, TextInputProps, StyleProp } from "react-native";
import { RichEditor, RichToolbar } from "react-native-pell-rich-editor";
import { ViewContainerStatic } from "./container";
import { useState } from "react";
// Text Input
// Just using standard RN input for the time being. Will discuss if it needs / makes sense to be changed.

export type TypeInputText = TextInputProps;

export const ViewInputText = TextInput;

export const ViewInputInteger = (props: any) => {
  const [state, set] = useState(props.defaultValue);
  return (
    <TextInput
      keyboardType="number-pad"
      returnKeyType="done"
      value={state}
      onChangeText={(old)=>{console.log(old);set(old.replace(/[^0-9]/g, ''))}}
      {...props}
    />
  );
};

export const ViewInputDecimal = (props: any) => {
  const [state, set] = useState(props.defaultValue);
  return (
    <TextInput
      keyboardType="number-pad"
      returnKeyType="done"
      defaultValue={state}
      // maxLength={10} // optional, limit to 10 characters
      onChangeText={(old)=>{console.log(old);set(old.replace(/[^0-9.]/g, ''))}}
      // onChangeText={(text) => {
      //   text.replace(/[^0-9]/g, "");
      //   //todo - used above regex to strip chars, now put back into the fi
      // }}
      {...props}
    />
  );
};

export const ViewInputSecure = (props: any) => {
  return <TextInput secureTextEntry={props.secure} {...props} />;
};

// Text Rich
// https://github.com/wxik/react-native-rich-editor
// https://github.com/wxik/react-native-rich-editor/tree/master/examples

// Editor -PLACEHOLDER (not implemented yet)
export const ViewInputRicheditor = ({ defaultValue, height }: any) => {
  return (
    <RichEditor
      initialContentHTML={defaultValue}
      style={{ minHeight: height || 200 }}
      // editorInitializedCallback={() => {
      //   console.log("editorInitializedCallback");
      // }}
    />
  );
};

// Toolbar - PLACEHOLDER (not implemented yet)
export const ViewInputRichtoolbar = ({ ...rest }: any) => {
  return <RichToolbar />;
};

// Main (both editor and toolbar) - PLACEHOLDER (not implheightemented yet)
export const ViewInputRichmain = ({ defaultValue, height }: any) => {
  return (
    <ViewContainerStatic>
      <ViewInputRichtoolbar />
      <ViewInputRicheditor
        style={{ minHeight: 400 }}
        defaultValue={defaultValue}
      />
    </ViewContainerStatic>
  );
};
