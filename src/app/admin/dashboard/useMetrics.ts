// app/dashboard/useMetrics.ts
"use client";
import useSWR from "swr";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function useMetrics() {
  const { data } = useSWR("/api/analytics/metrics", fetcher);
  return {
    metrics: data?.metrics || [],
  };
}
