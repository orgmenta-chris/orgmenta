// A 'space' is a bucket to hold an organisation, group, non-profit, department or personal space.

import { instanceSupabaseClient, handleSupabaseResponse } from "./supabase";
import { ViewModalMain } from "./modal";
import { ViewRouterLinkthemed } from "./router";
import { ViewTypographyTextsubsubheading } from "./typography";
import { ViewCardExpandable } from "./card";
import { useTableColumns } from "../components/displays/table/table";
import {
  useQuery,
  useMutation,
  useQueryClient,
  UseQueryOptions,
} from "@tanstack/react-query";
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
  ColumnResizeMode,
  ColumnDef,
} from "@tanstack/react-table";
import { ScrollView, View, Text, Pressable } from "react-native";
import { useState, useEffect } from "react";

// Create (Create a space. Note that this does not set up all of the other related assets like tables, load in any blueprint entities, run any necessary server functions, etc (see useSpaceSetup for that)

export const metaSpaceCreate = {
  description: "Create a space in the spaces table",
  notes:
    "This only creates a space table row - For full space setup, see the Setup feature",
  type: "interfaceSpaceCreate",
  request: "requestSpaceCreate",
  hook: "useSpaceCreate",
};

export interface interfaceSpaceCreate {
  // todo
}

export async function requestSpaceCreate(space: interfaceSpaceCreate) {
  return await instanceSupabaseClient
    .from("spaces")
    .insert(space)
    .then(handleSupabaseResponse as any);
}

export const useSpaceCreate = (props: interfaceSpaceCreate) => {
  return useMutation(["space", "create"], () => requestSpaceCreate(props));
  // also need to use useMemberCreate or requestMemberCreate here (imported from member)
  // so that we can add the creator of the space as the default (mandatory) admin level member / owner
};

// Setup (create the space and any necessary tables, load in any blueprint entities, run any necessary server functions, etc.)

export const metaSpaceSetup = {
  description:
    "Create a space, default members, relevant tables, entities, relationships, rules etc.",
  notes: "",
  type: "interfaceSpaceSetup",
  request: "requestSpaceCSetup",
  hook: "useSpaceSetup",
};

export interface interfaceSpaceSetup {
  // todo
}

export async function requestSpaceSetup(space: interfaceSpaceSetup) {
  //todo
}

export const useSpaceSetup = (props: interfaceSpaceSetup) => {
  //todo
  const newSpace = "create the new space";
  const newTables = "create the new tables";
  const newMembers = "add the default (and any other specified) members";
  const runFunctions =
    "run the new space functions in order to set row level security policies, load in blueprint entities etc.";
  //etc.
  return ["todo", newSpace, newTables, newMembers, runFunctions]; // todo (doesn't do anything currently)
};

// Update (todo)

export const metaSpaceUpdate = {
  description: "",
  notes: "",
  type: "interfaceSpaceSetup",
  request: "requestSpaceCSetup",
  hook: "useSpaceSetup",
};

export interface interfaceSpaceUpdate {
  // todo
  // todo
}

export async function requestSpaceUpdate(space: interfaceSpaceUpdate) {
  // todo
  //todo
}

export const useSpaceUpdate = (props: interfaceSpaceUpdate) => {
  // todo
  return useMutation(["space", "update"], () => requestSpaceUpdate(props));
};

// Delete (todo) - note that these 'SpaceDelete' functions only remove the space, not its associated tables & data. See the 'SpaceDestroy' functions for full purge of space & related data.

export interface interfaceSpaceDelete {
  // todo
  // todo
}

export async function requestSpaceDelete(space: interfaceSpaceDelete) {
  // todo
  //todo
}

export const useSpaceDelete = (props: interfaceSpaceDelete) => {
  // todo
  return useMutation(["space", "delete"], () => requestSpaceDelete(props));
  // also need to use useMemberDelete/Update or requestMemberDelete/Update here (imported from member)
  // so that we can remove or deactivate all members / clear them from the members table
};

