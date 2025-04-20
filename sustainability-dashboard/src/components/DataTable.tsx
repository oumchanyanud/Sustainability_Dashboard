'use client'
import React, { useMemo, useState } from 'react'
import {
  Table, TableBody, TableCell, TableHead,
  TableHeader, TableRow
} from '@/components/ui/table'
import { Button } from '@/components/ui/button'
import FilterControls from '@/components/FilterControls'

type RowData = Record<string, string | number | boolean | null>

const ROWS_PER_PAGE = 10

export default function DataTable({ data }: { data: RowData[] }) {
  const [filters, setFilters] = useState<Record<string, string>>({})
  const [page, setPage] = useState(0)

  const columns = useMemo(() => (data.length > 0 ? Object.keys(data[0]) : []), [data])

  const filteredData = useMemo(() => {
    return data.filter((row) =>
      columns.every((col) => {
        const filterVal = filters[col]
        if (!filterVal) return true
        if (col.toLowerCase().includes('class')) {
          const selected = filterVal.split(',')
          return selected.includes(String(row[col]))
        }
        return row[col]?.toString().toLowerCase().includes(filterVal.toLowerCase())
      })
    )
  }, [data, filters, columns])

  const paginatedData = useMemo(() => {
    const start = page * ROWS_PER_PAGE
    return filteredData.slice(start, start + ROWS_PER_PAGE)
  }, [filteredData, page])

  return (
    <div className="space-y-4">
      <FilterControls columns={columns} filters={filters} setFilters={setFilters} />

      <Table className="border rounded-lg overflow-x-auto shadow-md">
        <TableHeader className="bg-green-100 dark:bg-green-800">
          <TableRow>
            {columns.map((col) => (
              <TableHead key={col}>{col}</TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {paginatedData.map((row, idx) => (
            <TableRow key={idx}>
              {columns.map((col) => (
                <TableCell key={col}>{row[col]}</TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <div className="flex justify-center gap-4 items-center pt-2">
        <Button
          variant="outline"
          onClick={() => setPage((p) => Math.max(p - 1, 0))}
          disabled={page === 0}
        >
          ← Prev
        </Button>
        <span>Page {page + 1} of {Math.ceil(filteredData.length / ROWS_PER_PAGE)}</span>
        <Button
          variant="outline"
          onClick={() => setPage((p) => (p + 1 < Math.ceil(filteredData.length / ROWS_PER_PAGE) ? p + 1 : p))}
          disabled={page + 1 >= Math.ceil(filteredData.length / ROWS_PER_PAGE)}
        >
          Next →
        </Button>
      </div>
    </div>
  )
}