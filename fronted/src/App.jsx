import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Navbar from './components/Navbar'
import Logo from './components/Logo'
import Footer from './components/Footer'
import Donate from './pages/Donate'
import Event from './pages/Event'

function App() {
  return (
    <>
      <Logo />
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/donate" element={<Donate />} />
        <Route path="/event" element={<Event/>}/>
        <Route path="*" element={<Home />} />
      </Routes>

      <Footer />
    </>
  )
}

export default App
