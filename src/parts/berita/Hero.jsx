import { useEffect, useState } from "react"
import Carousel from "../../components/berita/Carousel"
import axios from "axios"
import loading from "../../assets/icon/loading.gif"

const Hero = () => {
  const [berita, sertBerita] = useState([])
  useEffect(() => {
    axios
      .get("https://berita-indo-api.vercel.app/v1/antara-news/politik")
      .then((result) => {
        sertBerita(result.data.data.slice(0, 8))
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

  if (berita.length === 0) {
    return (
      <div className='w-full'>
        <img src={loading} alt='' className='mx-auto' />
      </div>
    )
  }

  return (
    <div className='w-full md:pt-20'>
      <div className='container w-full md:mx-auto px-5 py-8'>
        <Carousel></Carousel>
      </div>
      <div className='container mb-20 w-full px-10 md:mx-auto  animate__animated animate__bounceIn'>
        {berita.map((berita) => (
          <div
            className='w-full h-[400px] md:h-[280px] lg:h-full p-5 lg:p-10 md:flex md:flex-wrap mb-10 hover:bg-primary group rounded-xl cursor-pointer transition ease-in-out'
            key={berita.title}
          >
            <div className='w-full h-1/2 md:w-1/4 md:h-[150px] lg:h-[250px] rounded-xl overflow-hidden'>
              <img src={berita.image} alt='' className='w-full h-full' />
            </div>
            <div className='w-full h-1/2 md:w-3/4 md:px-5 md:h-full py-2 group-hover:text-white'>
              <h1 className='font-bold text-xl md:text-lg  uppercase'>
                {berita.title}
              </h1>
              <div className='w-full h-1/2'>
                <div className='w-full h-3/4'>
                  <p className='font-light line-clamp-3'>
                    {berita.description}
                  </p>
                </div>
                <div className='w-full h-1/4'>
                  <span className='font-light text-xs'>{berita.isoDate}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Hero
