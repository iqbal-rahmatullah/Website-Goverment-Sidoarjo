import heroLogo from "../assets/img/hero_logo.png"
import { Link } from "react-router-dom"

const Hero = () => {
  return (
    <section id='hero' className='pt-24 pb-10 md:pt-32 bg-bright'>
      <div className='container mx-auto'>
        <div className='flex flex-wrap justify-center md:items-center'>
          <div className='logo_hero w-full flex justify-center mb-6 md:w-1/2 animate-mantul'>
            <img
              src={heroLogo}
              alt='hero_logo'
              className='animate__animated animate__backInLeft '
            />
          </div>
          <div className='text-hero px-4 w-full md:w-1/2'>
            <h1 className='header_hero mt-6 text-5xl uppercase font-extrabold text-right leading-10 md:text-6xl lg:text-8xl animate__animated animate__backInLeft'>
              Sidoarjo
            </h1>
            <div className='mt-4 animate__animated animate__backInLeft'>
              <div className='flex gap-2 mb-2 justify-end'>
                <div className='w-3 h-3 bg-primary rounded-full lg:w-5 lg:h-5'></div>
                <div className='w-3 h-3 bg-primary rounded-full lg:w-5 lg:h-5'></div>
                <div className='w-3 h-3 bg-primary rounded-full lg:w-5 lg:h-5'></div>
                <div className='w-3 h-3 bg-primary rounded-full lg:w-5 lg:h-5'></div>
                <div className='w-3 h-3 bg-primary rounded-full lg:w-5 lg:h-5'></div>
                <div className='w-3 h-3 bg-primary rounded-full lg:w-5 lg:h-5'></div>
              </div>
              <div className='flex gap-2 justify-end'>
                <div className='w-3 h-3 bg-primary rounded-full lg:w-5 lg:h-5'></div>
                <div className='w-3 h-3 bg-primary rounded-full lg:w-5 lg:h-5'></div>
                <div className='w-3 h-3 bg-primary rounded-full lg:w-5 lg:h-5'></div>
                <div className='w-3 h-3 bg-primary rounded-full lg:w-5 lg:h-5'></div>
                <div className='w-3 h-3 bg-primary rounded-full lg:w-5 lg:h-5'></div>
                <div className='w-3 h-3 bg-primary rounded-full lg:w-5 lg:h-5'></div>
              </div>
            </div>
            <h2 className='text-right mt-6 text-base font-extrabold text-slate-500 lg:text-xl animate__animated animate__backInLeft'>
              Bersih Hatinya, pertanian maju, andalan industri, bersih, rapi,
              serasi, hijau, sehat, indah, dan nyaman.
            </h2>
            <div className='flex justify-center lg:justify-end mt-6 animate__animated animate__backInLeft'>
              <Link
                to='/laporan'
                className='bg-secondary text-center min-w-full py-3 lg:min-w-0 lg:w-3/4 lg:py-4 text-white rounded-3xl hover:bg-yellow-300'
              >
                Ajukan Permasalahan
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
