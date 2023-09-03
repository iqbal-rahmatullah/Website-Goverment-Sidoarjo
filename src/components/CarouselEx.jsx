"use client"
import { Carousel } from "flowbite-react"
import TransportIcon from "../assets/icon/transport.gif"
import WisataIcon from "../assets/icon/wisata.gif"
import BeritaIcon from "../assets/icon/berita.gif"

export default function AboutCarousel() {
  return (
    <div className='w-full h-full'>
      <Carousel>
        <a href='#' className='w-full h-full'>
          <div className='w-full h-full flex flex-wrap justify-center items-center border border-primary rounded-lg lg:rounded-none'>
            <div className='w-full flex justify-center'>
              <img src={TransportIcon} alt='' className='w-40' />
            </div>
            <div className='w-full h-1/2 text-center text-primary font-bold text-2xl uppercase'>
              Transportasi
            </div>
          </div>
        </a>
        <a href='#' className='w-full h-full'>
          <div className='w-full h-full flex flex-wrap justify-center items-center border border-primary rounded-lg lg:rounded-none'>
            <div className='w-full flex justify-center'>
              <img src={WisataIcon} alt='' className='w-40' />
            </div>
            <div className='w-full h-1/2 text-center text-primary font-bold text-2xl uppercase'>
              Wisata
            </div>
          </div>
        </a>
        <a href='#' className='w-full h-full'>
          <div className='w-full h-full flex flex-wrap justify-center items-center border border-primary rounded-lg lg:rounded-none'>
            <div className='w-full flex justify-center'>
              <img src={BeritaIcon} alt='' className='w-40' />
            </div>
            <div className='w-full h-1/2 text-center text-primary font-bold text-2xl uppercase'>
              Berita
            </div>
          </div>
        </a>
        {/* <img
          alt='...'
          src='https://www.twibbic.net/blog/wp-content/uploads/2023/01/Download-Logo-Kabupaten-Sidoarjo-Lengkap-Format-PNG-EPS-CDR-AI-JPEG-Google-Drive.webp'
        />
        <img
          alt='...'
          src='https://www.twibbic.net/blog/wp-content/uploads/2023/01/Download-Logo-Kabupaten-Sidoarjo-Lengkap-Format-PNG-EPS-CDR-AI-JPEG-Google-Drive.webp'
        /> */}
      </Carousel>
    </div>
  )
}
