import './App.css'
import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Navbar from './components/ui/Navbar/Navbar'
import Home from './pages/Home'
import Tours from './pages/tours'
import About from './pages/About'
import ScrollBtn from './components/ui/ScrollBtn/ScrollBtn'
import Footer from './components/ui/Footer/Footer'
// import colors from './colors'
import SingelCard from './pages/SingelCard'
import axios from 'axios'

// مكون اللودر الجديد
const BeautifulLoader = () => {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 50%, #c2185b 100%)',
      backgroundSize: '300% 300%',
      animation: 'gradientShift 3s ease infinite'
    }}>
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '20px'
      }}>
        {/* الدوائر المتحركة */}
        <div style={{
          display: 'flex',
          gap: '12px'
        }}>
          {[0, 1, 2].map((index) => (
            <div
              key={index}
              style={{
                width: '20px',
                height: '20px',
                borderRadius: '50%',
                background: 'white',
                animation: `bounce 1.4s infinite ease-in-out ${index * 0.16}s`
              }}
            />
          ))}
        </div>
        
        {/* النص المتلألئ */}
        <div style={{
          color: 'white',
          fontSize: '1.2rem',
          fontWeight: '300',
          letterSpacing: '2px',
          textTransform: 'uppercase',
          animation: 'pulse 2s infinite'
        }}>
          loading ...
        </div>
      </div>

      {/* إضافة الأنماط */}
      <style>{`
        @keyframes gradientShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        
        @keyframes bounce {
          0%, 80%, 100% { 
            transform: scale(0);
            opacity: 0.5;
          }
          40% { 
            transform: scale(1);
            opacity: 1;
          }
        }
        
        @keyframes pulse {
          0%, 100% { 
            opacity: 1;
            text-shadow: 0 0 10px rgba(255,255,255,0.5);
          }
          50% { 
            opacity: 0.7;
            text-shadow: 0 0 20px rgba(255,255,255,0.8);
          }
        }
      `}</style>
    </div>
  )
}

const ScrollToTop = () => {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}

function App() {
  const [maincolor, setMainColor] = useState<string>('')
  const [navcolor, setNavColor] = useState<string>('')
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [language, setLanguage] = useState<'en' | 'ru'>('en')

  useEffect(() => {
    axios.get('https://dash.socotra-secrets.com/api/settings')
      .then(response => {
        setMainColor(response.data.data.primary_color)
        setNavColor(response.data.data.nav_color)
        setLoading(false)
      })
      .catch(error => {
        setError(error.message)
        setLoading(false)
      })
  }, [])

  if (loading) return <BeautifulLoader />
  if (error) return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #ff6b6b, #c2185b)',
      color: 'white',
      fontSize: '1.5rem',
      textAlign: 'center',
      padding: '20px'
    }}>
      error: {error}
    </div>
  )
  
  return (
    <main style={{backgroundColor : maincolor , paddingTop: "80px"}} >
      <ScrollToTop />
      <div className="App">
        <Navbar
          Color={navcolor}
          language={language}
          setLanguage={setLanguage}
        />
        <Routes>
          <Route path="/" element={<Home language={language} />} />
          <Route path="/tours/" element={<Tours />} />
          <Route path="/tour/:id" element={<SingelCard  language={language} />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer />
        <ScrollBtn />
      </div>
    </main>
  )
}

export default App