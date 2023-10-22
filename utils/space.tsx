// A 'space' is a bucket to hold an organisation, group, non-profit, department or personal space.

import { useReactState, useReactEffect } from "./react";
import { useWindowDimensions } from "./window";
import { useModalVisibility } from "./modal";
import { createMetaInfo } from "./meta";
import { instanceSupabaseClient, handleSupabaseResponse } from "./supabase";
import { ViewModalContainer } from "./modal";
import { ViewPageMain, ViewPageSection } from "./page";
import { ViewCardExpandable } from "./card";
import { ViewIconMain } from "./icon";
import { ViewButtonPressable } from "./button";
import { ViewIntegrationSection } from "./integration";
import {
  ViewRouterLinktext,
  ViewRouterLinkthemed,
  ViewRouterRoute,
  ViewRouterRoutes,
} from "./router";
import {
  ViewContainerStatic,
  ViewContainerScroll,
  ViewContainerRow,
} from "./container";
import {
  ViewTypographyText,
  ViewTypographyHeading,
  ViewTypographyTextthemed,
  ViewTypographySubsubheading,
  ViewTypographySubheading,
} from "./typography";
import {
  useQueryerQuery,
  useQueryerMutation,
  useQueryerClient,
  TypeQueryerOptions,
} from "./queryer";
import { useTableColumns } from "../components/displays/table/table";
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
  ColumnResizeMode,
  ColumnDef,
  TableOptions,
} from "@tanstack/react-table";
import { ViewMemberSection } from "./member";
import { ViewBillingSection } from "./billing";
import { ViewAttributeSection } from "./attribute";
import { arrayIndustryProducts } from "./hub";

// PAGE

export const ViewSpacePage = () => {
  return (
    <ViewPageMain>
      <ViewTypographyHeading>Spaces</ViewTypographyHeading>
      <ViewContainerRow>
        <ViewRouterLinktext
          to={"profile"}
          style={{ padding: 5 }}
          textString={`Profile`}
        />
        <ViewRouterLinktext
          to={"notifications"}
          style={{ padding: 5 }}
          textString={`Notifications`}
        />
        <ViewRouterLinktext
          to={"integrations"}
          style={{ padding: 5 }}
          textString={`Integrations`}
        />
        <ViewRouterLinktext
          to={"data"}
          style={{ padding: 5 }}
          textString={`Data`}
        />
        <ViewRouterLinktext
          to={"members"}
          style={{ padding: 5 }}
          textString={`Members`}
        />
        <ViewRouterLinktext
          to={"billing"}
          style={{ padding: 5 }}
          textString={`Billing`}
        />
        <ViewRouterLinktext
          to={"attributes"}
          style={{ padding: 5 }}
          textString={`Attributes`}
        />
      </ViewContainerRow>
      {/* <ViewContainerScroll>
        <ViewSpaceSwitch />
        <ViewSpaceArray />
      </ViewContainerScroll> */}
      <ViewRouterRoutes>
        <ViewRouterRoute
          path="notifications"
          element={<ViewSpaceNotifications />}
        />
        <ViewRouterRoute
          path="integrations"
          element={<ViewSpaceIntegrations />}
        />
        <ViewRouterRoute path="data" element={<ViewSpaceData />} />
        <ViewRouterRoute path="members" element={<ViewSpaceMembers />} />
        <ViewRouterRoute path="billing" element={<ViewSpaceBilling />} />
        <ViewRouterRoute path="attributes" element={<ViewSpaceAttributes />} />
      </ViewRouterRoutes>
    </ViewPageMain>
  );
};

// CREATE
// Create a space. Note that this does NOT set up all of the other related assets like tables, load in any blueprint entities, run any necessary server functions, etc (see useSpaceSetup for that)

export const metaSpaceCreate = createMetaInfo({
  description: "Create a space in the spaces table",
  notes:
    "This only creates a space table row - For full space setup, see the Setup feature",
  type: "interfaceSpaceCreate",
  request: "requestSpaceCreate",
  hook: "useSpaceCreate",
});

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
  return useQueryerMutation(["space", "create"], () =>
    requestSpaceCreate(props)
  );
  // also need to use useMemberCreate or requestMemberCreate here (imported from member)
  // so that we can add the creator of the space as the default (mandatory) admin level member / owner
};

// SETUP
// Create the space and any necessary tables (use SpaceCreate functions), load in any blueprint entities, run any necessary server functions, etc.)

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
  //todo. rcps created, call them in individual mutations in useSpaceSetup
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

