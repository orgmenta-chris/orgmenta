// 'Bookmarks' are links to categories, pinned or other saved entity views.

import { ViewTypographySubsubheading, ViewTypographyLabel } from "./typography";
import { ViewModalContainer } from "./modal";
import { ViewCardExpandable } from "./card";
import { ViewIconMain } from "./icon";
import { ViewRouterLinkthemed } from "./router";
import { ViewContainerStatic, ViewContainerScroll } from "./container";
import { ViewButtonPressable } from "./button";
import { useReactState } from "./react";
import { useWindowDimensions } from "./window";
import { useModalVisibility } from "./modal";
import { useQueryerQuery, TypeQueryerOptions } from "./queryer";
import { data } from "./static";

// Modal

export const ViewBookmarkModal = (props: any) => {
  return (
    <ViewModalContainer
      modalName={"bookmark"}
      snapto={"left"}
      backdrop
      pinnable
      collapsible
    >
      <ViewContainerScroll
        style={{
          flex: 1,
          marginBottom: 5,
        }}
      >
        {
          data // temporary array that contains all the navigation objects (will be changed to using supabase entities later)
            .filter(
              (x) => (x.status === "3. Active" || __DEV__) && x.parent === 1
            ) // if in production, only show active modules
            .map((x, i) => (
              <ViewCardExpandable
                key={x.id || i}
                header={x.display_singular}
                headerlink={"entity/" + x.nickname}
                body={data
                  .filter(
                    (y) =>
                      (y.status === "3. Active" || __DEV__) && y.parent === x.id
                  )
                  .map((y, i) => (
                    <ViewRouterLinkthemed
                      style={{ textDecoration: "none", margin: 5 }}
                      to={"entity/" + y.nickname}
                      key={"a" + y.id + i}
                    >
                      <ViewTypographySubsubheading>
                        {y.display_singular}
                      </ViewTypographySubsubheading>
                    </ViewRouterLinkthemed>
                  ))}
              />
            )) // display the name only (temporary, to be replaced with link)
        }
      </ViewContainerScroll>
      <ViewContainerStatic>
        <ViewBookmarkTabs />
      </ViewContainerStatic>
    </ViewModalContainer>
  );
};

export const ViewBookmarkTabs = ({}: any) => {
  const [state, set] = useReactState("modules");
  return (
    <ViewContainerScroll
      horizontal
      showsHorizontalScrollIndicator
      style={{
        width: "100%",
        height: 50,
        flexDirection: "row",
      }}
    >
      <ViewButtonPressable
        style={{
          padding: 5,
          flex: 1,
          width: 50,
          height: 50,
          backgroundColor: state === "modules" ? "gray" : "lightgray",
        }}
        onPress={() => set("modules")}
      >
        <ViewContainerStatic style={{ alignItems: "center", flex: 1 }}>
          <ViewIconMain
            name={"category"}
            source={"MaterialIcons"}
            color={"white"}
          />
          <ViewTypographyLabel style={{ fontSize: 11 }}>
            Modules
          </ViewTypographyLabel>
        </ViewContainerStatic>
      </ViewButtonPressable>
      <ViewButtonPressable
        style={{
          padding: 5,
          flex: 1,
          width: 50,
          height: 50,
          backgroundColor: state === "pinned" ? "gray" : "lightgray",
        }}
        onPress={() => set("pinned")}
      >
        <ViewContainerStatic style={{ alignItems: "center", flex: 1 }}>
          <ViewIconMain name={"star"} source={"Entypo"} color={"white"} />
          <ViewTypographyLabel style={{ fontSize: 11 }}>
            Pinned
          </ViewTypographyLabel>
        </ViewContainerStatic>
      </ViewButtonPressable>
      <ViewButtonPressable
        style={{
          padding: 5,
          flex: 1,
          width: 50,
          height: 50,
          backgroundColor: state === "recent" ? "gray" : "lightgray",
        }}
        onPress={() => set("recent")}
      >
        <ViewContainerStatic style={{ alignItems: "center", flex: 1 }}>
          <ViewIconMain
            name={"history"}
            source={"MaterialIcons"}
            color={"white"}
          />
          <ViewTypographyLabel style={{ fontSize: 11 }}>
            Recent
          </ViewTypographyLabel>
        </ViewContainerStatic>
      </ViewButtonPressable>
    </ViewContainerScroll>
  );
};

// ACTIVE

// This is a useQueryerQuery query that just returns a blank object (it doesn't query anything).
// Then the user can switch active bookmarks, which will update this query.
export const useBookmarkActive = ({ ...Input }: TypeBookmarkActive) => {
  const query = useQueryerQuery({
    queryKey: ["bookmark", "active"],
    queryFn: () => {
      return {};
    },
    enabled: false,
    initialData: {
      id: null,
      title: "Bookmarks",
    },
  });
  return query;
};

export type TypeBookmarkActive = TypeQueryerOptions; // placeholder

// WIDGET

export const ViewBookmarkWidget = () => {
  const window = useWindowDimensions();
  const bookmarksActive = useBookmarkActive({}) as TypeBookmarkActive;
  return (
    <ViewButtonPressable
      onPress={useModalVisibility("bookmark")}
      style={{
        alignItems: "center",
        justifyContent: "flex-start",
        flex: 1,
        flexDirection: "row",
      }}
    >
      <ViewIconMain
        name={"bookmark"}
        source={"Feather"}
        color={"white"}
        size={30}
        style={{
          alignItems: "center",
          justifyContent: "center",
        }}
      />
      {window?.width > 600 && (
        <ViewTypographyLabel
          numberOfLines={1}
          style={{ minWidth: "100%", paddingLeft: 10, color: "white" }}
        >
          {bookmarksActive?.data?.title}
        </ViewTypographyLabel>
      )}
    </ViewButtonPressable>
  );
};