// Destroy (todo) - deletes the space, its members, its data and any other related data

export interface interfaceSpaceDestroy {
  // todo
  // todo
}

export async function requestSpaceDestroy(space: interfaceSpaceDestroy) {
  // todo
  //todo
}

export const useSpaceDestroy = (props: interfaceSpaceDestroy) => {
  //todo
  const removalConfirmation =
    "get explicit approval from all/majority of the space administrators";
  const oldSpace = "delete the space";
  const oldTables = "delete the tables";
  const runFunctions =
    "run the destroy space functions in order to remove any other remnants";
  //etc.
  return ["todo", removalConfirmation, oldSpace, oldTables, runFunctions]; // todo (doesn't do anything currently)
};

// Array

export async function requestSpaceArray() {
  return await instanceSupabaseClient
    .from("spaces")
    .select()
    .range(0, 9) //temp arbitrary limit of 10 (todo: pass variables in here to get proper pagination)
    .then(handleSupabaseResponse as any);
}

export const useSpaceArray = (spacename?: any, categories?: any) => {
  console.log("category", categories);
  const queryKey: (string | number)[] = [
    "entities",
    "array",
    spacename,
    categories,
  ];
  const query = useQuery(queryKey, () => requestSpaceArray(), {
    enabled: true,
  });
  return query;
};

// todo
export const ViewSpaceArray = () => {
  const array = useSpaceArray({});
  const attributeColumnNames = [
    "id",
    "created_at",
    "db_android_allowed",
    "db_ios_allowed",
    "db_web_allowed",
    "db_windows_allowed",
    "name_display_singular",
    "name_display_plural",
    "name_store_singular",
    "name_store_plural",
  ];
  const columns = useTableColumns(attributeColumnNames);
  return (
    <View>
      <Text style={{ fontWeight: "700" }}>ViewSpaceArray</Text>
      {/* <Text style={{}}>{JSON.stringify(array,null,2)}</Text> */}
      <ViewSpaceTable data={array.data} columns={columns} />
    </View>
  );
};

// Item

export interface interfaceSpaceItem {
  id: string;
}

export const useSpaceItem = ({ id }: interfaceSpaceItem) => {
  const query = useQuery({
    queryKey: ["spaces", id],
    queryFn: async () => {
      const response = await instanceSupabaseClient
        .from("spaces")
        .select()
        .eq("id", id)
        .single();
      return response.data;
    },
    enabled: !!id,
    // ...props
  } as UseQueryOptions<any[], unknown>); // Specify the expected types for data and error.
  return query;
};

export const ViewSpaceItem = ({ id }: interfaceSpaceItem) => {
  const item = useSpaceItem({ id });
  return (
    <View>
      <Text style={{ fontWeight: "700" }}>ViewSpaceItem</Text>
      {/* Testing */}
      <Text>{JSON.stringify(item, null, 2)}</Text>
    </View>
  );
};

// Active

// This is a useQuery query that just returns a blank object (it doesn't query anything).
// Then the user can switch active companies, which will update this query.
export const useSpaceActive = ({ ...Input }: TypeSpaceActive) => {
  const query = useQuery({
    queryKey: ["spaces", "selected"],
    queryFn: () => {
      return {};
    },
    enabled: false,
    initialData: {
      id: null,
      title: "Select a Space",
    },
  });
  return query;
};

export type TypeSpaceActive = any; // placeholder

export const updateSpaceActive = ({ space }: TypeSpaceActive) => {
  const client = useQueryClient();
  client.setQueryData(["spaces", "active"], space);
};

// Table

