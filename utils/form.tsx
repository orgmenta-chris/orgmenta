import {
  ViewContainerScroll,
  ViewContainerRow,
  ViewContainerStatic,
} from "./container";
import { ViewTypographyText } from "./typography";
import { ViewButtonPressable } from "./button";
import { ViewFieldDynamic, TypeFieldDynamic } from "./field";
import { isArrayNonempty } from "./array";
import { TypeReactNode } from "./react";
import {
  useQueryerClient,
  useQueryerQuery,
  TypeQueryerResult,
} from "./queryer";

// CONTAINER

export interface interfaceFormContainer {
  title?: string;
  children?: TypeReactNode;
  data?: TypeFieldDynamic;
}

// DYNAMIC

// A form that shows the correct field type based on a field property in each object
export const ViewFormDynamic = ({ data, formname }: TypeFormDynamic) => {
  const formState = useFormState([formname]);
  return (
    <ViewContainerStatic style={{}}>
      <ViewContainerStatic>
        {!data ? (
          <ViewTypographyText>
            -- No data has been passed to this form component --
          </ViewTypographyText>
        ) : (
          <ViewFormButtons formState={formState} />
        )}
      </ViewContainerStatic>
      <ViewContainerScroll style={{ height: 300 }}>
        {isArrayNonempty(data) &&
          data?.map((item: any, i: number) => (
            <ViewFieldDynamic
              formname={formname}
              queryId={item.queryId}
              key={i}
              item={{
                ...item,
                value: item.value,
                component: item.form_field,
              }}
            />
          ))}
      </ViewContainerScroll>
    </ViewContainerStatic>
  );
};

export type TypeFormDynamic = {
  data: any;
  formname: string;
};

// BUTTONS (TODO)
// Make a button set (clear/reset, cancel, save) for the forms
export const ViewFormButtons = ({ data, title, formState }: any) => {
  //(move these into separate function(s) when done)
  let relationships = [];
  let entities = [];
  const buttonsEnabled =
    formState?.length === 0 &&
    Object.keys(formState).includes("title") &&
    "etc";
  const validateEntries = (data: any) => {};
  const databaseEntries = formState.map((x: any) => {
    const todo =
      "use this map to process formState results and put them into the relationships and entities arrays ready for upsert";
    // Chris to get proof of concept entity creation logic from test codebase and put it here.
    relationships.push(todo);
    entities.push(todo);
  });
  const submit = "mutationgoeshere";
  const clear = "mutationgoeshere";
  return (
    <ViewContainerRow>
      <ViewButtonPressable
        disabled={formState?.length === 0}
        onPress={() => ""}
        style={{
          margin: 5,
          padding: 5,
          backgroundColor: formState?.length > 0 ? "lightblue" : "gray",
        }}
      >
        <ViewTypographyText>Clear/Reset</ViewTypographyText>
      </ViewButtonPressable>
      <ViewButtonPressable
        disabled={formState?.length === 0}
        onPress={() => ""}
        style={{
          margin: 5,
          padding: 5,
          backgroundColor: formState?.length > 0 ? "lightblue" : "gray",
        }}
      >
        <ViewTypographyText>SaveWithoutReview</ViewTypographyText>
      </ViewButtonPressable>
      <ViewButtonPressable
        disabled={formState?.length === 0}
        onPress={() => ""}
        style={{
          margin: 5,
          padding: 5,
          backgroundColor: formState?.length > 0 ? "lightblue" : "gray",
        }}
      >
        <ViewTypographyText>SaveWithReview</ViewTypographyText>
      </ViewButtonPressable>
    </ViewContainerRow>
  );
};

// STATE

// gets all of the field states.
export const useFormState = (id: string[]) => {
  const queryerClient = useQueryerClient();
  const formState = queryerClient
    .getQueryCache()
    .findAll(["field"].concat(id))
    .filter((query) => !!(query.state.data as any)?.value)
    .map((query) => {
      return { [query.queryKey[3] as string]: (query.state.data as any).value };
    });
  // console.log("formState", formState);
  return formState;
};
