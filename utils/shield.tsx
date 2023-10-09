// A 'shield' refers to a 'privacy mask' or 'redacted information', i.e. a cover or cloak / privacy shield on password fields, secure data etc.
// This is a front-end feature only, and is available to the user.

import { ViewContainerStatic } from "./container";
import { ViewTypographySubsubheading, ViewTypographyText } from "./typography";
import { ViewButtonPressable } from "./button";
import { ViewIconMain } from "./icon";
import { useFieldState, TypeFieldState } from "./field";
import { useQueryerClient } from "./queryer";
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
  const fieldState = useFieldState(id) as TypeFieldState;
  const fieldSet = useShieldSet(id);
  return (
    <ViewButtonPressable
      style={{
        padding: 5,
        backgroundColor: fieldState?.data?.shieldIndividual ? "gray" : "lightgray",
      }}
      onPress={fieldSet}
    >
      <ViewIconMain 
        name={fieldState?.data?.shieldIndividual ? "shield" : "shield-off"}
        source={"Feather"}
        color={"white"}
      />
      {/* Testing */}
      {/* <ViewTypographyText style={{position:'absolute',width:100, height:100, top:-100, backgroundColor:'green', overflow:'hidden'}}>{JSON.stringify(state, null, 2)}</ViewTypographyText> */}
    </ViewButtonPressable>
  );
};

// SET

// Set the privacy state of fields (toggle the shieldUniversal value)
export const useShieldSet = (id: string[]) => {
  const queryClient = useQueryerClient();
  return () => {
    queryClient.setQueryData(["field"].concat(id), (oldData: any) => {
      return { ...oldData, 
        shieldIndividual: !oldData?.shieldIndividual,
        shieldPrevious: !oldData?.shieldIndividual
       };
    });
  };
};

// UNIVERSAL

// A component to toggle shields across all active fields in the app.
export const ViewShieldUniversal = () => {
  const [universalState, universalSet] = useState(false); // whether the shield is applied universally
  const individualSet = useShieldUniversal(!universalState); // hook to set the shield for all fields
  const [infoState, infoSet] = useState(false); // whether the shield 'info tooltip' is currently visible
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
          backgroundColor: universalState ? "gray" : "lightgray",
        }}
        onPress={() => {
          universalSet((oldData) => !oldData);
          individualSet();
        }}
      >
        <ViewIconMain
          name={universalState ? "shield" : "shield-off"}
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
              {universalState
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
export const useShieldUniversal = (universalState: any) => {
  const queryClient = useQueryerClient();
  return () => {
    queryClient
      .getQueryCache()
      .findAll(["field"]) // for any state that has the 'field' root
      .forEach(({ queryKey }) => {
        // go through and toggle the shield
        queryClient.setQueryData(queryKey, (oldData: any) => {
          return {
            ...oldData,
            shieldUniversal: !oldData.shieldUniversal,
            shieldIndividual: universalState || oldData.shieldPrevious // if enabling universal shield, set the field shield to true. Else, set the previous individual shield state.
          };
        });
      });
  };
};

// MASK

// The actual shield / cover / mask for the field (if shield is on, then show this redacted field instead of the actual field)
export const ViewShieldMask = () => {
  return <ViewContainerStatic style={{ flex: 1, backgroundColor: "black" }} />;
};