// UPDATE (todo)

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
  return useQueryerMutation(["space", "update"], () =>
    requestSpaceUpdate(props)
  );
};

// DELETE (todo) - note that these 'SpaceDelete' functions only remove the space, not its associated tables & data. See the 'SpaceDestroy' functions for full purge of space & related data.

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
  return useQueryerMutation(["space", "delete"], () =>
    requestSpaceDelete(props)
  );
  // also need to use useMemberDelete/Update or requestMemberDelete/Update here (imported from member)
  // so that we can remove or deactivate all members / clear them from the members table
};

// DESTROY (todo)
// deletes the space (use SpaceDelete functions), its members (use MemberDelete functions), its data and any other related data

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

// ARRAY

export async function requestSpaceArray() {
  return await instanceSupabaseClient
    .from("spaces")
    .select()
    .range(0, 9) //temp arbitrary limit of 10 (todo: pass variables in here to get proper pagination)
    .then(handleSupabaseResponse as any);
}

export const useSpaceArray = (spacename?: any, categories?: any) => {
  // console.log("category", categories);
  const queryKey: (string | number)[] = [
    "entities",
    "array",
    spacename,
    categories,
  ];
  const query = useQueryerQuery(queryKey, () => requestSpaceArray(), {
    enabled: true,
  });
  return query;
};

