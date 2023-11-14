// Follow this setup guide to integrate the Deno language server with your editor:
// https://deno.land/manual/getting_started/setup_your_environment
// This enables autocomplete, go to definition, etc.

// @ts-ignore
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
// @ts-ignore
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const findEmailAddress = (feed: any, targetEmail: any) => {
  if (!feed || !feed.data) {
    return null; // Return null if feed or feed.data is undefined
  }

  const result = feed.map((item: any) => {
    if (item.email_address === targetEmail) {
      return item.email_address;
    }
    return null; // Return null if the email address is not found
  });

  // Find the first non-null result (the email address) in the mapped array
  const foundEmail = result.find((email: any) => email !== null);

  return foundEmail || null; // Return null if the email address is not found
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

    const url = new URL(req.url);

    const username = url.searchParams.get("username");

    // We can run queries using supabaseClient

    // const { data: getData, error: getError } = await supabaseClient
    //   .from("members_orgmenta")
    //   .select();

    // if (getError) throw getError;

    // const dataFromEmail = findEmailAddress(getData, username);

    // const { data: patchData, error: postError } = await supabaseClient
    //   .from("members_orgmenta")
    //   .update({ status: true })
    //   .eq("id", 1)
    //   .select();

    // if (postError) throw postError;

    const { data, error } = await supabaseClient
      .from("members_orgmenta")
      .update({ status: "active" })
      .eq("email_address", username)
      .select();

    if (error) throw error;

    return new Response(
      JSON.stringify({ url, data /*patchData*/ }),
      {
        headers: { "Content-Type": "application/json" },
        status: 200,
      }
    );
  } catch (error) {
    // @ts-ignore
    return new Response(JSON.stringify({ error: error.message }), {
      headers: { "Content-Type": "application/json" },
      status: 400,
    });
  }
});
