// import { prisma } from '@/lib/prisma'
// import dynamic from 'next/dynamic'
// import { format } from 'date-fns'

// // Dynamic import to avoid SSR issues
// const { Line, Bar, Pie } = dynamic(
//   async () => (await import('react-chartjs-2')).Chart,
//   { ssr: false }
// )

// export default async function AnalyticsPage() {
//   // 1. Fetch aggregate data
//   const [sessions, pageViews, userDatas, payments, downloads] = await Promise.all([
//     prisma.visitorSession.findMany({ select: { enteredAt: true, leftAt: true, pathname: true }, orderBy: { enteredAt: 'asc' }}),
//     prisma.pageView.groupBy({ by: ['path'], _count: { _all: true } }),
//     prisma.userData.count(),
//     prisma.payment.count(),
//     prisma.downloadLog.count()
//   ])

//   // 2. Build chart data
//   const sessionsByDate = sessions.reduce<Record<string, number>>((acc, s) => {
//     const d = format(s.enteredAt, 'yyyy-MM-dd')
//     acc[d] = (acc[d] || 0) + 1
//     return acc
//   }, {})

//   const labels = Object.keys(sessionsByDate)
//   const sessionCounts = Object.values(sessionsByDate)
//   const topPages = pageViews.sort((a, b) => b._count._all - a._count._all).slice(0, 10)
//   const funnelData = [userDatas, payments, downloads]

//   return (
//     <main className="p-8 bg-neutral-50 min-h-screen">
//       <h1 className="text-3xl font-bold mb-8">📊 Analytics Dashboard</h1>

//       {/* Sessions-over-time chart */}
//       <section className="mb-12 bg-white shadow rounded-lg p-6">
//         <h2 className="text-xl font-semibold mb-4">Sessions Over Time</h2>
//         <Line
//           data={{
//             labels,
//             datasets: [{ label: 'Sessions', data: sessionCounts, borderColor: '#2563EB', fill: false }]
//           }}
//           options={{ responsive: true, plugins: { legend: { display: false } } }}
//         />
//       </section>

//       {/* Top Pages */}
//       <section className="mb-12 grid grid-cols-1 md:grid-cols-2 gap-6">
//         <div className="bg-white shadow rounded-lg p-6">
//           <h2 className="text-xl font-semibold mb-4">Top Pages</h2>
//           <Bar
//             data={{
//               labels: topPages.map(p => p.path),
//               datasets: [{ data: topPages.map(p => p._count._all), backgroundColor: '#10B981' }]
//             }}
//             options={{ indexAxis: 'y', responsive: true }}
//           />
//         </div>

//         <div className="bg-white shadow rounded-lg p-6">
//           <h2 className="text-xl font-semibold mb-4">Conversion Funnel</h2>
//           <Pie
//             data={{
//               labels: ['Contact Form', 'Paid', 'Downloaded'],
//               datasets: [{ data: funnelData, backgroundColor: ['#3B82F6', '#F59E0B', '#EF4444'] }]
//             }}
//             options={{ responsive: true }}
//           />
//         </div>
//       </section>

//       {/* Dashboard Summary and Recent Sessions */}
//       <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
//         <div className="bg-white shadow rounded-lg p-6">
//           <h2 className="text-xl font-semibold mb-4">Summary</h2>
//           <ul className="space-y-2 text-lg">
//             <li>Total Sessions: <strong>{sessions.length}</strong></li>
//             <li>Avg. Duration: <strong>{(sessions.reduce((s, curr) => s + ((curr.leftAt ? new Date(curr.leftAt).getTime() - new Date(curr.enteredAt).getTime() : 0)), 0) / sessions.length / 60000).toFixed(2)} mins</strong></li>
//             <li>Form Fills: <strong>{userDatas}</strong></li>
//             <li>Payments: <strong>{payments}</strong></li>
//             <li>Downloads: <strong>{downloads}</strong></li>
//           </ul>
//         </div>

//         <div className="bg-white shadow rounded-lg p-6">
//           <h2 className="text-xl font-semibold mb-4">Recent Sessions</h2>
//           <div className="max-h-64 overflow-auto">
//             <table className="w-full text-left">
//               <thead><tr><th>ID</th><th>Path</th><th>Entered</th></tr></thead>
//               <tbody>
//                 {sessions.slice(-10).reverse().map((s, i) => (
//                   <tr key={i} className="even:bg-gray-50">
//                     <td>{s.id.slice(0, 8)}…</td>
//                     <td>{s.pathname ?? '/'}</td>
//                     <td>{format(s.enteredAt, 'yyyy-MM-dd HH:mm')}</td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         </div>
//       </section>
//     </main>
//   )
// }

export const AnalyticsPage = () => {
  return <div>Analytics</div>
}