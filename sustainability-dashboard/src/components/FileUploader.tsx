'use client'
// Component to upload a CSV file and parse it using useCSVParser hook
import React, { useState } from 'react'
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card } from "@/components/ui/card"
import { useCSVParser } from '../hooks/useCSVParser'

export default function FileUploader({ onData }: { onData: (data: any[]) => void }) {
  const [error, setError] = useState('')
  const parseCSV = useCSVParser(onData, setError)

  return (
    <Card className="p-4 space-y-2">
      <Label htmlFor="file-upload">Upload CSV File</Label>
      <Input
        id="file-upload"
        type="file"
        accept=".csv"
        onChange={(e) => {
          const file = e.target.files?.[0]
          if (file) parseCSV(file)
        }}
      />
      {error && <p className="text-sm text-red-500">{error}</p>}
    </Card>
  )
}