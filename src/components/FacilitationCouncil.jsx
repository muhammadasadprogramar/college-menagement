import React from 'react'

const FacilitationCouncil = () => {
  return (
    <div>
      <section className="bg-[#BBF7D0] py-8 sm:py-12 md:py-16" id="external-links">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 sm:gap-6 md:gap-8">
            <div className="w-full md:w-5/12">
              <img 
                alt="SIFV" 
                className="w-[200px] h-[200px] sm:w-[250px] sm:h-[250px] md:w-[300px] md:h-[300px] object-cover mx-auto"
                src="./facilitationCouncil.jpg"
              />
            </div>
            <div className="w-full md:w-7/12 flex justify-center items-center">
              <a 
                href="/" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto"
              >
                <button
                  type="button"
                  className="bg-[#009879] hover:bg-[#008069] text-white font-medium px-4 sm:px-6 py-2 sm:py-3 rounded-md transition duration-300 w-full sm:w-[350px] text-xs sm:text-sm md:text-base"
                >
                  SPECIAL INVESTMENT FACILITATION COUNCIL
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default FacilitationCouncil