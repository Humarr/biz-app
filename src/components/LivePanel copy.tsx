'use client'
import useSWR from 'swr'
import { formatDistanceToNow } from 'date-fns'

interface LivePanelProps {
    sessions: Session[]
}

interface Session {
  id: string
  enteredAt: string
  pathname: string | null
  device: string | null
  country: string | null
  userData?: { name: string } | null
  pageViews: { path: string }[]
}

const fetcher = (url: string) => fetch(url).then(res => res.json())

export default function LivePanel({}: LivePanelProps) {
  const { data, error } = useSWR('/api/admin/live', fetcher, {
    refreshInterval: 10000
  })

  const sessions: Session[] = data?.sessions || []

  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <h2 className="text-xl font-semibold mb-4">🔴 Live Visitors</h2>

      {error && <p className="text-red-500">Error loading live data.</p>}

      {sessions.length === 0 && (
        <p className="text-gray-500 text-sm">No active visitors right now.</p>
      )}

      <ul className="space-y-2">
        {sessions.map((s) => (
          <li key={s.id} className="border-b pb-2">
            <div className="flex justify-between items-center">
              <div>
                <p className="text-sm">
                  <strong>{s.device ?? 'Unknown device'}</strong> from{' '}
                  <strong>{s.country ?? 'Unknown'}</strong>
                </p>
                <p className="text-xs text-gray-500">
                  Entered {formatDistanceToNow(new Date(s.enteredAt), { addSuffix: true })}
                  {s.pathname ? ` → on ${s.pathname}` : ''}
                </p>
              </div>
              <span className="text-xs text-green-600">🟢 Active</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}
