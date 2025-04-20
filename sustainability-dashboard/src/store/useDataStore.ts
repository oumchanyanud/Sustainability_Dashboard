// Zustand store with persist middleware to save data to localStorage
import { create } from 'zustand'
import { persist } from 'zustand/middleware'

type DataStore = {
  data: any[]
  setData: (data: any[]) => void
}

// Create store with persist so uploaded data survives page refresh
export const useDataStore = create<DataStore>()(
  persist(
    (set) => ({
      data: [],
      setData: (data) => set({ data }),
    }),
    { name: 'dashboard-data' }
  )
)