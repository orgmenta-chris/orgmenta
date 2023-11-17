// Follow this setup guide to integrate the Deno language server with your editor:
// https://deno.land/manual/getting_started/setup_your_environment
// This enables autocomplete, go to definition, etc.

// @ts-ignore
import { serve } from "https://deno.land/std@0.177.0/http/server.ts";
// @ts-ignore
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const confirmApiKey = (vaultApiKey: any, providedApiKey: any) => {
  if (vaultApiKey !== providedApiKey)
    throw new Error("Access denied! Wrong API key: " + providedApiKey);
};

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

    // Now we can get the session or user object
    const url = new URL(req.url);

    const identifier = url.searchParams.get("identifier");
    const apiKey = url.searchParams.get("api_key");

    // And we can run queries in the context of our authenticated user
    const { data, error } = await supabaseClient.rpc("read_secret", {
      secret_name: identifier,
    });

    if (error) throw error;

    confirmApiKey(data, apiKey);

    let successMessage = "Successfully authenticated!"

    return new Response(JSON.stringify({ successMessage }), {
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
