
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
