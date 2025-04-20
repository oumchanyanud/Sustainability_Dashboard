'use client'
// Chart component with dropdown to select numeric column
import React, { useState, useEffect } from 'react'
import {
  BarChart, XAxis, YAxis, Tooltip,
  Bar, CartesianGrid, ResponsiveContainer
} from 'recharts'
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from '@/components/ui/select'

type RowData = Record<string, string | number | boolean | null>

export default function Chart({ data }: { data: RowData[] }) {
  const [column, setColumn] = useState<string | null>(null)

  const numericColumns = Object.keys(data[0] || {}).filter((key) =>
    !isNaN(Number(data[0]?.[key]))
  )

  useEffect(() => {
    if (!column && numericColumns.length > 0) {
      setColumn(numericColumns[0])
    }
  }, [column, numericColumns])

  if (!column) return <p className="text-red-500">No numeric column found for chart.</p>

  const grouped = data.reduce((acc: Record<string, number>, row: RowData) => {
    const key = row[column]?.toString()
    if (key) {
      acc[key] = (acc[key] || 0) + 1
    }
    return acc
  }, {})

  const chartData = Object.entries(grouped).map(([key, count]) => ({
    key,
    count,
  }))

  return (
    <div className="space-y-4">
      {/* Dropdown for selecting column */}
      <div className="max-w-sm">
        <Select value={column} onValueChange={setColumn}>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Select a column to chart" />
          </SelectTrigger>
          <SelectContent>
            {numericColumns.map((col) => (
              <SelectItem key={col} value={col}>
                {col}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* Chart view */}
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="key" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="count" fill="#10b981" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}