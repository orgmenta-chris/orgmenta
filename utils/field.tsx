// A field is a data field and associated components (label, privacy shield, buttons, etc.)

import {
  useQueryerClient,
  useQueryerQuery,
  TypeQueryerResult,
} from "./queryer";
import { ViewShieldButton, ViewShieldMask } from "./shield";
import {
  ViewContainerStatic,
  ViewContainerRow,
  ViewContainerScroll,
} from "./container";
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
import { useState } from "react";

// DYNAMIC

// A component that displays the correct field component dynamically.
export const ViewFieldDynamic = ({
  item,
  formname,
  queryId,
}: TypeFieldDynamic) => {
  // a useState to hold any value change from the child field (which then automatically runs fieldSet if it changes)
  // console.log(fieldState);
  // const [valueState, valueSet] = useState(item.value);
  // Get the state for the field:
  const fieldState = useFieldState([
    formname,
    queryId,
    item.label,
  ]) as TypeFieldState;
  // get the set function to upate the state:
  const fieldSet = useFieldSet([formname, queryId, item.label]);
  // Dynamically decide on a field component (Richtext, Integer, Text etc.) from the item's 'component' property:
  const Component =
    mapFieldComponents[item.component as string] ||
    mapFieldComponents["invalid"]; // this may benefit from usecallback or memoization of some sort?
  return (
    <ViewContainerRow style={{ margin: 5 }}>
      <ViewTypographyLabel
        numberOfLines={2}
        style={{ flex: 1, fontWeight: "500", height: 35 }}
      >
        {item?.label || "[No label found]"}:{" "}
      </ViewTypographyLabel>
      <ViewContainerRow style={{ flex: 2, borderWidth: 1 }}>
        {fieldState?.data?.shieldIndividual ? (
          // If the universal or individual shields are on, obfuscate the field
          <ViewShieldMask />
        ) : (
          // Else show the field
          <Component
            state={(fieldState?.data as any)?.value}
            set={fieldSet}
            valueDefault={item.value} // remove these once in state
            valueOptions={item.valueOptions} // remove these once in state
          />
        )}
      </ViewContainerRow>
      <ViewFieldReset
        style={{ borderWidth: 1, borderLeftWidth: 0, borderRightWidth: 0 }}
      />
      <ViewShieldButton
        id={[formname, queryId, item.label]}
        style={{ borderWidth: 1 }}
      />
    </ViewContainerRow>
  );
};

export type TypeFieldDynamic = {
  formname: string;
  queryId: string;
  item: {
    label: string;
    value?: any;
    valueDefault?: any;
    placeholder?: any;
    options?: any[];
    component?: string; // type of field, e.g. ViewInputText
    [x: string]: any; // catch-all (fields are dynamic)
  };
};

// A default component if a 'field' wasn't specified for a field
export const ViewFieldInvalid = ({ valueDefault }: any) => {
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
      FIELD INCORRECT OR MISSING {valueDefault}
    </ViewTypographyTextthemed>
  );
};

