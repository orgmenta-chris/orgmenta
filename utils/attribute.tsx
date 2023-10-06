//  An 'Attribute' is a property that an entity has.

import { useState, memo, useEffect, useReducer } from "react";
import { instanceSupabaseClient, handleSupabaseResponse } from "./supabase";
import { useQuery, useMutation } from "@tanstack/react-query";
import { ScrollView, View, Text } from "react-native";
import { useTableColumns } from "../components/displays/table/table";
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
  ColumnResizeMode,
  ColumnDef,
} from "@tanstack/react-table";

// Create

export async function requestAttributeCreate(attribute: any) {
  return await instanceSupabaseClient
    .from("attributes")
    .insert(attribute)
    .then(handleSupabaseResponse as any);
}

export const useAttributeCreate = (props: any) => {
  return useMutation(["attribute", "create"], () =>
    requestAttributeCreate(props)
  );
};

// Main

export const useAttributeMain = ({}: any) => {
  // get all of the attributes
  const queryKey: (string | number)[] = ["attributes", "main", "all"];
  const queryFn = async () => {
    const response = await instanceSupabaseClient.from("attributes").select();
    return response.data;
  };
  const query = useQuery<any, Error>(queryKey, queryFn, { enabled: true });
  return query;
};

export const ViewAttributeMain = memo(() => {
  // Chris is going to enhance this placeholder component
  const array = useAttributeMain({});
  const attributeColumnNames = [ // static for now but will use useAttributesArray in the future
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
      <Text>ViewAttributeMain</Text>
      <ViewAttributeTable data={array.data} columns={columns} />
    </>
  );
});

// Unioned
export const useAttributeUnioned = (classArray: any) => {
  const queryKey: (string | number)[] = ["attributes", "unioned", classArray];
  const searchArray = ["All", "Entity"].concat(classArray).join(",");
  const queryFn = async () => {
    const response = await instanceSupabaseClient
      .from("attributes_unioned")
      .select()
      .filter("class", "cd", `{${searchArray}}`); // get any attribute that shares at least one class with this searchArray
    // Testing
    // .or(`class.cd.['Entity'],class.cd.["${attribute_class}"]`);
    // .or(`class.cd.{'${classValue}'}`); // match at least one value from the search array (or if null, assume that it is a universal attribute )
    // .or(`class.is.null, class.cd.{${searchArray}}`) // match at least one value from the search array (or if null, assume that it is a universal attribute )
    return response.data;
  };
  const query = useQuery<any, Error>(queryKey, queryFn, { enabled: true });
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
      <Text>ViewAttributeUnioned</Text>
      <ViewAttributeTable data={array.data} columns={columns} />
    </>
  );
});

// Table

export const ViewAttributeTable = ({ ...Input }) => {
  const columns = Input.columns;
  const [columnResizeMode, setColumnResizeMode] =
    useState<ColumnResizeMode>("onChange");

  // When data is provided, set the data to state
  const [data, setData] = useState([]);
  useEffect(() => {
    if (Input?.data) {
      setData(Input.data);
    }
  }, [Input?.data]);

  const rerender = useReducer(() => ({}), {})[1];

  const table = useReactTable({
    data,
    columns,
    columnResizeMode, //https://tanstack.com/table/v8/docs/examples/react/column-sizing
    getCoreRowModel: getCoreRowModel(),
    //   debugTable: true, // logs to console
    //   debugHeaders: true, // logs to console
    //   debugColumns: true, // logs to console
  });

  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 1 }}>
        <ScrollView
          style={{ flex: 1, overflow: "scroll" }}
          stickyHeaderIndices={[0]}
        >
          <View>
            {table.getHeaderGroups().map((headerGroup, hgroupIndex) => (
              <View key={headerGroup.id} style={{ flexDirection: "row" }}>
                {headerGroup.headers.map((header, headerIndex) => (
                  <View key={headerIndex}>
                    <Text
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
                    </Text>
                  </View>
                ))}
              </View>
            ))}
          </View>
          {table.getRowModel().rows.map((row) => (
            <View key={row.id} style={{ flexDirection: "row", width: 100 }}>
              {row.getVisibleCells().map((cell, cellIndex) => (
                <Text key={cell.id} style={{ minWidth: 200, borderWidth: 1 }}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </Text>
              ))}
            </View>
          ))}
        </ScrollView>
      </View>
      <View />
    </View>
  );
};
