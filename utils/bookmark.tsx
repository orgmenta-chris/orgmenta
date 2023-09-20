// 'Bookmarks' are links to categories, pinned or other saved entity views.

import { ScrollView } from 'react-native'
import { ViewModalMain } from './modal'
import { Expandable } from '../components/expandable'
import { data } from "./static";


// Modal

export const ViewBookmarkModal = (props:any) => {
    return (
        <ViewModalMain modalName={'bookmark'}  backdrop pinnable >
            <ScrollView style={{height:'80%'}}
            >
                {
                    data // temporary array that contains all the navigation objects
                    .filter(
                        (x) => (x.status === "3. Active" || __DEV__) && x.parent === 1
                    ) // if in production, only show active modules
                    .map((x, i) => (
                        <Expandable item={x} key={i} />
                    )) // display the name only (temporary, to be replaced with link)
                }
            </ScrollView>
        </ViewModalMain>
    );
  };