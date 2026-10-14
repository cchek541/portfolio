import { Navigate, Route, Routes } from 'react-router-dom'
import { AppShell } from './components/AppShell.tsx'

function ScaffoldHome() {
  return (
    <section className="mx-auto max-w-3xl px-5 py-16">
      <p className="font-mono text-xs tracking-[0.2em] text-accent uppercase">
        Portfolio scaffold
      </p>
      <h1 className="mt-4 text-4xl font-semibold tracking-tight text-paper">
        Chingun
      </h1>
      <p className="mt-3 max-w-xl text-muted">
        Software engineer. Design tokens, app shell, and CI land first so later
        case studies and the live demo sit on a stable foundation.
      </p>
    </section>
  )
}

export default function App() {
  return (
    <Routes>
      <Route element={<AppShell />}>
        <Route path="/" element={<ScaffoldHome />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  )
}
