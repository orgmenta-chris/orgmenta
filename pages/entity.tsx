import { ViewPageMain } from "../utils/page";
import { ViewDisplayDynamic } from "../utils/display";
import { ViewActionTabs } from "../utils/action";
import { ViewFocusMain } from "../utils/focus";
import { useSpaceState, TypeSpaceState } from "../utils/space";
import {
  useEntityArray,
  useEntitySingle,
  useEntitySchema,
} from "../utils/entity";
import { useRouterLocation } from "./../utils/router";
import { View } from "react-native";

export default function Entity() {
  const space = useSpaceState(["space", "selected"]);
  const paths = useRouterLocation()?.paths;
  const display = paths?.[3]; // this will eventually be passed as the component prop instead of hardcoded here
  const category = paths?.[2]; // this will eventually be passed as the component  prop instead of hardcoded here
  const spacename = (space.data as TypeSpaceState["data"])?.spacename;
  // todo: auxiliary data doesn't have relationships table joined to it yet
  const auxiliary = useEntityArray(spacename, [category]);
  const focus = useEntitySingle({ category });
  const schema = useEntitySchema();
  return (
    <ViewPageMain>
      {/* Flex View to keep Action tabs at the bottom of the screen */}
      <View style={{ flex: 1 }}>
        {/* Show the 'focus' entity (the primary record being viewed) */}
        <ViewFocusMain />
        {/* Show the 'auxiliary' entities (secondary records being vieweed, possibly related to the focus) in whichever mode is selected, e.g. Calendar, Table etc. */}
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
