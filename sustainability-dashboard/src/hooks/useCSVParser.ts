// Custom hook to parse CSV file and return parsed data using PapaParse
import Papa, { ParseResult } from 'papaparse'

type RowData = Record<string, string | number | boolean | null>

export function useCSVParser(
  onLoad: (data: RowData[]) => void,
  onError: (msg: string) => void
) {
  return (file: File) => {
    // Check for valid CSV format
    if (file.type !== 'text/csv') {
      onError('Invalid file format')
      return
    }

    // Parse CSV using PapaParse
    Papa.parse<RowData>(file, {
      header: true,
      dynamicTyping: true,
      complete: (results: ParseResult<RowData>) => {
        // Load all rows (or first 10 rows if you want)
        onLoad(results.data)
        onError('')
      },
      error: () => onError('Failed to parse CSV.')
    })
  }
}