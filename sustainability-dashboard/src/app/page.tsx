'use client'
import React from 'react'
import LayoutDashboard from '@/components/LayoutDashboard'
import FileUploader from '@/components/FileUploader'
import DataTable from '@/components/DataTable'
import Chart from '@/components/Chart'
import APIChart from '@/components/APIChart'
import ExportButton from '@/components/ExportButton'
import ThemeToggle from '@/components/ThemeToggle'
import DataInsights from '@/components/DataInsights'
import { useDataStore } from '@/store/useDataStore'
import { motion } from 'framer-motion'

export default function Home() {
  const { data, setData } = useDataStore()

  return (
    <LayoutDashboard>
      {/* Header */}
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-semibold text-green-700 dark:text-green-300">
          🌿 Sustainability Dashboard
        </h2>
        <ThemeToggle />
      </div>

      {/* Upload Section */}
      <div id="upload">
        <FileUploader onData={setData} />
      </div>

      {data.length > 0 && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-8">

          {/* Export + Summary */}
          <div className="flex justify-between items-center" id="insight">
            <h3 className="text-xl font-medium text-green-700 dark:text-green-300">📂 CSV Preview</h3>
            <ExportButton data={data} />
          </div>

          <DataInsights data={data} />

          {/* Table */}
          <div id="table">
            <DataTable data={data} />
          </div>

          {/* Chart */}
          <div id="chart">
            <Chart data={data} />
          </div>
        </motion.div>
      )}

      {/* API Section */}
      <section id="api" className="pt-6 border-t border-green-300 dark:border-green-800">
        <h3 className="text-xl font-medium text-green-700 dark:text-green-300 mb-2">
          🔄 Live Sustainability Metrics (API)
        </h3>
        <APIChart />
      </section>
    </LayoutDashboard>
  )
}