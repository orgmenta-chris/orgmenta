import { View, TextInput, TextInputProps, StyleProp } from "react-native";
import { RichEditor, RichToolbar } from "react-native-pell-rich-editor";

// Text Input
// Just using standard RN input for the time being. Will discuss if it needs / makes sense to be changed.

export type TypeInputText = TextInputProps;

export const ViewInputText = TextInput;

// Text Rich
// https://github.com/wxik/react-native-rich-editor
// https://github.com/wxik/react-native-rich-editor/tree/master/examples

// Editor -PLACEHOLDER (not implemented yet)
export const ViewInputRicheditor = ({ ...rest }: any) => {
  return (
    <RichEditor
      initialContentHTML={
        "Hello <b>World</b> <p>this is a new paragraph</p> <p>this is another new paragraph</p>"
      }
      editorInitializedCallback={() => {
        console.log("editorInitializedCallback");
      }}
    />
  );
};

// Toolbar - PLACEHOLDER (not implemented yet)
export const ViewInputRichtoolbar = ({ ...rest }: any) => {
  return <RichToolbar />;
};

// Main (both editor and toolbar) - PLACEHOLDER (not implemented yet)
export const ViewInputRichmain = ({ ...rest }: any) => {
  return (
    <View>
      <ViewInputRichtoolbar />
      <ViewInputRicheditor />
    </View>
  );
};
