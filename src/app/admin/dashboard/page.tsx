/* eslint-disable @typescript-eslint/no-explicit-any */
// app/dashboard/page.tsx
import DashboardStats from "./DashboardStats";
import SessionCard from "./SessionCard";
import useSessions from "./useSessions";

export default function DashboardPage() {
  const { sessions, isLoading } = useSessions();

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#e6edf3] p-4 space-y-6">
      <h1 className="text-2xl font-semibold">Session Command Center</h1>
      <DashboardStats />

      <div className="space-y-4">
        {isLoading ? (
          <p className="text-gray-400">Loading sessions...</p>
        ) : (
          sessions.map((session: any) => (
            <SessionCard key={session.id} session={session} />
          ))
        )}
      </div>
    </main>
  );
}
