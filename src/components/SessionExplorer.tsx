'use client'
import { useState } from 'react'
import { format } from 'date-fns'
import { SessionExplorerProps } from '@/type'


export default function SessionExplorer({ sessions }: SessionExplorerProps) {
  const [selectedId, setSelectedId] = useState<string | null>(null)

  const getDuration = (start: string, end: string | null) => {
    if (!end) return '—'
    const ms = new Date(end).getTime() - new Date(start).getTime()
    return (ms / 1000 / 60).toFixed(1) + ' mins'
  }

  return (
    <div className="grid gap-6">
      {sessions.map((s) => (
        <div
          key={s.id}
          className="bg-white p-4 rounded-lg shadow border hover:border-blue-500 cursor-pointer"
          onClick={() => setSelectedId(selectedId === s.id ? null : s.id)}
        >
          <div className="flex justify-between items-center">
            <div>
              <h3 className="text-lg font-bold">Session: {s.id.slice(0, 6)}…</h3>
              <p className="text-sm text-gray-500">
                {s.device ?? 'Unknown device'} — {s.country ?? 'Unknown country'}
              </p>
              <p className="text-xs text-gray-400">Entered {format(new Date(s.enteredAt), 'PPpp')}</p>
            </div>
            <div className="text-right">
              <p className="text-sm font-semibold">
                Duration: {getDuration(s.enteredAt, s.leftAt)}
              </p>
              <p className="text-xs text-gray-500">
                {s.userData?.email ?? 'No email'}
              </p>
            </div>
          </div>

          {selectedId === s.id && (
            <div className="mt-4 space-y-2 text-sm">
              <div className="bg-gray-50 p-2 rounded">
                <p className="font-semibold">Page Views:</p>
                {s.pageViews.map((pv, idx) => (
                  <div key={idx} className="ml-2">
                    • Visited <strong>{pv.path}</strong> at {format(new Date(pv.viewedAt), 'p')} 
                    → left at {pv.leftAt ? format(new Date(pv.leftAt), 'p') : 'still on page'}
                  </div>
                ))}
              </div>

              {s.userData && (
                <div className="bg-green-50 p-2 rounded">
                  <p className="font-semibold">Form Filled:</p>
                  <div className="ml-2">• {s.userData.name} — {s.userData.phone}</div>
                </div>
              )}

              {s.payment && (
                <div className="bg-yellow-50 p-2 rounded">
                  <p className="font-semibold">Payment:</p>
                  <div className="ml-2">
                    • ₦{s.payment.amount / 100} paid at {format(new Date(s.payment.paidAt), 'p')} (ref: {s.payment.paystackRef})
                  </div>
                </div>
              )}

              {s.downloadLogs.length > 0 && (
                <div className="bg-blue-50 p-2 rounded">
                  <p className="font-semibold">Downloads:</p>
                  {s.downloadLogs.map((dl, i) => (
                    <div key={i} className="ml-2">
                      • Downloaded at {format(new Date(dl.downloadedAt), 'p')}
                    </div>
                  ))}
                </div>
              )}

              {s.leftAt && (
                <div className="bg-red-50 p-2 rounded">
                  <p className="font-semibold">Exited:</p>
                  <div className="ml-2">
                    • Left at {format(new Date(s.leftAt), 'p')}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      ))}
    </div>
  )
}
