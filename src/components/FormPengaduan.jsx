import Swal from "sweetalert2"

const FormPengaduan = () => {
  const handleSubmit = (e) => {
    Swal.fire(
      "Terkirim!",
      "Laporan anda berhasil terkirim, tunggu balasan dari kami!",
      "success"
    )
    e.preventDefault()
  }
  return (
    <div className='w-full md:w-3/4 mx-auto bg-[#EEEEEE] shadow-sm p-3 md:p-6 animate__animated animate__bounceInLeft'>
      <div className='w-full bg-primary'>
        <h2 className='text-xl font-bold text-white py-4 px-3'>
          Sampaikan Laporan Anda
        </h2>
      </div>
      <div className='w-full py-6'>
        <form onSubmit={handleSubmit}>
          <div className='mb-6'>
            <label
              htmlFor='judul'
              className='block mb-2 text-sm font-medium text-gray-900'
            >
              Judul Laporan Anda
            </label>
            <input
              type='text'
              id='judul'
              className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5'
              placeholder='Judul Laporan'
              required
            ></input>
          </div>
          <div className='mb-6'>
            <label
              htmlFor='isi'
              className='block mb-2 text-sm font-medium text-gray-900'
            >
              Isi Laporan Anda
            </label>
            <textarea
              id='isi'
              rows='7'
              className='block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500'
              placeholder='Isi Laporan'
            ></textarea>
          </div>
          <div className='mb-6'>
            <label
              htmlFor='jenis'
              className='block mb-2 text-sm font-medium text-gray-900'
            >
              Jenis Laporan Anda
            </label>
            <select
              id='jenis'
              className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5'
            >
              <option>Jenis Laporan</option>
              <option>Pengaduan Fasilitas</option>
              <option>Pelanggaran HAM</option>
              <option>Kesehatan Lingkungan</option>
              <option>Pendidikan</option>
              <option>Keselamatan Jalan</option>
              <option>Ketidakpatuhan Hukum</option>
              <option>Lainnya</option>
            </select>
          </div>
          <div className='mb-6'>
            <label
              htmlFor='jenis'
              className='block mb-2 text-sm font-medium text-gray-900'
            >
              Lampiran
            </label>
            <input
              type='file'
              className='block w-full text-sm text-slate-500 bg-white rounded-lg file:mr-4 file:py-2 file:px-4 file:border-0
      file:text-sm file:font-semibold
      file:bg-slate-100 file:text-primary
      hover:file:bg-slate-50 cursor-pointer file:cursor-pointer'
            ></input>
            <div className='mt-1 text-xs text-red-600' id='user_avatar_help'>
              Lampirkan bukti yang relevan dengan laporan anda.
            </div>
          </div>
          <button
            type='submit'
            className='text-white bg-primary hover:bg-green-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center'
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  )
}

export default FormPengaduan
