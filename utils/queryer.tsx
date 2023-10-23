import { UtilityLocalAsyncstorage } from "./local";
import {
  QueryClient,
  useMutation,
  useQuery,
  useQueryClient,
  UseQueryResult,
  UseQueryOptions,
  useQueries,
} from "@tanstack/react-query";
import { PersistQueryClientProvider } from "@tanstack/react-query-persist-client";
import { createAsyncStoragePersister } from "@tanstack/query-async-storage-persister";

// CLIENT

export const ClassQueryerClient = QueryClient;

export const useQueryerClient = useQueryClient;

export const instanceQueryClient = new ClassQueryerClient({
  defaultOptions: {
    queries: {
      cacheTime: 1000 * 60 * 60 * 24, // 24 hours
    },
  },
});

// PERSISTER

export const createQueryerPersister = createAsyncStoragePersister; // At the moment, this only allows AsyncStorage. Others may be added in the future.

export const instanceQueryerPersister = createQueryerPersister({
  storage: UtilityLocalAsyncstorage,
});

// PROVIDER

export const ViewQueryerProvider = ({ children }: any) => (
  <PersistQueryClientProvider
    client={instanceQueryClient}
    persistOptions={{ persister: instanceQueryerPersister }}
  >
    {children}
  </PersistQueryClientProvider>
);

// MUTATION

export const useQueryerMutation = useMutation;

// QUERY

export const useQueryerQuery = useQuery;

export const deleteQueryerQuery = (queryKeys?: any) => {
  const queryerClient = useQueryClient();
  if (queryKeys) {
    queryerClient.removeQueries(queryKeys); // delete specified cached queries (not tested)
  } else {
    queryerClient.clear();
    queryerClient.invalidateQueries();
  }
};

// RESULTS

export type TypeQueryerResult = UseQueryResult;

// OPTIONS

export type TypeQueryerOptions<
  TData = unknown,
  TError = unknown
> = UseQueryOptions<TData, TError>;


// QUERIES

export const useQueryerQueries = useQueries;