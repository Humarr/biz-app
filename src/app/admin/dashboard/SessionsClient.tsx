/* eslint-disable @typescript-eslint/no-explicit-any */
// app/dashboard/SessionsClient.tsx
"use client";

import useSWR from "swr";
import SessionCard from "./SessionCard";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function SessionsClient() {
  const { data, error } = useSWR("/api/admin1/analytics/sessions", fetcher);

  const sessions = data?.sessions || [];
  const isLoading = !data && !error;

  if (isLoading) {
    return <p className="text-gray-400">Loading sessions...</p>;
  }

  if (error) {
    return <p className="text-red-500">Failed to load sessions.</p>;
  }

  return (
    <div className="space-y-4">
      {sessions.map((session: any) => (
        <SessionCard key={session.id} session={session} />
      ))}
    </div>
  );
}
