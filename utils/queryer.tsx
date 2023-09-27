import AsyncStorage from "@react-native-async-storage/async-storage";
import { QueryClient } from "@tanstack/react-query";
import { PersistQueryClientProvider } from "@tanstack/react-query-persist-client";
import { createAsyncStoragePersister } from "@tanstack/query-async-storage-persister";

// Client

export const instanceQueryClient = new QueryClient({
  defaultOptions: {
    queries: {
      cacheTime: 1000 * 60 * 60 * 24, // 24 hours
    },
  },
});

// Persister

export const instanceQueryerPersister = createAsyncStoragePersister({
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
