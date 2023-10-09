// A field is a data field and associated components (label, privacy shield, buttons, etc.)

import { useQueryerQuery, TypeQueryerResult } from "./queryer";
import { ViewShieldContainer, ViewShieldMask} from "./shield";
import { ViewContainerStatic, ViewContainerRow } from "./container";
import { ViewFileUpload } from "./file";
import { ViewIconMain } from "./icon";
import { ViewButtonPressable } from "./button";
import {
  ViewInputRichmain,
  ViewInputText,
  ViewInputDecimal,
  ViewInputInteger,
  ViewInputSecure,
} from "./input";
import {
  ViewTypographyText,
  ViewTypographyTextthemed,
  ViewTypographyLabel,
} from "./typography";

// MAIN

// A component that displays the correct field component dynamically.
export const ViewFieldMain = ({ item, formname, entityid }: TypeFieldMain) => {
  // Get the state showing whether the shield (privacy mask) is toggled on:
  const fieldState = useFieldState([
    formname,
    entityid,
    item.label,
  ]) as TypeFieldState;
  // Dynamically decide on a field component (Richtext, Integer, Text etc.) from the item's 'component' property:
  const Component =
    mapFieldComponents[item.component] || mapFieldComponents["invalid"]; // this may benefit from usecallback or memoization of some sort?
  return (
    <ViewContainerRow style={{ margin: 5 }}>
      <ViewTypographyLabel
        numberOfLines={2}
        style={{ flex: 1, fontWeight: "500", height: 35 }}
      >
        {item?.label || "[No label found]"}:{" "}
      </ViewTypographyLabel>
      <ViewContainerRow style={{ flex: 2, borderWidth: 1 }}>
        {!fieldState?.data?.shield && !fieldState?.data?.shieldDefault ? (
          // If the universal shield is off and the specific individual shield is off, show the field.F
          <Component defaultValue={item.value} />
        ) : (
          // Else show the shield (privacy mask)
          <ViewShieldMask/>
        )}
      </ViewContainerRow>
      <ViewFieldReset
        style={{ borderWidth: 1, borderLeftWidth: 0, borderRightWidth: 0 }}
      />
      <ViewShieldContainer
        id={[formname, entityid, item.label]}
        style={{ borderWidth: 1, borderLeftWidth: 0 }}
      />
    </ViewContainerRow>
  );
};

export type TypeFieldMain = {
  item: TypeFieldItem;
  formname: string;
  entityid: string;
};

export type TypeFieldItem = {
  [x: string]: any; // catch-all (fields are dynamic)
  label: string;
  value?: any;
  defaultValue?: any;
  placeholder?: any;
  options?: any[];
  component?: any; // type of field, e.g. ViewInputText
};

// A default component if a 'field' wasn't specified for a field
export const ViewFieldInvalid = ({ defaultValue }: any) => {
  return (
    <ViewTypographyTextthemed
      style={{
        flex: 1,
        height: 35,
        padding: 5,
        backgroundColor: "white",
        color: "black",
      }}
    >
      FIELD INCORRECT OR MISSING {defaultValue}
    </ViewTypographyTextthemed>
  );
};

// A default component if a 'field' wasn't specified for a field
export const ViewFieldFilepickerandlist = ({ defaultValue, secure }: any) => {
  return (
    <ViewContainerStatic
      style={{
        flex: 1,
      }}
    >
      <ViewFileUpload />
      <ViewTypographyText>(file list goes here)</ViewTypographyText>
    </ViewContainerStatic>
  );
};

// secure field
export const ViewFieldSecure = ({ defaultValue, secure }: any) => {
  return (
    <ViewContainerRow
      style={{
        height: 35,
        backgroundColor: "white",
      }}
    >
      <ViewInputSecure
        style={{ padding: 5, flex: 1 }}
        defaultValue={defaultValue}
        secure={secure}
      />
    </ViewContainerRow>
  );
};

// A non-editable text field
export const ViewFieldText = ({ defaultValue, secure }: any) => {
  return (
    <ViewTypographyTextthemed style={{ height: 35 }}>
      {secure ? "*****" : defaultValue}
    </ViewTypographyTextthemed>
  );
};

// A non-editable text field
export const ViewFieldInput = ({ defaultValue, secure }: any) => {
  return (
    <ViewInputText
      // secureTextEntry={secure}
      style={{
        flexDirection: "row",
        height: 35,
        padding: 5,
        backgroundColor: "white",
      }}
      defaultValue={defaultValue}
    />
  );
};

