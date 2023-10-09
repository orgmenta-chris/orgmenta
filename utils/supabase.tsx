// The 'supabase' module is the client that handles Supabase auth, db, vault etc.
// https://supabase.com/docs/guides/getting-started/tutorials/with-expo
// Vault, Storage etc. are in their own modules to due complexity and being their own defined entity.

import { UtilityPlatformMain } from "./platform";
import { UtilityLocalAsyncstorage, UtilityLocalSecurestore } from './local'
import { useQueryerQuery, useQueryerMutation, useQueryerClient } from "./queryer";
import "react-native-url-polyfill/auto";
import { createClient } from "@supabase/supabase-js";

import {
  STAGING_SUPABASE_URL,
  STAGING_SUPABASE_PUBLIC_KEY,
  PRODUCTION_SUPABASE_URL,
  PRODUCTION_SUPABASE_PUBLIC_KEY,
} from "@env";

// (Mobile Only) Secure Store.
// If this is used elsewhere in the project, it will be split out into its own module / migrated to 'storage' (storage>local/clients).
// We will use useQueryerQuery+UtilityLocalAsyncstorage+encryption instead (to work on web) once the encryption for it is confirmed as secure.
let supabaseURL: any;
let supabaseAnonKey: any;

if (__DEV__) {
  supabaseURL = `${STAGING_SUPABASE_URL}`;
  supabaseAnonKey = `${STAGING_SUPABASE_PUBLIC_KEY}`;
} else {
  // Testing if netlify issue is due to this
  supabaseURL = `${STAGING_SUPABASE_URL}`;
  supabaseAnonKey = `${STAGING_SUPABASE_PUBLIC_KEY}`;
  // supabaseURL = `${PRODUCTION_SUPABASE_URL}`;
  // supabaseAnonKey = `${PRODUCTION_SUPABASE_PUBLIC_KEY}`;
}

export const ExpoUtilityLocalSecurestoreAdapter = {
  getItem: (key: string) => {
    return UtilityLocalSecurestore.getItemAsync(key);
  },
  setItem: (key: string, value: string) => {
    UtilityLocalSecurestore.setItemAsync(key, value);
  },
  removeItem: (key: string) => {
    UtilityLocalSecurestore.deleteItemAsync(key);
  },
};

export const TempUnencryptedWebWorkaround = {
  getItem: (key: string) => {
    return UtilityLocalAsyncstorage.getItem(key);
  },
  setItem: (key: string, value: string) => {
    UtilityLocalAsyncstorage.setItem(key, value);
  },
  removeItem: (key: string) => {
    UtilityLocalAsyncstorage.removeItem(key);
  },
};

// Instance

export const createSupabaseClient = createClient;

export const instanceSupabaseClient = createSupabaseClient(
  // create an instance of the supabase client class
  supabaseURL,
  supabaseAnonKey,
  // process.env.STAGING_SUPABASE_URL!, //The ! asserts that the variable is not undefined.
  // process.env.STAGING_SUPABASE_PUBLIC_KEY!, //The ! asserts that the variable is not undefined.
  {
    auth: {
      storage:
        UtilityPlatformMain.OS !== "web"
          ? (ExpoUtilityLocalSecurestoreAdapter as any)
          : TempUnencryptedWebWorkaround,
      autoRefreshToken: true,
      persistSession: true,
      detectSessionInUrl: false,
    },
  }
);

// Response

export interface interfaceSupabaseResponse {
  response: any;
  function_name?: string;
}

export function handleSupabaseResponse(
  response: interfaceSupabaseResponse["response"],
  function_name: interfaceSupabaseResponse["function_name"]
) {
  // todo: use function_name prop for logging purposes if useful
  if (response.error) throw response.error;
  return response.data;
}

// Tables

// This is just a useful reference of tables
export const mapSupabaseTables = {
  attributes: {
    description:
      "This describes the fields/properties that a class of entity can have",
  },
  entities: {
    description: "This describes the entities themselves",
  },
  relationships: {
    description: "This describes the relationships between entities",
  },
  spaces: {
    description:
      "This describes the organisation/business/workspace that holds all of this data",
  },
  members: {
    description:
      "This describes the permissions/memberships a user has with a space",
  },
};

// Get a list of tables (not yet used)
// This may be needed in the future to show the user all the spaces that are available to them / get the names of the tables associated with their spaces.
export async function requestSupabaseTables(filters: any) {
  return await instanceSupabaseClient
    .from("tables_public")
    .select()
    .then(handleSupabaseResponse as any);
}

// Views

// This is just a useful reference of views
export const mapSupabaseViews = {
  attributes_unioned: {
    description:
      "This joins attributes with side 1 as the focus, to attributes with side 2 as the focus. This allows you to see all attributes in one column.",
  },
  relationships_unioned: {
    description:
      "This joins relationships with side 1 as the focus, to relationships with side 2 as the focus. This allows you to see all entities in one column.",
  },
};

// Table

export async function requestSupabaseTablerows(tableName: string) {
  return await instanceSupabaseClient
    .from("entities_orgmenta")
    .select()
    .then(handleSupabaseResponse as any);
}

export const useSupabaseTable = (tableName: string) => {
  // const queryClient = useQueryClient();
  return useQueryerMutation(
    ["entity", "create"],
    () => requestSupabaseTablerows(tableName),
    {
      //todo
      onSuccess: () => {
        // queryClient.invalidateQueries([]);
        // refetch();
      },
    }
  );
};
