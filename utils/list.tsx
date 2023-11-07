import { useAttributeUnioned } from "./attribute";
import { ViewButtonIcon, ViewButtonText } from "./button";
import {
  ViewContainerStatic,
  ViewContainerScroll,
  ViewContainerColumn,
  ViewContainerRow,
} from "./container";
import { useEntityModal } from "./entity";
import { ViewInputSelect, ViewInputText } from "./input";
import { useModalVisibility } from "./modal";
import { useReactState } from "./react";
import { ViewRelationshipWidget } from "./relationship";
import { ViewTypographyText } from "./typography";
import { useZustandStore } from "./zustand";

// STATE

export const useListState = (listId: string) => {
  const store = useZustandStore(`list-${listId}`);
  const value = store((state: any) => state.value);
  const update = store((state: any) => state.update);
  const toggle = () => {
    const oldValue = value === "true" ? true : false;
    const newValue = !oldValue;
    update(newValue);
  };
  return { value, update, toggle };
};

// MAIN

export const ViewListMain = ({ data = [] }: any) => {
  const listStateAll = useListState("all");
  return (
    <ViewContainerStatic style={{ flex: 1 }}>
      <ViewContainerRow style={{ borderBottomWidth: 1 }}>
        <ViewTypographyText
          style={{ color: `rgb(100,100,100)`, fontWeight: "600" }}
        >
          Expand All:{" "}
        </ViewTypographyText>
        <ViewButtonIcon
          onPress={listStateAll.toggle}
          iconColor={"rgb(100,100,100)"}
          iconSource={"Feather"}
          iconName={listStateAll.value === "true" ? "check-square" : "square"}
        />
      </ViewContainerRow>
      <ViewContainerScroll style={{ flex: 1, backgroundColor: "white" }}>
        {data?.map((x: any, i: number) => (
          <ViewListItem key={i} item={x} listStateAll={listStateAll} />
        ))}
      </ViewContainerScroll>
    </ViewContainerStatic>
  );
};

// ITEM (todo: make it agnostic, i.e. abstract the entity and relationship properties out before it gets here)

export const useListItem = (listId: string) => {
  const store = useZustandStore(`list-${listId}`);
  const value = store((state: any) => state.value);
  const update = store((state: any) => state.update);
  const toggle = () => {
    const oldValue = value === "true" ? true : false;
    const newValue = !oldValue;
    update(newValue);
  };
  return { value, update, toggle };
};

export const ViewListItem = ({ item, listStateAll }: any) => {
  // const [updateState, updateSet] = useReactState({});
  const listItem = useListItem(item.id);
  const listItem2 = useListItem(item.id+'2');
  const modal = useEntityModal();
  const modalSwitch = useModalVisibility("entity-property");
  const useModal = (property: string) => {
    modal.update(JSON.stringify({ entityId: item.id, property: property }));
    modalSwitch();
  };
  const useItem = (property: string, value:any) => {
    // console.log(property, value);
    // console.log(listItem2.value);
    listItem2.update(JSON.stringify({ ...JSON.parse(listItem2.value), [property]: value }));
    // console.log(listItem2.value);
  };
  const attributes = useAttributeUnioned([]);
  // console.log('item',item)
  return (
    <ViewContainerColumn
      style={{
        // flex: 1,
        margin: 5,
        backgroundColor: "gray",
      }}
    >
      <ViewContainerRow>
        <ViewTypographyText
          style={{ color: "white", fontWeight: "600", flex: 1 }}
        >
          {item.entities.title}
        </ViewTypographyText>
        <ViewButtonText
          onPress={() => useModal("status")}
          textString={item.entities.status}
        />
        <ViewButtonText
          onPress={() => useModal("type")}
          textString={item.entities.type}
        />
        <ViewButtonText
          onPress={()=>useModal('38a15ab6-c1ad-47cf-803c-5446e2214601')}
          textString={listItem2.value}
        />
        <ViewButtonIcon
          onPress={listItem.toggle}
          iconSource={"AntDesign"}
          iconName={
            listStateAll.value === "true" || listItem.value === "true"
              ? "caretdown"
              : "caretright"
          }
        />
      </ViewContainerRow>
      {(listItem.value === "true" || listStateAll.value === "true") && (
        <ViewContainerColumn>
          {Object.keys(item.entities).map((y, i) => (
            <ViewContainerRow key={i} style={{ padding: 5, flex: 1 }}>
              <ViewTypographyText
                style={{ color: "white", fontWeight: "600", flex: 1 }}
              >
                {y}
              </ViewTypographyText>
              {["status","type","title","description"].includes(y) ? (
                <ViewInputText onChangeText={(e)=>useItem(y,e)} style={{ borderWidth: 1, flex: 3 }} defaultValue={item.entities[y]}/>
              ) : (
                <ViewTypographyText style={{ color: "white", flex: 3 }}>
                  {item.entities[y]}
                </ViewTypographyText>
              )}
            </ViewContainerRow>
          ))}
          {Object.keys(item.relationships).map((y, j) => (
            <ViewContainerRow key={j} style={{ padding: 5, flex: 1 }}>
              <ViewTypographyText
                style={{ color: "white", fontWeight: "600", flex: 1 }}
              >
                {/* {y} */}
                {attributes.data?.find((x: any) => x.id === y)?.label || y}
              </ViewTypographyText>
              <ViewContainerStatic style={{ padding: 5, flex: 3 }}>
                <ViewRelationshipWidget
                  attribute={y}
                  values={item.relationships[y]}
                />
              </ViewContainerStatic>
            </ViewContainerRow>
          ))}
        </ViewContainerColumn>
      )}
    </ViewContainerColumn>
  );
};
