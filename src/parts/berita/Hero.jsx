import { useEffect, useState } from "react"
import Carousel from "../../components/berita/Carousel"
import axios from "axios"
import loading from "../../assets/icon/loading.gif"

const Hero = () => {
  const [berita, sertBerita] = useState([])
  useEffect(() => {
    axios
      .get(
        "https://newsapi.org/v2/everything?q=sidoarjo&apiKey=0516f2bad3a3401098b3372d7d256d7a"
      )
      .then((result) => {
        sertBerita(result.data.articles)
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
    <div className='w-full'>
      <div className='container w-full px-5 py-8'>
        <Carousel></Carousel>
      </div>
      <div className='container mb-20 w-full px-10'>
        {berita.map((berita) => (
          <div className='w-full h-[400px] my-4' key={berita.title}>
            <div className='w-full h-1/2 rounded-xl overflow-hidden'>
              <img src={berita.urlToImage} alt='' className='w-full h-full' />
            </div>
            <div className='w-full h-1/2 py-2'>
              <h1 className='font-bold text-xl uppercase'>{berita.title}</h1>
              <div className='w-full h-1/2'>
                <div className='w-full h-3/4'>
                  <p className='font-light line-clamp-3'>
                    {berita.description}
                  </p>
                </div>
                <div className='w-full h-1/4'>
                  <span className='font-light text-xs'>
                    {berita.publishedAt}
                  </span>
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
