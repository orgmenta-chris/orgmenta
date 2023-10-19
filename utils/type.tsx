// A 'type' is a classification of entity.

import { ViewContainerScroll, ViewContainerStatic } from "./container";
import { optionsDisplayMain } from "./display";
import { ViewIconMain } from "./icon";
import { useRouterLocation, ViewRouterLinkthemed } from "./router";
import { ViewTypographyText } from "./typography";


export const arrayTypeMain = [
  {title:"Area",iconName: 'category', iconSource: 'MaterialIcons'}, //A 1  OR GROUP? this would possibly be better for implying 'categories' as well as 'areas' BUT would conflict with Group in the context of grouping, filtering etc.. (And, would allow us to move 'contact groups' in here... but is that a good thing? )
  {title:"Contact",iconName: 'contacts', iconSource: 'AntDesign'}, //C 2
  {title:"Message",iconName: 'chat', iconSource: 'Entypo'}, //M 3
  {title:"Task",iconName: 'tasks', iconSource: 'FontAwesome5'}, //T 4
  {title:"Event",iconName: 'event', iconSource: 'MaterialIcons'}, //E 5
  {title:"Item",iconName: 'box', iconSource: 'Feather'}, //I 6
  {title:"Reference",iconName: 'paperclip', iconSource: 'Feather'}, //R 7
  {title:"Place",iconName: 'location', iconSource: 'Entypo'}, //P 8 //was Location but L was used by Log. 
  {title:"Blueprint",iconName: 'flash', iconSource: 'FontAwesome'},//B 9 //was template but T conflict (with 'template' and 'rule' as sub types/classes)? - this would actually mean we had a different starting character for each type (e.g. B for Blueprints) which could help with shortcuts.
  {title:"Log",iconName: 'timeline-clock', iconSource: 'MaterialCommunityIcons'}, //L 10(was conflicting with Location but ok now.)
];

export const mapTypeMain = arrayTypeMain.map(
  (x) =>
    (x = {
      name_singular: x?.title.toLowerCase(),
      name_plural: x?.title.toLowerCase() + "s",
      display_singular: x,
      display_plural: x + "s",
      icon: "todo",
    } as any)
);


// TABS

export const ViewTypeTabs = ({}: any) => {
  const display = useRouterLocation()?.paths[3];
  return (
    <ViewContainerScroll
      horizontal
      style={{
        width: "100%",
        flexDirection: "row",
      }}
    >
      {arrayTypeMain?.map((x, i) => (
        <ViewContainerStatic key={i} style={{ flex: 1, width: 50, height: 50 }}>
          <ViewRouterLinkthemed
            style={{
              padding: 5,
              backgroundColor:
                display === (x as any).title.toLowerCase() ? "gray" : "lightgray",
            }}
            to={`entity/../../../${(x as any).title.toLowerCase()}/display`}
          >
            <ViewContainerStatic style={{ alignItems: "center", flex: 1 }}>
              <ViewIconMain
                name={(x as any).iconName}
                source={(x as any).iconSource}
                color={"white"}
              />
              <ViewTypographyText style={{ fontSize: 11 }}>
                {(x as any).title}
              </ViewTypographyText>
            </ViewContainerStatic>
          </ViewRouterLinkthemed>
        </ViewContainerStatic>
      ))}
    </ViewContainerScroll>
  );
};

