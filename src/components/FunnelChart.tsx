'use client'
import { FunnelChartProps } from '@/type'
import { Bar } from 'react-chartjs-2'



export default function FunnelChart({ counts }: FunnelChartProps) {
  const labels = ['Landed', 'Clicked Pay', 'Filled Form', 'Paid', 'Downloaded']
  const values = [
    counts.landed,
    counts.clickedPay,
    counts.filledForm,
    counts.paid,
    counts.downloaded
  ]

  const dropOff = (from: number, to: number) => {
    if (from === 0) return '—'
    const percent = ((from - to) / from) * 100
    return percent.toFixed(1) + '% drop'
  }

  const drops = [
    '—', // No drop-off for first stage
    dropOff(counts.landed, counts.clickedPay),
    dropOff(counts.clickedPay, counts.filledForm),
    dropOff(counts.filledForm, counts.paid),
    dropOff(counts.paid, counts.downloaded)
  ]

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h2 className="text-xl font-semibold mb-4">Conversion Funnel</h2>
      <div className="flex flex-col gap-3">
        {labels.map((label, i) => (
          <div key={i} className="flex justify-between items-center px-1">
            <div className="flex items-center gap-2">
              <span className="font-medium w-28">{label}</span>
              <span className="text-gray-500">({values[i]} users)</span>
            </div>
            <div className="text-sm text-red-500">{drops[i]}</div>
          </div>
        ))}
      </div>

      <div className="mt-4">
        <Bar
          data={{
            labels,
            datasets: [
              {
                label: 'Users',
                data: values,
                backgroundColor: ['#3B82F6', '#06B6D4', '#10B981', '#F59E0B', '#EF4444']
              }
            ]
          }}
          options={{
            indexAxis: 'y',
            plugins: {
              legend: { display: false }
            },
            scales: {
              x: {
                ticks: { precision: 0 }
              }
            }
          }}
        />
      </div>
    </div>
  )
}
