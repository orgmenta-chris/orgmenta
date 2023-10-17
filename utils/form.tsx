import {
  ViewContainerScroll,
  ViewContainerRow,
  ViewContainerStatic,
} from "./container";
import { ViewTypographyText } from "./typography";
import { ViewButtonPressable } from "./button";
import { ViewFieldDynamic, TypeFieldDynamic } from "./field";
import { TypeReactNode, useReactEffect, useReactMemo } from "./react";
import { isArrayNonempty } from "./array";
import { createUuid4 } from "./uuid";
import { useRouterLocation } from "./router";
import {
  useQueryerClient,
  useQueryerQuery,
  TypeQueryerResult,
  useQueryerQueries,
} from "./queryer";
import { doObjectMerge } from "./object";
import { useEntityCreate } from "./entity";

// CONTAINER

export interface interfaceFormContainer {
  title?: string;
  children?: TypeReactNode;
  data?: TypeFieldDynamic;
}

// DYNAMIC

// A form that shows the correct field type based on a field property in each object
export const ViewFormDynamic = ({ data, formname }: TypeFormDynamic) => {
  // const category = useRouterLocation().paths[2]
  const formState = useFormState([formname]);
  // const entityState = createFormState(formState);
  // entityState.id=createUuid4();
  // console.log('formState',formState)
  // console.log('entityState',entityState)
  // const createEntity = useEntityCreate(entityState as any)
  return (
    <ViewContainerStatic style={{ flex: 1 }}>
      <ViewContainerStatic>
        {!data ? (
          <ViewTypographyText>
            -- No data has been passed to this form component --
          </ViewTypographyText>
        ) : (
          <ViewFormButtons formName={formname} />
        )}
      </ViewContainerStatic>
      <ViewContainerScroll style={{ height: 350 }}>
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
export const ViewFormButtons = ({ data, title, formName }: any) => {
  // Get the state for the relevant form
  const formState = useFormState([formName]);
  console.log('formState', formState)
  // Filter the state to only show properties that have a value or a valueDefault:
  // const filteredObj = Object.fromEntries(
  //   Object.entries(formState?.data as any).filter(([_key, subObj]) => ((subObj as any).value !==undefined || (subObj as any).valueDefault !==undefined ))
  // );
  const filteredObj = Object.fromEntries(
    Object.entries((formState?.data as unknown) as Record<string, { value?: any; valueDefault?: any }>)
      .filter(([_key, subObj]) => subObj.value !== undefined || subObj.valueDefault !== undefined)
      .map(([key, subObj]) => [key, subObj.value ?? subObj.valueDefault])
  );

  let relationships = [];
  let entities = [];
  const buttonsEnabled =
    (formState?.data as any)?.length === 0 &&
    Object.keys(formState).includes("title") &&
    "etc";
  const validateEntries = (data: any) => {};
  // const databaseEntries = formState.map((x: any) => {
  //   const todo =
  //     "use this map to process formState results and put them into the relationships and entities arrays ready for upsert";
  //   // C to get proof of concept entity creation logic from test codebase and put it here.
  //   relationships.push(todo);
  //   entities.push(todo);
  // });
  const submit = "mutationgoeshere";
  const clear = "mutationgoeshere";
  return (<>
    <ViewContainerRow>
      <ViewButtonPressable
        disabled={(formState?.data as any)?.length === 0}
        onPress={() => ""}
        style={{
          margin: 5,
          padding: 5,
          backgroundColor: (formState?.data as any)?.length > 0 ? "lightblue" : "gray",
        }}
      >
        <ViewTypographyText>Clear/Reset</ViewTypographyText>
      </ViewButtonPressable>
      <ViewButtonPressable
        disabled={(formState?.data as any)?.length === 0}
        onPress={() => ""}
        style={{
          margin: 5,
          padding: 5,
          backgroundColor: (formState?.data as any)?.length > 0 ? "lightblue" : "gray",
        }}
      >
        <ViewTypographyText>SaveWithoutReview</ViewTypographyText>
      </ViewButtonPressable>
      <ViewButtonPressable
        disabled={(formState?.data as any)?.length === 0}
        onPress={() => ""}
        style={{
          margin: 5,
          padding: 5,
          backgroundColor: (formState?.data as any)?.length > 0 ? "lightblue" : "gray",
        }}
      >
        <ViewTypographyText>SaveWithReview</ViewTypographyText>
      </ViewButtonPressable>
      <ViewButtonPressable
        disabled={(formState?.data as any)?.length === 0}
        onPress={() => ""}
        style={{
          margin: 5,
          padding: 5,
          backgroundColor:(formState?.data as any)?.length > 0 ? "lightblue" : "gray",
        }}
      >
        <ViewTypographyText>TOGGLE:_CLEAR_FORM_ON_SUBMIT</ViewTypographyText>
      </ViewButtonPressable>
    </ViewContainerRow>
    <ViewContainerRow>
      <ViewTypographyText>
        {JSON.stringify(filteredObj)}
      </ViewTypographyText>
    </ViewContainerRow>
    </>
  );
};

// STATE

export const useFormState = (id: string[]) => {
  return useQueryerQuery({
    queryKey: ["form"].concat(id), // construct the queryKey
    queryFn: () => null, // No function necessary (as we just want an empty state/cache to use)
    staleTime: Infinity, // This means the data will never become stale automatically
    refetchOnWindowFocus: false, // Make sure the state won't reset when tabbing in and out of the app
  });
};

// // // gets all of the field states.
// export const useFormState = (id: string[]) => {
//   const queryerClient = useQueryerClient();
//   const formState = queryerClient
//     .getQueryCache()
//     .findAll(["field"].concat(id))
//     .filter(
//       (query) =>
//         // !!(query.state.data as any)?.value ||
//         !!(query.state.data as any)?.valueDefault
//     )
//     .map((query) => {
//       return {...query.state.data, 'attribute': query.queryKey[3] as string}; // only return the attribute name and value (for now. may need other things like validation later.)
//     });
//     // .map((query) => {
//     //   return { [query.queryKey[3] as string]: query.state.data}; // only return the attribute name and value (for now. may need other things like validation later.)
//     // });
//   // .map((query) => {
//   //   return { [query.queryKey[3] as string]: (query.state.data as any).value }; // only return the attribute name and value (for now. may need other things like validation later.)
//   // });
//   const query = useQueryerQuery({
//     queryKey:['Field',id],
//     queryFn: ()=>{return formState}
//   })
//   console.log('query',query)
//   // console.log('formState',formState)
//   return formState;
// };
// gets all of the field states.
// export const useFormState = (id: string[]) => {
//   const queryerClient = useQueryerClient();
//   const formState = queryerClient
//     .getQueryCache()
//     .findAll(["field"].concat(id))
//     .filter(
//       (query) =>
//         // !!(query.state.data as any)?.value ||
//         !!(query.state.data as any)?.valueDefault
//     )
//     .map((query) => {
//       return {
//         ...(query.state as any).data,
//         attribute: query.queryKey[3] as string,
//       }; // only return the attribute name and value (for now. may need other things like validation later.)
//     });
//     // .map((query) => {
//     //   return { [query.queryKey[3] as string]: query.state.data}; // only return the attribute name and value (for now. may need other things like validation later.)
//     // });
//     // .map((query) => {
//     //   return { [query.queryKey[3] as string]: (query.state.data as any).value }; // only return the attribute name and value (for now. may need other things like validation later.)
//     // });
//     // const test = useReactMemo(()=>{return formState},[formState])
//     // console.log('test',test)
//     // console.log('formState',formState)
//   return formState;
// };

// export const createFormState = (
//   arr: { value?: any; valueDefault?: any; attribute: string }[]
// ): Record<string, string | null> => {
//   return arr.reduce((acc, obj) => {
//     acc[obj.attribute] = obj.value ?? obj.valueDefault ?? null;
//     return acc;
//   }, {} as Record<string, string | null>);
// };
