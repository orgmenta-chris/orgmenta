// 'Browse' is search functionality, with optional 'quick-add' to convert the search term to a new entity.

import { ViewModalMain } from './modal'
import { useQuery } from '@tanstack/react-query'
import { ScrollView, Text, TextInput, Pressable } from 'react-native'
import { ViewRouterLink } from './router';


// Active

// This is a useQuery query that just returns a blank object (it doesn't query anything).
// Then the user can switch active bookmarks, which will update this query.
export const useBrowseActive = ({...Input}:TypeBrowseActive)=> {
    const query = useQuery({
        queryKey:['browse',"active"],
        queryFn:()=>{ return {} },
        enabled: false,
        initialData: {
          id: null,
          title:'Browse',
        }
    });
    return query
}

export type TypeBrowseActive = any; // placeholder


// Modal

export const ViewBrowseModal = (props:any) => {
    return (
        <ViewModalMain modalName={'browse'} snapto={'right'} backdrop pinnable collapsible >
            <ViewRouterLink to="browse">Open in fullscreen--></ViewRouterLink>
            <Text>Search:</Text>
            <TextInput/>
            <ScrollView style={{backgroundColor:'gray'}}>
                <Text>SearchResults</Text>
                <Text>SearchResults</Text>
                <Text>SearchResults</Text>
                <Text>SearchResults</Text>
                <Text>SearchResults</Text>
                <Text>SearchResults</Text>
                <Text>SearchResults</Text>
                <Text>SearchResults</Text>
                <Text>SearchResults</Text>
                <Text>SearchResults</Text>
                <Text>SearchResults</Text>
                <Text>SearchResults</Text>
                <Text>SearchResults</Text>
                <Text>SearchResults</Text>
                <Text>SearchResults</Text>
                <Text>SearchResults</Text>
                <Text>SearchResults</Text>
                <Text>SearchResults</Text>
                <Text>SearchResults</Text>
                <Text>SearchResults</Text>
                <Text>SearchResults</Text>
                <Text>SearchResults</Text>
                <Text>SearchResults</Text>
                <Text>SearchResults</Text>
                <Text>SearchResults</Text>
                <Text>SearchResults</Text>
                <Text>SearchResults</Text>
                <Text>SearchResults</Text>
                <Text>SearchResults</Text>
                <Text>SearchResults</Text>
                <Text>SearchResults</Text>
                <Text>SearchResults</Text>
                <Text>SearchResults</Text>
                <Text>SearchResults</Text>
                <Text>SearchResults</Text>
                <Text>SearchResults</Text>
                <Text>SearchResults</Text>
                <Text>SearchResults</Text>
                <Text>SearchResults</Text>
                <Text>SearchResults</Text>
                <Text>SearchResults</Text>
                <Text>SearchResults</Text>
                <Text>SearchResults</Text>
                <Text>SearchResults</Text>
                <Text>SearchResults</Text>
                <Text>SearchResults</Text>
                <Text>SearchResults</Text>
                <Text>SearchResults</Text>
                <Text>SearchResults</Text>
            </ScrollView>
            <Pressable><Text>Quickadd</Text></Pressable>
        </ViewModalMain>
    );
};