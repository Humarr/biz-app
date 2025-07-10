'use client'

import { useState } from 'react'
import useSWR from 'swr'
import DatePicker from 'react-datepicker'
import { Line, Bar, Pie } from 'react-chartjs-2'
import { format, subDays } from 'date-fns'
import './chartConfig'
import 'react-datepicker/dist/react-datepicker.css'

interface VisitorSession {
  // enteredAt: string
  // leftAt: string | null
  // pathname: string | null
  id: string;
  enteredAt: string;
  leftAt: string | null;
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
    amount: number;
    paystackRef: string;
  } | null;
  pageViews: {
    path: string;
    viewedAt: string;
    leftAt: string | number | Date;
  }[];
  downloadLogs: {
    downloadedAt: string;
  }[];
}

interface PageView {
  viewedAt: string
  leftAt: string | number | Date;
}

interface TopPage {
  path: string
  _count: {
    _all: number
  }
}

interface Counts {
  forms: number
  payments: number
  downloads: number
}

interface AnalyticsData {
  sessions: VisitorSession[]
  pageViews: PageView[]
  topPages: TopPage[]
  counts: Counts
}

const fetcher = (url: string) =>
  fetch(url).then(res => res.json() as Promise<AnalyticsData>)

export default function AnalyticsClient() {
  const [start, setStart] = useState<Date>(subDays(new Date(), 7))
  const [end, setEnd] = useState<Date>(new Date())

  const { data, error } = useSWR(
    `/api/admin/analytics?start=${format(start, 'yyyy-MM-dd')}&end=${format(end, 'yyyy-MM-dd')}`,
    fetcher,
    { refreshInterval: 30000 }
  )

  if (error) return <div className="p-6 text-red-500">Error loading analytics.</div>
  if (!data) return <div className="p-6">Loading…</div>

  const { sessions, pageViews, topPages, counts } = data

  // Group sessions by date
  const sessionsByDate: Record<string, number> = {}
  sessions.forEach((s) => {
    const d = s.enteredAt.split('T')[0]
    sessionsByDate[d] = (sessionsByDate[d] || 0) + 1
  })

  const avgSession =
    sessions.length > 0
      ? (
          sessions.reduce((total, s) => {
            if (s.leftAt) {
              return total + (new Date(s.leftAt).getTime() - new Date(s.enteredAt).getTime())
            }
            return total
          }, 0) /
          sessions.length /
          60000
        ).toFixed(2)
      : '0.00'

  const avgPageMs =
    pageViews.length > 0
      ? pageViews.reduce((total, pv) => total + (new Date(pv.leftAt).getTime() - new Date(pv.viewedAt).getTime()), 0) /
        pageViews.length /
        1000
      : 0
  const avgPageTime = (avgPageMs / 60).toFixed(2)

  return (
    <div className="min-h-screen bg-gray-50 p-4 space-y-8">
      {/* Header */}
      <header className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-2 md:space-y-0 md:space-x-4">
        <h1 className="text-2xl font-bold text-slate-800">📊 Analytics Dashboard</h1>
        <div className="flex items-center space-x-2">
          <DatePicker
            selected={start}
            onChange={(d) => d && setStart(d)}
            maxDate={end}
            className="border rounded px-2 py-1 text-sm"
          />
          <DatePicker
            selected={end}
            onChange={(d) => d && d <= new Date() && setEnd(d)}
            minDate={start}
            maxDate={new Date()}
            className="border rounded px-2 py-1 text-sm"
          />
        </div>
      </header>

      {/* Hero Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <StatCard label="🧍 Total Sessions" value={sessions.length} />
        <StatCard label="⏱ Avg. Session Time (mins)" value={avgSession} />
        <StatCard label="📄 Avg. Page Time (mins)" value={avgPageTime} />
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Sessions over time */}
        <ChartCard title="Sessions Over Time">
          <Line
            data={{
              labels: Object.keys(sessionsByDate),
              datasets: [
                {
                  label: 'Sessions',
                  data: Object.values(sessionsByDate),
                  borderColor: '#2563EB',
                  backgroundColor: 'rgba(37,99,235,0.2)',
                  tension: 0.3,
                  fill: true,
                },
              ],
            }}
          />
        </ChartCard>

        {/* Top pages */}
        <ChartCard title="Top Pages">
          <Bar
            data={{
              labels: topPages.map((p) => p.path),
              datasets: [
                {
                  label: 'Views',
                  data: topPages.map((p) => p._count._all),
                  backgroundColor: '#10B981',
                },
              ],
            }}
            options={{ indexAxis: 'y' }}
          />
        </ChartCard>

        {/* Funnel Breakdown */}
        <ChartCard title="Funnel Breakdown">
          <Pie
            data={{
              labels: ['Forms', 'Payments', 'Downloads'],
              datasets: [
                {
                  data: [counts.forms, counts.payments, counts.downloads],
                  backgroundColor: ['#3B82F6', '#F59E0B', '#EF4444'],
                },
              ],
            }}
          />
        </ChartCard>

        {/* Summary */}
        <ChartCard title="Summary">
          <ul className="text-sm space-y-2">
            <li>Forms Filled: <strong>{counts.forms}</strong></li>
            <li>Payments: <strong>{counts.payments}</strong></li>
            <li>Downloads: <strong>{counts.downloads}</strong></li>
          </ul>
        </ChartCard>
      </div>
      {/* SESSION FEED */}
<ChartCard title="Recent Sessions">
  <div className="overflow-auto max-h-[30rem] divide-y">
    {sessions.slice(0, 15).map((s, i) => {
      const started = new Date(s.enteredAt).toLocaleString()
      // const ended = s.leftAt ? new Date(s.leftAt).toLocaleString() : null
      const duration = s.leftAt
        ? ((new Date(s.leftAt).getTime() - new Date(s.enteredAt).getTime()) / 60000).toFixed(1)
        : '—'

      return (
        <details key={i} className="py-3 group cursor-pointer">
          <summary className="flex justify-between items-center text-sm text-slate-700 font-medium">
            <div>
              <span className="font-semibold">Session:</span> {s.pathname ?? '/'} •{' '}
              {started}
            </div>
            <div className="text-xs text-slate-500 group-hover:underline">
              Duration: {duration} min
            </div>
          </summary>

          <div className="mt-2 text-xs text-slate-600 space-y-2 ml-2">
            <div>
              <strong>Page Views:</strong>
              <ul className="list-disc list-inside ml-2">
                {s.pageViews.map((pv, i) => (
                  <li key={i}>
                    
                    {pv.path} — {(new Date(pv.leftAt).getTime() - new Date(pv.viewedAt).getTime()) / 1000}s
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <strong>Funnel:</strong>
              <ul className="list-disc list-inside ml-2">
                <li>
                  Form Filled: {s.userData ? '✅' : '❌'}
                </li>
                <li>
                  Payment: {s.payment ? `✅ ₦${(s.payment.amount / 100).toLocaleString()}` : '❌'}
                </li>
                <li>
                  Download: {s.downloadLogs.length > 0 ? '✅' : '❌'}
                </li>
              </ul>
            </div>
          </div>
        </details>
      )
    })}
  </div>
</ChartCard>

    </div>
  )
}

function StatCard({ label, value }: { label: string; value: string | number }) {
  return (
    <div className="bg-white rounded-xl shadow p-4 flex flex-col items-start justify-center space-y-1">
      <span className="text-sm text-slate-500">{label}</span>
      <span className="text-2xl font-semibold text-slate-800">{value}</span>
    </div>
  )
}

function ChartCard({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="bg-white rounded-xl shadow p-4">
      <h2 className="text-lg font-semibold text-slate-700 mb-3">{title}</h2>
      {children}
    </div>
  )
}
