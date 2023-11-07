// 'Browse' is search functionality, with optional 'quick-add' to convert the search term to a new entity.

import {
  ViewTypographyHeading,
  ViewTypographyText,
  ViewTypographySubsubheading,
} from "./typography";
import { ViewModalContainer } from "./modal";
import { ViewRouterLinkthemed } from "./router";
import { instanceSupabaseClient } from "./supabase";
import {
  ViewContainerStatic,
  ViewContainerScroll,
  ViewContainerRow,
} from "./container";
import { ViewIconMain } from "./icon";
import { ViewCardExpandable } from "./card";
import { ViewInputText } from "./input";
import { ViewButtonPressable } from "./button";
import { ViewPageMain } from "./page";
import { useQueryerQuery } from "./queryer";
import { useReactState } from "./react";
import { useWindowDimensions } from "./window";
import { useModalVisibility } from "./modal";

// PAGE

export const ViewBrowsePage = () => {
  return (
    <ViewPageMain>
      <ViewContainerScroll>
        <ViewTypographyHeading>Browse</ViewTypographyHeading>
        <ViewBrowseSearch />
      </ViewContainerScroll>
    </ViewPageMain>
  );
};

// Active

// This is a useQueryerQuery query that just returns a blank object (it doesn't query anything). Then the user can switch active bookmarks, which will update this query.
export const useBrowseActive = ({ ...Input }: TypeBrowseActive) => {
  const query = useQueryerQuery({
    queryKey: ["browse", "active"],
    queryFn: () => {
      return {};
    },
    enabled: false,
    initialData: {
      id: null,
      title: "Browse",
    },
  });
  return query;
};

export type TypeBrowseActive = any; // placeholder

// Array

export const useBrowseArray = ({ searchterm }: any) => {
  const queryKey: (string | number)[] = ["browse", "entities", searchterm];
  const queryFn = async () => {
    const query = instanceSupabaseClient.from("entities_orgmenta").select();
    if (searchterm) {
      query.ilike("title", `%${searchterm}%`);
    }
    query.range(0, 9); //temp arbitrary limit of 10 (todo: pass variables in here to get proper pagination)
    const response = await query;
    return response.data;
  };
  const query = useQueryerQuery<any, Error>(queryKey, queryFn, {
    enabled: true,
  });
  return query;
};

// Modal

export const ViewBrowseModal = (props: any) => {
  return (
    <ViewModalContainer
      modalName={"browse"}
      snapto={"right"}
      backdrop
      pinnable
      collapsible
    >
      <ViewBrowseNavigation />
      <ViewBrowseSchemas />
      <ViewBrowseSearch />
    </ViewModalContainer>
  );
};

// Search

