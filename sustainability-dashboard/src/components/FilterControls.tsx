 'use client'
import React from 'react'
import { Input } from '@/components/ui/input'
import { Checkbox } from '@/components/ui/checkbox'
import { Label } from '@/components/ui/label'

type Props = {
  columns: string[]
  filters: Record<string, string>
  setFilters: (v: Record<string, string>) => void
}

export default function FilterControls({ columns, filters, setFilters }: Props) {
  const classificationOptions = ['1', '2', '3']

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
      {columns.map((col) =>
        col.toLowerCase().includes('class') ? (
          <div key={col} className="space-y-1">
            <Label>{col} (Checkbox)</Label>
            {classificationOptions.map((val) => (
              <div key={val} className="flex items-center gap-2">
                <Checkbox
                  id={`${col}-${val}`}
                  checked={filters[col]?.includes(val) ?? false}
                  onCheckedChange={(checked) => {
                    const current = filters[col]?.split(',') || []
                    const next = checked
                      ? [...current, val]
                      : current.filter((v) => v !== val)
                    setFilters({ ...filters, [col]: next.join(',') })
                  }}
                />
                <Label htmlFor={`${col}-${val}`}>{val}</Label>
              </div>
            ))}
          </div>
        ) : (
          <Input
            key={col}
            placeholder={`Filter ${col}`}
            value={filters[col] || ''}
            onChange={(e) => setFilters({ ...filters, [col]: e.target.value })}
          />
        )
      )}
    </div>
  )
}