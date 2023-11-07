import { ViewDisplayDynamic } from "./display";
import { ViewActionContainer } from "./action";
import { ViewFocusHeader } from "./focus";
import { ViewPageMain, usePageTitle } from "./page";
import { useSpaceState, TypeSpaceState } from "./space";
import { useRouterLocation } from "./router";
import { useAttributeUnioned } from "./attribute";
import { useAuxiliaryArray } from "./auxiliary";
import {
  useQueryerQuery,
  useQueryerMutation,
  useQueryerClient,
} from "./queryer";
import { arrayFrameworkBusiness } from "./framework";
import { instanceSupabaseClient, handleSupabaseResponse } from "./supabase";
import {
  ViewRelationshipAttribute,
  ViewRelationshipEntity,
  ViewRelationshipModal,
  ViewRelationshipRelationships,
  useRelationshipArray,
} from "./relationship";
import {
  ViewContainerColumn,
  ViewContainerRow,
  ViewContainerStatic,
} from "./container";
import {
  ViewTypographyHeading,
  ViewTypographySubheading,
  ViewTypographyText,
} from "./typography";
import { ViewFieldDynamic } from "./field";
import { ViewCardExpandable } from "./card";
import { ViewButtonIcon, ViewButtonText } from "./button";
import { arrayTypeMain } from "./type";
import { ViewModalContainer } from "./modal";
import { useZustandStore } from "./zustand";

// PAGE

export const ViewEntityPage = () => {
  const routerPaths = useRouterLocation()?.paths;
  const spaceSelected = useSpaceState(["space", "selected"]);
  const focus = useEntitySingle({ entityFocus: routerPaths?.[2] });
  const auxiliary = useAuxiliaryArray({
    space_name: (spaceSelected as TypeSpaceState)?.data?.spacename,
    filters_array: [], //todo
    column_names: [], //todo
  });
  const schema = useEntitySchema();
  usePageTitle(
    `Orgmenta | Entities - ${routerPaths?.[2]} - ${routerPaths?.[3]}`
  );
  return (
    <ViewPageMain>
      {/* Header for the primary entity being viewed */}
      <ViewFocusHeader />
      {/* Display data depending on which display mode is selected (e.g. 'Table', 'Calendar') */}
      <ViewDisplayDynamic
        auxiliary={auxiliary}
        schema={schema}
        focus={focus}
        display={routerPaths?.[3]}
      />
      {/* Action tabs and panels for manipulating data */}
      <ViewActionContainer
        auxiliary={auxiliary}
        schema={schema}
        focus={focus}
      />
      <ViewEntityProperty />
      <ViewRelationshipModal
        spacename={(spaceSelected as TypeSpaceState)?.data?.spacename}
        entityid={"97f48d4d-d38b-4ed1-afd4-e477839f3247"}
      />
    </ViewPageMain>
  );
};

// ARRAY

