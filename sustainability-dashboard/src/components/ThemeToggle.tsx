'use client'
// Theme toggle switch using shadcn switch + Tailwind dark mode class
import { useEffect, useState } from 'react'
import { Switch } from "@/components/ui/switch"

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(false)

  // Toggle dark class on <html> root
  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDark)
  }, [isDark])

  return (
    <div className="flex items-center gap-2">
      <span>☀️</span>
      <Switch checked={isDark} onCheckedChange={setIsDark} />
      <span>🌙</span>
    </div>
  )
}