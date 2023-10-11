import { instanceSupabaseClient, handleSupabaseResponse } from "./supabase";
import { useQueryerQuery } from "./queryer";
import { filter } from "underscore";

export const useAuxiliaryArray = ({
  space_name = "blueprints",
  column_names = [],
  column_sorts = [], // asc/desc
  filter_columns = [], // which columns to filter
  filter_values = [], // values to filter
}: any) => {
  // Add core column names (currently has some tests in it, remove before go-live)
  column_names = column_names.concat([
    "id",
    "type",
    "status",
    "title",
    "categories",
    "38a15ab6-c1ad-47cf-803c-5446e2214601", // entity 'has' another entity
    // Test fields:
    "d0205b0b-3d78-4e77-8071-a53b65e7aa3a",
    // "43a0d73d-6285-4d8b-8e30-5357b80febd0",
    // "NON-EXISTING-COLUMN",
    // "",
  ]);
  filter_columns = filter_columns || ['categories']
  filter_columns = filter_columns || ['categories']
  // console.info("useAuxiliaryArray columns", column_names);
  const queryKey = ["auxiliary", space_name, column_names, filter_columns];
  const queryFn = async () =>
    requestAuxiliaryArray({ space_name, column_names });
  const query = useQueryerQuery(queryKey, queryFn, { enabled: true });
  // console.log(query?.data?.length)
  return query;
};

export const requestAuxiliaryArray = async ({
  space_name,
  column_names,
}: any) => {
  // const { data, error } = await instanceSupabaseClient.rpc("auxiliary6", { //auxiliary6 is WORKING
  const { data, error } = await instanceSupabaseClient.rpc("auxiliary6", {
    space_name,
    column_names,
  });
  if (error) {
    console.error("RPC Error:", error);
  }
  return data;
};


const testRpcRequest = [
  {column: 'id', filter:null,order:null},
  {column: 'title', filter:null,order:null},
  {column: 'status', filter:null,order:'desc'},
  {column: 'categories', filter:['product-catalog-solutions'],order:null},
  {column: 'priority', filter:null,order:null},
]