// todo
export const ViewSpaceArray = () => {
  const array = useSpaceArray({});
  const spaceColumnNames = [
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
  const columns = useTableColumns(spaceColumnNames);
  return (
    <ViewContainerStatic>
      <ViewTypographyText style={{ fontWeight: "700" }}>
        ViewSpaceArray
      </ViewTypographyText>
      {/* <ViewTypographyText style={{}}>{JSON.stringify(array,null,2)}</ViewTypographyText> */}
      <ViewSpaceTable data={array?.data} columns={columns} />
    </ViewContainerStatic>
  );
};

// ITEM

export interface interfaceSpaceItem {
  id: string;
}

export const useSpaceItem = ({ id }: interfaceSpaceItem) => {
  const query = useQueryerQuery({
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
  } as TypeQueryerOptions); // Specify the expected types for data and error.
  return query;
};

export const ViewSpaceItem = ({ id }: interfaceSpaceItem) => {
  const item = useSpaceItem({ id });
  return (
    <ViewContainerStatic>
      <ViewTypographyText style={{ fontWeight: "700" }}>
        ViewSpaceItem
      </ViewTypographyText>
      {/* Testing */}
      <ViewTypographyText>{JSON.stringify(item, null, 2)}</ViewTypographyText>
    </ViewContainerStatic>
  );
};

// ACTIVE

// This is a useQueryerQuery query that just returns a blank object (it doesn't query anything).
// Then the user can switch active companies, which will update this query.
export const useSpaceActive = ({ ...Input }: TypeSpaceActive) => {
  const query = useQueryerQuery({
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
  const client = useQueryerClient();
  client.setQueryData(["spaces", "active"], space);
};

// TABLE (To use table instead)

// Temp. to be replaced with Loisa's dynamic table once developed
export const ViewSpaceTable = ({ ...Input }) => {
  // This is currently a hardocded basic table, but will use the proper modular table component built by Loisa
  const columns = Input.columns;
  const [columnResizeMode, setColumnResizeMode] =
    useReactState<ColumnResizeMode>("onChange");
  // When data is provided, set the data to state
  const [data, setData] = useReactState([]);
  useReactEffect(() => {
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
  } as any);
  // console.log('table',table.getHeaderGroups())
  return (
    <ViewContainerStatic style={{ flex: 1 }}>
      <ViewContainerStatic style={{ flex: 1 }}>
        <ViewContainerScroll
          style={{ flex: 1, overflow: "scroll" }}
          stickyHeaderIndices={[0]}
        >
          <ViewContainerStatic>
            <></>
            {/* {table?.getHeaderGroups()?.map((headerGroup, hgroupIndex) => (
              <ViewContainerRow key={headerGroup.id}>
                {headerGroup?.headers?.map((header, headerIndex) => (
                  <ViewContainerStatic key={headerIndex}>
                    <ViewTypographyText
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
                    </ViewTypographyText>
                  </ViewContainerStatic>
                ))}
              </ViewContainerRow>
            ))} */}
          </ViewContainerStatic>
          {table?.getRowModel()?.rows?.map((row) => (
            <ViewContainerRow key={row.id} style={{ width: 100 }}>
              {row?.getVisibleCells()?.map((cell, cellIndex) => (
                <ViewTypographyText
                  key={cell.id}
                  style={{ minWidth: 200, borderWidth: 1 }}
                >
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </ViewTypographyText>
              ))}
            </ViewContainerRow>
          ))}
        </ViewContainerScroll>
      </ViewContainerStatic>
      <ViewContainerStatic />
    </ViewContainerStatic>
  );
};

// Modal (to appear when SpaceWidget is clicked on)

export const ViewSpaceModal = (props: any) => {
  return (
    <ViewModalContainer
      modalName={"space"}
      snapto={"left"}
      backdrop
      pinnable
      collapsible
    >
      <ViewContainerScroll>
        <ViewSpaceCurrent />
        <ViewSpaceSwitch />
        <ViewSpaceLinks />
        <ViewSpaceNotifications />
      </ViewContainerScroll>
    </ViewModalContainer>
  );
};

// STATE (save a space's data to state. E.g. 'Selected' uses this to save the current/active space.)

export type TypeSpaceState = {
  data:
    | {
        spacename: string;
      }
    | undefined;
};

export const useSpaceState = (id: any) => {
  // const queryerClient = useQueryerClient();
  const query = useQueryerQuery({
    queryKey: id,
    queryFn: () => null,
    staleTime: Infinity, // This means the data will never become stale automatically
    refetchOnWindowFocus: false,
  });
  return query;
};

// CURRENT

// Currently selected space links/options
export const ViewSpaceCurrent = (props: any) => {
  const spaceActive: any = useSpaceState(["space", "selected"]);
  return (
    spaceActive?.data?.title && (
      <ViewCardExpandable
        startExpanded
        header={spaceActive?.data?.title}
        body={
          spaceActive?.data?.title && (
            <>
              <ViewRouterLinktext
                style={{ margin: 5 }}
                to={`/spaces/${spaceActive.data.selected}`}
                textString={`Go to Space`}
                textSelectable={false}
              />
              <ViewRouterLinktext
                style={{ margin: 5 }}
                to={`/spaces/${spaceActive.data.selected}/attributes`}
                textString={`Attributes`}
                textSelectable={false}
              />
              <ViewRouterLinktext
                style={{ margin: 5 }}
                to={`/spaces/${spaceActive.data.selected}/files`}
                textString={`Files`}
                textSelectable={false}
              />
              <ViewRouterLinktext
                style={{ margin: 5 }}
                to={`/spaces/${spaceActive.data.selected}/settings`}
                textString={`Settings`}
                textSelectable={false}
              />
              <ViewRouterLinktext
                style={{ margin: 5 }}
                to={`/spaces/${spaceActive.data.selected}/billing`}
                textString={`Billing`}
                textSelectable={false}
              />
              <ViewRouterLinktext
                style={{ margin: 5 }}
                to={`/spaces/${spaceActive.data.selected}/members`}
                textString={`Members`}
                textSelectable={false}
              />
              <ViewRouterLinktext
                style={{ margin: 5 }}
                to={`/spaces/all/notifications`}
                textString={`Notifications`}
                textSelectable={false}
              />
              <ViewRouterLinktext
                style={{ margin: 5 }}
                to={`/spaces/all/integrations`}
                textString={`Integrations`}
                textSelectable={false}
              />
            </>
          )
        }
      />
    )
  );
};

// SWITCH

// Component to switch between available spaces
export const ViewSpaceSwitch = () => {
  const spaceActive: any = useSpaceState(["space", "selected"]);
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
      header={spaceActive?.data?.title ? "Switch Space" : "Select a Space"}
      body={(array?.data as any)?.map((x: any, i: string) => (
        <ViewButtonPressable
          key={i}
          style={{ padding: 10, marginBottom: 5, backgroundColor: "lightgray" }}
          onPress={() =>
            updater(x.id, x.name_display_singular, x.name_store_singular)
          }
        >
          <ViewTypographyText>{x.name_display_singular}</ViewTypographyText>
        </ViewButtonPressable>
      ))}
    />
  );
};

// LINKS

// Links that do not depend on a specific space
export const ViewSpaceLinks = () => {
  return (
    <ViewCardExpandable
      startExpanded
      header={"Navigation"}
      body={
        <>
          <ViewRouterLinkthemed style={{ margin: 5 }} to={`/spaces/all/pods`}>
            <ViewTypographySubsubheading selectable={false}>
              All Spaces
            </ViewTypographySubsubheading>
          </ViewRouterLinkthemed>
          <ViewRouterLinkthemed style={{ margin: 5 }} to={`/spaces/all/new`}>
            <ViewTypographySubsubheading selectable={false}>
              Create New Space
            </ViewTypographySubsubheading>
          </ViewRouterLinkthemed>
        </>
      }
    />
  );
};

// NOTIFICATIONS

// Widget to show the recent notifications/logs for that user (e.g system alerts, logs for changes to entities that the user is 'following'/assinged to, etc.
export const ViewSpaceNotifications = () => {
  return (
    <ViewCardExpandable
      startExpanded
      header={"Notifications"}
      body={
        <>
          <ViewTypographyTextthemed style={{ margin: 5, color: "black" }}>
            (Notifications go here)
          </ViewTypographyTextthemed>
          <ViewRouterLinkthemed
            style={{ margin: 5 }}
            to={`/spaces/all/notifications`}
          >
            <ViewTypographySubsubheading selectable={false}>
              Go to Space Notifications
            </ViewTypographySubsubheading>
          </ViewRouterLinkthemed>
        </>
      }
    />
  );
};

// INTEGRATIONS

export const ViewSpaceIntegrations = () => {
  const integrationsTemp = arrayIndustryProducts.filter(
    (x) => x.integrations?.length > 0
  );
  return (
    <ViewPageSection>
      <ViewIntegrationSection />
      <ViewContainerScroll>
        <ViewTypographyText>
          {JSON.stringify(integrationsTemp, null, 2)}
        </ViewTypographyText>
      </ViewContainerScroll>
    </ViewPageSection>
  );
};

// ATTRIBUTES

export const ViewSpaceAttributes = () => {
  return (
    <ViewPageSection>
      <ViewAttributeSection />
    </ViewPageSection>
  );
};

// DATA

export const ViewSpaceData = () => {
  return (
    <ViewPageSection>
      <ViewTypographySubheading>
        Backups, imports and exports
      </ViewTypographySubheading>
      <ViewTypographySubheading>(todo)</ViewTypographySubheading>
    </ViewPageSection>
  );
};

// MEMBERS

export const ViewSpaceMembers = () => {
  return (
    <ViewPageSection>
      <ViewMemberSection />
    </ViewPageSection>
  );
};

// BILLING

// Widget to show the recent notifications/logs for that user (e.g system alerts, logs for changes to entities that the user is 'following'/assinged to, etc.
export const ViewSpaceBilling = () => {
  return (
    <ViewPageSection>
      <ViewTypographySubheading>
        Orgmenta subscriptions & billing to go here
      </ViewTypographySubheading>
      <ViewBillingSection />
    </ViewPageSection>
  );
};

// SET

// An empty useQueryerQuery that is used to as a state (this uses cache so retains data between reloads, sessions and component closures)
export const useSpaceSet = (
  queryKey: string[],
  newData: (id: string, title: string, spacename: string) => any
) => {
  const queryerClient = useQueryerClient();
  return (passedId: string, passedTitle: string, passedspacename: string) => {
    const resolvedData = newData(passedId, passedTitle, passedspacename);
    queryerClient.setQueryData(queryKey, (oldData: any) => {
      if (JSON.stringify(oldData) === JSON.stringify(resolvedData)) {
        return oldData;
      }
      return { ...oldData, ...resolvedData };
    });
  };
};

// META

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

// SYNC

/* Future feature: Spaces will be able to share entityrelationships between each other.
  // e.g. a user could see their tasks in both their work organisation, and their personal space (albeit heavily redacted in the personal space)

  // function+component to 'share entities to another space'

  // function+component to 'accept the share invite fromanother space'

  // function to periodically sync any 'shared entities'

  // function+component to edit the share configuration

  // functon+component to unlink the share.

  // component to see the status of the share
*/

// WIDGET

export const ViewSpaceWidget = () => {
  const window = useWindowDimensions();
  const spaceActive = useSpaceState(["space", "selected"]);
  return (
    <ViewButtonPressable
      onPress={useModalVisibility("space")}
      style={{
        alignItems: "center",
        justifyContent: "flex-start",
        flex: 1,
        flexDirection: "row",
      }}
    >
      <ViewIconMain
        name={"box"}
        source={"Feather"}
        color={"white"}
        size={30}
        style={{
          alignItems: "center",
          justifyContent: "center",
        }}
      />
      {window?.width > 600 && (
        <ViewTypographyText
          selectable={false}
          numberOfLines={1}
          style={{
            paddingLeft: 10,
            color: "white",
            justifyContent: "flex-start",
          }}
        >
          {(spaceActive?.data as any)?.title}
        </ViewTypographyText>
      )}
    </ViewButtonPressable>
  );
};
