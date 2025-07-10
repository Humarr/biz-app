'use client'
import { format } from 'date-fns'

interface SessionJourneyProps {
  session: {
    id: string
    enteredAt: string
    clickedPayAt: string | null
    userData?: { name: string } | null
    payment?: { paidAt: string, status: string } | null
    downloadLogs: { downloadedAt: string }[]
    pageViews: { path: string, viewedAt: string, leftAt: string | null }[]
  }
}

export default function SessionJourney({ session }: SessionJourneyProps) {
  const {
    enteredAt,
    clickedPayAt,
    userData,
    payment,
    downloadLogs,
    pageViews
  } = session

  return (
    <div className="bg-white p-4 rounded-lg shadow mt-6">
      <h3 className="text-lg font-bold mb-4">🕹️ Journey Replay</h3>

      <ul className="space-y-3 text-sm">
        <li>
          🕒 Entered site: <strong>{format(new Date(enteredAt), 'PPpp')}</strong>
        </li>

        {pageViews.map((pv, i) => (
          <li key={i}>
            📄 Visited <strong>{pv.path}</strong> — 
            <span className="ml-1 text-gray-500">
              {format(new Date(pv.viewedAt), 'HH:mm:ss')}
              {pv.leftAt
                ? ` → left at ${format(new Date(pv.leftAt), 'HH:mm:ss')}`
                : ` → still on page`}
            </span>
          </li>
        ))}

        {clickedPayAt && (
          <li>
            💳 Clicked Pay: <strong>{format(new Date(clickedPayAt), 'PPpp')}</strong>
          </li>
        )}

        {userData && (
          <li>
            🧑 Filled Form: <strong>Name:</strong> {userData.name}
          </li>
        )}

        {payment?.status === 'success' && (
          <li>
            ✅ Paid: <strong>{format(new Date(payment.paidAt), 'PPpp')}</strong>
          </li>
        )}

        {downloadLogs.length > 0 && (
          <li>
            📥 Downloaded file: <strong>{format(new Date(downloadLogs[0].downloadedAt), 'PPpp')}</strong>
          </li>
        )}
      </ul>
    </div>
  )
}
