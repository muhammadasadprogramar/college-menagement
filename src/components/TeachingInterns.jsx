import React from 'react'

const TeachingInterns = () => {
  return (
    <div className='flex items-center flex-col py-4 sm:py-8 px-4 sm:px-8'>
      <h1 className='mx-auto mt-4 sm:mt-8 text-gray-600 text-2xl sm:text-3xl md:text-4xl font-bold text-center'>College Teaching Interns Program</h1>
      <hr className='mx-auto mt-4 sm:mt-8 h-1 w-[60%] sm:w-[40%] md:w-[20%] bg-[#009879]' />
      <div className='w-full max-w-7xl'>
        <div className='w-full flex items-center flex-col'>
          <a className='w-[95%] sm:w-[90%] max-w-[360px]' href="https://www.dgcs.gos.pk/ctip/" target='_blank'>
          <button className='w-full mt-4 sm:mt-8 md:mt-10 btn-shadow py-2 rounded-md text-white bg-[#009879] hover:bg-[#008069] text-xs sm:text-sm md:text-base transition-colors duration-200'>
            APPLY ONLINE
          </button>
          </a>
          <p className='mt-3 sm:mt-4 md:mt-5 text-sm sm:text-base text-center px-4'>
            Online Applications will be available from 26th November 2025
          </p>
          <a className='w-[95%] sm:w-[90%] max-w-[360px]' href="https://www.dgcs.gos.pk/pdf/Interns.pdf" target='_blank'>
          <button className='w-full mt-4 sm:mt-8 md:mt-10 btn-shadow py-2  rounded-md text-white bg-[#009879] hover:bg-[#008069] text-xs sm:text-sm md:text-base transition-colors duration-200'>
            VACANCY POSITION (College wise)
          </button>
          </a>
        </div>
      </div>
    </div>
  )
}

export default TeachingInterns