// Temp. to be replaced with Loisa's dynamic table once developed
export const ViewSpaceTable = ({ ...Input }) => {
  // This is currently a hardocded basic table, but will use the proper modular table component built by Loisa
  const columns = Input.columns;
  const [columnResizeMode, setColumnResizeMode] =
    useState<ColumnResizeMode>("onChange");
  // When data is provided, set the data to state
  const [data, setData] = useState([]);
  useEffect(() => {
    if (Input?.data) {
      setData(Input.data);
    }
  }, [Input?.data]);
  const table = useReactTable({
    data,
    columns,
    columnResizeMode, //https://tanstack.com/table/v8/docs/examples/react/column-sizing
    getCoreRowModel: getCoreRowModel(),
    //   debugTable: true, // logs to console
    //   debugHeaders: true, // logs to console
    //   debugColumns: true, // logs to console
  });
  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 1 }}>
        <ScrollView
          style={{ flex: 1, overflow: "scroll" }}
          stickyHeaderIndices={[0]}
        >
          <View>
            {table.getHeaderGroups().map((headerGroup, hgroupIndex) => (
              <View key={headerGroup.id} style={{ flexDirection: "row" }}>
                {headerGroup.headers.map((header, headerIndex) => (
                  <View key={headerIndex}>
                    <Text
                      key={header.id}
                      style={{
                        fontWeight: "bold",
                        minWidth: 200,
                        borderWidth: 1,
                      }}
                    >
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </Text>
                  </View>
                ))}
              </View>
            ))}
          </View>
          {table.getRowModel().rows.map((row) => (
            <View key={row.id} style={{ flexDirection: "row", width: 100 }}>
              {row.getVisibleCells().map((cell, cellIndex) => (
                <Text key={cell.id} style={{ minWidth: 200, borderWidth: 1 }}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </Text>
              ))}
            </View>
          ))}
        </ScrollView>
      </View>
      <View />
    </View>
  );
};

// Modal (to appear when SpaceWidget is clicked on)

export const ViewSpaceModal = (props: any) => {
  return (
    <ViewModalMain
      modalName={"space"}
      snapto={"left"}
      backdrop
      pinnable
      collapsible
    >
      <ScrollView>
        <ViewSpaceCurrent />
        <ViewSpaceSwitch />
        <ViewSpaceLinks />
        <ViewSpaceAlerts />
      </ScrollView>
    </ViewModalMain>
  );
};

// State (save a space's data to state. E.g. 'Selected' uses this to save the current/active space.)

export type TypeSpaceState = {
  data:
    | {
        spacename: string;
      }
    | undefined;
};

export const useSpaceState = (id: any) => {
  // const queryClient = useQueryClient();
  const query = useQuery({
    queryKey: id,
    queryFn: () => null,
    staleTime: Infinity, // This means the data will never become stale automatically
    refetchOnWindowFocus: false,
  });
  return query;
};

// Current

// Currently selected space links/options
export const ViewSpaceCurrent = (props: any) => {
  const spaceActive: any = useSpaceState(["space", "selected"]);
  return (
    <ViewCardExpandable
      startExpanded
      header={spaceActive?.data?.title}
      body={
        spaceActive?.data?.selected && (
          <>
            <ViewRouterLinkthemed
              style={{ margin: 5 }}
              to={`/spaces/${spaceActive.data.selected}`}
            >
              <ViewTypographyTextsubsubheading>
                Go to Space
              </ViewTypographyTextsubsubheading>
            </ViewRouterLinkthemed>
            <ViewRouterLinkthemed
              style={{ margin: 5 }}
              to={`/spaces/${spaceActive.data.selected}/attributes`}
            >
              <ViewTypographyTextsubsubheading>
                Attributes
              </ViewTypographyTextsubsubheading>
            </ViewRouterLinkthemed>
            <ViewRouterLinkthemed
              style={{ margin: 5 }}
              to={`/spaces/${spaceActive.data.selected}/files`}
            >
              <ViewTypographyTextsubsubheading>
                Files
              </ViewTypographyTextsubsubheading>
            </ViewRouterLinkthemed>
            <ViewRouterLinkthemed
              style={{ margin: 5 }}
              to={`/spaces/${spaceActive.data.selected}/settings`}
            >
              <ViewTypographyTextsubsubheading>
                Settings
              </ViewTypographyTextsubsubheading>
            </ViewRouterLinkthemed>
            <ViewRouterLinkthemed
              style={{ margin: 5 }}
              to={`/spaces/${spaceActive.data.selected}/billing`}
            >
              <ViewTypographyTextsubsubheading>
                Subscription & Billing
              </ViewTypographyTextsubsubheading>
            </ViewRouterLinkthemed>
            <ViewRouterLinkthemed
              style={{ margin: 5 }}
              to={`/spaces/${spaceActive.data.selected}/members`}
            >
              <ViewTypographyTextsubsubheading>
                Members
              </ViewTypographyTextsubsubheading>
            </ViewRouterLinkthemed>
          </>
        )
      }
    />
  );
};

