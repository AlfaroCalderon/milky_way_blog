'use client'
import { QueryClientProvider, QueryClient } from "@tanstack/react-query"
import { useState } from "react";
import { Toaster } from "sileo";

export default function PersonalBlogsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [queryClient] = useState(() => new QueryClient());
  return ( 
  <QueryClientProvider client={queryClient}>
  <Toaster position='top-right' offset={{ top: 20, right: 16 }} />
  <section>{children}</section>
  </QueryClientProvider>
  )
}