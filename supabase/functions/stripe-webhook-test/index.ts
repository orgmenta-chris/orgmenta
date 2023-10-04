// Follow this setup guide to integrate the Deno language server with your editor:
// https://deno.land/manual/getting_started/setup_your_environment
// This enables autocomplete, go to definition, etc.

import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";
import {
  STAGING_SUPABASE_URL,
  STAGING_SUPABASE_PUBLIC_KEY,
  PRODUCTION_SUPABASE_URL,
  PRODUCTION_SUPABASE_PUBLIC_KEY,
} from "@env";

let supabaseURL: any;
let supabaseAnonKey: any;

if (__DEV__) {
  supabaseURL = `${STAGING_SUPABASE_URL}`;
  supabaseAnonKey = `${STAGING_SUPABASE_PUBLIC_KEY}`;
} else {
  supabaseURL = `${PRODUCTION_SUPABASE_URL}`;
  supabaseAnonKey = `${PRODUCTION_SUPABASE_PUBLIC_KEY}`;
}

serve(async (req: any) => {
  const data = await req.json();

  try {
    // Create a Supabase client with the Auth context of the logged in user.
    const supabaseClient = createClient(
      // Supabase API URL - env var exported by default.
      supabaseURL ?? "",
      // Supabase API ANON KEY - env var exported by default.
      supabaseAnonKey ?? "",
      // Create client with Auth context of the user that called the function.
      // This way your row-level-security (RLS) policies are applied.your
    );
    // Now we can get the session or user object
    const {
      data: { user },
    } = await supabaseClient.auth.getUser();

    // And we can run queries in the context of our authenticated user
    const { data, error } = await supabaseClient.from("users").select("*");
    if (error) throw error;

    return new Response(JSON.stringify({ user, data }), {
      headers: { "Content-Type": "application/json" },
      status: 200,
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      headers: { "Content-Type": "application/json" },
      status: 400,
    });
  }

  // return new Response(JSON.stringify(data), {
  //   headers: { "Content-Type": "application/json" },
  // });
});

// To invoke:
// curl -i --location --request POST 'http://localhost:54321/functions/v1/' \
//   --header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZS1kZW1vIiwicm9sZSI6ImFub24iLCJleHAiOjE5ODM4MTI5OTZ9.CRXP1A7WOeoJeXxjNni43kdQwgnWNReilDMblYTn_I0' \
//   --header 'Content-Type: application/json' \
//   --data '{"name":"Functions"}'
