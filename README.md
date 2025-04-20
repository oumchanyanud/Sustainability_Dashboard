# Sustainability_Dashboard

An interactive sustainability dashboard built with **Next.js**, **TypeScript**, **Tailwind CSS**, and **Recharts**.  
This app enables users to upload CSV files, explore the data with filtering, pagination, and charts, and view live API-based sustainability metrics.

**Live Demo**: https://sustainability-dashboard-86bd.vercel.app  
**GitHub Repo**: https://github.com/oumchanyanud/Sustainability_Dashboard

---

## Setup Instructions

1. Clone this repository**:
```bash
git clone https://github.com/oumchanyanud/Sustainability_Dashboard.git
cd Sustainability_Dashboard 
```

2. Install dependencies
```bash
npm install
```

3. Run the development server
```bash
npm run dev
```

4. Open http://localhost:3000 in your browser.

Features
• Upload CSV and preview full dataset
• Filter by column (text, dropdown, checkbox)
• Pagination for large datasets
• Auto summary (min, max, avg per numeric field)
• Interactive charts with dropdown selector
• Live API chart section
• Export to CSV
• Dark Mode toggle
• Responsive dashboard layout with sidebar navigation

Approach
• Built with reusable components (DataTable, Chart, FileUploader, etc.)
• Used Zustand for global state with persist to save uploaded data
• Dynamic filtering UI adjusts to column type (e.g., checkbox for classification)
• Chart auto-detects numeric columns and visualizes grouped data

Challenges
• Managing dynamic typing with CSV columns and ensuring type safety across components
• Building generic filter logic that supports multiple UI types (text, checkbox, dropdown)
• Designing responsive layout while maintaining UX clarity
• Ensuring compatibility with ESLint and TypeScript strict mode

🔧 Tech Stack
• Frontend: Next.js 15, React, TypeScript
• Styling: Tailwind CSS + shadcn/ui
• State Management: Zustand with persist
• Charting: Recharts
• CSV Handling: PapaParse