/* eslint-disable @typescript-eslint/no-explicit-any */
// app/dashboard/DashboardStats.tsx
"use client";
import useMetrics from "./useMetrics";

export default function DashboardStats() {
  const { metrics } = useMetrics();

  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
      {metrics.map((stat: any) => (
        <div
          key={stat.label}
          className="bg-[#161b22] p-4 rounded-2xl shadow text-center"
        >
          <p className="text-sm text-gray-400">{stat.label}</p>
          <p className="text-xl font-bold">{stat.value}</p>
        </div>
      ))}
    </div>
  );
}
