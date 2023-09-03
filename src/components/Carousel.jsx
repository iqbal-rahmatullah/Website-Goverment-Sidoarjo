// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react"
import TransportIcon from "../assets/icon/transport.gif"
import WisataIcon from "../assets/icon/wisata.gif"
import BeritaIcon from "../assets/icon/berita.gif"

// Import Swiper styles

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules"

export default function Carousel() {
  return (
    <>
      <Swiper
        slidesPerView={2}
        spaceBetween={30}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className='mySwiper h-full w-full lg:mx-6'
      >
        <SwiperSlide>
          <div className='h-full w-full flex justify-center flex-wrap items-center border border-primary overflow-hidden rounded-3xl'>
            <div className='w-full flex justify-center'>
              <img src={TransportIcon} alt='' className='w-full lg:w-40' />
            </div>
            <div className='w-full text-center text-primary font-bold text-lg lg:text-2xl uppercase'>
              Transportasi
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='h-full w-full flex justify-center flex-wrap items-center border border-primary overflow-hidden rounded-3xl'>
            <div className='w-full flex justify-center'>
              <img src={WisataIcon} alt='' className='w-full lg:w-40' />
            </div>
            <div className='w-full text-center text-primary font-bold text-lg lg:text-2xl uppercase'>
              Wisata
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='h-full w-full flex justify-center flex-wrap items-center border border-primary overflow-hidden rounded-3xl'>
            <div className='w-full flex justify-center'>
              <img src={BeritaIcon} alt='' className='w-full lg:w-40' />
            </div>
            <div className='w-full text-center text-primary font-bold text-lg lg:text-2xl uppercase'>
              Berita
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  )
}
