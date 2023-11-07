import { useWindowDimensions } from "react-native";
import { ViewButtonPressable, ViewButtonText } from "./button";
import { ViewIconMain } from "./icon";
import { ViewModalContainer, useModalVisibility } from "./modal";
import {
  ViewTypographyHeading,
  ViewTypographySubheading,
  ViewTypographyText,
} from "./typography";
import { ViewSearchEntity, ViewSearchInput, ViewSearchResults } from "./search";
import { useQueryerQuery } from "./queryer";
import { instanceSupabaseClient, handleSupabaseResponse } from "./supabase";
import { useAttributeUnioned } from "./attribute";
import { ViewBrowseSearch } from "./browse";
import {
  ViewContainerRow,
  ViewContainerScroll,
  ViewContainerStatic,
} from "./container";
import { useReactState } from "./react";
import { ViewInputText } from "./input";
import { useZustandStore } from "./zustand";
import { ViewEntityHeading } from "./entity";

// STATE

export const useRelationshipState = (relationshipId: string) => {
  const store = useZustandStore(`relationship-${relationshipId}`);
  const value = store((state: any) => state.value);
  const update = store((state: any) => state.update);
  return { value, update };
};

// MODAL

export const ViewRelationshipModal = ({
  spacename,
  entityid1,
  entityid2,
  attributename,
}: any) => {
  const relationshipsExisting = useRelationshipArray(
    spacename,
    entityid1,
    entityid2
  );
  const attributes = useAttributeUnioned({});
  // console.log(attributes);
  return (
    <ViewModalContainer
      modalName={"relationships"}
      height={500}
      backdrop
      width={1000}
    >
      <ViewTypographyHeading textString={`Relationships`} />
      <ViewContainerRow style={{ height: 300 }}>
        <ViewTypographySubheading textString={`Add New Relationship`} />
        <ViewRelationshipEntity selected={entityid1} disabled={true} />
        <ViewRelationshipAttribute
          attributes={attributes.data}
          selected={attributename}
        />
        <ViewRelationshipEntity selected={entityid2} />
        <ViewButtonText
          textString={`Add`}
          selectable={false}
          numberOfLines={1}
        />
      </ViewContainerRow>
      <ViewTypographySubheading textString={`Existing Relationships`} />
      <ViewRelationshipRelationships
        entityid1={"97f48d4d-d38b-4ed1-afd4-e477839f3247"}
      />
    </ViewModalContainer>
  );
};

export const ViewRelationshipAttribute = ({ data, selected }: any) => {
  // A table + search to select an attribute
  const [state, set] = useReactState();
  return <ViewSearchEntity searchTable={"attributes_unioned"} />;
};

export const ViewRelationshipEntity = ({ data, selected, disabled }: any) => {
  // A table + search to select an entity
  const [state, set] = useReactState();
  return <ViewSearchEntity searchTable={"entities_orgmenta"} />;
};

export const ViewRelationshipRelationships = ({
  entityid1,
  entityid2,
}: any) => {
  const [search, set] = useReactState("");
  const searchArray = useRelationshipArray("orgmenta", entityid1, entityid2);
  return (
    <ViewContainerStatic style={{ flex: 1 }}>
      <ViewContainerRow style={{ maxHeight: 40, width: "100%" }}>
        <ViewTypographyText
          style={{ flex: 2 }}
        >{`Search: `}</ViewTypographyText>
        <ViewContainerStatic>
          <ViewInputText
            autoFocus
            style={{
              flex: 3,
              backgroundColor: "white",
              borderWidth: 1,
              maxWidth: 100,
            }}
            onChangeText={(e) => set(e)}
          />
        </ViewContainerStatic>
        <ViewButtonPressable style={{ flex: 1, maxHeight: 20 }}>
          <ViewIconMain
            color={`black`}
            name={`add-circle`}
            source={`Ionicons`}
          />
          {/* <ViewTypographyText>(QuickaddButton-todo)</ViewTypographyText> */}
        </ViewButtonPressable>
      </ViewContainerRow>
      <ViewContainerScroll style={{ height: "100%", backgroundColor: "gray" }}>
        {searchArray.isLoading && (
          <ViewTypographyText
            numberOfLines={2}
            style={{
              fontSize: 12,
              height: 30,
              backgroundColor: "white",
            }}
          >
            Loading...
          </ViewTypographyText>
        )}
        {!searchArray.isLoading &&
          (!searchArray?.data || searchArray?.data?.length === 0) && (
            <ViewTypographyText
              style={{
                marginTop: 2,
                fontSize: 12,
                height: 30,
                backgroundColor: "white",
              }}
            >
              0 Results Found
            </ViewTypographyText>
          )}
        {searchArray?.data?.map((x: any, i: string) => (
          <ViewTypographyText
            numberOfLines={2}
            style={{
              marginTop: 2,
              fontSize: 12,
              height: 30,
              backgroundColor: "white",
            }}
            key={i}
          >
            {x.e1}|{x.a}|{x.e2}|{x.status}
          </ViewTypographyText>
        ))}
      </ViewContainerScroll>
    </ViewContainerStatic>
  );
};

// WIDGET

export const ViewRelationshipWidget = (props: any) => {
  // A component with relationships info, that when clicked shows a popup with more information.
  // Used by Displays to show relationship information for focuses (entities and their relationships)
  const window = useWindowDimensions();
  // console.log(props.values)
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
        {/* {JSON.stringify(props.values.map((x: any) => x?.e2))} */}
        {props.values.map((x: any,i:string) =>
          x === null ? (
            <ViewTypographyText key={i}>[None]</ViewTypographyText>
          ) : (
            <ViewEntityHeading
              key={i}
              entityid={x?.e2}
              spacename={`orgmenta`}
            />
          )
        )}
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

// ARRAY

export async function requestRelationshipArray(
  spacename: string,
  entityid1: string
) {
  return await instanceSupabaseClient
    .from(spacename && `relationships_${spacename}`)
    .select()
    .or(`e1.eq.${entityid1},e2.eq.${entityid1}`)
    .range(0, 9) //temp arbitrary limit of 10 (todo: pass variables in here to get proper pagination)
    .then(handleSupabaseResponse as any);
}

export const useRelationshipArray = (
  spacename: string,
  entityid1: string,
  entityid2?: string,
  attributename?: string
) => {
  const queryKey: (string | number)[] = [
    "relationships",
    spacename,
    entityid1,
    entityid2 || "any",
    attributename || "any",
  ];
  const query = useQueryerQuery(
    queryKey,
    () => requestRelationshipArray(spacename, entityid1),
    {
      enabled: !!spacename && !!entityid1,
    }
  );
  return query;
};
