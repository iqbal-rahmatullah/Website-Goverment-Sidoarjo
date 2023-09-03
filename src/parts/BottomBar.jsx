import { NavLink } from "react-router-dom"

const BottomBar = () => {
  return (
    <div className='md:hidden'>
      <div className='fixed z-[99999] w-full h-16 max-w-full -translate-x-1/2 bg-white border border-gray-200 rounded-full bottom-4 left-1/2'>
        <div className='grid h-full max-w-full grid-cols-4 mx-auto'>
          <div className='flex items-center justify-center'>
            <NavLink
              to='/'
              data-tooltip-target='tooltip-new'
              type='button'
              className='inline-flex items-center justify-center w-10 h-10 font-medium'
            >
              <svg
                className='w-5 h-5 text-gray-400'
                aria-hidden='true'
                xmlns='http://www.w3.org/2000/svg'
                fill='currentColor'
                viewBox='0 0 20 20'
              >
                <path d='m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z' />
              </svg>
              <span className='sr-only'>Home</span>
            </NavLink>
          </div>
          <div
            id='tooltip-new'
            role='tooltip'
            className='absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700'
          >
            Home
            <div className='tooltip-arrow' data-popper-arrow></div>
          </div>

          <NavLink
            to='/laporan'
            data-tooltip-target='tooltip-home'
            type='button'
            className='inline-flex flex-col items-center justify-center px-5 group'
          >
            <svg
              className='w-5 h-5 mb-1 text-gray-500 dark:text-gray-400 group-hover:text-primary'
              aria-hidden='true'
              xmlns='http://www.w3.org/2000/svg'
              fill='currentColor'
              viewBox='0 0 20 20'
            >
              <path d='M19 4h-1a1 1 0 1 0 0 2v11a1 1 0 0 1-2 0V2a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2v15a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V5a1 1 0 0 0-1-1ZM3 4a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4Zm9 13H4a1 1 0 0 1 0-2h8a1 1 0 0 1 0 2Zm0-3H4a1 1 0 0 1 0-2h8a1 1 0 0 1 0 2Zm0-3H4a1 1 0 0 1 0-2h8a1 1 0 1 1 0 2Zm0-3h-2a1 1 0 0 1 0-2h2a1 1 0 1 1 0 2Zm0-3h-2a1 1 0 0 1 0-2h2a1 1 0 1 1 0 2Z' />
              <path d='M6 5H5v1h1V5Z' />
            </svg>
            <span className='sr-only'>Laporan</span>
          </NavLink>
          <div
            id='tooltip-new'
            role='tooltip'
            className='absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700'
          >
            Laporan
            <div className='tooltip-arrow' data-popper-arrow></div>
          </div>
          <NavLink
            to='/berita'
            data-tooltip-target='tooltip-wallet'
            type='button'
            className='inline-flex flex-col items-center justify-center px- group'
          >
            <svg
              className='w-5 h-5 mb-1 text-gray-500 dark:text-gray-400 group-hover:text-primary'
              aria-hidden='true'
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 20 19'
            >
              <path
                stroke='currentColor'
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='m9 12 5.419 3.871A1 1 0 0 0 16 15.057V2.943a1 1 0 0 0-1.581-.814L9 6m0 6V6m0 6H2a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h7m-5 6h3v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-5Zm15-3a3 3 0 0 1-3 3V6a3 3 0 0 1 3 3Z'
              />
            </svg>
            <span className='sr-only'>Berita</span>
          </NavLink>
          <div
            id='tooltip-wallet'
            role='tooltip'
            className='absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700'
          >
            Laporan
            <div className='tooltip-arrow' data-popper-arrow></div>
          </div>

          <div className='flex items-center justify-center'>
            <NavLink
              to='/informasi'
              data-tooltip-target='tooltip-new'
              type='button'
              className='inline-flex items-center justify-center w-10 h-10 font-medium'
            >
              <svg
                className='w-5 h-5 mb-1 text-gray-500 dark:text-gray-400 group-hover:text-primary'
                aria-hidden='true'
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 20 20'
              >
                <path
                  stroke='currentColor'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M8 9h2v5m-2 0h4M9.408 5.5h.01M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z'
                />
              </svg>
              <span className='sr-only'>Berita</span>
            </NavLink>
          </div>
          <div
            id='tooltip-new'
            role='tooltip'
            className='absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700'
          >
            Berita
            <div className='tooltip-arrow' data-popper-arrow></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BottomBar
