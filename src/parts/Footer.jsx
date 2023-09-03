import logo from "../assets/img/logo_sidoarjo.png"

const FooterComponent = () => {
  return (
    <footer>
      <footer className='bg-bright '>
        <div className='mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8'>
          <div className='md:flex md:justify-between'>
            <div className='mb-6 md:mb-0'>
              <a href='#' className='flex items-center'>
                <img src={logo} className='h-14 mr-3' alt='FlowBite Logo' />
                <span className='self-center text-xl font-semibold whitespace-nowrap uppercase'>
                  Kabupaten Sidoarjo
                </span>
              </a>
            </div>
            <div className='grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3'>
              <div>
                <h2 className='mb-6 text-sm font-semibold text-gray-900 uppercase '>
                  Resources
                </h2>
                <ul className='text-gray-500 font-medium'>
                  <li className='mb-4'>
                    <a href='https://flowbite.com/' className='hover:underline'>
                      Ajukan Pengaduan
                    </a>
                  </li>
                  <li>
                    <a
                      href='https://tailwindcss.com/'
                      className='hover:underline'
                    >
                      Berita
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className='mb-6 text-sm font-semibold text-gray-900 uppercase'>
                  Follow us
                </h2>
                <ul className='text-gray-500 font-medium'>
                  <li className='mb-4'>
                    <a
                      href='https://github.com/themesberg/flowbite'
                      className='hover:underline '
                    >
                      Instagram
                    </a>
                  </li>
                  <li>
                    <a
                      href='https://discord.gg/4eeurUVvTy'
                      className='hover:underline'
                    >
                      Facebook
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className='mb-6 text-sm font-semibold text-gray-900 uppercase '>
                  Legal
                </h2>
                <ul className='text-gray-500  font-medium'>
                  <li className='mb-4'>
                    <a href='#' className='hover:underline'>
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a href='#' className='hover:underline'>
                      Terms &amp; Conditions
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <hr className='my-6 border-gray-200 sm:mx-auto  lg:my-8' />
          <div className='sm:flex sm:items-center sm:justify-between'>
            <span className='text-sm text-gray-500 sm:text-center'>
              © 2023{" "}
              <a href='https://flowbite.com/' className='hover:underline'>
                Pemerintah Kabupaten Sidoarjo
              </a>
              . All Rights Reserved.
            </span>
          </div>
        </div>
      </footer>
    </footer>
  )
}

export default FooterComponent
