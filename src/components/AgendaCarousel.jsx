import { Swiper, SwiperSlide } from "swiper/react"

import { Autoplay, Pagination } from "swiper/modules"
import { useEffect, useState } from "react"
import axios from "axios"
import loading from "../assets/icon/loading.gif"

export default function Carousel() {
  const [agenda, setAgenda] = useState([])
  useEffect(() => {
    axios
      .get("https://berita-indo-api.vercel.app/v1/tribun-news/jatim/travel")
      .then((result) => {
        setAgenda(result.data.data.slice(0, 8))
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

  if (agenda.length === 0) {
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
        breakpoints={{
          1024: {
            slidesPerView: 2,
          },
        }}
        navigation={false}
        modules={[Autoplay, Pagination]}
        className='mySwiper h-full w-full'
      >
        {agenda.map((agenda) => (
          <SwiperSlide key={agenda.title}>
            <div className='w-full h-full flex flex-wrap md:flex-nowrap gap-x-4 py-8 rounded-3xl cursor-pointer transition-all ease-in-out'>
              <div className='w-full md:w-1/2'>
                <div className='w-full rounded-xl overflow-hidden'>
                  <img src={agenda.image} alt='' className='w-full h-[150px]' />
                </div>
              </div>
              <div className='w-full md:w-1/2 h-full overflow-hidden'>
                <h1 className='text-lg font-bold text-white uppercase'>
                  {agenda.title}
                </h1>
                <p className='font-thin text-sm text-white'>
                  {agenda.publishedAt}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  )
}
