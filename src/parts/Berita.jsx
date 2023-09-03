import CarouselBerita from "../components/CarouselBerita"
import axios from "axios"
import { useEffect, useState } from "react"
import loading from "../assets/icon/loading.gif"

const Berita = () => {
  const [berita, setBerita] = useState([])
  const [rightBerita, setRightBerita] = useState([])

  useEffect(() => {
    axios
      .get("https://berita-indo-api.vercel.app/v1/tribun-news/jatim/bisnis")
      .then((result) => {
        setBerita(result.data.data)
      })
      .catch((err) => {
        console.log(err)
      })

    axios
      .get("https://berita-indo-api.vercel.app/v1/tribun-news/jatim/bisnis")
      .then((result) => {
        setRightBerita(result.data.data.slice(0, 7))
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

  if (berita.length === 0 || rightBerita.lengt === 0) {
    return (
      <div className='w-full'>
        <img src={loading} alt='' className='mx-auto' />
      </div>
    )
  }

  return (
    <section id='berita w-full'>
      <div className='w-full bg-[#F3F6FA]'>
        <div className='container w-full mx-auto p-5 md:px-20 md:py-10'>
          <div className='w-full flex flex-wrap'>
            <div className='w-full flex justify-between'>
              <h5
                className='font-bold uppercase md:text-xl text-primary'
                // data-aos='fade-right'
                // data-aos-offset='500'
              >
                Berita
              </h5>
              <button
                className='bg-secondary hover:bg-yellow-300 transition-all ease-in-out px-4 py-1 rounded-2xl font-medium lowercase'
                // data-aos='fade-left'
                // data-aos-offset='500'
              >
                <div className='flex items-center gap-2'>
                  <svg
                    className='w-4 text-primary'
                    aria-hidden='true'
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 20 14'
                  >
                    <g
                      stroke='currentColor'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='2'
                    >
                      <path d='M10 10a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z' />
                      <path d='M10 13c4.97 0 9-2.686 9-6s-4.03-6-9-6-9 2.686-9 6 4.03 6 9 6Z' />
                    </g>
                  </svg>
                  Lihat semua
                </div>
              </button>
            </div>
            <div className='w-full flex flex-wrap md:flex-nowrap justify-between md:gap-x-6 mt-8'>
              <div
                className='w-full md:w-3/4 bg-[#e5eaf2] p-6 rounded-3xl'
                // data-aos='fade-right'
                // data-aos-offset='500'
              >
                <h5 className='font-bold uppercase text-xl text-primary'>
                  Terbaru
                </h5>
                <div className='w-full flex flex-wrap md:flex-nowrap md:gap-x-4 mt-6 p-5 md:p-0 hover:bg-primary hover:text-white transition-all ease-in-out cursor-pointer rounded-3xl'>
                  <div className='w-full md:w-full lg:w-1/3 rounded-3xl overflow-hidden '>
                    <img src={berita[2].image} alt='' />
                  </div>
                  <div className='w-full md:w-2/3 md:py-2'>
                    <h1 className='text-xl md:text-lg lg:text-2xl mt-2 md:mt-0 font-bold uppercase'>
                      {berita[2].title}
                    </h1>
                    <p className='mt-2 md:mt-0 md:text-sm lg:text-base'>
                      {berita[2].contentSnippet}
                    </p>
                    <p className='font-thin text-sm'>{berita[2].isoDate}</p>
                  </div>
                </div>
                <div className='w-full px-4 mt-10'>
                  <CarouselBerita></CarouselBerita>
                </div>
              </div>
              <div
                className='w-full mt-5 md:mt-0 md:w-1/4 bg-[#e5eaf2] rounded-3xl'
                // data-aos='fade-left'
                // data-aos-offset='500'
              >
                <div className='w-full h-full p-3 overflow-hidden'>
                  {rightBerita.map((berita) => (
                    <div
                      className='w-full rounded-xl mb-4 p-3 hover:bg-primary hover:text-white transition-all ease-in-out'
                      key={berita.title}
                    >
                      <a href='#' className='w-full rounded-xl'>
                        <h1 className='text-sm md:text-xs lg:text-base'>
                          {berita.title}
                        </h1>
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Berita
