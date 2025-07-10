/* eslint-disable @typescript-eslint/no-explicit-any */
// app/dashboard/SessionCard.tsx
"use client";

export default function SessionCard({ session }: { session: any }) {
  return (
    <div className="bg-[#161b22] p-4 rounded-2xl shadow">
      <div className="flex items-center justify-between">
        <div className="text-sm text-gray-400">{session.id}</div>
        <span
          className={`px-2 py-1 rounded-full text-xs ${
            session.paymentStatus === "paid"
              ? "bg-green-600 text-white"
              : "bg-gray-700 text-gray-300"
          }`}
        >
          {session.paymentStatus === "paid" ? "Paid" : "Not Paid"}
        </span>
      </div>

      <div className="mt-2 space-y-1 text-sm">
        <div>📍 {session.country} ({session.city})</div>
        <div>🖥️ {session.device}</div>
        <div>🕒 {session.enteredAt} → {session.leftAt || "Active"}</div>
        <div>📄 {session.pathname}</div>
      </div>
    </div>
  );
}
