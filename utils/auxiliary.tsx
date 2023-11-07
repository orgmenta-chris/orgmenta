import { instanceSupabaseClient, handleSupabaseResponse } from "./supabase";
import { useQueryerQuery } from "./queryer";
import { filter } from "underscore";
import { useRouterLocation } from "./router";

export const useAuxiliaryArray = ({
  space_name = "blueprints",
  column_names = [],
  column_sorts = [], // asc/desc
  filter_columns = [], // which columns to filter
  filter_values = [], // values to filter
}: any) => {
  const routerPaths = useRouterLocation().paths;
  // Add core column names
  column_names = column_names.concat([
    "id",
    "type",
    "status",
    "title",
    "priority",
    "categories",
    "description",
    // "values",
    "38a15ab6-c1ad-47cf-803c-5446e2214601", // entity 'has' another entity
    "6141869c-87c4-4d1a-a02b-36cbcc2283c9",//spaces
    "43a0d73d-6285-4d8b-8e30-5357b80febd0",//owned
    "dd42cb0b-88b4-4946-8fc1-e405fe19af91",//logged
    "48a15ab6-c3ad-47cf-803c-5446e2214601",//parent
    "189a848b-92ae-46a0-90e1-88f3014d15f3",//assigned
    "95cb6b36-acfc-4e15-994d-651ab9270619",//executed
    "d9944c4d-d93a-4c6e-aea7-3a13b7cfb756",//feature
    "92515e4a-d631-41b9-b39b-e8253488c0f2",//has file

    // Test fields:
    // "d0205b0b-3d78-4e77-8071-a53b65e7aa3a",// a non-existing uuid
    // "43a0d73d-6285-4d8b-8e30-5357b80febd0",
    // "NON-EXISTING-COLUMN",
    // "",
  ]);
  filter_columns = filter_columns || ["categories"];
  // filter_columns = filter_columns || ['categories']
  // console.info("useAuxiliaryArray columns", column_names);
  const queryKey = ["auxiliary", space_name, column_names, filter_columns, routerPaths[2]];
  const queryFn = async () =>
    requestAuxiliaryArray({ space_name, column_names, path: routerPaths[2] });
  const query = useQueryerQuery(queryKey, queryFn, { enabled: true });
  // console.log('wueyr',query.data)
  return query;
};

export const requestAuxiliaryArray = async ({
  space_name,
  column_names,
  path,
}: any) => {
  // const { data, error } = await instanceSupabaseClient.rpc("auxiliary6", { //auxiliary6 is WORKING
  const { data, error } = await instanceSupabaseClient.rpc("auxiliary6", {
    space_name,
    column_names,
  });
  if (error) {
    console.error("RPC Error:", error);
  }
  return data.filter((x:any) => x.entities?.categories?.includes(path));
};

const testRpcRequest = [
  { column: "id", filter: null, order: null },
  { column: "title", filter: null, order: null },
  { column: "status", filter: null, order: "desc" },
  { column: "categories", filter: ["product-catalog-solutions"], order: null },
  { column: "priority", filter: null, order: null },
];
