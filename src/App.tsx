import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Process from './components/Process'
import Pricing from './components/Pricing'
import Portfolio from './components/Portfolio'

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <Process />
      <Pricing />
      <Portfolio />
    </>
  )
}

function Impressum() {
  return <div className="min-h-screen bg-[#0a0a0a] text-white p-8">Impressum — in Arbeit</div>
}

function Datenschutz() {
  return <div className="min-h-screen bg-[#0a0a0a] text-white p-8">Datenschutz — in Arbeit</div>
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
