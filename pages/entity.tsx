
import { ViewPageMain } from "../utils/page";
import { ViewDisplayDynamic } from "../utils/display";
import { ViewActionTabs } from "../utils/action";
import { ViewFocusMain } from "../utils/focus";
import {
  useEntityArray,
  useEntitySingle,
  useEntitySchema,
} from "../utils/entity";
import { useRouterLocation } from "./../utils/router";
import { View } from "react-native";

export default function Entity() {
  const paths = useRouterLocation()?.paths;
  // todo: auxiliary data doesn't have relationship ids yet
  const display = paths?.[3]; // this should be passed as the component prop instead of hardcoded here
  const id = paths?.[2]; // this should be passed as the component  prop instead of hardcoded here
  const auxiliary = useEntityArray({ category: id });
  const focus = useEntitySingle({ id: id });
  const schema = useEntitySchema();
  return (
    <ViewPageMain>
      <View style={{ flex: 1 }}>
        {/* Show the entity focus (the primary record being viewed) */}
        <ViewFocusMain />
        {/* Show the auxiliary entities (in whichever mode is selected, e.g. Calendar, Table etc.) */}
        <ViewDisplayDynamic
          auxiliary={auxiliary}
          schema={schema}
          focus={focus}
          display={display}
        />
      </View>
      {/* Show the actions tabs/links (e.g. add,edit,copy,delete,share etc.*/}
      <ViewActionTabs auxiliary={auxiliary} schema={schema} focus={focus} />
    </ViewPageMain>
  );
}
