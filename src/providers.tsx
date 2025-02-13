"use client";
import { QueryClient } from "@tanstack/react-query";
import { PersistQueryClientProvider } from "@tanstack/react-query-persist-client";
import { createSyncStoragePersister } from "@tanstack/query-sync-storage-persister";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { ReactNode } from "react";

export default function Providers({ children }: { children: ReactNode }) {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        gcTime: 1000 * 60 * 60 * 24,
      },
    },
  });

  const persister = createSyncStoragePersister({
    storage:
      typeof window !== "undefined" ? window.localStorage : ({} as Storage),
  });

  return (
    <PersistQueryClientProvider
      client={queryClient}
      persistOptions={{
        persister: persister,
      }}
    >
      {children}
      <ReactQueryDevtools initialIsOpen={false} />
    </PersistQueryClientProvider>
  );
}
