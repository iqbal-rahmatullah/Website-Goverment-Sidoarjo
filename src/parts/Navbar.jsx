import logoSidoarjo from "../assets/img/logo_sidoarjo.png"
import { NavLink } from "react-router-dom"

const Navbar = () => {
  return (
    <nav className='bg-[#DFE7F0] fixed w-full z-20 top-0 left-0 border-b border-gray-200 hidden md:block'>
      <div className='max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4'>
        <a href='https://flowbite.com/' className='flex items-center'>
          <img src={logoSidoarjo} className='h-14 mr-3' alt='Flowbite Logo' />
          <span className='self-center text-xl font-semibold whitespace-nowrap uppercase'>
            Kabupaten Sidoarjo
          </span>
        </a>
        <div
          className='items-center justify-between hidden w-full md:flex md:w-auto md:order-1'
          id='navbar-sticky'
        >
          <ul className='flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-[#DFE7F0] md:flex-row md:space-x-8 md:mt-0 md:border-0'>
            <li>
              <NavLink
                to='/'
                className='block py-2 pl-3 pr-4 text-base md:bg-transparent md:p-0 uppercase'
                aria-current='page'
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to='/laporan'
                className='block py-2 pl-3 pr-4 text-base hover:bg-gray-100 md:hover:bg-transparent md:hover:text-primary md:p-0 uppercase'
              >
                Laporan Pengaduan
              </NavLink>
            </li>
            <li>
              <a
                href='#'
                className='block py-2 pl-3 pr-4 text-base hover:bg-gray-100 md:hover:bg-transparent md:hover:text-primary md:p-0 uppercase'
              >
                Berita
              </a>
            </li>
            <li>
              <a
                href='#'
                className='block py-2 pl-3 pr-4 text-base  hover:bg-gray-100 md:hover:bg-transparent md:hover:text-primary md:p-0 uppercase'
              >
                Agenda
              </a>
            </li>
            <li>
              <a
                href='#'
                className='block py-2 pl-3 pr-4 text-base  hover:bg-gray-100 md:hover:bg-transparent md:hover:text-primary md:p-0 uppercase'
              >
                Informasi
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
