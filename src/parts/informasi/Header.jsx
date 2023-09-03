import axios from "axios"
import { useEffect, useState } from "react"
import loading from "../../assets/icon/loading.gif"
import logo from "../../assets/img/logo_sidoarjo.png"

const Header = () => {
  const [agenda, setAgenda] = useState([])
  useEffect(() => {
    axios
      .get(
        "https://newsapi.org/v2/everything?q=sehat&apiKey=0516f2bad3a3401098b3372d7d256d7a&pageSize=6"
      )
      .then((result) => {
        setAgenda(result.data.articles)
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
    <div className='w-full'>
      <div className='container w-full px-5 py-10'>
        <h1 className='uppercase text-primary font-bold text-xl'>Informasi</h1>
        <div className='mt-3 w-full bg-primary p-3 rounded-lg'>
          <h3 className='text-white text-2xl font-bold'>
            Informasi Mengenai Kabupaten Sidoarjo
          </h3>
          <p className='text-white font-light'>Pemerintah Kota Sidoarjo</p>
        </div>
        <div className='container py-10'>
          {agenda.map((agenda) => (
            <div
              className='w-full h-[300px] rounded-xl overflow-hidden'
              key={agenda.title}
            >
              <div className='w-full h-1/2 overflow-hidden'>
                <img
                  src={agenda.urlToImage}
                  alt=''
                  className='object-none object-center'
                />
              </div>
              <div className='w-full h-1/2 mt-2.5'>
                <div className='flex items-center gap-x-3'>
                  <img
                    src={logo}
                    className='w-[40px] h-[40px] bg-slate-200 shadow-md rounded-full'
                    alt=''
                  />
                  <div className=''>
                    <h1 className='font-bold text-xl uppercase'>
                      {agenda.title}
                    </h1>
                    <span className='font-light text-xs'>
                      {agenda.publishedAt}
                    </span>
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
