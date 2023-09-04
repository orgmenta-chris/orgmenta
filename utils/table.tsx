// We are using tanstack react table ( https://tanstack.com/table/v8 ) for this module, and supplementing it / creating interfaces for it.
// Loisa: Feel free to add functionality as needed.
// This is currently just a placeholder and can be adjusted as needed.
// Eventually we will need the following functionality (implement any at your leisure, in your preferred order):
// - sorting
// - grouping
// - pagination (server side pagination w/ supabase+useQuery)
// - resizable columns (needs to work with react native touch, so standard react table solutions might not work out of the box here).
// - pin columns (make columns sticky, either via a property in the  columns array prop, or in the UI by a user pinning the column manually)
// - allow changes to page size (e.g. show 10/100/200 records) - Low priority, to discuss
// - filtering (Chris will provide information / show data structures on this one asap. Until then, best to leave this one)
// - show/hide column (low priority, on hold)


import { ScrollView, TextInput, View, Text, Pressable } from 'react-native';
import { Link } from 'react-router-dom';
import { useMemo, useEffect, useReducer, useState} from 'react'; 
import {
    createColumnHelper,
    flexRender,
    getCoreRowModel,
    useReactTable,
    ColumnResizeMode,
    ColumnDef,
} from '@tanstack/react-table'
 

// Main

export const ViewTableMain = ({...Input}) => {

    const [columnResizeMode, setColumnResizeMode] = useState<ColumnResizeMode>('onChange')
  
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
  
    const rerender = useReducer(() => ({}), {})[1]
  
    const table = useReactTable({
      data,
      columns,
      columnResizeMode, //https://tanstack.com/table/v8/docs/examples/react/column-sizing
      getCoreRowModel: getCoreRowModel(),
      //   debugTable: true, // logs to console
      //   debugHeaders: true, // logs to console
      //   debugColumns: true, // logs to console
    })
    
    return (
        <View style={{flex:1}}>
          <View style={{flex:1}}>
            <ScrollView style={{flex:1, overflow:"scroll"}}
              stickyHeaderIndices={[0]}
            >
            <View>
              {table && table.getHeaderGroups().map((headerGroup,hgroupIndex) => (
                <View key={headerGroup.id} style={{flexDirection:'row'}}>
                  {headerGroup.headers.map((header, headerIndex) => (<View key={headerIndex}>
                    <Text key={header.id} 
                      style={{ fontWeight:"bold",minWidth:"200px", borderWidth:1}}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </Text>
                  </View>))}
                </View>
              ))}
            </View>
              {table.getRowModel().rows.map(row => (
                <View key={row.id}  style={{flexDirection:'row', width:"100px"}}>
                  {row.getVisibleCells().map((cell,cellIndex) => (
                    <Text key={cell.id} style={{  minWidth:"200px", borderWidth:1}}>
                      {flexRender(cell.column.columnDef.cell, cell.getContext())}
                    </Text>
                  ))}
                </View>
              ))}
            </ScrollView>
          </View>
          <View/>
        </View>
    )
}  
  

// Columns

const columnHelper = createColumnHelper<any>()

export const useTableColumns = (columnNames: string[]) => {
    return useMemo(() => {
        if(columnNames){
            const columns = columnNames.map(columnName => {
                return columnHelper.accessor(columnName, {
                cell: info => 
                    <View>
                        <Text style={{}}>{JSON.stringify(info.getValue())}</Text>  
                        {columnName==='id' && <>
                            <Link to={location.pathname+'/'+info.getValue()}><Text style={{}}>Open</Text></Link>
                            <Link to={location.pathname+'/'+info.getValue()}><Text style={{}}>PopOut</Text></Link>
                        </>}
                    </View>,
                footer: info => info.column.id + '1',
                header: columnName 
                });
            });
            return columns;
        }
    }, [columnNames]);
};
