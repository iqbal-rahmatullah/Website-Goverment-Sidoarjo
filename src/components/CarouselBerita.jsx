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
      .get("https://berita-indo-api.vercel.app/v1/tribun-news/jatim/bisnis")
      .then((result) => {
        setbotBerita(result.data.data)
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
            <div className='h-full w-full p-5 md:p-0 hover:bg-primary group rounded-3xl hover:text-white transition-all ease-in-out cursor-pointer'>
              <div className='w-full h-full'>
                <img
                  src={item.image}
                  alt=''
                  className='w-full h-[200px] md:h-[160px] rounded-3xl'
                />
              </div>
              <div className='md:p-2'>
                <h1 className='text-lg font-bold uppercase group-hover:text-white'>
                  {item.title}
                </h1>
                <p className='font-thin text-sm group-hover:text-white'>
                  {item.isoDate}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  )
}
