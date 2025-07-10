// app/analytics/layout.tsx
'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ReactNode, useState } from 'react'
import {  subDays } from 'date-fns'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import './analytics.css' // for subtle animations

export default function AnalyticsLayout({ children }: { children: ReactNode }) {
  const pathname = usePathname()
  const [start, setStart] = useState<Date>(subDays(new Date(), 7))
  const [end, setEnd] = useState<Date>(new Date())

  const navItems = [
    { name: 'Overview', href: '/analytics/overview' },
    { name: 'Sessions', href: '/analytics/sessions' },
    { name: 'Visitors', href: '/analytics/visitors' },
    { name: 'Events', href: '/analytics/events' },
  ]

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      <div className="flex min-h-screen">
        {/* Sidebar */}
        <aside className="w-64 bg-white border-r px-6 py-8 hidden md:block">
          <h1 className="text-2xl font-semibold mb-6">📊 Analytics</h1>
          <nav className="space-y-2">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href}>
                <div
                  className={`block px-4 py-2 rounded-md transition hover:bg-gray-100 ${
                    pathname === item.href ? 'bg-blue-100 text-blue-700 font-medium' : ''
                  }`}
                >
                  {item.name}
                </div>
              </Link>
            ))}
          </nav>

          <div className="mt-8">
            <h2 className="text-sm font-semibold text-gray-500 mb-1">Date Range</h2>
            <div className="flex flex-col gap-2">
              <DatePicker
                selected={start}
                onChange={(date) => date && setStart(date)}
                maxDate={end}
                className="w-full border px-3 py-2 rounded"
              />
              <DatePicker
                selected={end}
                onChange={(date) => date && setEnd(date)}
                minDate={start}
                maxDate={new Date()}
                className="w-full border px-3 py-2 rounded"
              />
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6">
          {children}
        </main>
      </div>
    </div>
  )
}
