// A 'shield' refers to a 'privacy mask' or 'redacted information', i.e. a cover or cloak / privacy shield on password fields, secure data etc.
// This is a front-end feature only, and is available to the user.

import { ViewContainerStatic } from "./container";
import { ViewTypographySubsubheading, ViewTypographyText } from "./typography";
import { ViewButtonPressable } from "./button";
import { ViewIconMain } from "./icon";
import {
  useQueryerClient,
  useQueryerQuery,
  TypeQueryerResult,
} from "./queryer";
import { useState } from "react";

// CONTAINER

// Wrap a field in this component in order to provide it a shield and allow it to be obfuscated.
export const ViewShieldContainer = ({ id }: any) => {
  return <ViewShieldButton id={id} />;
};

// PRESSABLE

// Click to toggle shield on/off. If 'all' is passed in the 'field' prop, it will toggle all fields.
// (Chris needs to ensure this doesn't cause performance issues - fields cannot look at the same query else they will all constantly update.)
// (therefore, we need to use a seperate query key for each field - and if 'all' is toggled with the shield, then the function should update ALL the query keys that exist (and are currently active).
export const ViewShieldButton = ({ id }: { id: string[] }) => {
  const state = useShieldState(id);
  const set = useShieldSet(id);
  return (
    <ViewButtonPressable
      style={{
        padding: 5,
        backgroundColor: (state?.data as any)?.shield ? "gray" : "lightgray",
      }}
      onPress={set}
    >
      <ViewIconMain
        name={(state?.data as any)?.shield ? "shield" : "shield-off"}
        source={"Feather"}
        color={"white"}
      />
      {/* Testing */}
      {/* <ViewTypographyText style={{position:'absolute',width:100, height:100, top:-100, backgroundColor:'green', overflow:'hidden'}}>{JSON.stringify(state, null, 2)}</ViewTypographyText> */}
    </ViewButtonPressable>
  );
};

// SET

// Set the privacy state of fields. (Keeping this separate from useShieldState ensures that toggle components will not update if the state is updated.)
export const useShieldSet = (id: string[]) => {
  const queryClient = useQueryerClient();
  return () => {
    queryClient.setQueryData(["field"].concat(id), (oldData: any) => {
      return { ...oldData, shield: !oldData?.shield };
    });
  };
};

// STATE

// Get the privacy state of fields
//(MAYBE MOVE THIS INTO THE ACTUAL FIELD'S STATE (CREATE IN  FIELD.TSX) RATHER THAN HAVING A SEPARATE CACHE?) <-- Shouldn't impact perforamnce measurably, and would keep the field's stuff all in one place.
export const useShieldState = (id: string[]) => {
  return useQueryerQuery({
    queryKey: ["field"].concat(id), // construct the queryKey
    queryFn: () => null, // No function necessary (as we just want an empty state/cache to use)
    staleTime: Infinity, // This means the data will never become stale automatically
    refetchOnWindowFocus: false, // Make sure the state won't reset when tabbing in and out of the app
  });
};

export type TypeShieldState = TypeQueryerResult & {
  data?: { shield?: string };
};

// UNIVERSAL

// A component to toggle shields across all active fields in the app.
export const ViewShieldUniversal = () => {
  const [allState, allSet] = useState(false); // whether the shield is applied universally
  const set = useShieldUniversal(!allState);
  const [infoState, infoSet] = useState(false); // whether the shield info tooltip is shown
  return (
    <ViewContainerStatic style={{ flexDirection: "row", flex: 1 }}>
      <ViewTypographySubsubheading
        numberOfLines={1}
        selectable={false}
        style={{ flex: 1 }}
      >
        Toggle Privacy Shield
      </ViewTypographySubsubheading>
      <ViewButtonPressable
        style={{
          padding: 5,
          backgroundColor: allState ? "gray" : "lightgray",
        }}
        onPress={() => {
          allSet((oldData) => !oldData);
          set();
        }}
      >
        <ViewIconMain
          name={allState ? "shield" : "shield-off"}
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
        {/* todo: fix opacity (coming from a parent somewhere?) */}
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
              Shield is{" "}
              {allState
                ? "ON. Your fields are hidden in the UI (TODO)"
                : "OFF. Your fields are visible in the UI. (TODO)"}
            </ViewTypographyText>
          </ViewContainerStatic>
        )}
      </ViewButtonPressable>
    </ViewContainerStatic>
  );
};

// When the universal button is clicked, ALL field shields will be toggled throughout the app.
export const useShieldUniversal = (allState: any) => {
  const queryClient = useQueryerClient();
  return () => {
    queryClient
      .getQueryCache()
      .findAll(["field"])
      .forEach(({ queryKey }) => {
        queryClient.setQueryData(queryKey, (oldData: any) => {
          return { ...oldData, shield: allState };
        });
      });
  };
};