// A non-editable text field
export const ViewFieldRelationship = ({ defaultValue, secure }: any) => {
  return (
    <ViewTypographyTextthemed style={{ color: "blue" }}>
      ['RELATIONSHIP:']{defaultValue}
    </ViewTypographyTextthemed>
  );
};
// A non-editable text field
export const ViewFieldPicker = ({ defaultValue, secure }: any) => {
  return (
    <ViewTypographyTextthemed style={{ color: "blue" }}>
      ['PICKER:']{defaultValue}
    </ViewTypographyTextthemed>
  );
};
// A non-editable text field
export const ViewFieldRichtext = ({ defaultValue, secure }: any) => {
  return <ViewInputRichmain defaultValue={defaultValue} />;
};

// Decimal
export const ViewFieldDecimal = ({ defaultValue, secure }: any) => {
  return (
    <ViewInputDecimal
      // secureTextEntry={secure}
      style={{
        height: 35,
        padding: 5,
        backgroundColor: "white",
      }}
      defaultValue={defaultValue}
    />
  );
};

// Integer
export const ViewFieldInteger = ({ defaultValue, secure }: any) => {
  return (
    <ViewInputInteger
      // secureTextEntry={secure}
      style={{
        height: 35,
        padding: 5,
        backgroundColor: "white",
      }}
      defaultValue={defaultValue}
    />
  );
};

// Numeric
export const ViewFieldDatetime = ({ defaultValue, secure }: any) => {
  return (
    <ViewTypographyTextthemed
      style={{
        flexDirection: "row",
        height: 35,
        padding: 5,
        backgroundColor: "white",
      }}
    >
      ['DATETIME']{defaultValue}
    </ViewTypographyTextthemed>
  );
};

// Button
export const ViewFieldButton = ({ defaultValue, secure }: any) => {
  return (
    <ViewButtonPressable
      style={{
        flexDirection: "row",

        backgroundColor: "lightblue",
        height: 35,
        padding: 5,
      }}
    >
      <ViewTypographyText>{defaultValue}</ViewTypographyText>
    </ViewButtonPressable>
  );
};

// COMPONENTS

// An object with the available field components
export const mapFieldComponents: any = {
  invalid: ViewFieldInvalid,
  hidden: ViewFieldSecure,
  text: ViewFieldText,
  files: ViewFieldFilepickerandlist,
  input: ViewFieldInput,
  relationship: ViewFieldRelationship,
  richtext: ViewFieldRichtext,
  picker: ViewFieldPicker,
  numeric: ViewFieldDecimal, // change all values in attributes table to 'decimal' then change the name here too.
  integer: ViewFieldInteger,
  datetime: ViewFieldDatetime,
  button: ViewFieldButton,
  dropdown: ViewTypographyText,
  toggles: ViewTypographyText,
};

// A list of the component names
export const arrayFieldComponents = Object.keys(mapFieldComponents);

// RESET (TODO)

// A button to clear the field value back to its original value
export const ViewFieldReset = ({ id, style }: any) => {
  const fieldState = useFieldState(id) as TypeFieldState;
  return (
    <ViewButtonPressable
      style={{
        padding: 5,
        backgroundColor:
          fieldState?.data?.defaultValue === fieldState?.data?.currentValue
            ? "gray"
            : "lightgray",
        ...style,
      }}
      // onPress={() => set((old: boolean) => !old)}
    >
      <ViewIconMain name={"clear"} source={"MaterialIcons"} color={"white"} />
    </ViewButtonPressable>
  );
};

// TABS

export const ViewFieldTabs = ({ id }: any) => {
  // todo
  return (
    <ViewContainerRow>
      {/*  todo (a component that allows you to switch between field components) */}
    </ViewContainerRow>
  );
};

// STATE

// Stores the properties and values of a field
export const useFieldState = (id: string[]) => {
  return useQueryerQuery({
    queryKey: ["field"].concat(id), // construct the queryKey
    queryFn: () => null, // No function necessary (as we just want an empty state/cache to use)
    staleTime: Infinity, // This means the data will never become stale automatically
    refetchOnWindowFocus: false, // Make sure the state won't reset when tabbing in and out of the app
  });
};

export type TypeFieldState = TypeQueryerResult & {
  data: {
    defaultValue: string; // the original value for the field
    currentValue: string; // the current value for the field (if different to the defaultValue)
    shield?: string; // whether the shield is on or off on the field
    shieldDefault?: string; // to be used when reverting the shield to the previous state (if the universal shield was enabled)
  };
};
