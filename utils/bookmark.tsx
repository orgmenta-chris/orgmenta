// 'Bookmarks' are links to categories, pinned or other saved entity views.

import { ViewModalMain } from "./modal";
import { Expandable } from "../components/expandable";
import { ScrollView } from "react-native";
import { useQuery } from "@tanstack/react-query";
import { data } from "./static";

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
              <Expandable item={x} key={x.id || i} />
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
