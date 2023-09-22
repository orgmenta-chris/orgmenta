import { instanceSupabaseClient as client } from "./supabase";

export const addSecret = async (name: string, secret: string) => {
  const { data, error } = await client.rpc("insert_secret", {
    name,
    secret,
  });

  if (error) throw new Error(`${error}`);
  else return data;
};

export const getSecret = async (secret_name: string) => {
  const { data, error } = await client.rpc("read_secret", {
    secret_name,
  });

  if (error) throw new Error(`${error}`);
  else return data;
};

// export const deleteSecret = async (secret_name: string) => {
//   const vault = await client.rpc("delete_secret", { secret_name });
//   return vault;
// };
