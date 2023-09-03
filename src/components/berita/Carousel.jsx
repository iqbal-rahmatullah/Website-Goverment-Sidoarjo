// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, Navigation } from "swiper/modules"
import { useEffect, useState } from "react"
import axios from "axios"
import loading from "../../assets/icon/loading.gif"

export default function Carousel() {
  const [berita, setBerita] = useState([])

  useEffect(() => {
    axios
      .get(
        "https://newsapi.org/v2/everything?q=sidoarjo&apiKey=0516f2bad3a3401098b3372d7d256d7a"
      )
      .then((result) => {
        setBerita(result.data.articles)
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
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Navigation]}
        className='mySwiper h-full w-full'
      >
        {berita.map((berita) => (
          <SwiperSlide key={berita.title}>
            <div className='w-full h-full'>
              <div className='container w-full px-5 py-8'>
                <h1 className='uppercase text-primary font-bold text-xl'>
                  Berita
                </h1>
                <div className='w-full h-[500px] mt-4 flex flex-wrap rounded-xl bg-primary overflow-hidden'>
                  <img
                    className='w-full h-1/2'
                    src={berita.urlToImage}
                    alt=''
                  />
                  <div className='w-full h-1/2 p-3'>
                    <h1 className='text-white font-bold text-xl uppercase'>
                      {berita.title}
                    </h1>
                    <div className='w-full h-1/2'>
                      <div className='w-full h-3/4'>
                        <p className='text-white font-light line-clamp-3'>
                          {berita.description}
                        </p>
                      </div>
                      <div className='w-full h-1/4'>
                        <span className='text-white font-light text-xs'>
                          {berita.publishedAt}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  )
}
