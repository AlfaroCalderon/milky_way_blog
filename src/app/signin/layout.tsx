'use client'
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { useState } from "react";

export default function SignInLayout({
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