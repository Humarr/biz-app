"use client";
import { useState } from "react";
import useSWR from "swr";
import DatePicker from "react-datepicker";
import { Line, Bar } from "react-chartjs-2";
import { format, subDays } from "date-fns";
import "./chartConfig";
import SessionExplorer from "@/components/SessionExplorer";
import { FullSession, FunnelChartProps } from "@/type";
import FunnelChart from "@/components/FunnelChart";
import LivePanel from "@/components/LivePanel";

// interface VisitorSession {
//   enteredAt: string
//   leftAt: string | null
//   pathname: string | null
// }

interface PageView {
  viewedAt: string;
  leftAt: string;
}

interface TopPage {
  path: string;
  _count: {
    _all: number;
  };
}

interface AnalyticsData {
  sessions: FullSession[];
  pageViews: PageView[];
  topPages: TopPage[];
  counts: FunnelChartProps;
}

const fetcher = (url: string) =>
  fetch(url).then((res) => res.json() as Promise<AnalyticsData>);

export default function AnalyticsClient() {
  const [start, setStart] = useState<Date>(subDays(new Date(), 7));
  const [end, setEnd] = useState<Date>(new Date());
  const [device, setDevice] = useState("");
  const [country, setCountry] = useState("");
  const [action, setAction] = useState("");
  const [minDuration, setMinDuration] = useState("");
  const [maxDuration, setMaxDuration] = useState("");

  // const { data, error } = useSWR(
  //   `/api/admin/analytics?start=${format(start, 'yyyy-MM-dd')}&end=${format(end, 'yyyy-MM-dd')}&device=${device}&country=${country}&action=${action}&minDuration=${minDuration}&maxDuration=${maxDuration}`,
  //   fetcher,
  //   { refreshInterval: 30000 }
  // )

  const { data, error } = useSWR(
    () => {
      const params = new URLSearchParams({
        start: format(start, "yyyy-MM-dd"),
        end: format(end, "yyyy-MM-dd"),
        ...(device ? { device } : {}),
        ...(country ? { country } : {}),
        ...(action ? { action } : {}),
        ...(minDuration ? { minDuration } : {}),
        ...(maxDuration ? { maxDuration } : {}),
      });
      return `/api/admin/analytics?${params.toString()}`;
    },
    fetcher,
    { refreshInterval: 30000 }
  );

  if (error) return <div className="p-6">Error loading analytics.</div>;
  if (!data) return <div className="p-6">Loading…</div>;

  const { sessions, pageViews, topPages, counts } = data;

  // Aggregate sessions count by date
  const sessionsByDate: Record<string, number> = {};
  sessions.forEach((s) => {
    const d = s.enteredAt.split("T")[0];
    sessionsByDate[d] = (sessionsByDate[d] || 0) + 1;
  });

  // Calculate avg session duration in minutes
  const avgSession =
    sessions.length > 0
      ? (
          sessions.reduce((total, s) => {
            if (s.leftAt) {
              return (
                total +
                (new Date(s.leftAt).getTime() - new Date(s.enteredAt).getTime())
              );
            }
            return total;
          }, 0) /
          sessions.length /
          60000
        ).toFixed(2)
      : "0.00";

  // Calculate avg time on page in minutes
  const avgPageMs =
    pageViews.length > 0
      ? pageViews.reduce(
          (total, pv) =>
            total +
            (new Date(pv.leftAt).getTime() - new Date(pv.viewedAt).getTime()),
          0
        ) /
        pageViews.length /
        1000
      : 0;
  const avgPageTime = (avgPageMs / 60).toFixed(2);

  return (
    <div className="p-6 space-y-6 bg-gray-50 min-h-screen">
      <header className="flex flex-col sm:flex-row justify-between items-center">
        <h1 className="text-3xl font-bold">📊 Analytics</h1>
        <div className="flex items-center space-x-2">
          <DatePicker
            selected={start}
            onChange={(d) => d && setStart(d)}
            maxDate={end}
          />
          <DatePicker
            selected={end}
            onChange={(d) => d && d <= new Date() && setEnd(d)}
            minDate={start}
            maxDate={new Date()}
          />
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2 mt-4">
          <select
            value={device}
            onChange={(e) => setDevice(e.target.value)}
            className="p-2 rounded border"
          >
            <option value="">All Devices</option>
            <option value="desktop">Desktop</option>
            <option value="mobile">Mobile</option>
            <option value="tablet">Tablet</option>
          </select>

          <input
            type="text"
            placeholder="Country code (e.g. NG)"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            className="p-2 rounded border"
          />

          <select
            value={action}
            onChange={(e) => setAction(e.target.value)}
            className="p-2 rounded border"
          >
            <option value="">Any Action</option>
            <option value="clickedPay">Clicked Pay</option>
            <option value="filledForm">Filled Form</option>
            <option value="paid">Paid</option>
            <option value="downloaded">Downloaded</option>
          </select>

          <input
            type="number"
            placeholder="Min Duration (s)"
            value={minDuration}
            onChange={(e) => setMinDuration(e.target.value)}
            className="p-2 rounded border"
          />

          <input
            type="number"
            placeholder="Max Duration (s)"
            value={maxDuration}
            onChange={(e) => setMaxDuration(e.target.value)}
            className="p-2 rounded border"
          />
        </div>
      </header>
      <LivePanel />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold mb-4">Sessions over time</h2>
          <Line
            data={{
              labels: Object.keys(sessionsByDate),
              datasets: [
                {
                  label: "Sessions",
                  data: Object.values(sessionsByDate),
                  borderColor: "#2563EB",
                  fill: false,
                },
              ],
            }}
          />
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold mb-4">Avg. Time per Page</h2>
          <p className="text-4xl font-bold">{avgPageTime} mins</p>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold mb-4">Top Pages</h2>
          <Bar
            data={{
              labels: topPages.map((p) => p.path),
              datasets: [
                {
                  label: "Views",
                  data: topPages.map((p) => p._count._all),
                  backgroundColor: "#10B981",
                },
              ],
            }}
            options={{ indexAxis: "y" }}
          />
        </div>

        <FunnelChart counts={counts.counts} />
      </div>

      <section className="bg-white rounded-lg shadow p-6">
        <h2 className="text-xl font-semibold mb-4">Summary</h2>
        <ul className="grid grid-cols-2 md:grid-cols-3 gap-4 text-lg">
          <li>
            Total sessions: <strong>{sessions.length}</strong>
          </li>
          <li>
            Avg session (mins): <strong>{avgSession}</strong>
          </li>
          <li>
            Avg page time (mins): <strong>{avgPageTime}</strong>
          </li>
          <li>
            Forms filled: <strong>{counts.counts.filledForm}</strong>
          </li>
          <li>
            Payments: <strong>{counts.counts.paid}</strong>
          </li>
          <li>
            Downloads: <strong>{counts.counts.downloaded}</strong>
          </li>
        </ul>
      </section>

      <section className="bg-white rounded-lg shadow p-6">
        <h2 className="text-xl font-semibold mb-4">Recent Sessions</h2>
        <SessionExplorer sessions={sessions} />
      </section>
    </div>
  );
}
