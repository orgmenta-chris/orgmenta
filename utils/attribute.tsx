//  An 'Attribute' is a property that an entity has.

import { instanceSupabaseClient, handleSupabaseResponse } from "./supabase";
import { useQueryerMutation, useQueryerQuery } from "./queryer";
import { ViewPageMain } from "./page";
import {
  ViewContainerStatic,
  ViewContainerScroll,
  ViewContainerRow,
} from "./container";
import { ViewTypographyHeading, ViewTypographyText } from "./typography";
import { ViewRouterLink, ViewRouterRoutes, ViewRouterRoute } from "./router";
import {
  useReactState,
  WrapperReactMemo,
  useReactEffect,
  useReactReducer,
} from "./react";
import { useTableColumns } from "../components/displays/table/table";
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
  ColumnResizeMode,
  ColumnDef,
} from "@tanstack/react-table";
import { ViewInputText } from "./input";
import { ViewButtonPressable } from "./button";

// PAGE

export const ViewAttributePage = () => {
  return (
    <ViewPageMain>
      <ViewTypographyHeading>Attributes</ViewTypographyHeading>
      <ViewContainerStatic style={{ flexDirection: "row" }}>
        <ViewRouterLink to={"main"} style={{ margin: 5 }}>
          Main
        </ViewRouterLink>
        <ViewRouterLink to={"unioned"} style={{ margin: 5 }}>
          Unioned
        </ViewRouterLink>
      </ViewContainerStatic>
      <ViewRouterRoutes>
        <ViewRouterRoute path="main" element={<ViewAttributeMain />} />
        <ViewRouterRoute path="unioned" element={<ViewAttributeUnioned />} />
        <ViewRouterRoute path="create" element={<ViewAttributeCreate />} />
      </ViewRouterRoutes>
      {/* <ViewAttributeMain/> */}
    </ViewPageMain>
  );
};

// CREATE

export async function requestAttributeCreate(attribute: any) {
  return await instanceSupabaseClient
    .from("attributes")
    .insert(attribute)
    .then(handleSupabaseResponse as any);
}

export const useAttributeCreate = (props: any) => {
  return useQueryerMutation(["attribute", "create"], () =>
    requestAttributeCreate(props)
  );
};

export const ViewAttributeCreate = ({ ...rest }: any) => {
  const [state, set] = useReactState({});
  return (
    <ViewContainerStatic>
      <ViewTypographyHeading>Create New Attribute</ViewTypographyHeading>
      <ViewButtonPressable
        disabled={Object.keys(state).length===0}
        onPress={() => useAttributeCreate(state)}
      >
        <ViewTypographyText>Submit</ViewTypographyText>
      </ViewButtonPressable>
      <ViewTypographyText>{JSON.stringify(state)}</ViewTypographyText>
      <ViewContainerScroll>
        {attributeColumnNames.map((x: string, i: number) => {
          return (
            <ViewContainerRow key={i}>
              <ViewTypographyText style={{ flex: 1 }}>{x}</ViewTypographyText>
              <ViewInputText
                onChangeText={(newText) =>
                  set((oldValue) => ({ ...oldValue, [x]: newText }))
                }
                style={{ flex: 2, borderWidth: 1 }}
              />
            </ViewContainerRow>
          );
        })}
      </ViewContainerScroll>
    </ViewContainerStatic>
  );
};

// MAIN

// Get the standard entities table contents (not unioned)
export const useAttributeMain = ({}: any) => {
  // get all of the attributes
  const queryKey: (string | number)[] = ["attributes", "main", "all"];
  const queryFn = async () => {
    const response = await instanceSupabaseClient.from("attributes").select();
    return response.data;
  };
  const query = useQueryerQuery<any, Error>(queryKey, queryFn, {
    enabled: true,
  });
  return query;
};

export const attributeColumnNames = [
  // static for now but will use useAttributesArray in the future
  "id",
  "status",
  "created_at",
  "updated_at",
  "created_by",
  "updated_by",
  /////
  "storage_location",
  /////
  "a_name_singular",
  "a_name_plural",
  "a_display_singular",
  "a_display_plural",
  /////
  "a_description",
  /////
  "a_table_sort",
  "a_table_width",
  /////
  "a_cell_field",
  /////
  "a_filter_field",
  "a_filter_sort",
  "a_filter_width",
  /////
  "a_form_field",
  "a_form_width",
  "a_form_sort",
  /////
  "a_options",
  "a_options_min",
  "a_options_max",
  "a_options_default",
  /////
  "a_templates",
  /////
  "b_name_singular",
  "b_name_plural",
  "b_display_singular",
  "b_display_plural",
  /////
  "b_description",
  /////
  "b_table_sort",
  "b_table_width",
  /////
  "b_cell_field",
  /////
  "b_filter_field",
  "b_filter_sort",
  "b_filter_width",

  /////
  "b_form_field",
  "b_form_width",
  "b_form_sort",
  /////
  "b_options",
  "b_options_min",
  "b_options_max",
  "b_options_default",
  /////
  "b_templates",
];

