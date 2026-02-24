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

const ScrollToTop = () => {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}

function App() {
  const [settings, setSettings] = useState();
  const [maincolor, setMainColor] = useState<string>('');
  const [navcolor, setNavColor] = useState<string>('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  // إضافة حالة اللغة
  const [language, setLanguage] = useState<'en' | 'ru'>('en');

  useEffect(() => {
    // جلب البيانات عند تحميل المكون
    axios.get('https://dash.socotra-secrets.com/api/settings')
      .then(response => {
        setSettings(response.data.data);
        setMainColor(response.data.data.primary_color);
        setNavColor(response.data.data.nav_color);
        setLoading(false);
      })
      .catch(error => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <div>جاري التحميل...</div>;
  if (error) return <div>خطأ: {error}</div>;

  return (
    <main style={{backgroundColor : maincolor}}>
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