export const ViewBrowseSearch = (props: any) => {
  const [search, set] = useReactState("");
  const browseArray = useBrowseArray({ searchterm: search });
  return (
    <ViewCardExpandable
      flex={1}
      startExpanded
      header={"Search"}
      body={
        <ViewContainerStatic style={{ flex: 1  }}>
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
            <ViewContainerScroll
              style={{ height: "100%", backgroundColor: "gray" }}
            >
              {browseArray.isLoading && (
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
              {!browseArray.isLoading &&
                (!browseArray?.data || browseArray?.data?.length === 0) && (
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
              {browseArray?.data?.map((x: any, i: string) => (
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
                  {x.title}
                </ViewTypographyText>
              ))}
            </ViewContainerScroll>
          </ViewContainerStatic>
          <ViewContainerStatic>
            <ViewBrowseTabs />
          </ViewContainerStatic>
        </ViewContainerStatic>
      }
    />
  );
};

// Widget to link to relevant pages MERGE THIS INTO THE LINKS COMPONENT
// to replace with toggle buttons
export const ViewBrowseNavigation = () => {
  return (
    <ViewCardExpandable
      startExpanded
      header={"Navigation"}
      body={
        <ViewContainerStatic>
          <ViewRouterLinkthemed to="browse">
            <ViewIconMain
              color={"black"}
              name={`open-outline`}
              source={`Ionicons`}
            />
          </ViewRouterLinkthemed>
        </ViewContainerStatic>
      }
    />
  );
};

// Tabs

export const ViewBrowseTabs = ({}: any) => {
  const [state, set] = useReactState("all");
  return (
    <ViewContainerScroll
      horizontal
      showsHorizontalScrollIndicator
      style={{
        width: "100%",
        height: 50,
        flexDirection: "row",
        paddingBottom: 80, // otherwise, scrollbar covers it. To be improved (low priority)
      }}
    >
      <ViewButtonPressable
        style={{
          padding: 5,
          flex: 1,
          width: 50,
          height: 50,
          backgroundColor: state === "all" ? "gray" : "lightgray",
          alignItems: "center",
        }}
        onPress={() => set("all")}
      >
        <ViewIconMain name={"globe"} source={"Entypo"} color={"white"} />
        <ViewTypographyText style={{ fontSize: 11 }}>All</ViewTypographyText>
      </ViewButtonPressable>
      <ViewButtonPressable
        style={{
          padding: 5,
          flex: 1,
          width: 50,
          height: 50,
          backgroundColor: state === "history" ? "gray" : "lightgray",
          alignItems: "center",
        }}
        onPress={() => set("history")}
      >
        <ViewIconMain name={"history"} source={"Octicons"} color={"white"} />
        <ViewTypographyText style={{ fontSize: 11 }}>
          History
        </ViewTypographyText>
      </ViewButtonPressable>
      <ViewButtonPressable
        style={{
          padding: 5,
          flex: 1,
          width: 50,
          height: 50,
          backgroundColor: state === "websearch" ? "gray" : "lightgray",
          alignItems: "center",
        }}
        onPress={() => set("websearch")}
      >
        <ViewIconMain name={"globe"} source={"Octicons"} color={"white"} />
        <ViewTypographyText style={{ fontSize: 11 }}>
          Websearch
        </ViewTypographyText>
      </ViewButtonPressable>
      <ViewButtonPressable
        style={{
          padding: 5,
          flex: 1,
          width: 50,
          height: 50,
          backgroundColor: state === "askai" ? "gray" : "lightgray",
          alignItems: "center",
        }}
        onPress={() => set("askai")}
      >
        <ViewIconMain name={"chat"} source={"Entypo"} color={"white"} />
        <ViewTypographyText style={{ fontSize: 11 }}>AskAi</ViewTypographyText>
      </ViewButtonPressable>
    </ViewContainerScroll>
  );
};

// Widget to link to entities/attributes/etc. (temp, CG to further design.)
// to replace with toggle buttons
export const ViewBrowseSchemas = () => {
  return (
    <ViewCardExpandable
      startExpanded
      header={"Schemas"}
      body={
        <ViewContainerStatic>
          <ViewRouterLinkthemed style={{ margin: 5 }} to={`/browse/all`}>
            <ViewTypographySubsubheading>All</ViewTypographySubsubheading>
          </ViewRouterLinkthemed>
          <ViewRouterLinkthemed style={{ margin: 5 }} to={`/browse/entities`}>
            <ViewTypographySubsubheading>Entities</ViewTypographySubsubheading>
          </ViewRouterLinkthemed>
          <ViewRouterLinkthemed style={{ margin: 5 }} to={`/browse/attributes`}>
            <ViewTypographySubsubheading>
              Attributes
            </ViewTypographySubsubheading>
          </ViewRouterLinkthemed>
          <ViewRouterLinkthemed
            style={{ margin: 5 }}
            to={`/browse/relationships`}
          >
            <ViewTypographySubsubheading>
              Relationships
            </ViewTypographySubsubheading>
          </ViewRouterLinkthemed>
          <ViewRouterLinkthemed style={{ margin: 5 }} to={`/browse/members`}>
            <ViewTypographySubsubheading>Members</ViewTypographySubsubheading>
          </ViewRouterLinkthemed>
        </ViewContainerStatic>
      }
    />
  );
};

export const ViewBrowseWidget = () => {
  const window = useWindowDimensions();
  const browseActive = useBrowseActive({}) as TypeBrowseActive;
  return (
    <ViewButtonPressable
      onPress={useModalVisibility("browse")}
      style={{
        alignItems: "center",
        justifyContent: "flex-end",
        flex: 1,
        flexDirection: "row",
      }}
    >
      {window?.width > 600 && (
        <ViewTypographyText
          selectable={false}
          numberOfLines={1}
          style={{ paddingRight: 10, color: "white" }}
        >
          {browseActive?.data?.title}
        </ViewTypographyText>
      )}
      <ViewIconMain
        name={"book-open"}
        source={"Feather"}
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
