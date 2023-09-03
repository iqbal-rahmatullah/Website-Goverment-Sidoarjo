import Carousel from "../components/Carousel"

const About = () => {
  return (
    <section id='about'>
      <div className='w-full'>
        <div className='container mx-auto px-4 py-10'>
          <div className='flex flex-wrap md:flex-none'>
            <div className='about_title text-center bg-primary w-full text-white py-2 rounded-xl md:w-1/3 md:h-80 md:rounded-none md:flex md:items-center md:flex-col md:justify-center animate__animated animate__bounceInLeft'>
              <h4 className='text-xl font-light uppercase md:text-2xl'>
                Tentang
              </h4>
              <h3 className='text-2xl uppercase font-bold md:text-4xl'>
                Sidoarjo
              </h3>
            </div>
            <div className='content_about w-full mt-5 h-64 md:w-2/3 md:mt-0 md:h-80 animate__animated animate__bounceInRight'>
              {/* <AboutCarousel></AboutCarousel> */}
              <Carousel></Carousel>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
