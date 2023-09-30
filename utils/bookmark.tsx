// 'Bookmarks' are links to categories, pinned or other saved entity views.

import { ViewModalMain } from "./modal";
import { ScrollView } from "react-native";
import { useQuery } from "@tanstack/react-query";
import { data } from "./static";
import { ViewCardExpandable } from "./card";
import { ViewRouterLinkthemed } from "./router";
import { ViewTypographyTextsubsubheading } from "./typography";

// Modal

export const ViewBookmarkModal = (props: any) => {
  return (
    <ViewModalMain
      modalName={"bookmark"}
      snapto={"left"}
      backdrop
      pinnable
      collapsible
    >
      <ScrollView>
        {
          data // temporary array that contains all the navigation objects
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
                      style={{ textDecoration: "none", margin: 10 }}
                      to={"entity/" + y.nickname}
                      key={"a" + y.id + i}
                    >
                      <ViewTypographyTextsubsubheading>
                        {y.display_singular}
                      </ViewTypographyTextsubsubheading>
                    </ViewRouterLinkthemed>
                  ))}
              />
            )) // display the name only (temporary, to be replaced with link)
        }
      </ScrollView>
    </ViewModalMain>
  );
};

// Active

// This is a useQuery query that just returns a blank object (it doesn't query anything).
// Then the user can switch active bookmarks, which will update this query.
export const useBookmarkActive = ({ ...Input }: TypeBookmarkActive) => {
  const query = useQuery({
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

export type TypeBookmarkActive = any; // placeholder
