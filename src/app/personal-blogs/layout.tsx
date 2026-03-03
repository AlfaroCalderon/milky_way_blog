'use client'
import { QueryClientProvider, QueryClient } from "@tanstack/react-query"
import { useState } from "react";

export default function PersonalBlogsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [queryClient] = useState(() => new QueryClient());
  return ( 
  <QueryClientProvider client={queryClient}>
  <section>{children}</section>
  </QueryClientProvider>
  )
}