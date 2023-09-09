
import { createClient as createSupabaseClient } from "@supabase/supabase-js";


// Instance

export const instanceSupabaseClient = createSupabaseClient( // create an instance of the supabase client class
    "https://qfiulevnnvsptiwtwvuz.supabase.co",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFmaXVsZXZubnZzcHRpd3R3dnV6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjQ4MjQ1MzcsImV4cCI6MTk4MDQwMDUzN30.D2lskLMTLfvucKbs3eqxxu0uygwyvd-krOFQN-T0APM"
);
// export const instanceSupabaseClient = createClient( // expo variables not yet working
//     process.env.STAGING_REACT_APP_SUPABASE_URL,
//     process.env.STAGING_REACT_APP_SUPABASE_PUBLIC_KEY
// );


// Response

export interface interfaceSupabaseResponse {
    response:any,
    function_name?:string
}

export function handleSupabaseResponse(response:interfaceSupabaseResponse['response'],function_name:interfaceSupabaseResponse['function_name']) {
    // todo: use function_name prop for logging purposes if useful
    if (response.error) throw response.error;
    return response.data;
}


// Tables

// This is just a useful reference of tables
export const mapSupabaseTables = {
    attributes: {
        description: "This describes the fields/properties that a class of entity can have"
    },
    entities: {
        description: "This describes the entities themselves"
    },
    relationships: {
        description: "This describes the relationships between entities"
    },
    spaces: {
        description: "This describes the organisation/business/workspace that holds all of this data"
    },
    members: {
        description: "This describes the permissions/memberships a user has with a space"
    },
}

// Get a list of tables (not yet used)
// This may be needed in the future to show the user all the spaces that are available to them / get the names of the tables associated with their spaces.
export async function requestSupabaseTables(
    filters:any,
) {
return await instanceSupabaseClient
    .from("tables_public")
    .select()
    .then(handleSupabaseResponse as any)
}


// Views

// This is just a useful reference of views
const mapSupabaseViews = {
    attributes_unioned: {
        description: "This joins attributes with side 1 as the focus, to attributes with side 2 as the focus. This allows you to see all attributes in one column."
    },
    relationships_unioned: {
        description: "This joins relationships with side 1 as the focus, to relationships with side 2 as the focus. This allows you to see all entities in one column."
    },
}
