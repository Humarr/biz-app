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

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h2 className="text-xl font-semibold mb-4">Conversion Funnel</h2>
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
              ticks: {
                precision: 0
              }
            }
          }
        }}
      />
    </div>
  )
}
