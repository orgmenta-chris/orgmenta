import { ViewDisplayDynamic, ViewDisplayTabs } from "../utils/display";
import { ViewActionTabs } from "../utils/action";
import { ViewFocusMain } from "../utils/focus";
import {
    useEntityArray,
    useEntitySingle,
    useEntitySchema,
} from "../utils/entity";
import { useRouterLocation } from "./../utils/router";
import { ViewPageMain } from "../utils/page";

export default function Entity() {
    const paths = useRouterLocation()?.paths;
    // todo: auxiliary data doesn't have relationship ids yet
    const display = paths?.[3]; // this should be passed as the component  prop instead of hardcoded here
    const id = paths?.[2]; // this should be passed as the component  prop instead of hardcoded here
    const auxiliary = useEntityArray({ category: id });
    const focus = useEntitySingle({ id: id });
    const schema = useEntitySchema();
    return (
        <ViewPageMain>
            {/* Show the entity focus (the primary record being viewed) */}
            <ViewFocusMain />
            {/* <View style={{flex:1,height:111,minHeight:"100%",flexGrow:999,backgroundColor:'blue'}}><Text>s</Text></View> */}
            {/* Show the auxiliary entities (in whichever mode is selected, e.g. Calendar, Table etc.) */}
            <ViewDisplayDynamic
                auxiliary={auxiliary}
                schema={schema}
                focus={focus}
                display={display}
            />
            {/* Show the actions tabs/links (e.g. add,edit,copy,delete,share etc.*/}
            <ViewActionTabs
                auxiliary={auxiliary}
                schema={schema}
                focus={focus}
            />
            {/* Show links/tabs for Calendar, List, Table etc. */}
            <ViewDisplayTabs display={display} />
        </ViewPageMain>
    );
}
