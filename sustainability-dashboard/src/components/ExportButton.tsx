'use client'
// Button to export the current table data to a CSV file using PapaParse
import Papa from 'papaparse'
import { Button } from '@/components/ui/button'

type RowData = Record<string, string | number | boolean | null>

export default function ExportButton({ data }: { data: RowData[] }) {
  const handleExport = () => {
    // Convert JSON to CSV string
    const csv = Papa.unparse(data)

    // Create a blob and trigger download
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' })
    const url = URL.createObjectURL(blob)

    const link = document.createElement('a')
    link.setAttribute('href', url)
    link.setAttribute('download', 'sustainability.csv')
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <Button onClick={handleExport}>
      Export CSV
    </Button>
  )
}