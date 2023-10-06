// Chris is working on this.
// A field is an input (or static) data field, with optional label
// This module will offer a dynamic field component (will display the correct comonents based on the )
// It can also offer a static field component as a wrapper for input components (tbc, depending on performance of the dynamic component)

import { ViewTypographyTextthemed } from "../utils/typography";
import { ViewFileUpload } from "./file";
import { View, Text, TextInput } from "react-native";

// Tabs

export const ViewFieldTabs = ({ id }: any) => {
  // todo
  return (
    <View style={{ flexDirection: "row" }}>
      {/*  todo (a component that allows you to switch between field components) */}
    </View>
  );
};

// Main

export interface interfaceFieldMain {
  [x: string]: any; // catch-all (fields are dynamic)
  label: string;
  value?: any;
  defaultValue?: any;
  placeholder?: any;
  options?: any[];
  component?: any; // type of field, e.g. TextInput
}

// A component that displays the correct field component dynamically.
// If the field type is known, then use that component module directly instead of using this one to dynamically select it.
export const ViewFieldMain = ({ item }: { item: interfaceFieldMain }) => {
  // const Component = mapFieldComponents["text"]; // this may benefit from usecallback or memoization of some sort?
  const Component = mapFieldComponents[item.component || "text"]; // this may benefit from usecallback or memoization of some sort?
  return (
    <View style={{ flexDirection: "row" }}>
      <Text
        numberOfLines={2}
        style={{ flex: 1, fontWeight: "500", minHeight: 30 }}
      >
        {item?.label || "[No label found]"}:{" "}
      </Text>
      <View style={{ flex: 2 }}>
        <Component defaultValue={item.value} />
      </View>
    </View>
  );
};

// A default component if a 'field' wasn't specified for a field
export const ViewFieldMissing = ({ defaultValue }: any) => {
  return <ViewTypographyTextthemed>{defaultValue}</ViewTypographyTextthemed>;
};

// A default component if a 'field' wasn't specified for a field
export const ViewFieldFilepickerandlist = ({ defaultValue }: any) => {
  return (
    <View>
      <ViewFileUpload />
      <Text>(file list goes here)</Text>
    </View>
  );
};

// Hidden field
export const ViewFieldHidden = ({ defaultValue }: any) => {
  return (
    <ViewTypographyTextthemed style={{ color: "blue" }}>
      ['HIDDEN']{defaultValue}
    </ViewTypographyTextthemed>
  );
};

// A non-editable text field
export const ViewFieldText = ({ defaultValue }: any) => {
  return <ViewTypographyTextthemed>{defaultValue}</ViewTypographyTextthemed>;
};

// A non-editable text field
export const ViewFieldInput = ({ defaultValue }: any) => {
  return (
    <TextInput style={{borderWidth: 1}}/>
    // <ViewTypographyTextthemed style={{ color: "blue" }}>
    //   ['INPUT:']{defaultValue}
    // </ViewTypographyTextthemed>
  );
};

// A non-editable text field
export const ViewFieldRelationship = ({ defaultValue }: any) => {
  return (
    <ViewTypographyTextthemed style={{ color: "blue" }}>
      ['RELATIONSHIP:']{defaultValue}
    </ViewTypographyTextthemed>
  );
};
// A non-editable text field
export const ViewFieldPicker = ({ defaultValue }: any) => {
  return (
    <ViewTypographyTextthemed style={{ color: "blue" }}>
      ['PICKER:']{defaultValue}
    </ViewTypographyTextthemed>
  );
};
// A non-editable text field
export const ViewFieldRichtext = ({ defaultValue }: any) => {
  return (
    <ViewTypographyTextthemed style={{ color: "blue" }}>
      ['RICHTEXT']{defaultValue}
    </ViewTypographyTextthemed>
  );
};
// Numeric
export const ViewFieldNumeric = ({ defaultValue }: any) => {
  return (
    <ViewTypographyTextthemed style={{ color: "blue" }}>
      ['NUMERIC']{defaultValue}
    </ViewTypographyTextthemed>
  );
};

// Numeric
export const ViewFieldDatetime = ({ defaultValue }: any) => {
  return (
    <ViewTypographyTextthemed style={{ color: "blue" }}>
      ['NUMERIC']{defaultValue}
    </ViewTypographyTextthemed>
  );
};

// Components

export const mapFieldComponents: any = {
  missing: ViewFieldMissing,
  hidden: ViewFieldHidden, // secure/password/protected/obscured/shield
  text: ViewFieldText,
  files: ViewFieldFilepickerandlist,
  input: ViewFieldInput,
  relationship: ViewFieldRelationship,
  richtext: ViewFieldRichtext,
  picker: ViewFieldPicker,
  numeric: ViewFieldNumeric,
  datetime: ViewFieldDatetime,
  dropdown: Text,
  toggles: Text,
};
