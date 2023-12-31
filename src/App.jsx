import "./App.css"
import "flowbite"
import "tailwindcss-animated"
import "animate.css"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Homepage from "./pages/Homepage"
import AOS from "aos"
import "aos/dist/aos.css"
import { useEffect } from "react"
import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/navigation"
import Laporan from "./pages/Laporan"
import Berita from "./pages/Berita"
import Informasi from "./pages/Informasi"

function App() {
  useEffect(() => {
    AOS.init()
  }, [])
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' Component={Homepage}></Route>
          <Route path='/laporan' Component={Laporan}></Route>
          <Route path='/berita' Component={Berita}></Route>
          <Route path='/informasi' Component={Informasi}></Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
