import axios from "axios"
import { useEffect, useState } from "react"
import loading from "../../assets/icon/loading.gif"

const Header = () => {
  const [agenda, setAgenda] = useState([])
  useEffect(() => {
    axios
      .get(
        "https://newsapi.org/v2/everything?q=sidoarjo&apiKey=0516f2bad3a3401098b3372d7d256d7a"
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
          <div className='w-full h-[300px] rounded-xl overflow-hidden bg-primary'>
            <div className='w-full h-1/2 overflow-hidden'>
              <img src={agenda[0].urlToImage} alt='' />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
