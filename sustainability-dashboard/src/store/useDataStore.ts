// Zustand store with persist middleware to save data to localStorage
import { create } from 'zustand'
import { persist } from 'zustand/middleware'

type RowData = Record<string, string | number | boolean | null>

type DataStore = {
  data: RowData[]
  setData: (data: RowData[]) => void
}

// ✅ สร้าง store ที่เก็บ data แบบ type-safe
export const useDataStore = create<DataStore>()(
  persist(
    (set) => ({
      data: [],
      setData: (data) => set({ data }),
    }),
    { name: 'dashboard-data' }
  )
)