import { instanceSupabaseClient, handleSupabaseResponse } from "./supabase";
import { useRouterLocation } from "./router";
import { useAttributeUnioned } from "./attribute";
import { ViewContainerStatic } from "./container";
import { ViewTypographyText } from "./typography";
import { ViewPageMain } from "./page";
import { ViewDisplayDynamic } from "./display";
import { ViewActionTabs, ViewActionPanels } from "./action";
import { ViewFocusMain } from "./focus";
import { useAuxiliaryArray } from "./auxiliary";
import { useSpaceState, TypeSpaceState } from "./space";
import {
  useQueryerQuery,
  useQueryerMutation,
  useQueryerClient,
} from "./queryer";
import { data } from "./static";

// PAGE

export const ViewEntityPage = () => {
  const spaceSelected = useSpaceState(["space", "selected"]);
  const routerPaths = useRouterLocation()?.paths;
  const focus = useEntitySingle({ entityFocus: routerPaths?.[2] });
  const auxiliary = useAuxiliaryArray({
    space_name: (spaceSelected as TypeSpaceState)?.data?.spacename,
    filters_array: [], //todo
    column_names: [], //todo
  });
  const schema = useEntitySchema();
  return (
    <ViewPageMain>
      {/* Flex View to keep Action tabs at the bottom of the screen */}
      <ViewContainerStatic style={{ flex: 1 }}>
        {/* Show the 'focus' entity (the primary record being viewed) */}
        <ViewFocusMain />
        {/* Show the 'auxiliary' entities (secondary records being viewed, possibly related to the focus) in whichever mode is selected, e.g. Calendar, Table etc. */}
        <ViewDisplayDynamic
          auxiliary={auxiliary}
          schema={schema}
          focus={focus}
          display={routerPaths?.[3]}
        />
      </ViewContainerStatic>
      <ViewActionPanels auxiliary={auxiliary} schema={schema} focus={focus} />
      {/* Show the actions tabs/links (e.g. add,edit,copy,delete,share etc.*/}
      <ViewActionTabs auxiliary={auxiliary} schema={schema} focus={focus} />
    </ViewPageMain>
  );
};

// ARRAY

export async function requestEntityArray(spacename?: any, categories?: any) {
  categories = categories || []; // prevent .join error
  return await instanceSupabaseClient
    .from(spacename ? `entities_${spacename}` : "entities")
    .select()
    .filter(
      // This will only return entities that have ALL of the items in the array. If we want to change it to 'any in search array' we need to use an rpc instead, or do an 'or' method and go through every category array item.
      "categories",
      "cs",
      `{${categories.join(",")}}` // e.g. `{"product-catalog-solutions-usecases","product-catalog-solutions-features","product-catalog-solutions-requirements"}`
    )
    .range(0, 9) //temp arbitrary limit of 10 (todo: pass variables in here to get proper pagination)
    .then(handleSupabaseResponse as any);
}

export const useEntityArray = (spacename?: any, categories?: any) => {
  const queryKey: (string | number)[] = [
    "entities",
    "array",
    spacename,
    categories,
  ];
  const query = useQueryerQuery(
    queryKey,
    () => requestEntityArray(spacename, categories),
    {
      enabled: true,
    }
  );
  return query;
};

// SINGLE

export async function requestEntitySingle(spacename?: any, categories?: any) {
  return await instanceSupabaseClient
    .from(spacename ? `entities_${spacename}` : "entities")
    .select()
    .filter(
      // This will only return entities that have ALL of the items in the array. If we want to change it to 'any in search array' we need to use an rpc instead, or do an 'or' method and go through every category array item.
      "categories",
      "cs",
      `{${categories.join(",")}}` // e.g. `{"product-catalog-solutions-usecases","product-catalog-solutions-features","product-catalog-solutions-requirements"}`
    )
    .range(0, 9) //temp arbitrary limit of 10 (todo: pass variables in here to get proper pagination)
    .then(handleSupabaseResponse as any);
}

