import AsyncStorage from "@react-native-async-storage/async-storage"; // move this into own file
import {
  QueryClient,
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";
import { PersistQueryClientProvider } from "@tanstack/react-query-persist-client";
import { createAsyncStoragePersister } from "@tanstack/query-async-storage-persister";

// Client

export const ClassQueryerClient = QueryClient;

export const useQueryerClient = useQueryClient;

export const instanceQueryClient = new ClassQueryerClient({
  defaultOptions: {
    queries: {
      cacheTime: 1000 * 60 * 60 * 24, // 24 hours
    },
  },
});

// Persister

export const createQueryerPersister = createAsyncStoragePersister; // At the moment, this only allows AsyncStorage. Others may be added in the future.

export const instanceQueryerPersister = createQueryerPersister({
  storage: AsyncStorage,
});

// Provider

export const ViewQueryerProvider = ({ children }: any) => (
  <PersistQueryClientProvider
    client={instanceQueryClient}
    persistOptions={{ persister: instanceQueryerPersister }}
  >
    {children}
  </PersistQueryClientProvider>
);

// Mutation
export const useQueryerMutation = useMutation;

// Query
export const useQueryerQuery = useQuery;
