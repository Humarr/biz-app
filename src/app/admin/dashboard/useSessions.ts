// app/dashboard/useSessions.ts
// "use client";
import useSWR from "swr";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function useSessions() {
  const { data, error } = useSWR("/api/analytics/sessions", fetcher);
  return {
    sessions: data?.sessions || [],
    isLoading: !data && !error,
  };
}
