import FormPengaduan from "../components/FormPengaduan"

const PengaduanHero = () => {
  return (
    <section id='pengaduan' className='py-10 md:pt-32'>
      <div className='container mx-auto px-4 md:px-0 animate__animated animate__bounceIn'>
        <h1 className='font-bold text-2xl'>
          Tulis{" "}
          <span className='font-extrabold text-4xl text-primary'>
            Pengaduan
          </span>
        </h1>
        <p className='text-black font-light mt-4'>
          Apabila Anda mendapati adanya pelanggaran di lingkungan Pemerintah
          Kota Sidoarjo, laporkan pada Inspektorat Kota Sidoarjo. Laporan Anda
          akan ditindaklanjuti apabila sesuai dengan syarat/kriteria Laporan.
          Anda tidak perlu khawatir terungkapnya identitas diri anda karena
          Inspektorat Kota Sidoarjo akan{" "}
          <span className='text-red-500 font-bold'>
            MERAHASIAKAN & MELINDUNGI
          </span>{" "}
          Identitas Anda sebagai whistleblower. Kami sangat menghargai informasi
          yang Anda laporkan. Fokus kami kepada materi informasi yang Anda
          Laporkan. Sebagai bentuk terimakasih kami terhadap laporan yang Anda
          kirim, kami berkomitmen untuk merespon laporan Anda selambat-lambatnya
          15 (Lima Belas) hari kerja sejak laporan Anda dikirim.
        </p>
        <div className='w-full mt-5'>
          <FormPengaduan></FormPengaduan>
        </div>
      </div>
    </section>
  )
}

export default PengaduanHero
