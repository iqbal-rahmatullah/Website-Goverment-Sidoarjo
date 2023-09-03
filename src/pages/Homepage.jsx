import Topbar from "../parts/Topbar"
import Navbar from "../parts/Navbar"
import Hero from "../parts/Hero"
import About from "../parts/About"
import Berita from "../parts/Berita"
import Agenda from "../parts/Agenda"
import BottomBar from "../parts/BottomBar"
import FooterComponent from "../parts/Footer"

const Homepage = () => {
  return (
    <>
      <Topbar></Topbar>
      <Navbar></Navbar>
      <BottomBar></BottomBar>
      <Hero></Hero>
      <About></About>
      <Berita></Berita>
      <Agenda></Agenda>
      <FooterComponent></FooterComponent>
    </>
  )
}

export default Homepage
