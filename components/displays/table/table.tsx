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
// - filtering (C will provide information / show data structures on this one asap. Until then, best to leave this one)
// - show/hide column (low priority, on hold)


import { ViewRouterLink } from '../../../utils/router';

import { useMemo } from 'react'; 
import { View, Text } from 'react-native';
import { createColumnHelper } from '@tanstack/react-table'
  

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
                            <ViewRouterLink to={location.pathname+'/'+info.getValue()}>Open</ViewRouterLink>
                            <ViewRouterLink to={location.pathname+'/'+info.getValue()}>PopOut</ViewRouterLink>
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