// Switch between available spaces
export const ViewSpaceSwitch = () => {
  const array = useSpaceArray({});
  const updater = useSpaceSet(
    ["space", "selected"],
    (id: string, title: string, spacename: string) => ({
      id: id,
      title,
      spacename,
    })
  );
  return (
    <ViewCardExpandable
      startExpanded
      header={"Switch Space"}
      /* @ts-ignore */
      body={(array?.data as any)?.map((x, i) => (
        <Pressable
          key={i}
          style={{ padding: 10, margin: 5, backgroundColor: "lightgray" }}
          onPress={() =>
            updater(x.id, x.name_display_singular, x.name_store_singular)
          }
        >
          <Text>{x.name_display_singular}</Text>
        </Pressable>
      ))}
    />
  );
};

// Links that do not depend on a specific space
export const ViewSpaceLinks = () => {
  return (
    <ViewCardExpandable
      startExpanded
      header={"Navigation"}
      body={
        <>
          <ViewRouterLinkthemed style={{ margin: 5 }} to={`/spaces/all/pods`}>
            <ViewTypographyTextsubsubheading>
              All Spaces
            </ViewTypographyTextsubsubheading>
          </ViewRouterLinkthemed>
          <ViewRouterLinkthemed style={{ margin: 5 }} to={`/spaces/all/new`}>
            <ViewTypographyTextsubsubheading>
              Create New Space
            </ViewTypographyTextsubsubheading>
          </ViewRouterLinkthemed>
        </>
      }
    />
  );
};

// Widget to show the recent notifications/logs for that user (e.g system alerts, logs for changes to entities that the user is 'following'/assinged to, etc.
export const ViewSpaceAlerts = () => {
  return (
    <ViewCardExpandable
      startExpanded
      header={"Alerts/Notifications"}
      body={
        <>
          <Text>todo</Text>
        </>
      }
    />
  );
};

// An empty useQuery that is used to as a state (this uses cache so retains data between reloads, sessions and component closures)
export const useSpaceSet = (
  queryKey: string[],
  newData: (id: string, title: string, spacename: string) => any
) => {
  const queryClient = useQueryClient();
  return (passedId: string, passedTitle: string, passedspacename: string) => {
    const resolvedData = newData(passedId, passedTitle, passedspacename);
    queryClient.setQueryData(queryKey, (oldData: any) => {
      if (JSON.stringify(oldData) === JSON.stringify(resolvedData)) {
        return oldData;
      }
      return { ...oldData, ...resolvedData };
    });
  };
};

// Meta

// Temporary / CG using for reference & designing
export const metaSpaceInfo = {
  description: `A 'space' is an environment for an organisation, business department, division, territory or other company subdivision.`,
  features: [
    "Create",
    "Setup",
    "Update",
    "Delete",
    "Array",
    "Item",
    "Active",
    "Table",
  ],
};

// Sync
// Future feature: Spaces will be able to share entityrelationships between each other.
// e.g. a user could see their tasks in both their work organisation, and their personal space (albeit heavily redacted in the personal space)

// function+component to 'share entities to another space'

// function+component to 'accept the share invite fromanother space'

// function to periodically sync any 'shared entities'

// function+component to edit the share configuration

// functon+component to unlink the share.

// component to see the status of the share
