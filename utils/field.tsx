// A field is a data field and associated components (label, privacy shield, buttons, etc.)

import {
  useQueryerClient,
  useQueryerQuery,
  TypeQueryerResult,
} from "./queryer";
import { ViewShieldButton, ViewShieldMask } from "./shield";
import { ViewClipboardCopy } from "./clipboard";
import { ViewSyncButton } from "./sync";
import { ViewFileUpload } from "./file";
import { ViewIconMain } from "./icon";
import { ViewButtonPressable } from "./button";
import { useReactEffect } from "./react";
import {
  ViewContainerStatic,
  ViewContainerRow,
  ViewContainerScroll,
  ViewContainerColumn,
} from "./container";
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

// DYNAMIC

// A component that displays the correct field component dynamically.
export const ViewFieldDynamic = ({
  item,
  formname,
  queryId,
}: TypeFieldDynamic) => {
  // a useState to hold any value change from the child field (which then automatically runs fieldSet if it changes)
  // const [valueState, valueSet] = useState(item.value);
  // Get the state for the field:
  const fieldState = useFieldState([
    formname,
    queryId,
    item.attribute_name,
  ]) as TypeFieldState;
  // get the set function to upate the state:
  const fieldSet = useFieldSet([formname, queryId, item.attribute_name]);
  const updateName = () => {
    fieldSet("defaultValue", () => item.valueDefault);
  };
  // temp prepopulation of fieldState
  useReactEffect(() => {// Temp (this should not be run every component load).    
    // console.log(item.attribute_name, item.valueDefault);
    fieldSet("defaultValue", () => item.valueDefault);
  }, []); // set the initial value into the form
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
            state={fieldState?.data}
            set={fieldSet}
            valueDefault={item.valueDefault} // remove these once in state
            valueOptions={item.valueOptions} // remove these once in state
          />
        )}
      </ViewContainerRow>
      <ViewFieldReset style={{ borderWidth: 1, borderLeftWidth: 0 }} />
      <ViewClipboardCopy
        text={(fieldState?.data as any)?.value}
        style={{ borderWidth: 1, borderLeftWidth: 0 }}
      />
      <ViewSyncButton
        id={[formname, queryId, item.attribute_name]}
        style={{ borderWidth: 1, borderLeftWidth: 0 }}
      />
      <ViewShieldButton
        id={[formname, queryId, item.attribute_name]}
        style={{ borderWidth: 1, borderLeftWidth: 0 }}
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
export const ViewFieldInvalid = ({ valueDefault, state }: any) => {
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
export const ViewFieldFilepickerandlist = ({
  valueDefault,
  secure,
  state,
  set,
}: any) => {
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
export const ViewFieldSecure = ({ valueDefault, secure, state, set }: any) => {
  return (
    <ViewContainerRow
      style={{
        height: 35,
        flex: 1,
        backgroundColor: "white",
      }}
    >
      <ViewInputSecure
        onChangeText={(value: string | number) => {
          set("value", () => value);
        }}
        style={{ padding: 5, flex: 1 }}
        defaultValue={valueDefault}
        secure={secure}
      />
    </ViewContainerRow>
  );
};

// A non-editable text field
export const ViewFieldText = ({ valueDefault, secure, state }: any) => {
  return (
    <ViewTypographyTextthemed style={{ height: 35, flex: 1 }}>
      {secure ? "*****" : valueDefault}
    </ViewTypographyTextthemed>
  );
};

// A non-editable text field
export const ViewFieldInput = ({ valueDefault, secure, state, set }: any) => {
  return (
    <ViewInputText
      onChangeText={(value: string) => {
        set("value", () => value);
      }}
      style={{
        flexDirection: "row",
        flex: 1,
        height: 35,
        padding: 5,
        backgroundColor: "white",
      }}
      defaultValue={valueDefault?.toString()}
    />
  );
};

// A non-editable text field
export const ViewFieldRelationship = ({
  valueDefault,
  secure,
  state,
  set,
}: any) => {
  return (
    <ViewContainerColumn>
      <ViewTypographyTextthemed style={{ color: "blue", flex: 1 }}>
        RelationshipsPicker/SearchHere
      </ViewTypographyTextthemed>
      <ViewTypographyTextthemed style={{ color: "blue", flex: 1 }}>
        RelationshipsListHere
      </ViewTypographyTextthemed>
      <ViewTypographyTextthemed style={{ color: "blue", flex: 1 }}>
        {`(valueDefault: ${valueDefault})`}
      </ViewTypographyTextthemed>
    </ViewContainerColumn>
  );
};

// A non-editable text field
export const ViewFieldPicker = ({
  valueDefault,
  valueOptions,
  secure,
}: any) => {
  return (
    <ViewTypographyTextthemed style={{ color: "blue", flex: 1 }}>
      ['PICKER:']{valueDefault}
    </ViewTypographyTextthemed>
  );
};

// A non-editable text field
export const ViewFieldRichtext = ({
  valueDefault,
  secure,
  state,
  set,
}: any) => {
  return (
    <ViewInputRichmain
      style={{ flex: 1 }}
      onChangeText={(value: string) => {
        set("value", () => value);
      }}
      defaultValue={valueDefault}
    />
  );
};

// Decimal
export const ViewFieldDecimal = ({ valueDefault, secure, state, set }: any) => {
  return (
    <ViewInputDecimal
      onChangeText={(value: string | number) => {
        set("value", () => value);
      }}
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
export const ViewFieldInteger = ({ valueDefault, secure, state, set }: any) => {
  return (
    <ViewInputInteger
      onChangeText={(value: string | number) => {
        set("value", () => value);
      }}
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
export const ViewFieldDatetime = ({
  valueDefault,
  secure,
  state,
  set,
}: any) => {
  return (
    <ViewTypographyTextthemed
      style={{
        flexDirection: "row",
        flex: 1,
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
export const ViewFieldButton = ({ valueDefault, secure, state, set }: any) => {
  return (
    <ViewButtonPressable
      onPress={() => {
        set("value", () => !state.value);
      }}
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
      {/* replace this with a 'ViewButtonGroup' component? (with multiselect prop true or false) */}
      {valueOptions?.map((x: any, i: string) => (
        <ViewButtonPressable
          key={i}
          onPress={() => {
            set("value", () => x);
          }}
          style={{
            flexDirection: "row",
            margin: 5,
            backgroundColor: x === state?.value ? "gray" : "lightblue", //change to look at the state/cache
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

// CALCULATED
export const ViewFieldCalculated = ({
  valueDefault,
  secure,
  state,
  set,
  style,
}: any) => {
  return (
    <ViewContainerStatic
      style={{
        flexDirection: "row",
        height: 35,
        padding: 5,
        ...style,
      }}
    >
      <ViewTypographyTextthemed style={{ color: "blue", flex: 1 }}>
        [CALCULATED FIELD]:
      </ViewTypographyTextthemed>
    </ViewContainerStatic>
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
  calculated: ViewFieldCalculated,
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
      <ViewIconMain
        name={"undo-variant"}
        source={"MaterialCommunityIcons"}
        color={"white"}
      />
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
// export const useFieldSet = (id: string[]) => {
//   const queryerClient = useQueryerClient();
//   return (setValueFunction: () => any) => {
//     const value = setValueFunction();
//     queryerClient.setQueryData(["field"].concat(id), (oldData: any) => {
//       // console.log("useFieldSet", oldData, value);
//       return {
//         ...oldData,
//         value: value,
//       };
//     });
//   };
// };
export const useFieldSet = (id: string[]) => {
  // console.log('useFieldSet invoked')
  const queryerClient = useQueryerClient();
  return (keyName: string, setValueFunction: () => any) => {
    const value = setValueFunction();
    // console.log('useFieldSet called',keyName,value)
    queryerClient.setQueryData(
      ["field"].concat(id),
      (oldData: Record<string, any>) => {
        return {
          ...oldData,
          [keyName]: value,
        };
      }
    );
  };
};