export async function requestEntityArray(spacename?: any, categories = []) {
  return await instanceSupabaseClient
    .from(spacename && `entities_${spacename}`)
    .select()
    .filter(
      // This will currently only return entities that have ALL of the items in the array. If we want to change it to 'any in search array' we need to use an rpc instead, or do an 'or' method and go through every category array item.
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
  // But once the categories are in supabase (C is working on this), this will be changed to use the useQueryerQuery function.
  const query = {
    data: arrayFrameworkBusiness
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

// ITEM (will replace 'SINGLE')

export async function requestEntityValues(spacename: string, entityid: string) {
  return await instanceSupabaseClient
    .from(spacename && `entities_${spacename}`)
    .select()
    .eq(`id`, entityid)
    .range(0, 9) //temp arbitrary limit of 10 (todo: pass variables in here to get proper pagination)
    .then(handleSupabaseResponse as any);
}

export const useEntityValues = (entityid: string, spacename: string) => {
  const queryKey: (string | number)[] = ["entities", spacename, entityid];
  const query = useQueryerQuery(
    queryKey,
    () => requestEntityValues(spacename, entityid),
    {
      enabled: !!spacename && !!entityid,
    }
  );
  return query;
};



// CARD

export const ViewEntityCard = ({ entityid, spacename }: any) => {
  // Display a single entity
  return (
    <ViewCardExpandable
      header={<ViewEntityHeading entityid={entityid} spacename={spacename} />}
      body={<ViewEntityBody entityid={entityid} spacename={spacename} />}
    />
  );
};

// HEADING

export const ViewEntityHeading = ({ entityid, spacename }: any) => {
  const entity = useEntityValues(entityid, spacename);
  return (
    <ViewContainerRow>
      <ViewEntityType entityid={entityid} spacename={spacename}/>
      <ViewTypographyText>{entity?.data?.[0]?.title}</ViewTypographyText>
    </ViewContainerRow>
  );
};

// TYPE

export const ViewEntityType = ({ entityid, spacename }: any) => {
  const entity = useEntityValues(entityid, spacename);
  const type = arrayTypeMain.find((x) => x.title === entity?.data?.type);
  // console.log('entity',entity.data)
  // console.log('type',type)
  return (
    <ViewContainerRow>
      <ViewButtonIcon iconSource={type?.iconSource} iconName={type?.iconName} />
      <ViewTypographyText>{entity?.data?.[0]?.type+` | `}</ViewTypographyText>
    </ViewContainerRow>
  );
};

// BODY

export const ViewEntityBody = ({ entityid, spacename }: any) => {
  const entity = useEntityValues(entityid, spacename);
  return Object.keys(entity.data as any).map((x, i) => (
    <ViewFieldDynamic
      formname={""}
      queryId={""}
      item={{
        label: "",
        value: undefined,
        valueDefault: undefined,
        placeholder: undefined,
        options: undefined,
        component: undefined,
      }}
    />
  ));
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
  id?: string;
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

export async function requestEntityCreate(
  entity: interfaceEntityCreate,
  spacename: string
) {
  // console.log("entity", entity, spacename);
  return await instanceSupabaseClient
    // .from("entities")
    .from(spacename && `entities_${spacename}`)
    .insert(entity)
    .then(handleSupabaseResponse as any);
}

export const useEntityCreate = (
  entity: interfaceEntityCreate,
  spacename: string
) => {
  const queryClient = useQueryerClient();
  // const { refetch } = useEntityArray();
  return useQueryerMutation(
    ["entity", "create"],
    () => requestEntityCreate(entity, spacename),
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
// NOT IN USE
// export const ViewEntitySchema = (props: any) => {
//   const schema = props.schema;
//   return (
//     <ViewContainerStatic style={{ flexDirection: "column" }}>
//       <ViewTypographyText>ViewEntitySchema</ViewTypographyText>
//       {schema?.data?.map((x: any, i: number) => (
//         <ViewContainerStatic key={i} style={{ margin: 5 }}>
//           {/* <ViewTypographyText style={{margin:4}}>{Object.keys(x)}</ViewTypographyText> */}
//           <ViewTypographyText>
//             {/* C  WILL BE DELETING THIS FIELD IN USEATTRIBUTESUNIONED - C to MAKE SURE THIS IS UPDATED / ADDED AS A PROPER FIELD IF NEEDED */}
//             {x.focus_columns.display_singular}
//           </ViewTypographyText>
//           {/* <ViewTypographyText>{x.auxiliary_columns.display_singular}</ViewTypographyText> */}
//         </ViewContainerStatic>
//       ))}
//     </ViewContainerStatic>
//   );
// };

export const useEntityProperty = (entityId: string, propertyId: string) => {
  const store = useZustandStore(`entity-${entityId}-${propertyId}`);
  const value = store((state: any) => state.value);
  const update = store((state: any) => state.update);
  return { value, update };
};

export const useEntityModal = () => {
  const store = useZustandStore(`entity-property-modal`);
  const value = store((state: any) => state.value);
  const update = store((state: any) => state.update);
  return { value: value, update };
};

export const ViewEntityProperty = ({
  spacename,
  entityid1,
  entityid2,
  attributename,
}: any) => {
  const modal = useEntityModal();
  const spaceSelected = useSpaceState(["space", "selected"]);
  const entity = useEntityValues(
    modal.value.entityId,
    spaceSelected?.data?.spacename
  );
  // const property = useEntityProperty();
  return (
    <ViewModalContainer
      modalName={"entity-property"}
      height={500}
      backdrop
      width={1000}
    >
      {/* {JSON.stringify(modal,null,2)} */}
      <ViewContainerRow>
        {/* <ViewTypographyText>{JSON.stringify(modal,null,2)}</ViewTypographyText> */}
        {/* <ViewTypographyText>{JSON.stringify(modal?.value)}</ViewTypographyText> */}
        <ViewTypographyText>{JSON.stringify(entity,null,2)}</ViewTypographyText>
        <ViewTypographyText>
          {/* {JSON.stringify(spaceSelected?.data?.spacename, null, 2)} */}
        </ViewTypographyText>
        {/* <ViewTypographyText>{JSON.stringify(entity,null,2)}</ViewTypographyText> */}
      </ViewContainerRow>
    </ViewModalContainer>
  );
};
