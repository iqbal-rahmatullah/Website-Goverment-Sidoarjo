import axios from "axios"
import { useEffect, useState } from "react"
import loading from "../../assets/icon/loading.gif"
import logo from "../../assets/img/logo_sidoarjo.png"

const Header = () => {
  const [agenda, setAgenda] = useState([])
  useEffect(() => {
    axios
      .get("https://berita-indo-api.vercel.app/v1/antara-news/top-news")
      .then((result) => {
        setAgenda(result.data.data.slice(0, 8))
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

  if (agenda.length === 0) {
    return (
      <div className='w-full py-20'>
        <img src={loading} alt='' className='mx-auto' />
      </div>
    )
  }

  return (
    <div className='w-full md:pt-20'>
      <div className='container md:mx-auto w-full px-5 py-10  animate__animated animate__bounceIn'>
        <h1 className='uppercase text-primary font-bold text-xl'>Informasi</h1>
        <div className='mt-3 w-full bg-gradient-to-r from-primary to-secondary p-3 md:p-8 rounded-lg'>
          <h3 className='text-white text-2xl md:text-3xl font-bold'>
            Informasi Mengenai Kabupaten Sidoarjo
          </h3>
          <p className='text-white font-light md:text-lg'>
            Pemerintah Kota Sidoarjo
          </p>
        </div>
        <div className='container md:grid md:grid-cols-3 md:gap-4 py-10 animate__animated animate__bounceIn'>
          {agenda.map((agenda) => (
            <div
              className='w-full h-[300px] mb-4 md:mb-0 md:h-full rounded-xl overflow-hidden hover:bg-primary transition ease-in-out group cursor-pointer'
              key={agenda.title}
            >
              <div className='w-full h-1/2 overflow-hidden'>
                <img
                  src={agenda.image}
                  alt=''
                  className='object-none object-center'
                />
              </div>
              <div className='w-full h-1/2 mt-2.5'>
                <div className='flex items-center gap-x-3 px-2 md:px-4'>
                  <img
                    src={logo}
                    className='w-[40px] h-[40px] bg-slate-200 shadow-md rounded-full'
                    alt=''
                  />
                  <div className='group-hover:text-white'>
                    <h1 className='font-bold text-xl uppercase'>
                      {agenda.title}
                    </h1>
                    <span className='font-light text-xs'>{agenda.isoDate}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Header
