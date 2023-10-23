// Follow this setup guide to integrate the Deno language server with your editor:
// https://deno.land/manual/getting_started/setup_your_environment
// This enables autocomplete, go to definition, etc.

// @ts-ignore
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
// @ts-ignore
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

serve(async (req: Request) => {
  try {
    // Create a Supabase client with the Auth context of the logged in user.
    const supabaseClient = createClient(
      // Supabase API URL - env var exported by default.
      // @ts-ignore
      Deno.env.get("SUPABASE_URL") ?? "",
      // Supabase API ANON KEY - env var exported by default.
      // @ts-ignore
      Deno.env.get("SUPABASE_ANON_KEY") ?? ""
    );

    // Get data sent from the api
    const apiFeed = await req.json();

    // And we can run queries using supabaseClient
    // At this point with Chris' help, will use supbase SDK (i.e. supabaseClient instance) to update/save data received from Stripe API to DB.
    const { data, error } = await supabaseClient.from("attributes").select("*");
    if (error) throw error;

    return new Response(JSON.stringify({ apiFeed }), {
      headers: { "Content-Type": "application/json" },
      status: 200,
    });
  } catch (error) {
    // @ts-ignore
    return new Response(JSON.stringify({ error: error.message }), {
      headers: { "Content-Type": "application/json" },
      status: 400,
    });
  }
});
