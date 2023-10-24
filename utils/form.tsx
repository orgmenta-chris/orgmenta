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
import { useSpaceState } from "./space";

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
export const ViewFormButtons = ({ data, title, formName }: any) => {
  const spaceSelected = useSpaceState(["space", "selected"]);
  const spaceName = (spaceSelected?.data as any)?.spacename;
  const formState = useFormState([formName]);
  const filteredObj = formState?.data && Object.fromEntries(
    Object.entries(
      formState?.data as unknown as Record<
        string,
        { value?: any; valueDefault?: any }
      >
    )
      .filter(
        ([_key, subObj]) =>
          subObj.value !== undefined || subObj.valueDefault !== undefined
      )
      .map(([key, subObj]) => [key, subObj.value ?? subObj.valueDefault])
  );
  const transformedObj = filteredObj ? {
    title: filteredObj.title,
    class: filteredObj.class,
    alias: filteredObj.alias,
    status: filteredObj.status,
    type: filteredObj.type,
    categories:
      typeof filteredObj.category === "string" ?
      filteredObj.category.split(",") : filteredObj.category,
  } : {}
  const submitEntity = useEntityCreate(transformedObj, spaceName);
  return (
    <>
      <ViewContainerRow>
        <ViewButtonPressable
          disabled={Object.keys(transformedObj).length===0}
          onPress={() => ""}
          style={{
            margin: 5,
            padding: 5,
            backgroundColor: 'gray'
            // (Object.keys(transformedObj))?.length > 0 ? "lightblue" : "gray",
          }}
        >
          <ViewTypographyText>Clear/Reset</ViewTypographyText>
        </ViewButtonPressable>
        <ViewButtonPressable
          disabled={Object.keys(transformedObj).length===0}
          onPress={() => {
            submitEntity.mutate();
          }}
          style={{
            margin: 5,
            padding: 5,
            backgroundColor: 
            (Object.keys(transformedObj))?.length > 0 ? "lightblue" : "gray",
          }}
        >
          <ViewTypographyText>SaveWithoutReview</ViewTypographyText>
        </ViewButtonPressable>
        <ViewButtonPressable
          disabled={Object.keys(transformedObj).length===0}
          // onPress={() => {
          //   submitEntity.mutate();
          // }}
          style={{
            margin: 5,
            padding: 5,
            backgroundColor: 'gray'
            // (Object.keys(transformedObj))?.length > 0 ? "lightblue" : "gray",
          }}
        >
          <ViewTypographyText>SaveWithReview</ViewTypographyText>
        </ViewButtonPressable>
        <ViewButtonPressable
          disabled={Object.keys(transformedObj).length===0}
          onPress={() => ""}
          style={{
            margin: 5,
            padding: 5,
            backgroundColor: 'gray'
            // (Object.keys(transformedObj))?.length > 0 ? "lightblue" : "gray",
          }}
        >
          <ViewTypographyText>TOGGLE:_CLEAR_FORM_ON_SUBMIT</ViewTypographyText>
        </ViewButtonPressable>
      </ViewContainerRow>
      <ViewContainerRow>
        <ViewTypographyText>
          {JSON.stringify(transformedObj)}
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