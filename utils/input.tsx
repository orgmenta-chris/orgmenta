import { ViewButtonPressable, ViewButtonText } from "./button";
import { ViewContainerColumn, ViewContainerStatic } from "./container";
import { useReactRef, useReactState } from "./react";
import { TextInput, TextInputProps, StyleProp } from "react-native";
import { RichEditor, RichToolbar } from "react-native-pell-rich-editor";
import { ViewTypographyText } from "./typography";

// TEXT

// Just using standard RN input for the time being. Will discuss if it needs / makes sense to be changed.
export const ViewInputText = TextInput;

export type TypeInputText = TextInputProps;

// INTEGER

export const ViewInputInteger = (props: any) => {
  const [state, set] = useReactState(props.defaultValue);
  return (
    <TextInput
      keyboardType="number-pad"
      returnKeyType="done"
      value={state}
      onChangeText={(old) => {
        // console.log(old);
        set(old.replace(/[^0-9]/g, ""));
      }}
      {...props}
    />
  );
};

// DECIMAL

export const ViewInputDecimal = (props: any) => {
  const [state, set] = useReactState(props.defaultValue);
  return (
    <TextInput
      keyboardType="number-pad"
      returnKeyType="done"
      defaultValue={state}
      // maxLength={10} // optional, limit to 10 characters
      onChangeText={(old) => {
        // console.log(old);
        set(old.replace(/[^0-9.]/g, ""));
      }}
      // onChangeText={(text) => {
      //   text.replace(/[^0-9]/g, "");
      //   //todo - used above regex to strip chars, now put back into the fi
      // }}
      {...props}
    />
  );
};

// SECURE

// Component that is secure by default (todo)
export const ViewInputSecure = (props: any) => {
  return <TextInput secureTextEntry={props.secure} {...props} />;
};

// RICH

// https://github.com/wxik/react-native-rich-editor
// https://github.com/wxik/react-native-rich-editor/tree/master/examples

// Editor -PLACEHOLDER (not implemented yet)
export const ViewInputRicheditor = ({ defaultValue, height, ref }: any) => {
  return (
    <RichEditor
      ref={ref}
      initialContentHTML={defaultValue}
      style={{ minHeight: height || 200 }}
      // editorInitializedCallback={() => {
      //   console.log("editorInitializedCallback");
      // }}
    />
  );
};

// TOOLBAR

// Main (both editor and toolbar) - PLACEHOLDER (not implheightemented yet)
export const ViewInputRichmain = ({
  defaultValue,
  height,
  style,
  ...rest
}: any) => {
  const richText = useReactRef<RichEditor>(null);
  return (
    <ViewContainerStatic style={{ flex: 1 }}>
      <ViewInputRichtoolbar editor={richText} />
      <ViewInputRicheditor
        ref={richText}
        style={{ minHeight: 400, ...style }}
        defaultValue={defaultValue}
      />
    </ViewContainerStatic>
  );
};

// PLACEHOLDER (not implemented yet)
export const ViewInputRichtoolbar = ({ editor, ...rest }: any) => {
  return <RichToolbar editor={editor} />;
};

// SELECT

export const ViewInputSelect = ({ options, value }: any) => {
  const [visibleState, visibleSet] = useReactState(false);
  const [valueState, valueSet] = useReactState(value);
  return (
    <>
      <ViewButtonText textString={valueState} onPress={()=>visibleSet((old)=>!old)}/>
      {visibleState && (
        <ViewContainerColumn
          style={{
            position: "absolute",
            height: 100,
            width: 100,
            // top: 50,
            backgroundColor: "red",
          }}
        >
          {options?.map((x: any, i: string) => (
            <ViewButtonText key={i} textString={x} />
          ))}
        </ViewContainerColumn>
      )}
    </>
  );
};
