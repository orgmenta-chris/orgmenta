// I need this to be a module for interacting with the supabase storage api.
// i.e. https://supabase.com/docs/guides/storage

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

// Create a new bucket

export const createNewBucket = async (name: string) => {
  const { data, error } = await instanceSupabaseClient.storage.createBucket(
    name,
    {
      public: true,
      allowedMimeTypes: [
        "application/pdf", // PDF documents
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

export const retrieveBucket = async (name: string) => {
  const { data, error } = await instanceSupabaseClient.storage.getBucket(name);

  if (error) {
    throw new Error(error.message);
  }

  return data;
};

export interface documentToBeUploaded {
  bucket: string;
  name: string;
  file: string;
}

// Check if a bucket exists

export const ensureBucketExists = async (name: string) => {
  try {
    // Try to retrieve the bucket
    await retrieveBucket(name);
  } catch (error) {
    // If the bucket doesn't exist, create it
    if (error?.message.includes("was not found")) {
      await createNewBucket(name);

      return
    }
    
    throw error;
  }
};

// Upload a document

export const uploadDocument = async ({
  bucket,
  name,
  file,
}: documentToBeUploaded) => {
  const { data, error } = await instanceSupabaseClient.storage
    .from(bucket)
    .upload(`documents/${name}.pdf`, decode(file), {
      cacheControl: "3600",
      upsert: false,
    });

  if (error) {
    throw new Error(error.message);
  }

  return data;
};

// List all documents in the bucket

export const listAllDocumentsInBucket = async (name: string) => {
  const { data, error } = await instanceSupabaseClient.storage
    .from(name)
    .list("public", {
      limit: 100,
      offset: 0,
      sortBy: { column: "name", order: "asc" },
    });

    if (error) {
      throw new Error(error.message);
    }

    return data;
};
