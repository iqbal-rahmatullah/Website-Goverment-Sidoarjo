import Navbar from "../parts/Navbar"
import FooterComponent from "../parts/Footer"
import PengaduanHero from "../parts/PengaduanHero"
import BottomBar from "../parts/BottomBar"
import Topbar from "../parts/Topbar"

const Laporan = () => {
  return (
    <div>
      <Topbar></Topbar>
      <Navbar></Navbar>
      <BottomBar></BottomBar>
      <PengaduanHero></PengaduanHero>
      <FooterComponent></FooterComponent>
    </div>
  )
}

export default Laporan
