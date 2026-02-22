import './App.css'
import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'

import Navbar from './components/ui/Navbar/Navbar'
import Home from './pages/Home'
import Tours from './pages/tours'
import About from './pages/About'
import ScrollBtn from './components/ui/ScrollBtn/ScrollBtn'
import Footer from './components/ui/Footer/Footer'
import colors from './colors'
import SingelCard from './pages/SingelCard'

const ScrollToTop = () => {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}

function App() {
  return (
    <>
      <ScrollToTop />

      <div className="App">
        <Navbar
          colors={{
            primary: colors.primary,
            secondary: colors.secondary,
          }}
        />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tours/" element={<Tours />} />
          <Route path="/tour/:id" element={<SingelCard />} />
          <Route path="/about" element={<About />} />
        </Routes>

        <Footer />
        <ScrollBtn />
      </div>
    </>
  )
}

export default App
