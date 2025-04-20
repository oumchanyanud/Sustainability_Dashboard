'use client'
// Chart that fetches sustainability metrics from /api/sustainability endpoint
import { useEffect, useState } from 'react'
import { BarChart, XAxis, YAxis, Tooltip, Bar, CartesianGrid, ResponsiveContainer } from 'recharts'

type Data = {
  category: string
  usage: number
}

export default function APIChart() {
  const [data, setData] = useState<Data[]>([])

  // Fetch data from Next.js API route on mount
  useEffect(() => {
    fetch('/api/sustainability')
      .then(res => res.json())
      .then(setData)
  }, [])

  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="category" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="usage" fill="#10b981" />
      </BarChart>
    </ResponsiveContainer>
  )
}