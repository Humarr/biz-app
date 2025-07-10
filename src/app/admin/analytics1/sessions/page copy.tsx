'use client'

import { useState, useMemo } from 'react'
import useSWR from 'swr'
import DatePicker from 'react-datepicker'
import { format, subDays } from 'date-fns'
import { Dialog } from '@headlessui/react'
import 'react-datepicker/dist/react-datepicker.css'

interface VisitorSession {
  id: string
  enteredAt: string
  leftAt: string | null
  pathname: string | null
}

const fetcher = (url: string) => fetch(url).then((res) => res.json())

export default function SessionsPage() {
  const [start, setStart] = useState<Date>(subDays(new Date(), 7))
  const [end, setEnd] = useState<Date>(new Date())
  const [searchPath, setSearchPath] = useState('')
  const [page, setPage] = useState(1)
  const [selectedSession, setSelectedSession] = useState<VisitorSession | null>(null)
  const pageSize = 10

  // Compose API url with filters & pagination
  const apiUrl = useMemo(() => {
    const params = new URLSearchParams()
    params.append('start', format(start, 'yyyy-MM-dd'))
    params.append('end', format(end, 'yyyy-MM-dd'))
    if (searchPath.trim()) params.append('path', searchPath.trim())
    params.append('page', page.toString())
    params.append('pageSize', pageSize.toString())
    return `/api/admin/analytics/sessions?${params.toString()}`
  }, [start, end, searchPath, page])

  const { data, error, isLoading } = useSWR(apiUrl, fetcher, { refreshInterval: 30000 })

  // Calculate duration in minutes helper
  function getDurationMinutes(session: VisitorSession) {
    if (!session.leftAt) return null
    const diffMs = new Date(session.leftAt).getTime() - new Date(session.enteredAt).getTime()
    return (diffMs / 60000).toFixed(2)
  }

  // Pagination controls handlers
  const handleNext = () => {
    if (data && data.sessions.length === pageSize) setPage((p) => p + 1)
  }
  const handlePrev = () => {
    if (page > 1) setPage((p) => p - 1)
  }

  return (
    <main className="min-h-screen bg-gray-50 p-6 font-sans text-gray-900">
      <header className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8">
        <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 mb-4 sm:mb-0">Sessions</h1>
        <div className="flex flex-wrap items-center gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Start Date</label>
            <DatePicker
              selected={start}
              onChange={(date) => date && setStart(date)}
              maxDate={end}
              className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">End Date</label>
            <DatePicker
              selected={end}
              onChange={(date) => date && date <= new Date() && setEnd(date)}
              minDate={start}
              maxDate={new Date()}
              className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Filter by Path</label>
            <input
              type="text"
              value={searchPath}
              onChange={(e) => setSearchPath(e.target.value)}
              placeholder="e.g. /pricing"
              className="border border-gray-300 rounded-md px-3 py-2 w-48 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
        </div>
      </header>

      <section className="bg-white rounded-xl shadow p-6">
        {error && (
          <div className="text-red-600 font-semibold mb-4">Failed to load sessions. Try refreshing.</div>
        )}

        {isLoading && <div className="text-gray-500 italic">Loading sessions…</div>}

        {!isLoading && data && data.sessions.length === 0 && (
          <div className="text-gray-500 italic">No sessions found for the selected filters.</div>
        )}

        {!isLoading && data && data.sessions.length > 0 && (
          <table className="w-full table-auto border-collapse">
            <thead>
              <tr className="bg-indigo-100 text-indigo-900 uppercase text-xs font-semibold">
                <th className="p-3 text-left rounded-tl-xl">Entered At</th>
                <th className="p-3 text-left">Left At</th>
                <th className="p-3 text-left">Duration (mins)</th>
                <th className="p-3 text-left rounded-tr-xl">Path</th>
              </tr>
            </thead>
            <tbody>
              {data.sessions.map((session: VisitorSession) => (
                <tr
                  key={session.id}
                  tabIndex={0}
                  onClick={() => setSelectedSession(session)}
                  className="cursor-pointer hover:bg-indigo-50 focus:bg-indigo-100 focus:outline-none"
                >
                  <td className="p-3">{format(new Date(session.enteredAt), 'yyyy-MM-dd HH:mm')}</td>
                  <td className="p-3">{session.leftAt ? format(new Date(session.leftAt), 'yyyy-MM-dd HH:mm') : '—'}</td>
                  <td className="p-3">{getDurationMinutes(session) ?? '—'}</td>
                  <td className="p-3">{session.pathname ?? '—'}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}

        {/* Pagination controls */}
        <div className="mt-6 flex justify-between">
          <button
            onClick={handlePrev}
            disabled={page === 1}
            className={`px-4 py-2 rounded-md font-semibold ${
              page === 1
                ? 'bg-gray-300 text-gray-600 cursor-not-allowed'
                : 'bg-indigo-600 text-white hover:bg-indigo-700'
            }`}
          >
            Previous
          </button>
          <button
            onClick={handleNext}
            disabled={!data || data.sessions.length < pageSize}
            className={`px-4 py-2 rounded-md font-semibold ${
              !data || data.sessions.length < pageSize
                ? 'bg-gray-300 text-gray-600 cursor-not-allowed'
                : 'bg-indigo-600 text-white hover:bg-indigo-700'
            }`}
          >
            Next
          </button>
        </div>
      </section>

      {/* Session Detail Modal */}
      <Dialog
        open={selectedSession !== null}
        onClose={() => setSelectedSession(null)}
        className="fixed inset-0 z-50 overflow-y-auto"
      >
        <div className="min-h-screen px-4 text-center bg-black bg-opacity-30">
          {/* <Dialog className="fixed inset-0" /> */}

          {/* Trick to center the modal */}
          <span className="inline-block h-screen align-middle" aria-hidden="true">
            &#8203;
          </span>

          <div className="inline-block w-full max-w-3xl p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
            <Dialog.Title as="h3" className="text-xl font-bold leading-6 text-gray-900 mb-4">
              Session Details
            </Dialog.Title>

            {selectedSession && (
              <div className="space-y-2">
                <p>
                  <strong>Entered At:</strong>{' '}
                  {format(new Date(selectedSession.enteredAt), 'yyyy-MM-dd HH:mm:ss')}
                </p>
                <p>
                  <strong>Left At:</strong>{' '}
                  {selectedSession.leftAt
                    ? format(new Date(selectedSession.leftAt), 'yyyy-MM-dd HH:mm:ss')
                    : 'Still active'}
                </p>
                <p>
                  <strong>Path:</strong> {selectedSession.pathname ?? '—'}
                </p>
                <p>
                  <strong>Duration:</strong> {getDurationMinutes(selectedSession) ?? '—'} minutes
                </p>
                {/* TODO: Add page views, actions, user details here later */}
              </div>
            )}

            <div className="mt-6 flex justify-end">
              <button
                onClick={() => setSelectedSession(null)}
                className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </Dialog>
    </main>
  )
}