export const useEntitySingle = (props: any) => {
  // todo: implement filter_array in query function
  // At the moment, this just uses the categories array (e.g. Accounts > Receivables > Invoices).
  // But once the categories are in supabase (Chris is working on this), this will be changed to use the useQueryerQuery function.
  const query = {
    data: data
      .filter((x) => x.nickname === props.id)
      ?.map((x) => (x = { ...x, title: x.display_singular } as any)),
  };
  // const query = useQueryerQuery({
  //     queryKey:['entities','single',filter_array],
  //     queryFn:()=>{
  //         return instanceSupabaseClient
  //             .from("entities")
  //             .select('*')
  //             // todo: implement filter_array here
  //             .limit(1)
  //             .then(response=>response.data)
  //     },
  //     enabled: true
  // });
  return query;
};

// COUNT

export const useEntityCount = ({ filter_array }: any) => {
  // todo: implement filter_array in query function
  const query = useQueryerQuery<any, any, any>({
    queryKey: ["entities", "count", filter_array],
    queryFn: () => {
      return (
        instanceSupabaseClient
          // .from("entities")
          .from("entities_orgmenta")
          .select("*", { count: "exact", head: true })
          // todo: implement filter_array here
          .then((response: any) => response)
      );
    },
    enabled: true,
  });
  return query;
};

// CREATE

export interface interfaceEntityCreate {
  id: string;
  title: string;
  type: string;
  categories: string[];
  status: string;
  description?: string;
  [key: string]: any;
}

export async function validateEntityCreate(entity: interfaceEntityCreate) {
  //todo
}

export async function requestEntityCreate(entity: interfaceEntityCreate) {
  return await instanceSupabaseClient
    // .from("entities")
    .from("entities_orgmenta")
    .insert(entity)
    .then(handleSupabaseResponse as any);
}

export const useEntityCreate = (props: interfaceEntityCreate) => {
  const queryClient = useQueryerClient();
  const { refetch } = useEntityArray();
  return useQueryerMutation(
    ["entity", "create"],
    () => requestEntityCreate(props),
    // Future enhancement: Optimistic updates to client side cache.
    // This will need us to determine which of the queries need to be updated - so we need to find 'filter_object' (see useEntityArray query key)
    // {
    //   onMutate: (newData) => {
    //       // Backup the current cache data
    //       const previousData = queryClient.getQueryData(['entities', 'array']);
    //       // Optimistically update the cache with the new data
    //       queryClient.setQueryData(['entities', 'array'], (oldData:any) => [...oldData, newData]);
    //       // Return the backup to rollback in case of error
    //       return { previousData };
    //   },
    //   onError: (error, newData, context) => {
    //       // Rollback the cache update on error
    //       queryClient.setQueryData(['entities', 'array', filter_object], context.previousData);
    //   },
    //   onSettled: () => {
    //       // Invalidate the query to refetch
    //       queryClient.invalidateQueries(['entities', 'array', filter_object]);
    //   }
    // }
    {
      onSuccess: () => {
        queryClient.invalidateQueries(["entity", "create"]);
        // refetch();
      },
    }
  );
};

// SCHEMA

// A hook that filters the useAttributeUnioned data to only show attributes that are relevant to this entity's schema.
// E.g. if this hook is used by an Invoice entity, it will return only the attributes relevant to the invoice (like line_items and balance_due)
// (to do: make dynamic - at the moment it isn't accepting props for the filter)
export const useEntitySchema = () => {
  const query = useAttributeUnioned(["Entity"]);
  return query;
};

// An example component to show how we can use useEntitySchema
export const ViewEntitySchema = (props: any) => {
  const schema = props.schema;
  return (
    <ViewContainerStatic style={{ flexDirection: "column" }}>
      <ViewTypographyText>ViewEntitySchema</ViewTypographyText>
      {schema?.data?.map((x: any, i: number) => (
        <ViewContainerStatic key={i} style={{ margin: 5 }}>
          {/* <ViewTypographyText style={{margin:4}}>{Object.keys(x)}</ViewTypographyText> */}
          <ViewTypographyText>
            {x.focus_columns.display_singular}
          </ViewTypographyText>
          {/* <ViewTypographyText>{x.auxiliary_columns.display_singular}</ViewTypographyText> */}
        </ViewContainerStatic>
      ))}
    </ViewContainerStatic>
  );
};
