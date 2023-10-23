import { useWindowDimensions } from "react-native";
import { ViewButtonPressable } from "./button";
import { ViewIconMain } from "./icon";
import { ViewModalContainer, useModalVisibility } from "./modal"
import { ViewTypographyText } from "./typography";
import { useQueryerQuery } from "./queryer";

// full Header component (currently hardcoded, no props)
export const ViewRelationshipsModal = (props: any) => {
  return (
    <ViewModalContainer
      modalName={"relationships"}
      height={500}
      // snapto={"right"}
      backdrop
      // pinnable
      // collapsible
    >
      <ViewTypographyText>test</ViewTypographyText>
    </ViewModalContainer>
  );
};

// WIDGET
export const ViewRelationshipsWidget = (props:any) => {
  // A component with relationships info, that when clicked shows a popup with more information.
  // Used by Displays to show relationship information for focuses (entities and their relationships)
  const window = useWindowDimensions();
  return (
    <ViewButtonPressable
      onPress={useModalVisibility("relationships")}
      style={{
        alignItems: "center",
        // justifyContent: "flex-end",
        flex: 1,
        flexDirection: "row",
      }}
    >
      <ViewTypographyText
        selectable={false}
        numberOfLines={1}
        style={{ paddingRight: 10, color: "white" }}
      >
        related entity ids placeholder: {JSON.stringify(props.values.map((x:any)=>+x?.e2))}
      </ViewTypographyText>
      <ViewIconMain
        name={"relation-many-to-many"} // only shows many-to-many at the moment - but will show one-to-many etc. contextually in the future.
        source={"MaterialCommunityIcons"}
        color={"white"}
        size={30}
        style={{
          alignItems: "center",
          justifyContent: "center",
        }}
      />
    </ViewButtonPressable>
  );
};