export const ViewAttributeMain = WrapperReactMemo(() => {
  // Chris is going to enhance this placeholder component
  const array = useAttributeMain({});
  const columns = useTableColumns(attributeColumnNames);
  return (
    <>
      <ViewTypographyText>ViewAttributeMain</ViewTypographyText>
      <ViewAttributeTable data={array.data} columns={columns} />
    </>
  );
});

// UNIONED

export const useAttributeUnioned = (classArray: any) => {
  const queryKey: (string | number)[] = ["attributes", "unioned", classArray];
  const searchArray = ["All", "Entity", "value"].concat(classArray).join(",");
  const queryFn = async () => {
    const response = await instanceSupabaseClient
      .from("attributes_unioned")
      .select()
      .filter("class", "cd", `{${searchArray}}`); // get any attribute that shares at least one class with this searchArray
    // Testing
    // .or(`class.cd.['Entity'],class.cd.["${attribute_class}"]`);
    // .or(`class.cd.{'${classValue}'}`); // match at least one value from the search array (or if null, assume that it is a universal attribute )
    // .or(`class.is.null, class.cd.{${searchArray}}`) // match at least one value from the search array (or if null, assume that it is a universal attribute )
    return response?.data?.map(
      (x) =>
        (x = {
          ...x,
          queryId: x.id, // For storing in field state/cache
          // the following are mapped here rather than done in the supabase view (for the time being)
          // because they vary depending on whether it's a field, form, table etc. using it.
          // Eventually we will split out the attributes_unioned view into dedicated, relevant views per type.
          label:
            x.focus_columns.options_max > 0
              ? x.focus_columns.display_plural
              : x.focus_columns.display_singular,
          attribute_name:
            x.storage_location === "relationships"
              ? x.id
              : x.storage_location === "entities"
              ? x.focus_columns.name_singular
              : x.storage_location === "entities"
              ? "entitites." + x.focus_columns.name_singular
              : "CALCULATED." + x.focus_columns.name_singular,
          form_field: x.focus_columns.form_field,
          valueDefault: x.focus_columns.options_default?.[0],
          valueOptions: x.focus_columns.options,
        })
    );
  };
  const query = useQueryerQuery<any, Error>(queryKey, queryFn, {
    enabled: true,
  });
  // console.log(query?.data?.length);
  return query;
};

export const ViewAttributeUnioned = WrapperReactMemo(() => {
  const array = useAttributeUnioned(["Entity"]);
  const attributeColumnNames = [
    "id",
    "class",
    "side",
    "status",
    "created_at",
    "created_by",
    "updated_at",
    "updated_by",
    "form_sort",
    "focus_columns",
    "auxiliary_columns",
  ];
  const columns = useTableColumns(attributeColumnNames);
  return (
    <>
      <ViewTypographyText>ViewAttributeUnioned</ViewTypographyText>
      <ViewAttributeTable data={array.data} columns={columns} />
    </>
  );
});

// TABLE

export const ViewAttributeTable = ({ ...Input }) => {
  const columns = Input.columns;
  const [columnResizeMode, setColumnResizeMode] =
    useReactState<ColumnResizeMode>("onChange");
  const [data, setData] = useReactState([]); // When data is provided, set the data to state
  useReactEffect(() => {
    if (Input?.data) {
      setData(Input.data);
    }
  }, [Input?.data]);
  const rerender = useReactReducer(() => ({}), {})[1];
  const table = useReactTable({
    data,
    columns,
    columnResizeMode,
    getCoreRowModel: getCoreRowModel(),
    filterFns: undefined as any,
  });
  return (
    <ViewContainerStatic style={{ flex: 1 }}>
      <ViewContainerStatic style={{ flex: 1 }}>
        <ViewContainerScroll
          style={{ flex: 1, overflow: "scroll" }}
          stickyHeaderIndices={[0]}
        >
          <ViewContainerStatic>
            {table.getHeaderGroups().map((headerGroup, hgroupIndex) => (
              <ViewContainerStatic
                key={headerGroup.id}
                style={{ flexDirection: "row" }}
              >
                {headerGroup.headers.map((header, headerIndex) => (
                  <ViewContainerStatic key={headerIndex}>
                    <ViewTypographyText
                      key={header.id}
                      style={{
                        fontWeight: "bold",
                        minWidth: 200,
                        borderWidth: 1,
                      }}
                    >
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </ViewTypographyText>
                  </ViewContainerStatic>
                ))}
              </ViewContainerStatic>
            ))}
          </ViewContainerStatic>
          {table.getRowModel().rows.map((row) => (
            <ViewContainerStatic
              key={row.id}
              style={{ flexDirection: "row", width: 100 }}
            >
              {row.getVisibleCells().map((cell, cellIndex) => (
                <ViewTypographyText
                  key={cell.id}
                  style={{ minWidth: 200, borderWidth: 1 }}
                >
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </ViewTypographyText>
              ))}
            </ViewContainerStatic>
          ))}
        </ViewContainerScroll>
      </ViewContainerStatic>
      <ViewContainerStatic />
    </ViewContainerStatic>
  );
};
