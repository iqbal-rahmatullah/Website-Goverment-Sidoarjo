import AgendaCarousel from "../components/AgendaCarousel"

const Agenda = () => {
  return (
    <section id='agenda'>
      <div className='w-full py-10'>
        <div className='container md:mx-auto px-5 md:px-20 py-10 flex justify-center'>
          <div
            className='container w-full md:w-3/4 bg-primary flex flex-col justify-center items-center p-10 rounded-3xl'
            data-aos='fade-right'
            data-aos-offset='500'
          >
            <div className='bg-secondary px-6 py-4 rounded-xl -mt-16'>
              <h1 className='uppercase text-lg font-bold'>Agenda Kami</h1>
            </div>
            <div className='w-full md:p-2'>
              <AgendaCarousel></AgendaCarousel>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Agenda
