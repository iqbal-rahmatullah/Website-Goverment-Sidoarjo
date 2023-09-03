import Carousel from "../components/Carousel"

const About = () => {
  return (
    <section id='about'>
      <div className='w-full'>
        <div className='container mx-auto px-4 py-10'>
          <div className='flex flex-wrap lg:flex-none'>
            <div className='about_title text-center bg-primary w-full text-white py-2 rounded-xl lg:w-1/3 lg:h-80 lg:rounded-none lg:flex lg:items-center lg:flex-col lg:justify-center animate__animated animate__bounceInLeft'>
              <h4 className='text-xl font-light uppercase lg:text-2xl'>
                Tentang
              </h4>
              <h3 className='text-2xl uppercase font-bold lg:text-4xl'>
                Sidoarjo
              </h3>
            </div>
            <div className='content_about w-full mt-5 h-64 lg:w-2/3 lg:mt-0 lg:h-80 animate__animated animate__bounceInRight'>
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
