// This is a useful module to easily utilise apis.
// For example, it is set up to easily use rapidapi endpoints.

import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { View, Text, ActivityIndicator} from 'react-native';


// Sources

export interface interfaceApiSource {
    url: string,
    options: {
        method: string,
        headers: {
            [key: string]: any
        }
    },
}
  

export const mapApiSource = {
    example: {
        url: 'https://jobsearch4.p.rapidapi.com/api/v2/Jobs/Latest',
        options: {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '1fac0b30fcmshde9070b13a0801dp10c7ecjsn1e967f594d88',
                'X-RapidAPI-Host': 'jobsearch4.p.rapidapi.com'
            }
        }
    }
}


// Items

export interface interfaceApiItems {
    source: interfaceApiSource
}

// fetch data via api
export const requestApiItems = async (props:interfaceApiSource) => {
    if(!props.url){ throw new Error('requestApiItems: No url provided')} // replace this with a proper validation function
    if(!props.options){ throw new Error('requestApiItems: No options provided')} // replace this with a proper validation function
    const response = await fetch(props.url, props.options);
    const result = await response.text();
    return result
}

// A hook to wrap requestApiItems
export const useApiItems = (props:any) => {
    if(!props?.url){ throw new Error('useApiItems: No url provided')}
    if(!props?.options){ throw new Error('useApiItems: No options provided')}
    const query = useQuery(['api',props.name||'default'], ()=>requestApiItems(props));
    return query
};

// A simple component to display the items (or roll your own using useApiItems or requestApiItems)
export const ViewApiItems = ({source}:interfaceApiItems) => {
    const items = useApiItems(source);
    if (items.isLoading) return <ActivityIndicator />;
    if (items.data) return (
        <View style={{backgroundColor:'lightgray'}}>
            <Text>
                {JSON.stringify(JSON.parse(items.data),null,2)}
            </Text>
        </View>
    );
    if (items.error) return <Text>An error occurred: {JSON.stringify(items)}</Text>;
    return <Text>An unknown problem occurred. {JSON.stringify(items)}</Text>;
};

// Example usage
export const ExampleApiItems = () => {
    return <ViewApiItems source={mapApiSource['example']} />
};