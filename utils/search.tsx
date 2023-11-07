// Placeholder

import { useBrowseArray, ViewBrowseTabs } from "./browse";
import { ViewButtonPressable } from "./button";
import { ViewCardExpandable } from "./card";
import {
  ViewContainerRow,
  ViewContainerScroll,
  ViewContainerStatic,
} from "./container";
import { ViewIconMain } from "./icon";
import { ViewInputText } from "./input";
import { useQueryerQuery } from "./queryer";
import { useReactState } from "./react";
import { instanceSupabaseClient } from "./supabase";
import { ViewTypographySubheading, ViewTypographyText } from "./typography";

export const ViewSearchInput = (props: any) => {
  return (
    <ViewInputText style={{ borderWidth: 1 }} placeholder={props.placeholder} />
  );
};

export const ViewSearchResults = ({ title, values }: any) => {
  return (
    <ViewContainerStatic>
      <ViewTypographySubheading>{title}</ViewTypographySubheading>
      <ViewTypographyText>{JSON.stringify(values, null, 2)}</ViewTypographyText>
    </ViewContainerStatic>
  );
};

// Array

export const useSearchEntity = ({ searchTable="entities_orgmenta", searchterm }: any) => {
  const queryKey: (string | number)[] = [searchTable, "search", searchterm];
  const queryFn = async () => {
    const query = instanceSupabaseClient.from(searchTable).select();
    if (searchterm && searchTable==='entities_orgmenta') {
      query.ilike("title", `%${searchterm}%`);
    }
    else if (searchterm && searchTable==='attributes_unioned') {
      query.ilike("focus_columns.name_singular", `%${searchterm}%`);
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

export const ViewSearchEntity = ({searchTable}: any) => {
  const [search, set] = useReactState("");
  const searchArray = useSearchEntity({ searchTable: searchTable, searchterm: search });
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
            {x.title}{x?.focus_columns?.name_singular}
          </ViewTypographyText>
        ))}
      </ViewContainerScroll>
    </ViewContainerStatic>
  );
};
