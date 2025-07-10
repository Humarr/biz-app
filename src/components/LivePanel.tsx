"use client";
import useSWR from "swr";
import { formatDistanceToNow, differenceInSeconds } from "date-fns";
import SessionJourney from "./SessionJourney";

interface Session {
  id: string;
  enteredAt: string;
  clickedPayAt: string | null;
  pathname: string | null;
  device: string | null;
  country: string | null;
  city: string | null;
  userData?: {
    name: string;
    email: string;
    phone: string;
  } | null;
  payment?: {
    paidAt: string;
    status: string;
  } | null;
  pageViews: {
    path: string;
    viewedAt: string;
    leftAt: string | null;
  }[];
  downloadLogs: {
    downloadedAt: string;
  }[];
}

const fetcher = (url: string) => fetch(url).then((res) => res.json());

function getCurrentPage(pageViews: Session["pageViews"]) {
  if (!pageViews) return null;
  if (!pageViews.length) return null;
  const active = pageViews.find((pv) => !pv.leftAt);
  if (active) return active.path;
  return pageViews[pageViews.length - 1]?.path ?? null;
}

function getTimeSpent(enteredAt: string) {
  const now = new Date();
  const entered = new Date(enteredAt);
  const seconds = differenceInSeconds(now, entered);
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${mins}m ${secs}s`;
}

function getLeadScore(session: Session): number {
  let score = 0;
  if (session.userData) score += 20;
  if (session.clickedPayAt) score += 15;
  if (session.payment?.status === "success") score += 30;
  if (session.downloadLogs.length > 0) score += 25;
  if (session.pageViews.length > 3) score += 10;
  return score;
}

export default function LivePanel() {
  const { data, error } = useSWR("/api/admin/live", fetcher, {
    refreshInterval: 10000,
  });

  const sessions: Session[] = data?.sessions || [];

  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <h2 className="text-xl font-semibold mb-4">🔴 Live Visitors</h2>

      {error && <p className="text-red-500">Error loading live data.</p>}

      {sessions.length === 0 && (
        <p className="text-gray-500 text-sm">No active visitors right now.</p>
      )}

      <ul className="space-y-3">
        {sessions.map((s) => {
          const currentPage = getCurrentPage(s.pageViews);
          const timeSpent = getTimeSpent(s.enteredAt);
          const leadScore = getLeadScore(s);
          const isStuckAfterClick = s.clickedPayAt && !s.payment;

          return (
            <li
              key={s.id}
              className="border border-gray-200 rounded p-3 shadow-sm bg-gray-50 hover:border-blue-400"
            >
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-sm">
                    <strong>{s.device ?? "Unknown device"}</strong> from{" "}
                    <strong>{s.country ?? "Unknown"}</strong>
                  </p>
                  <p className="text-xs text-gray-500">
                    Entered{" "}
                    {formatDistanceToNow(new Date(s.enteredAt), {
                      addSuffix: true,
                    })}{" "}
                    — Time spent: <strong>{timeSpent}</strong>
                  </p>
                  <p className="text-xs text-gray-500">
                    Current Page: <strong>{currentPage ?? "—"}</strong>
                  </p>
                </div>
                <div className="text-xs text-right">
                  <p className="text-green-600">🟢 Active</p>
                  {isStuckAfterClick && (
                    <p className="text-yellow-600 font-medium">
                      Clicked Pay — No Payment
                    </p>
                  )}
                  {leadScore >= 60 && (
                    <p className="text-blue-600 font-semibold">
                      🔥 Hot Lead ({leadScore})
                    </p>
                  )}
                  {leadScore >= 30 && leadScore < 60 && (
                    <p className="text-indigo-500 font-semibold">
                      Warm Lead ({leadScore})
                    </p>
                  )}
                  {leadScore < 30 && (
                    <p className="text-gray-400">Cold ({leadScore})</p>
                  )}
                </div>
              </div>
              {/* Journey replay */}
              <SessionJourney session={s} />
            </li>
          );
        })}
      </ul>
    </div>
  );
}
