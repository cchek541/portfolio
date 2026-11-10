import { Navigate, Route, Routes } from 'react-router-dom'
import { AppShell } from './components/AppShell.tsx'
import { LangProvider } from './components/LangProvider.tsx'
import { CaseStudyPage } from './pages/CaseStudyPage.tsx'
import { Demo } from './pages/Demo.tsx'
import { Evidence } from './pages/Evidence.tsx'
import { Overview } from './pages/Overview.tsx'

export default function App() {
  return (
    <LangProvider>
      <Routes>
        <Route element={<AppShell />}>
          <Route path="/" element={<Overview />} />
          <Route path="/work/tomyo" element={<CaseStudyPage slug="tomyo" />} />
          <Route path="/work/capstone" element={<CaseStudyPage slug="capstone" />} />
          <Route path="/demo" element={<Demo />} />
          <Route path="/evidence" element={<Evidence />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </LangProvider>
  )
}
