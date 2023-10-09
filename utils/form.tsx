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
export const ViewFormDynamic = ({
  data,
  formname,
  queryId,
}: TypeFormDynamic) => {
  // const formState = useFormState([formname]);
  return (
    <ViewContainerStatic style={{}}>
      <ViewContainerScroll style={{height:300}}>
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
      <ViewContainerStatic >
        {!data ? (
          <ViewTypographyText>
            -- No data has been passed to this form component --
          </ViewTypographyText>
        ) : (
          <ViewFormButtons />
        )}
      </ViewContainerStatic>
    </ViewContainerStatic>
  );
};

export type TypeFormDynamic = {
  data: any;
  queryId: string;
  formname: string;
};

// BUTTONS (TODO)
// Make a button set (clear/reset, cancel, save) for the forms
export const ViewFormButtons = ({ data, title }: any) => {
  return (
    <ViewContainerRow>
      <ViewButtonPressable
        style={{
          margin: 5,
          padding: 5,
          backgroundColor: "lightblue",
        }}
      >
        <ViewTypographyText>Clear/Reset</ViewTypographyText>
      </ViewButtonPressable>
      <ViewButtonPressable
        style={{
          margin: 5,
          padding: 5,
          backgroundColor: "lightblue",
        }}
      >
        <ViewTypographyText>SaveWithoutReview</ViewTypographyText>
      </ViewButtonPressable>
      <ViewButtonPressable
        style={{
          margin: 5,
          padding: 5,
          backgroundColor: "lightblue",
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
  const queryClient = useQueryerClient();
  const formState = queryClient
    .getQueryCache()
    .findAll(["field"].concat(id))
    ?.map((query) => query.state.data)
    .filter((x) => x !== null);
  console.log("formState", formState);
  return formState;
};
