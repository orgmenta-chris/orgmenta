// I need this to be a module for interacting with the supabase storage api.
// i.e. https://supabase.com/docs/guides/storage

import { useQueryerQuery, useQueryerMutation, useQueryerClient } from "./queryer";
import { instanceSupabaseClient } from "./supabase";
import { decode } from "base64-arraybuffer-es6";

// https://supabase.com/docs/reference/javascript/storage-from-list

// Requirements
// (see entity.tsx for corresponding functions and what structure they need to follow)

// interfaceStorageCreate
// requestStorageCreate
// useStorageCreate

// requestStorageArray //https://supabase.com/docs/reference/javascript/storage-from-list
// useStorageArray
// useStorageUpload //https://supabase.com/docs/reference/javascript/storage-from-upload
// useStorageDelete //https://supabase.com/docs/reference/javascript/storage-from-remove
// ViewStorageUpload <--i need this to be used with the filepicker component that you create,
// ViewStorageTable <--i need this to use your reacttable component, and display useStorageArray data in it

// For now let's just use a single 'default' bucket.

export const defaultStorageBucket = "default";

// Create a new bucket

export const createNewBucket = async () => {
  const { data, error } = await instanceSupabaseClient.storage.createBucket(
    defaultStorageBucket,
    {
      public: true,
      allowedMimeTypes: [
        "*", // PDF documents
      ],
      fileSizeLimit: 1024,
    }
  );

  if (error) {
    throw new Error(error.message);
  }

  return data;
};

// Retrieve a bucket

export const retrieveBucket = async () => {
  const { data, error } = await instanceSupabaseClient.storage.getBucket(
    defaultStorageBucket
  );

  if (error) {
    throw new Error(error.message);
  }

  return data;
};

export interface documentToBeUploaded {
  name: string;
  file: { [key: string]: any };
}

// Check if a bucket exists

export const ensureBucketExists = async () => {
  try {
    // Try to retrieve the bucket
    await retrieveBucket();
  } catch (error: any) {
    // If the bucket doesn't exist, create it
    if (error?.message.includes("was not found")) {
      await createNewBucket();

      return;
    }

    throw error;
  }
};

// Upload a document

export const uploadDocument = async ({ name, file }: documentToBeUploaded) => {
  const { data, error } = await instanceSupabaseClient.storage
    .from(defaultStorageBucket)
    .upload(
      `documents/${file.name}`, // at the moment, this just uses the default file name (including file extension), not the 'name' passed through as a prop.
      decode(file.uri), // base64 into ArrayBuffer
      {
        cacheControl: "3600",
        upsert: false,
      }
    );
  if (error) {
    throw new Error(error.message);
  }
  return data;
};

export const useStorageUpload = ({ name, file }: documentToBeUploaded) => {
  const queryClient = useQueryerClient();
  const mutation = useQueryerMutation(
    ["files", "create"],
    () => uploadDocument({ name, file }),
    {
      onSuccess: () => {
        queryClient.invalidateQueries([["bucket"], ["files", "array"]]);
      },
    }
  );
  return mutation;
};

// Items

// List all documents in the bucket
export const requestBucketItems = async () => {
  try {
    const { data, error } = await instanceSupabaseClient.storage
      .from(defaultStorageBucket)
      .list("documents/", {
        limit: 100,
        offset: 0,
        sortBy: { column: "name", order: "asc" },
      });

    if (error) {
      throw new Error(error.message);
    }
    return data || [];
  } catch (error) {
    throw error;
  }
};

export const useBucketItems = () => {
  const query = useQueryerQuery({
    queryKey: ["bucket"],
    queryFn: () =>
      requestBucketItems().then((response: any) => {
        if (response && response !== undefined) {
          return response.data;
        } else {
          return [];
        }
      }),
  });
  return query;
};
