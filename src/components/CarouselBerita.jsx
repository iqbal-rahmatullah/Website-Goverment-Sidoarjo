// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, Navigation } from "swiper/modules"
import { useEffect, useState } from "react"
import axios from "axios"
import loading from "../assets/icon/loading.gif"

export default function CarouselBerita() {
  const [botBerita, setbotBerita] = useState([])
  useEffect(() => {
    axios
      .get(
        "https://newsapi.org/v2/everything?q=pemerintah&p=4&apiKey=0516f2bad3a3401098b3372d7d256d7a"
      )
      .then((result) => {
        setbotBerita(result.data.articles)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

  if (botBerita.length === 0) {
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
        breakpoints={{
          768: {
            slidesPerView: 3,
          },
        }}
        className='mySwiper h-full w-full'
      >
        {botBerita.map((item) => (
          <SwiperSlide key={item.title}>
            <div className='h-full w-full'>
              <div className='w-full h-full'>
                <img
                  src={item.urlToImage}
                  alt=''
                  className='w-full h-[200px] md:h-[160px] rounded-3xl'
                />
              </div>
              <h1 className='text-lg font-bold uppercase'>{item.title}</h1>
              <p className='font-thin text-sm'>{item.publishedAt}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  )
}
