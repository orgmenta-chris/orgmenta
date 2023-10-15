import { ViewContainerStatic, ViewContainerRow } from "./container";
import { ViewTypographyText } from "./typography";
import { ViewButtonPressable } from "./button";
import { ViewInputText, TypeInputText } from "./input";
import { UtilityPlatformMain } from "./platform";
import {
  InputHTMLAttributes,
  useEffect,
  useMemo,
  useReducer,
  useState,
} from "react";
import {
  Column,
  Table,
  useReactTable,
  ColumnFiltersState,
  getCoreRowModel,
  getFilteredRowModel,
  getFacetedRowModel,
  getFacetedUniqueValues,
  getFacetedMinMaxValues,
  getPaginationRowModel,
  sortingFns,
  getSortedRowModel,
  FilterFn,
  SortingFn,
  ColumnDef,
  flexRender,
} from "@tanstack/react-table";
import {
  RankingInfo,
  rankItem,
  compareItems,
} from "@tanstack/match-sorter-utils";
import { faker } from "@faker-js/faker";
import { Button, FlatList } from "react-native";

// CONTAINER

// Main table component
export const ViewTableContainer = (props: any) => {
  const [data, setData] = useState<Person[]>(() => makeData(1000));
  const refreshData = () => setData((old) => makeData(1000));
  const columns = useMemo<ColumnDef<Person, any>[]>(
    () => [
      {
        header: "Name",
        footer: (props) => props.column.id,
        columns: [
          {
            accessorKey: "firstName",
            cell: (info) => info.getValue(),
            footer: (props) => props.column.id,
          },
          {
            accessorFn: (row) => row.lastName,
            id: "lastName",
            cell: (info) => info.getValue(),
            header: () => <span>Last Name</span>,
            footer: (props) => props.column.id,
          },
          {
            accessorFn: (row) => `${row.firstName} ${row.lastName}`,
            id: "fullName",
            header: "Full Name",
            cell: (info) => info.getValue(),
            footer: (props) => props.column.id,
            filterFn: "fuzzy",
            sortingFn: fuzzySort,
          },
        ],
      },
      {
        header: "Info",
        footer: (props) => props.column.id,
        columns: [
          {
            accessorKey: "age",
            header: () => "Age",
            footer: (props) => props.column.id,
          },
          {
            header: "More Info",
            columns: [
              {
                accessorKey: "visits",
                header: () => <span>Visits</span>,
                footer: (props) => props.column.id,
              },
              {
                accessorKey: "status",
                header: "Status",
                footer: (props) => props.column.id,
              },
              {
                accessorKey: "progress",
                header: "Profile Progress",
                footer: (props) => props.column.id,
              },
            ],
          },
        ],
      },
    ],
    []
  );
  const tableData = {
    columns,
    data,
    refreshData,
  };
  return (
    <ViewContainerStatic style={{ maxHeight: 400, flex: 1 }}>
      <UseDisplayTable tableData={tableData} />
    </ViewContainerStatic>
  );
};

// TableTabs (Temp)

// 'Table Tabs' will be a subcomponent of 'Table' (like 'Table Footer' and'Table Header' are table subcomponents )
// To be moved into the table file (but added here since it is a placeholder and so as not to interfere with current works)
// Or, since this might need to be used by List (and maybe others like timeline) as well, maybe it needs to be its own 'display tabs' module or else we just directly use a primitive 'tabs' module in ViewDisplayTable, ViewDisplayList etc.
// At the moment, it just has 'Types' hardcoded into it as the tabs.
// But, it will be made dynamic (which will allow things like plugins and user interactions to hide this component, switch out the tabs to 'Status' or  other property groupings, etc.)
export const ViewTableTabs = (props: any) => {
  return (
    <ViewTypographyText>["Area","Event","Contact","etc."]</ViewTypographyText>
  );
};

// fake data to use in our table view

export type Person = {
  firstName: string;
  lastName: string;
  age: number;
  visits: number;
  progress: number;
  status: "relationship" | "complicated" | "single";
  subRows?: Person[];
};

const range = (len: number) => {
  const arr = [];
  for (let i = 0; i < len; i++) {
    arr.push(i);
  }
  return arr;
};