// A default component if a 'field' wasn't specified for a field
export const ViewFieldFilepickerandlist = ({ valueDefault, secure }: any) => {
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
export const ViewFieldSecure = ({ valueDefault, secure }: any) => {
  return (
    <ViewContainerRow
      style={{
        height: 35,
        backgroundColor: "white",
      }}
    >
      <ViewInputSecure
        style={{ padding: 5, flex: 1 }}
        defaultValue={valueDefault}
        secure={secure}
      />
    </ViewContainerRow>
  );
};

// A non-editable text field
export const ViewFieldText = ({ valueDefault, secure }: any) => {
  return (
    <ViewTypographyTextthemed style={{ height: 35 }}>
      {secure ? "*****" : valueDefault}
    </ViewTypographyTextthemed>
  );
};

// A non-editable text field
export const ViewFieldInput = ({ valueDefault, secure }: any) => {
  return (
    <ViewInputText
      // secureTextEntry={secure}
      style={{
        flexDirection: "row",
        height: 35,
        padding: 5,
        backgroundColor: "white",
      }}
      defaultValue={valueDefault?.toString()}
    />
  );
};

// A non-editable text field
export const ViewFieldRelationship = ({ valueDefault, secure }: any) => {
  return (
    <ViewTypographyTextthemed style={{ color: "blue" }}>
      ['RELATIONSHIP:']{valueDefault}
    </ViewTypographyTextthemed>
  );
};

// A non-editable text field
export const ViewFieldPicker = ({
  valueDefault,
  valueOptions,
  secure,
}: any) => {
  return (
    <ViewTypographyTextthemed style={{ color: "blue" }}>
      ['PICKER:']{valueDefault}
    </ViewTypographyTextthemed>
  );
};

// A non-editable text field
export const ViewFieldRichtext = ({ valueDefault, secure }: any) => {
  return <ViewInputRichmain defaultValue={valueDefault} />;
};

// Decimal
export const ViewFieldDecimal = ({ valueDefault, secure }: any) => {
  return (
    <ViewInputDecimal
      // secureTextEntry={secure}
      style={{
        height: 35,
        padding: 5,
        backgroundColor: "white",
      }}
      defaultValue={valueDefault}
    />
  );
};

// Integer
export const ViewFieldInteger = ({ valueDefault, secure }: any) => {
  return (
    <ViewInputInteger
      // secureTextEntry={secure}
      style={{
        height: 35,
        padding: 5,
        backgroundColor: "white",
      }}
      defaultValue={valueDefault}
    />
  );
};

// Numeric
export const ViewFieldDatetime = ({ valueDefault, secure }: any) => {
  return (
    <ViewTypographyTextthemed
      style={{
        flexDirection: "row",
        height: 35,
        padding: 5,
        backgroundColor: "white",
      }}
    >
      ['DATETIME']{valueDefault}
    </ViewTypographyTextthemed>
  );
};

// Button
export const ViewFieldButton = ({ valueDefault, secure }: any) => {
  return (
    <ViewButtonPressable
      style={{
        flexDirection: "row",

        backgroundColor: "lightblue",
        height: 35,
        padding: 5,
      }}
    >
      <ViewTypographyText>{valueDefault}</ViewTypographyText>
    </ViewButtonPressable>
  );
};

// Button
export const ViewFieldButtongroup = ({
  valueDefault,
  valueOptions,
  state,
  set,
}: any) => {
  return (
    <ViewContainerScroll horizontal style={{ padding: 2 }}>
      {valueOptions?.map((x: any, i: string) => (
        <ViewButtonPressable
          key={i}
          onPress={() => {
            set(() => x);
          }}
          style={{
            flexDirection: "row",
            margin: 5,
            backgroundColor: x === state ? "gray" : "lightblue", //change to look at the state/cache
            height: 35,
            padding: 5,
          }}
        >
          <ViewTypographyText>{x}</ViewTypographyText>
        </ViewButtonPressable>
      ))}
    </ViewContainerScroll>
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
  // richtext: ViewFieldRichtext, // todo
  richtext: ViewFieldInvalid,
  picker: ViewFieldPicker,
  numeric: ViewFieldDecimal, // change all values in attributes table to 'decimal' then change the name here too.
  integer: ViewFieldInteger,
  datetime: ViewFieldDatetime,
  button: ViewFieldButton,
  buttongroup: ViewFieldButtongroup,
  dropdown: ViewTypographyText,
  toggles: ViewTypographyText,
};

// A list of the component names
export const arrayFieldComponents = Object.keys(mapFieldComponents);

// RESET (TODO)

// A button to clear the field value back to its original value
export const ViewFieldReset = ({ id, style }: any) => {
  const fieldState = useFieldState(id) as TypeFieldState;
  const fieldSet = useFieldState(id) as TypeFieldState;
  return (
    <ViewButtonPressable
      style={{
        padding: 5,
        backgroundColor:
          fieldState?.data?.valueDefault === fieldState?.data?.valueCurrent
            ? "gray"
            : "lightgray",
        ...style,
      }}
      // onPress={() => UPDATE THE FIELD STATE HERE BACK TO ITS DEFAULT VALUE}
      // onPress={() => UPDATE THE FIELD STATE HERE BACK TO ITS DEFAULT VALUE}
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
    valueDefault: any; // the original value for the field
    valueCurrent: any; // the current value for the field (if different to the valueDefault)
    shieldUniversal?: string; // whether the shield is on or off app-wide
    shieldIndividual?: string; //  whether the shield is on or off on the field
    shieldPrevious?: string; // what to revert the shield back to if universal shield is disabled
  };
};

// SET

// Set field properties of the field useQuery
export const useFieldSet = (id: string[]) => {
  const queryClient = useQueryerClient();
  return (setValueFunction: () => any) => {
    const value = setValueFunction();
    queryClient.setQueryData(["field"].concat(id), (oldData: any) => {
      console.log("useFieldSet", oldData, value);
      return {
        ...oldData,
        value: value,
      };
    });
  };
}
