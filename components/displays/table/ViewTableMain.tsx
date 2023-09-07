import { ColumnResizeMode, useReactTable, getCoreRowModel, flexRender } from "@tanstack/react-table";
import React, { useState, useEffect, useReducer } from "react";
import { View, ScrollView } from "react-native";

const ViewTableMain = ({ ...Input }) => {
  const [columnResizeMode, setColumnResizeMode] =
    useState<ColumnResizeMode>("onChange");

  // When data is provided, set the data to state
  const [data, setData] = useState([]);
  useEffect(() => {
    if (Input?.data) {
      setData(Input.data);
    }
  }, [Input?.data]);

  // When columns are provided, set the columns to state
  const [columns, setColumns] = useState([]);
  useEffect(() => {
    if (Input?.columns) {
      setColumns(Input.columns);
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
            {table &&
              table.getHeaderGroups().map((headerGroup, hgroupIndex) => (
                <View key={headerGroup.id} style={{ flexDirection: "row" }}>
                  {headerGroup.headers.map((header, headerIndex) => (
                    <View key={headerIndex}>
                      <Text
                        key={header.id}
                        style={{
                          fontWeight: "bold",
                          minWidth: "200px",
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
            <View key={row.id} style={{ flexDirection: "row", width: "100px" }}>
              {row.getVisibleCells().map((cell, cellIndex) => (
                <Text
                  key={cell.id}
                  style={{ minWidth: "200px", borderWidth: 1 }}
                >
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

export default ViewTableMain