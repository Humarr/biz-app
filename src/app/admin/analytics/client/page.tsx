'use client'
import { useState } from 'react'
import useSWR from 'swr'
import DatePicker from 'react-datepicker'
import { Line, Bar, Pie } from 'react-chartjs-2'
import { format, subDays } from 'date-fns'
import './chartConfig'

interface VisitorSession {
  enteredAt: string
  leftAt: string | null
  pathname: string | null
}

interface PageView {
  viewedAt: string
  leftAt: string
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

const fetcher = (url: string) => fetch(url).then(res => res.json() as Promise<AnalyticsData>)

export default function AnalyticsClient() {
  const [start, setStart] = useState<Date>(subDays(new Date(), 7))
  const [end, setEnd] = useState<Date>(new Date())
  const { data, error } = useSWR(
    `/api/admin/analytics?start=${format(start, 'yyyy-MM-dd')}&end=${format(end, 'yyyy-MM-dd')}`,
    fetcher,
    { refreshInterval: 30000 }
  )

  if (error) return <div className="p-6">Error loading analytics.</div>
  if (!data) return <div className="p-6">Loading…</div>

  const { sessions, pageViews, topPages, counts } = data

  // Aggregate sessions count by date
  const sessionsByDate: Record<string, number> = {}
  sessions.forEach((s) => {
    const d = s.enteredAt.split('T')[0]
    sessionsByDate[d] = (sessionsByDate[d] || 0) + 1
  })

  // Calculate avg session duration in minutes
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

  // Calculate avg time on page in minutes
  const avgPageMs =
    pageViews.length > 0
      ? pageViews.reduce((total, pv) => total + (new Date(pv.leftAt).getTime() - new Date(pv.viewedAt).getTime()), 0) /
        pageViews.length /
        1000
      : 0
  const avgPageTime = (avgPageMs / 60).toFixed(2)

  return (
    <div className="p-6 space-y-6 bg-gray-50 min-h-screen">
      <header className="flex flex-col sm:flex-row justify-between items-center">
        <h1 className="text-3xl font-bold">📊 Analytics</h1>
        <div className="flex items-center space-x-2">
          <DatePicker selected={start} onChange={(d) => d && setStart(d)} maxDate={end} />
          <DatePicker selected={end} onChange={(d) => d && d <= new Date() && setEnd(d)} minDate={start} maxDate={new Date()} />
        </div>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold mb-4">Sessions over time</h2>
          <Line
            data={{
              labels: Object.keys(sessionsByDate),
              datasets: [{ label: 'Sessions', data: Object.values(sessionsByDate), borderColor: '#2563EB', fill: false }],
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
              datasets: [{ label: 'Views', data: topPages.map((p) => p._count._all), backgroundColor: '#10B981' }],
            }}
            options={{ indexAxis: 'y' }}
          />
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold mb-4">Funnel</h2>
          <Pie
            data={{
              labels: ['Forms', 'Paid', 'Downloads'],
              datasets: [{ data: [counts.forms, counts.payments, counts.downloads], backgroundColor: ['#3B82F6', '#F59E0B', '#EF4444'] }],
            }}
          />
        </div>
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
            Forms filled: <strong>{counts.forms}</strong>
          </li>
          <li>
            Payments: <strong>{counts.payments}</strong>
          </li>
          <li>
            Downloads: <strong>{counts.downloads}</strong>
          </li>
        </ul>
      </section>

      <section className="bg-white rounded-lg shadow p-6">
        <h2 className="text-xl font-semibold mb-4">Recent Sessions</h2>
        <div className="overflow-auto max-h-64">
          <table className="w-full text-left">
            <thead>
              <tr>
                <th>Date</th>
                <th>Path</th>
              </tr>
            </thead>
            <tbody>
              {sessions
                .slice(-10)
                .reverse()
                .map((s, i) => (
                  <tr key={i} className="even:bg-gray-100">
                    <td>{s.enteredAt.split('T')[0] + ' ' + s.enteredAt.split('T')[1].slice(0, 5)}</td>
                    <td>{s.pathname ?? '—'}</td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  )
}
