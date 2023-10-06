import { instanceSupabaseClient as client } from "./supabase";

export const VaultAddSecret = async (name: string, secret: string) => {
  const { data, error } = await client.rpc("insert_secret", {
    name,
    secret,
  });

  if (error) throw new Error(`${error}`);
  else return data;
};

export const VaultGetSecret = async (secret_name: string) => {
  const { data, error } = await client.rpc("read_secret", {
    secret_name,
  });

  if (error) throw new Error(`${error}`);
  else return data;
};