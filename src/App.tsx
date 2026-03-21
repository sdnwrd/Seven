import { Routes, Route } from 'react-router-dom'

function Home() {
  return <div className="min-h-screen bg-bg-primary text-white p-8">Home — in Arbeit</div>
}

function Impressum() {
  return <div className="min-h-screen bg-bg-primary text-white p-8">Impressum — in Arbeit</div>
}

function Datenschutz() {
  return <div className="min-h-screen bg-bg-primary text-white p-8">Datenschutz — in Arbeit</div>
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/impressum" element={<Impressum />} />
      <Route path="/datenschutz" element={<Datenschutz />} />
    </Routes>
  )
}