const newPerson = (): Person => {
  return {
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName(),
    age: faker.number.int(40),
    visits: faker.number.int(1000),
    progress: faker.number.int(100),
    status: faker.helpers.shuffle<Person["status"]>([
      "relationship",
      "complicated",
      "single",
    ])[0]!,
  };
};

export function makeData(...lens: number[]) {
  const makeDataLevel = (depth = 0): Person[] => {
    const len = lens[depth]!;
    return range(len).map((d): Person => {
      return {
        ...newPerson(),
        subRows: lens[depth + 1] ? makeDataLevel(depth + 1) : undefined,
      };
    });
  };

  return makeDataLevel();
}

declare module "@tanstack/table-core" {
  export interface FilterFns {
    fuzzy: FilterFn<unknown>;
  }

  export interface FilterMeta {
    itemRank: RankingInfo;
  }
}

// Define fuzzy filter and sorting functions

export const fuzzyFilter: FilterFn<any> = (row, columnId, value, addMeta) => {
  // Rank the item
  const itemRank = rankItem(row.getValue(columnId), value);

  // Store the itemRank info
  addMeta({
    itemRank,
  });

  // Return if the item should be filtered in/out
  return itemRank.passed;
};

export const fuzzySort: SortingFn<any> = (rowA, rowB, columnId) => {
  let dir = 0;

  // Only sort by rank if the column has ranking information
  if (rowA.columnFiltersMeta[columnId]) {
    dir = compareItems(
      rowA.columnFiltersMeta[columnId]?.itemRank!,
      rowB.columnFiltersMeta[columnId]?.itemRank!
    );
  }

  // Provide an alphanumeric fallback for when the item ranks are equal
  return dir === 0 ? sortingFns.alphanumeric(rowA, rowB, columnId) : dir;
};

// A debounced input react component

export const DebouncedInput = ({
  value: initialValue,
  onChange,
  debounce = 500,
  ...props
}: {
  value: string | number;
  onChange: (value: string | number) => void;
  debounce?: number;
} & Omit<InputHTMLAttributes<HTMLInputElement>, "onChange">) => {
  const [value, setValue] = useState(initialValue);

  useEffect(() => {
    setValue(initialValue);
  }, [initialValue]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      onChange(value);
    }, debounce);

    return () => clearTimeout(timeout);
  }, [value]);

  if (UtilityPlatformMain.OS === "web") {
    return (
      <input
        {...props}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    );
  } else {
    return (
      <ViewInputText
        {...(props as TypeInputText)} // use type casting to avoid type mismatch
        value={value.toString()} // Convert to string for ViewInputText value
        onChangeText={(text) => setValue(text)} // Use onChangeText instead of onChange
      />
    );
  }
};

