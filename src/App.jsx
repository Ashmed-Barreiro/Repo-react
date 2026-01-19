import { Routes, Route, Navigate } from 'react-router-dom'

import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'

import Home from './pages/Home.jsx'
import Receptes from './pages/Receptes.jsx'
import Media from './pages/Media.jsx'

export default function App() {
  return (
    <div className="min-h-screen bg-bgGray text-textBlack">
      <header>
        <Header />
      </header>

      <main className="max-w-6xl mx-auto px-6 lg:px-10 py-10">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/receptes" element={<Receptes />} />
          <Route path="/media" element={<Media />} />

          {/* If the user types an unknown URL, send them to Home */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  )
}
