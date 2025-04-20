'use client'
import React from 'react'

export default function DataInsights({ data }: { data: any[] }) {
  const total = data.length
  const keys = data.length > 0 ? Object.keys(data[0]) : []

  const summary: Record<string, { avg: number; min: number; max: number }> = {}

  keys.forEach((key) => {
    const values = data.map((d) => Number(d[key])).filter((v) => !isNaN(v))
    if (values.length > 0) {
      const sum = values.reduce((a, b) => a + b, 0)
      const avg = sum / values.length
      const min = Math.min(...values)
      const max = Math.max(...values)
      summary[key] = { avg, min, max }
    }
  })

  return (
    <div className="p-4 rounded-xl bg-white dark:bg-green-900 shadow space-y-3">
      <h2 className="text-lg font-semibold text-green-700 dark:text-green-300">📌 Data Insights</h2>
      <p>Total Rows: {total}</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 text-sm">
        {Object.entries(summary).map(([key, stats]) => (
          <div key={key} className="border rounded-md p-3 bg-green-50 dark:bg-green-800 shadow-sm">
            <p className="font-semibold">{key}</p>
            <p>➕ Avg: {stats.avg.toFixed(2)}</p>
            <p>⬇️ Min: {stats.min}</p>
            <p>⬆️ Max: {stats.max}</p>
          </div>
        ))}
      </div>
    </div>
  )
}