export const Filter = ({
  column,
  table,
}: {
  column: Column<any, unknown>;
  table: Table<any>;
}) => {
  const firstValue = table
    .getPreFilteredRowModel()
    .flatRows[0]?.getValue(column.id);

  const columnFilterValue = column.getFilterValue();

  const sortedUniqueValues = useMemo(
    () =>
      typeof firstValue === "number"
        ? []
        : Array.from(column.getFacetedUniqueValues().keys()).sort(),
    [column.getFacetedUniqueValues()]
  );

  if (UtilityPlatformMain.OS === "web") {
    return typeof firstValue === "number" ? (
      <div>
        <div className="flex space-x-2">
          <DebouncedInput
            type="number"
            min={Number(column.getFacetedMinMaxValues()?.[0] ?? "")}
            max={Number(column.getFacetedMinMaxValues()?.[1] ?? "")}
            value={(columnFilterValue as [number, number])?.[0] ?? ""}
            onChange={(value) =>
              column.setFilterValue((old: [number, number]) => [
                value,
                old?.[1],
              ])
            }
            placeholder={`Min ${
              column.getFacetedMinMaxValues()?.[0]
                ? `(${column.getFacetedMinMaxValues()?.[0]})`
                : ""
            }`}
            className="w-24 border shadow rounded"
          />
          <DebouncedInput
            type="number"
            min={Number(column.getFacetedMinMaxValues()?.[0] ?? "")}
            max={Number(column.getFacetedMinMaxValues()?.[1] ?? "")}
            value={(columnFilterValue as [number, number])?.[1] ?? ""}
            onChange={(value) =>
              column.setFilterValue((old: [number, number]) => [
                old?.[0],
                value,
              ])
            }
            placeholder={`Max ${
              column.getFacetedMinMaxValues()?.[1]
                ? `(${column.getFacetedMinMaxValues()?.[1]})`
                : ""
            }`}
            className="w-24 border shadow rounded"
          />
        </div>
        <div className="h-1" />
      </div>
    ) : (
      <>
        <datalist id={column.id + "list"}>
          {sortedUniqueValues.slice(0, 5000).map((value: any) => (
            <option value={value} key={value} />
          ))}
        </datalist>
        <DebouncedInput
          type="text"
          value={(columnFilterValue ?? "") as string}
          onChange={(value) => column.setFilterValue(value)}
          placeholder={`Search... (${column.getFacetedUniqueValues().size})`}
          className="w-36 border shadow rounded"
          list={column.id + "list"}
        />
        <div className="h-1" />
      </>
    );
  } else {
    return typeof firstValue === "number" ? (
      <ViewContainerStatic>
        <ViewContainerRow style={{ justifyContent: "space-between" }}>
          <DebouncedInput
            type="numeric" // Set type for numeric input
            value={(columnFilterValue as [number, number])?.[0] ?? ""}
            onChange={(value) =>
              column.setFilterValue((old: [number, number]) => [
                value,
                old?.[1],
              ])
            }
            placeholder={`Min ${
              column.getFacetedMinMaxValues()?.[0]
                ? `(${column.getFacetedMinMaxValues()?.[0]})`
                : ""
            }`}
            style={{ width: 80, borderWidth: 1, borderRadius: 5, padding: 5 }}
          />
          <DebouncedInput
            type="numeric" // Set type for numeric input
            value={(columnFilterValue as [number, number])?.[1] ?? ""}
            onChange={(value) =>
              column.setFilterValue((old: [number, number]) => [
                old?.[0],
                value,
              ])
            }
            placeholder={`Max ${
              column.getFacetedMinMaxValues()?.[1]
                ? `(${column.getFacetedMinMaxValues()?.[1]})`
                : ""
            }`}
            style={{ width: 80, borderWidth: 1, borderRadius: 5, padding: 5 }}
          />
        </ViewContainerRow>
        <ViewContainerStatic style={{ height: 1 }} />
      </ViewContainerStatic>
    ) : (
      <>
        <ViewInputText
          value={(columnFilterValue ?? "") as string}
          onChangeText={(text) => column.setFilterValue(text)} // Use onChangeText for text input
          placeholder={`Search... (${column.getFacetedUniqueValues().size})`}
          style={{ width: 120, borderWidth: 1, borderRadius: 5, padding: 5 }}
          // list={column.id + "list"} // React Native doesn't have datalist, so you may need a custom solution
        />
        <ViewContainerStatic style={{ height: 1 }} />
      </>
    );
  }
};

