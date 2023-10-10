// A 'shield' refers to a 'privacy mask' or 'redacted information', i.e. a cover or cloak / privacy shield on password fields, secure data etc.
// This is a front-end feature only, and is available to the user.
// A manager of a space will be able to set the default in supabase (e.g. 'By default, obscure the title field. By default, do not obscure the priority field')
// Set the mask to redact or temporarily hide a field, or to collapse it (e.g. a Richtext field will be reduced to a single row height.)

import { ViewContainerStatic, ViewContainerRow } from "./container";
import { ViewTypographySubsubheading, ViewTypographyText } from "./typography";
import { ViewButtonPressable } from "./button";
import { ViewIconMain } from "./icon";
import { useFieldState, TypeFieldState } from "./field";
import { useQueryerClient } from "./queryer";
import { useReactState } from "./react";

// CONTAINER

// Wrap a field in this component in order to provide it a shield and allow it to be obfuscated.
// NOT YET IN USE
// (currently just returns a button, not currently wrapping it or doing anything else.)
// export const ViewShieldContainer = ({ id }: any) => {
//   return <ViewShieldButton id={id} />;
// };

// PRESSABLE

// Click to toggle shield on/off. If 'all' is passed in the 'field' prop, it will toggle all fields.
export const ViewShieldButton = ({
  id,
  style,
}: {
  id: string[];
  style: any;
}) => {
  const fieldState = useFieldState(id) as TypeFieldState;
  const fieldSet = useShieldSet(id);
  return (
    <ViewButtonPressable
      style={{
        padding: 5,
        backgroundColor: fieldState?.data?.shieldIndividual
          ? "gray"
          : "lightgray",
        ...style,
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
  const queryerClient = useQueryerClient();
  return () => {
    queryerClient.setQueryData(["field"].concat(id), (oldData: any) => {
      return {
        ...oldData,
        shieldIndividual: !oldData?.shieldIndividual,
        shieldPrevious: !oldData?.shieldIndividual,
      };
    });
  };
};

// UNIVERSAL

// A component to toggle shields across all active fields in the app.
export const ViewShieldUniversal = () => {
  // todo: change this useReactState to a useQuery so that it will persist when the modal is opened and closed.
  const [universalState, universalSet] = useReactState(false); // whether the shield is applied universally
  const individualSet = useShieldUniversal(!universalState); // hook to set the shield for all fields
  const [infoState, infoSet] = useReactState(false); // whether the shield 'info tooltip' is currently visible
  return (
    <ViewContainerRow style={{ flex: 1 }}>
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
    </ViewContainerRow>
  );
};

// When the universal button is clicked, ALL field shields will be toggled throughout the app.
// todo: maybe use useFieldSet (i.e. abstract out the logic in here)
// todo: add functionality here to set a main 'universal' state so that we can replace the useReactState in. OR, use a 'useUserState'/'useUserState' instead.
export const useShieldUniversal = (universalState: any) => {
  const queryerClient = useQueryerClient();
  return () => {
    queryerClient
      .getQueryCache()
      .findAll(["field"]) // for any state that has the 'field' root
      .forEach(({ queryKey }) => {
        // go through and toggle the shield
        queryerClient.setQueryData(queryKey, (oldData: any) => {
          return {
            ...oldData,
            shieldUniversal: oldData?.shieldUniversal ? false : true,
            shieldIndividual: universalState || oldData.shieldPrevious, // if enabling universal shield, set the field shield to true. Else, set the previous individual shield state.
          };
        });
      });
  };
};

// MASK

// The actual shield / cover / mask for the field (if shield is on, then show this redacted field instead of the actual field)
export const ViewShieldMask = () => {
  return (
    <ViewContainerStatic
      style={{ flex: 1, backgroundColor: "gray", height: 35 }}
    />
  );
};
