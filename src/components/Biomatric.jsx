import React from 'react'
import { Link } from 'react-router-dom'
import { IoClose } from "react-icons/io5"

const Biomatric = () => {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gray-50 py-6 sm:py-8 md:py-12 px-4 sm:px-6 lg:px-8">
      <div className="bg-white relative p-4 sm:p-6 rounded-lg shadow-lg w-full max-w-[320px] sm:max-w-[380px] md:max-w-md mx-auto">
        <Link to='/'>
          <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full flex items-center justify-center cursor-pointer bg-red-600 absolute right-3 sm:right-5 top-3 sm:top-5 text-white font-medium text-xl sm:text-2xl">
            <IoClose />
          </div>
        </Link>
        
        <div className="text-center mb-4 sm:mb-6">
          <img 
            src="/single-logo.png"
            alt="logo" 
            className="w-12 sm:w-16 mx-auto"
          />
          <h2 className="text-lg sm:text-xl font-semibold mt-3 sm:mt-4">College Education Department</h2>
          <h2 className="text-lg sm:text-xl font-semibold">Management & Information System</h2>
          <p className='mt-2 sm:mt-3 text-sm sm:text-base'>Enter your personal no to get Bio Metric Certificate</p>
        </div>

        <form onSubmit={(e) => e.preventDefault()} method="POST" className="space-y-3 sm:space-y-4">
          <div>
            <input 
              type="text" 
              className="mt-1 block w-full px-2 sm:px-3 py-1.5 sm:py-2 border border-gray-300 rounded-md shadow-sm focus:ring-[#009879] focus:border-[#009879] text-xs sm:text-sm"
              placeholder="Personnel no" 
              required
            />
          </div>

          <div className="text-center">
            <button 
              type="submit" 
              className="w-full bg-[#009879] text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-md hover:bg-[#008069] focus:outline-none focus:ring-2 focus:ring-[#009879] text-xs sm:text-sm"
            >
              Get Certificate
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Biomatric