import { Routes, Route, useLocation } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Navbar from './components/Navbar'
import Logo from './components/Logo'
import Footer from './components/Footer'
import PageNotFound from './pages/PageNotFound'
import Donate from './pages/Donate'
import Event from './pages/Event'
import { Dashboard } from './admin/Dashboard'
import AdminLayout from './admin/layout/adminlayout'
import AdminEvent from './admin/AdminEvent'
import Approvals from './admin/Approvels'
import { Donor } from './admin/Donor'
import Login from './admin/auth/Login'
import ProtectedRoute from './admin/auth/ProtectRoute'
import { Request } from './pages/Request'
import { Toaster } from "react-hot-toast";
import Track from './pages/Track'

function App() {
  const location = useLocation();
  const isAdminPath = location.pathname.startsWith("/admin");


  return (
    <>
      <Toaster position="top-right" />
      {!isAdminPath && (
        <>
          <Logo />
          <Navbar />
        </>
      )}

      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/donate" element={<Donate />} />
        <Route path="/event" element={<Event />} />
        <Route path='/request' element={<Request />} />
        <Route path='track' element={<Track />} />
        <Route path="*" element={<PageNotFound />} />
        <Route path="/adminlogin" element={<Login />} />

        <Route
          path="/admin"
          element={
            <ProtectedRoute>
              <AdminLayout />
            </ProtectedRoute>
          }
        >
          <Route index element={<Dashboard />} />
          <Route path="donors" element={<Donor />} />
          <Route path="approvals" element={<Approvals />} />
          <Route path="events" element={<AdminEvent />} />
        </Route>

      </Routes>

      {!isAdminPath && <Footer />}
    </>
  )
}

export default App