// Need to use the same code for web and mobile.
// The tables will need to be changed to retain web styling but be using Views etc. as the mobile one is.
const TableViewWeb = (props: any) => {
  const { columns, data, refreshData } = props;

  const rerender = useReducer(() => ({}), {})[1];

  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const [globalFilter, setGlobalFilter] = useState("");

  const table = useReactTable({
    data,
    columns,
    filterFns: {
      fuzzy: fuzzyFilter,
    },
    state: {
      columnFilters,
      globalFilter,
    },
    onColumnFiltersChange: setColumnFilters,
    onGlobalFilterChange: setGlobalFilter,
    globalFilterFn: fuzzyFilter,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getFacetedRowModel: getFacetedRowModel(),
    getFacetedUniqueValues: getFacetedUniqueValues(),
    getFacetedMinMaxValues: getFacetedMinMaxValues(),
    debugTable: true,
    debugHeaders: true,
    debugColumns: false,
  });

  useEffect(() => {
    if (table.getState().columnFilters[0]?.id === "fullName") {
      if (table.getState().sorting[0]?.id !== "fullName") {
        table.setSorting([{ id: "fullName", desc: false }]);
      }
    }
  }, [table.getState().columnFilters[0]?.id]);

  return (
    <div className="p-2">
      <ViewContainerStatic style={{flex: 1}}>
        <DebouncedInput
          value={globalFilter ?? ""}
          onChange={(value) => setGlobalFilter(String(value))}
          className="p-2 font-lg shadow border border-block"
          placeholder="Search all columns..."
        />
      </ViewContainerStatic>
      <div className="h-2" />
      <table>
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => {
                return (
                  <th key={header.id} colSpan={header.colSpan}>
                    {header.isPlaceholder ? null : (
                      <>
                        <div
                          {...{
                            className: header.column.getCanSort()
                              ? "cursor-pointer select-none"
                              : "",
                            onClick: header.column.getToggleSortingHandler(),
                          }}
                        >
                          {flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                          {{
                            asc: " 🔼",
                            desc: " 🔽",
                          }[header.column.getIsSorted() as string] ?? null}
                        </div>
                        {header.column.getCanFilter() ? (
                          <div>
                            <Filter column={header.column} table={table} />
                          </div>
                        ) : null}
                      </>
                    )}
                  </th>
                );
              })}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => {
            return (
              <tr key={row.id}>
                {row.getVisibleCells().map((cell) => {
                  return (
                    <td key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className="h-2" />
      <div className="flex items-center gap-2">
        <button
          className="border rounded p-1"
          onClick={() => table.setPageIndex(0)}
          disabled={!table.getCanPreviousPage()}
        >
          {"<<"}
        </button>
        <button
          className="border rounded p-1"
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
        >
          {"<"}
        </button>
        <button
          className="border rounded p-1"
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}
        >
          {">"}
        </button>
        <button
          className="border rounded p-1"
          onClick={() => table.setPageIndex(table.getPageCount() - 1)}
          disabled={!table.getCanNextPage()}
        >
          {">>"}
        </button>
        <span className="flex items-center gap-1">
          <div>Page</div>
          <strong>
            {table.getState().pagination.pageIndex + 1} of{" "}
            {table.getPageCount()}
          </strong>
        </span>
        <span className="flex items-center gap-1">
          | Go to page:
          <input
            type="number"
            defaultValue={table.getState().pagination.pageIndex + 1}
            onChange={(e) => {
              const page = e.target.value ? Number(e.target.value) - 1 : 0;
              table.setPageIndex(page);
            }}
            className="border p-1 rounded w-16"
          />
        </span>
        <select
          value={table.getState().pagination.pageSize}
          onChange={(e) => {
            table.setPageSize(Number(e.target.value));
          }}
        >
          {[10, 20, 30, 40, 50].map((pageSize) => (
            <option key={pageSize} value={pageSize}>
              Show {pageSize}
            </option>
          ))}
        </select>
      </div>
      <div>{table.getPrePaginationRowModel().rows.length} Rows</div>
      <div>
        <button onClick={() => rerender()}>Force Rerender</button>
      </div>
      <div>
        <button onClick={() => refreshData()}>Refresh Data</button>
      </div>
      {/* <pre>{JSON.stringify(table.getState(), null, 2)}</pre> */}
    </div>
  );
};

const TableViewMobile = (props: any) => {
  const { columns, data, refreshData } = props;

  const rerender = useReducer(() => ({}), {})[1];

  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const [globalFilter, setGlobalFilter] = useState("");

  const table = useReactTable({
    data,
    columns,
    filterFns: {
      fuzzy: fuzzyFilter,
    },
    state: {
      columnFilters,
      globalFilter,
    },
    onColumnFiltersChange: setColumnFilters,
    onGlobalFilterChange: setGlobalFilter,
    globalFilterFn: fuzzyFilter,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getFacetedRowModel: getFacetedRowModel(),
    getFacetedUniqueValues: getFacetedUniqueValues(),
    getFacetedMinMaxValues: getFacetedMinMaxValues(),
    debugTable: true,
    debugHeaders: true,
    debugColumns: false,
  });

  useEffect(() => {
    if (table.getState().columnFilters[0]?.id === "fullName") {
      if (table.getState().sorting[0]?.id !== "fullName") {
        table.setSorting([{ id: "fullName", desc: false }]);
      }
    }
  }, [table.getState().columnFilters[0]?.id]);

  return (
    <ViewContainerStatic style={{ padding: 2, flex: 1}}>
      <ViewContainerStatic>
        <DebouncedInput
          value={globalFilter ?? ""}
          onChange={(value) => setGlobalFilter(String(value))}
          style={{
            padding: 2,
            fontSize: 18,
            borderWidth: 1,
            borderColor: "black",
          }}
          placeholder="Search all columns..."
        />
      </ViewContainerStatic>
      <ViewContainerStatic style={{ height: 2 }} />
      {/* Use FlatList to render your table */}
      <FlatList
        data={table.getRowModel().rows}
        keyExtractor={(row) => row.id.toString()}
        renderItem={({ item: row }) => (
          <ViewContainerStatic key={row.id}>
            {row.getVisibleCells().map((cell) => (
              <ViewTypographyText key={cell.id}>
                {flexRender(cell.column.columnDef.cell, cell.getContext())}
              </ViewTypographyText>
            ))}
          </ViewContainerStatic>
        )}
      />
      <ViewContainerStatic style={{ height: 2 }} />
      <ViewContainerRow
        style={{
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <ViewButtonPressable
          style={({ pressed }) => ({
            borderColor: pressed ? "gray" : "black",
            borderWidth: 1,
            borderRadius: 5,
            padding: 10,
          })}
          onPress={() => table.setPageIndex(0)}
          disabled={!table.getCanPreviousPage()}
        >
          <ViewTypographyText>{"<<"}</ViewTypographyText>
        </ViewButtonPressable>
        <ViewButtonPressable
          style={({ pressed }) => ({
            borderColor: pressed ? "gray" : "black",
            borderWidth: 1,
            borderRadius: 5,
            padding: 10,
          })}
          onPress={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
        >
          <ViewTypographyText>{"<"}</ViewTypographyText>
        </ViewButtonPressable>
        <ViewButtonPressable
          style={({ pressed }) => ({
            borderColor: pressed ? "gray" : "black",
            borderWidth: 1,
            borderRadius: 5,
            padding: 10,
          })}
          onPress={() => table.nextPage()}
          disabled={!table.getCanNextPage()}
        >
          <ViewTypographyText>{">"}</ViewTypographyText>
        </ViewButtonPressable>
        <ViewButtonPressable
          style={({ pressed }) => ({
            borderColor: pressed ? "gray" : "black",
            borderWidth: 1,
            borderRadius: 5,
            padding: 10,
          })}
          onPress={() => table.setPageIndex(table.getPageCount() - 1)}
          disabled={!table.getCanNextPage()}
        >
          <ViewTypographyText>{">>"}</ViewTypographyText>
        </ViewButtonPressable>
        <ViewTypographyText>
          Page {table.getState().pagination.pageIndex + 1} of{" "}
          {table.getPageCount()} |
        </ViewTypographyText>
        <ViewContainerRow
          style={{ alignItems: "center" }}
        >
          <ViewTypographyText> Go to page:</ViewTypographyText>
          <ViewInputText
            value={(table.getState().pagination.pageIndex + 1).toString()}
            onChangeText={(text) => {
              const page = text ? Number(text) - 1 : 0;
              table.setPageIndex(page);
            }}
            style={{ borderWidth: 1, borderRadius: 5, padding: 5, width: 50 }}
          />
        </ViewContainerRow>
        <ViewInputText
          value={table.getState().pagination.pageSize.toString()}
          onChangeText={(text) => {
            table.setPageSize(Number(text));
          }}
          style={{ borderWidth: 1, borderRadius: 5, padding: 5, width: 80 }}
        />
      </ViewContainerRow>
      <ViewTypographyText>
        {table.getPrePaginationRowModel().rows.length} Rows
      </ViewTypographyText>
      <ViewButtonPressable
        style={({ pressed }) => ({
          borderColor: pressed ? "gray" : "black",
          borderWidth: 1,
          borderRadius: 5,
          padding: 5,
        })}
        onPress={() => rerender()}
      >
        <ViewTypographyText>Force Rerender</ViewTypographyText>
      </ViewButtonPressable>
      <ViewButtonPressable
        style={({ pressed }) => ({
          borderColor: pressed ? "gray" : "black",
          borderWidth: 1,
          borderRadius: 5,
          padding: 5,
        })}
        onPress={() => refreshData()}
      >
        <ViewTypographyText>Refresh Data</ViewTypographyText>
      </ViewButtonPressable>
    </ViewContainerStatic>
  );
};

// Need to use the same code for web and mobile.
// The tables will need to be changed to retain web styling but be using Views etc. as the mobile one is.
// Change to this when done:
// export const ViewTableMain = ({ tableData }: any) => { return <ViewTableCore {...tableData} /> }
export const UseDisplayTable =
  UtilityPlatformMain.OS === "web"
    ? ({ tableData }: any) => {
        return <TableViewWeb {...tableData} />;
      }
    : ({ tableData }: any) => {
        return <TableViewMobile {...tableData} />;
      };

// Need to use the same code for web and mobile.
// The tables will need to be changed to retain web styling but be using Views etc. as the mobile one is.
const TableViewCombined = (props: any) => {
  const { columns, data, refreshData } = props;

  const rerender = useReducer(() => ({}), {})[1];

  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const [globalFilter, setGlobalFilter] = useState("");

  const table = useReactTable({
    data,
    columns,
    filterFns: {
      fuzzy: fuzzyFilter,
    },
    state: {
      columnFilters,
      globalFilter,
    },
    onColumnFiltersChange: setColumnFilters,
    onGlobalFilterChange: setGlobalFilter,
    globalFilterFn: fuzzyFilter,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getFacetedRowModel: getFacetedRowModel(),
    getFacetedUniqueValues: getFacetedUniqueValues(),
    getFacetedMinMaxValues: getFacetedMinMaxValues(),
    debugTable: true,
    debugHeaders: true,
    debugColumns: false,
  });

  useEffect(() => {
    if (table.getState().columnFilters[0]?.id === "fullName") {
      if (table.getState().sorting[0]?.id !== "fullName") {
        table.setSorting([{ id: "fullName", desc: false }]);
      }
    }
  }, [table.getState().columnFilters[0]?.id]);
  return (
    <ViewContainerStatic style={{ padding: 8 }}>
      <ViewContainerStatic>
        <ViewInputText
          value={globalFilter ?? ""}
          onChangeText={(value) => setGlobalFilter(String(value))}
          style={{
            padding: 8,
            borderWidth: 1,
            borderColor: "black",
            fontSize: 18,
          }}
          placeholder="Search all columns..."
        />
      </ViewContainerStatic>
      <ViewContainerStatic style={{ height: 8 }} />
      {/* ... Table code */}
      <ViewContainerRow
        style={{
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <ViewContainerStatic
          style={{ borderWidth: 1, borderRadius: 4, padding: 8 }}
        >
          <Button
            title="<<"
            onPress={() => table.setPageIndex(0)}
            disabled={!table.getCanPreviousPage()}
          />
        </ViewContainerStatic>
        <ViewContainerStatic
          style={{ borderWidth: 1, borderRadius: 4, padding: 8 }}
        >
          <Button
            title="<"
            onPress={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          />
        </ViewContainerStatic>

        <ViewContainerStatic
          style={{ borderWidth: 1, borderRadius: 4, padding: 8 }}
        >
          <Button
            title=">"
            onPress={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          />
        </ViewContainerStatic>
        <ViewContainerStatic
          style={{ borderWidth: 1, borderRadius: 4, padding: 8 }}
        >
          <Button
            title=">>"
            onPress={() => table.setPageIndex(table.getPageCount() - 1)}
            disabled={!table.getCanNextPage()}
          />
        </ViewContainerStatic>
        {/* ... (Other buttons and controls) */}
      </ViewContainerRow>
      <ViewContainerStatic>
        <Button onPress={() => rerender()} title="Force Rerender" />
      </ViewContainerStatic>
      <ViewContainerStatic>
        <Button onPress={() => refreshData()} title="Refresh Data" />
      </ViewContainerStatic>
    </ViewContainerStatic>
  );
};
