// Custom hook to parse CSV file and return first 10 rows
import Papa from 'papaparse'

export function useCSVParser(onLoad: (data: any[]) => void, onError: (msg: string) => void) {
  return (file: File) => {
    // Check for valid CSV format
    if (file.type !== 'text/csv') {
      onError('Invalid file format');
      return;
    }

    // Parse CSV using PapaParse
    Papa.parse(file, {
      header: true,
      complete: (results) => {
        // Load only first 10 rows
        onLoad(results.data);
        onError('');
      },
      error: () => onError('Failed to parse CSV.')
    });
  }
}