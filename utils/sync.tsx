// PLACEHOLDER - NOTHING HAS BEEN FINALISED OR TESTED.

// Sync status between differnent spaces, databases etc.
// A field or entity can be in the following sync states:
// - synced to all specified database (i.e. any space+database that the field has been attached to)
// - syncing
// - manual sync? (auto sync is disabled and you need to click to enable it)
// - sync disabled
// - sync issue.
// - not synced / new value(s) to sync (e.g. if a form field has been edited without yet saving it)

import { ViewContainerRow } from "./container";
import { ViewButtonPressable } from "./button";
import { ViewIconMain } from "./icon";
import { useFieldState, TypeFieldState } from "./field";
import { useQueryerClient } from "./queryer";
import { useReactState } from "./react";

// DATABASES
// List the available databases, and which ones of them are set to be recipients of data

// Todo

// PRESSABLE

// Click to open a sync status popup. This component is placed on fields so that the user can see if the field is changed / not yet saved to database.
export const ViewSyncButton = ({ id, style }: { id: string[]; style: any }) => {
  const fieldState = useFieldState(id) as TypeFieldState;
  const fieldSet = useSyncSet(id);
  return (
    <ViewButtonPressable
      style={{
        padding: 5,
        // backgroundColor: (fieldState?.data as any)?.syncIndividual
        //   ? "gray"
        //   : "lightgray",
        backgroundColor: "gray",
        ...style,
      }}
      // Todo
      // onPress={fieldSet}
    >
      {/* todo (make dynamic) */}
      <ViewSyncIcon state={arraySyncStatuses[5]} />
      {/* Testing */}
      {/* <ViewTypographyText style={{position:'absolute',width:100, height:100, top:-100, backgroundColor:'green', overflow:'hidden'}}>{JSON.stringify(state, null, 2)}</ViewTypographyText> */}
    </ViewButtonPressable>
  );
};

// SET

// Set the privacy state of fields (toggle the syncUniversal value)
export const useSyncSet = (id: string[]) => {
  const queryerClient = useQueryerClient();
  return () => {
    queryerClient.setQueryData(["field"].concat(id), (oldData: any) => {
      return {
        ...oldData,
        syncIndividual: !oldData?.syncIndividual,
        syncPrevious: !oldData?.syncIndividual,
      };
    });
  };
};

// UNIVERSAL

// TODO (placeholder, not yet revised, implemented or tested)
// A component to manage sync across the whole app (this will be used within the Sync Action panel).
export const ViewSyncUniversal = () => {
  // todo: change this useReactState to a useQuery so that it will persist when the modal is opened and closed.
  const [universalState, universalSet] = useReactState(false); // whether the sync is applied universally
  const individualSet = useSyncUniversal(!universalState); // hook to set the sync for all fields
  const [infoState, infoSet] = useReactState(false); // whether the sync 'info tooltip' is currently visible
  return (
    <ViewContainerRow style={{flex: 1 }}>
      {/* <ViewTypographySubsubheading
        numberOfLines={1}
        selectable={false}
        style={{ flex: 1 }}
      >
        Toggle Privacy Sync
      </ViewTypographySubsubheading>
      <ViewButtonPressable
        style={{
          padding: 5,
          backgroundColor: universalState ? "gray" : "lightgray",
        }}
        onPress={() => {
          universalSet((oldData) => !oldData);
          individualSet();
        }}
      >
        <ViewIconMain
          name={universalState ? "sync" : "sync-off"}
          source={"Feather"}
          color={"white"}
        />
      </ViewButtonPressable>
      <ViewButtonPressable
        style={{
          flexDirection: "row",
          padding: 5,
          height: 50,
        }}
        onPress={() => infoSet((old) => !old)}
        onHoverIn={() => infoSet(true)}
        onHoverOut={() => infoSet(false)}
      >
        <ViewIconMain name={"info"} source={"Feather"} color={"black"} />
        {infoState && (
          <ViewContainerStatic
            style={{
              position: "absolute",
              backgroundColor: "rgba(211,211,211, 1)",
              bottom: -50,
              left: -125,
              width: 175,
              height: 50,
            }}
          >
            <ViewTypographyText>
              Sync is{" "}
              {universalState
                ? "ON. Your fields are hidden in the UI (TODO)"
                : "OFF. Your fields are visible in the UI. (TODO)"}
            </ViewTypographyText>
          </ViewContainerStatic>
        )}
      </ViewButtonPressable> */}
    </ViewContainerRow>
  );
};

// When the universal button is clicked, ALL field syncs will be toggled throughout the app.
// todo: maybe use useFieldSet (i.e. abstract out the logic in here)
// todo: add functionality here to set a main 'universal' state so that we can replace the useReactState in. OR, use a 'useUserState'/'useUserState' instead.
export const useSyncUniversal = (universalState: any) => {
  const queryerClient = useQueryerClient();
  return () => {
    queryerClient
      .getQueryCache()
      .findAll(["field"]) // for any state that has the 'field' root
      .forEach(({ queryKey }) => {
        // go through and toggle the sync
        queryerClient.setQueryData(queryKey, (oldData: any) => {
          return {
            ...oldData,
            syncUniversal: oldData?.syncUniversal ? false : true,
            syncIndividual: universalState || oldData.syncPrevious, // if enabling universal sync, set the field sync to true. Else, set the previous individual sync state.
          };
        });
      });
  };
};

// ICON

export const ViewSyncIcon = ({ state }: any) => {
  // console.log(state)
  return (
    <ViewIconMain
      name={state.icon_name}
      source={state.icon_source}
      color={"white"}
    />
  );
};

// STATUSES

export const arraySyncStatuses = [
  {
    status: "0. New",
    title: "none",
    icon_name: "?",
    icon_source: "?",
    notes: "",
  },
  {
    status: "1. Respond",
    title: "issue",
    icon_name: "sync-problem",
    icon_source: "MaterialIcons",
    notes: "",
  },
  {
    status: "2. Active",
    title: "syncing",
    icon_name: "?",
    icon_source: "?",
    notes:
      "Maybe rotate this continuously - Or, add an activity indicator spinner to it.",
  },
  {
    status: "3. Waiting",
    title: "?",
    icon_name: "?",
    icon_source: "?",
    notes:
      "Waiting for realtime update / confirmation / respond / go-ahead from databases?",
  },
  {
    status: "4. Hold",
    title: "disabled",
    icon_name: "sync-disabled",
    icon_source: "MaterialIcons",
    notes: "",
  },
  {
    status: "5. Evaluate",
    title: "general",
    icon_name: "sync",
    icon_source: "MaterialIcons",
    notes: "general, or manual sync?",
  },
  {
    status: "6. Complete",
    title: "synced",
    icon_name: "?",
    icon_source: "MaterialIcons",
    notes: "synced with a tick?",
  },
];
