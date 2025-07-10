'use client'

import { useState, useMemo } from 'react'
import useSWR from 'swr'
import { format, subDays, isWithinInterval, parseISO } from 'date-fns'
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  BarElement,
  ArcElement,
  Tooltip,
  Legend,
} from 'chart.js'
import { Line, Bar, Pie } from 'react-chartjs-2'


ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, BarElement, ArcElement, Tooltip, Legend)


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
  



const fetcher = (url: string) => fetch(url).then((res) => res.json() as Promise<AnalyticsData>)

export default function AnalyticsOverviewPage() {
  const [start] = useState(subDays(new Date(), 7))
  const [end] = useState(new Date())

  // New states for filtering table
  const [searchPath, setSearchPath] = useState('')
  const [filterStart, setFilterStart] = useState<Date | null>(null)
  const [filterEnd, setFilterEnd] = useState<Date | null>(null)
  const [selectedSession, setSelectedSession] = useState(null as null | VisitorSession)

  const { data, error } = useSWR(
    `/api/admin/analytics?start=${format(start, 'yyyy-MM-dd')}&end=${format(end, 'yyyy-MM-dd')}`,
    fetcher
  )

  // Destructure data safely with fallback
const sessionsSafe = useMemo(() => data?.sessions ?? [], [data])

const filteredSessions = useMemo(() => {
  return sessionsSafe.filter((s: VisitorSession) => {
    const matchesPath = s.pathname?.toLowerCase().includes(searchPath.toLowerCase()) ?? false
    const enteredDate = parseISO(s.enteredAt)
    const matchesDate =
      !filterStart && !filterEnd
        ? true
        : filterStart && filterEnd
        ? isWithinInterval(enteredDate, { start: filterStart, end: filterEnd })
        : filterStart
        ? enteredDate >= filterStart
        : filterEnd
        ? enteredDate <= filterEnd
        : true
    return matchesPath && matchesDate
  })
}, [sessionsSafe, searchPath, filterStart, filterEnd])

// Now handle the early returns after hooks
if (error) return <div className="p-6 text-red-600">Error loading data.</div>
if (!data) return <div className="p-6 text-gray-500">Loading overview...</div>

// You can safely destructure data here now
const { pageViews, topPages, counts } = data


  // Group sessions by day for chart
  const sessionsByDate: Record<string, number> = {}
  sessionsSafe.forEach((s: VisitorSession) => {
    const date = s.enteredAt.split('T')[0]
    sessionsByDate[date] = (sessionsByDate[date] || 0) + 1
  })

  const avgSession =
    sessionsSafe.length > 0
      ? (
          sessionsSafe.reduce((total: number, s: VisitorSession) => {
            if (s.leftAt) {
              return total + (new Date(s.leftAt).getTime() - new Date(s.enteredAt).getTime())
            }
            return total
          }, 0) / sessionsSafe.length / 60000
        ).toFixed(1)
      : '0.0'

  const avgPageTime =
    pageViews.length > 0
      ? (
          pageViews.reduce(
            (total: number, p: PageView) => total + (new Date(p.leftAt).getTime() - new Date(p.viewedAt).getTime()),
            0
          ) /
        pageViews.length /
        1000 /
        60
      ).toFixed(1)
      : '0.0'

  return (
    <div className="space-y-10">
      {/* KPIs */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <StatCard title="Total Sessions" value={sessionsSafe.length} />
        <StatCard title="Avg. Session Duration" value={`${avgSession} min`} />
        <StatCard title="Avg. Time per Page" value={`${avgPageTime} min`} />
      </section>

      {/* Line Chart */}
      <section className="bg-white rounded-lg shadow p-6">
        <h2 className="text-xl font-semibold mb-4">Sessions Over Time</h2>
        <Line
          data={{
            labels: Object.keys(sessionsByDate),
            datasets: [
              {
                label: 'Sessions',
                data: Object.values(sessionsByDate),
                borderColor: '#6366F1',
                backgroundColor: 'rgba(99,102,241,0.1)',
                fill: true,
                tension: 0.4,
              },
            ],
          }}
          options={{
            plugins: { legend: { display: false } },
            scales: { x: { grid: { display: false } }, y: { grid: { color: '#eee' } } },
          }}
        />
      </section>

      {/* Top Pages */}
      <section className="bg-white rounded-lg shadow p-6">
        <h2 className="text-xl font-semibold mb-4">Top Pages</h2>
        <Bar
          data={{
            labels: topPages.map((p: TopPage) => p.path),
            datasets: [
              {
                label: 'Views',
                data: topPages.map((p: TopPage) => p._count._all),
                backgroundColor: '#10B981',
              },
            ],
          }}
          options={{
            indexAxis: 'y',
            plugins: { legend: { display: false } },
            scales: { x: { grid: { color: '#eee' } }, y: { grid: { display: false } } },
          }}
        />
      </section>

      {/* Funnel */}
      <section className="bg-white rounded-lg shadow p-6">
        <h2 className="text-xl font-semibold mb-4">Conversion Funnel</h2>
        <Pie
          data={{
            labels: ['Forms Filled', 'Payments', 'Downloads'],
            datasets: [
              {
                data: [counts.forms, counts.payments, counts.downloads],
                backgroundColor: ['#3B82F6', '#F59E0B', '#EF4444'],
                hoverOffset: 8,
              },
            ],
          }}
        />
      </section>

      {/* Sessions Filter Controls */}
      <section className="bg-white rounded-lg shadow p-6 space-y-4">
        <h2 className="text-xl font-semibold">Recent Sessions</h2>

        <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0 mb-2">
          <input
            type="text"
            placeholder="Search by page path"
            value={searchPath}
            onChange={(e) => setSearchPath(e.target.value)}
            className="flex-1 rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <input
            type="date"
            value={filterStart ? format(filterStart, 'yyyy-MM-dd') : ''}
            onChange={(e) => setFilterStart(e.target.value ? new Date(e.target.value) : null)}
            className="rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <input
            type="date"
            value={filterEnd ? format(filterEnd, 'yyyy-MM-dd') : ''}
            onChange={(e) => setFilterEnd(e.target.value ? new Date(e.target.value) : null)}
            className="rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <button
            onClick={() => {
              setSearchPath('')
              setFilterStart(null)
              setFilterEnd(null)
            }}
            className="text-indigo-600 hover:text-indigo-800 font-semibold"
          >
            Clear Filters
          </button>
        </div>

        {/* Sessions Table */}
        <div className="overflow-auto max-h-72 border border-gray-200 rounded-md">
          <table className="w-full text-sm table-fixed">
            <thead className="bg-gray-50 sticky top-0 z-10 border-b border-gray-300">
              <tr>
                <th className="py-2 px-3 text-left w-1/4">Entered</th>
                <th className="py-2 px-3 text-left w-1/4">Left</th>
                <th className="py-2 px-3 text-left w-1/2">Path</th>
              </tr>
            </thead>
            <tbody>
              {filteredSessions.length === 0 && (
                <tr>
                  <td colSpan={3} className="text-center py-4 text-gray-500">
                    No sessions match the filter criteria.
                  </td>
                </tr>
              )}
              {filteredSessions.slice(0, 20).map((s: VisitorSession, i: number) => (
                <tr
                  key={i}
                  className="border-b hover:bg-indigo-50 cursor-pointer"
                  onClick={() => setSelectedSession(s)}
                  title="Click for session details"
                >
                  <td className="py-2 px-3">{new Date(s.enteredAt).toLocaleString()}</td>
                  <td className="py-2 px-3">{s.leftAt ? new Date(s.leftAt).toLocaleString() : '—'}</td>
                  <td className="py-2 px-3 truncate max-w-xs">{s.pathname || '—'}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Session Detail Modal */}
      {selectedSession && (
        <Modal onClose={() => setSelectedSession(null)}>
          <SessionDetail session={selectedSession} />
        </Modal>
      )}
    </div>
  )
}

// Reusable stat card
function StatCard({ title, value }: { title: string; value: string | number }) {
  return (
    <div className="bg-white rounded-lg shadow p-6 transition hover:shadow-md">
      <h3 className="text-sm font-medium text-gray-500">{title}</h3>
      <p className="text-3xl font-semibold text-gray-800 mt-1">{value}</p>
    </div>
  )
}

// Modal Component
function Modal({ children, onClose }: { children: React.ReactNode; onClose: () => void }) {
  return (
    <div
      onClick={onClose}
      className="fixed inset-0 bg-black bg-opacity-40 backdrop-blur-sm flex items-center justify-center z-50 p-4"
      role="dialog"
      aria-modal="true"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-white rounded-lg max-w-2xl w-full max-h-[80vh] overflow-auto p-6 shadow-lg"
      >
        <button
          onClick={onClose}
          aria-label="Close modal"
          className="absolute top-3 right-3 text-gray-400 hover:text-gray-700 transition"
        >
          ✕
        </button>
        {children}
      </div>
    </div>
  )
}

// Session Detail component
function SessionDetail({ session }: { session: VisitorSession }) {
  return (
    <>
      <h3 className="text-2xl font-semibold mb-4">Session Details</h3>
      <p>
        <strong>Entered at:</strong> {new Date(session.enteredAt).toLocaleString()}
      </p>
      <p>
        <strong>Left at:</strong> {session.leftAt ? new Date(session.leftAt).toLocaleString() : 'Still Active'}
      </p>
      <p>
        <strong>Path:</strong> {session.pathname || '—'}
      </p>

      {/* Placeholder for page views & actions */}
      <div className="mt-6">
        <h4 className="text-lg font-semibold mb-2">Page Views & Actions</h4>
        <p className="text-gray-500 italic">More detailed session data coming soon...</p>
      </div>
    </>
  )
}
