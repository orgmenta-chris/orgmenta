//  An 'Attribute' is a property that an entity has.

import { ViewPageMain } from "./page";
import { instanceSupabaseClient, handleSupabaseResponse } from "./supabase";
import { useQueryerMutation, useQueryerQuery } from "./queryer";
import { ViewContainerStatic, ViewContainerScroll } from "./container";
import { ViewTypographyHeading, ViewTypographyText } from "./typography";
import { ViewRouterLink, ViewRouterRoutes, ViewRouterRoute } from "./router";

import { useState, memo, useEffect, useReducer } from "react";
import { useTableColumns } from "../components/displays/table/table";
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
  ColumnResizeMode,
  ColumnDef,
} from "@tanstack/react-table";

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

export const ViewAttributeMain = memo(() => {
  // Chris is going to enhance this placeholder component
  const array = useAttributeMain({});
  const attributeColumnNames = [
    // static for now but will use useAttributesArray in the future
    "id",
    "status",
    "a_name_singular",
    "a_name_plural",
    "a_display_singular",
    "a_display_plural",
    "created_at",
    "updated_at",
    "b_name_singular",
    "b_name_plural",
    "b_display_singular",
    "b_display_plural",
    "updated_by",
    "a_cell_field",
    "a_filter_field",
    "b_cell_field",
    "b_filter_field",
    "created_by",
    "a_table_sort",
    "b_table_sort",
    "a_filter_sort",
    "b_filter_sort",
    "a_table_width",
    "b_table_width",
    "a_filter_width",
    "b_filter_width",
    "a_form_field",
    "a_form_width",
    "a_form_sort",
    "b_form_field",
    "b_form_width",
    "b_form_sort",
    "a_options",
    "b_options",
    "a_description",
    "b_description",
    "a_options_min",
    "b_options_min",
    "a_options_max",
    "b_options_max",
    "a_options_default",
    "b_options_default",
    "a_templates",
    "b_templates",
  ];
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
  const searchArray = ["All", "Entity","value"].concat(classArray).join(",");
  const queryFn = async () => {
    const response = await instanceSupabaseClient
      .from("attributes_unioned")
      .select()
      .filter("class", "cd", `{${searchArray}}`); // get any attribute that shares at least one class with this searchArray
    // Testing
    // .or(`class.cd.['Entity'],class.cd.["${attribute_class}"]`);
    // .or(`class.cd.{'${classValue}'}`); // match at least one value from the search array (or if null, assume that it is a universal attribute )
    // .or(`class.is.null, class.cd.{${searchArray}}`) // match at least one value from the search array (or if null, assume that it is a universal attribute )
    return response?.data?.map((x) => (x = {
       ...x, 
      queryId: x.id, // For storing in field state/cache
      label: x.focus_columns.options_max>0 ?  x.focus_columns.display_plural : x.focus_columns.display_singular,
      form_field: x.focus_columns.form_field,
      valueDefault: x.focus_columns.options_default,
      valueOptions: x.focus_columns.options,
     }));
  };
  const query = useQueryerQuery<any, Error>(queryKey, queryFn, {
    enabled: true,
  });
  return query;
};

export const ViewAttributeUnioned = memo(() => {
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
    useState<ColumnResizeMode>("onChange");
  const [data, setData] = useState([]); // When data is provided, set the data to state
  useEffect(() => {
    if (Input?.data) {
      setData(Input.data);
    }
  }, [Input?.data]);
  const rerender = useReducer(() => ({}), {})[1];
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
