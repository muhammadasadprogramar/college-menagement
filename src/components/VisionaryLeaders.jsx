import React, { useState, useEffect } from 'react'

const VisionaryLeaders = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const leaders = [
    {
      id: 1,
      name: "John Smith", 
      position: "Chief Executive Officer",
      image: "/leader-1.jpg"
    },
    {
      id: 2,
      name: "Sarah Johnson",
      position: "Chief Technology Officer", 
      image: "/leader-2.jpg"
    },
    {
      id: 3,
      name: "Michael Brown",
      position: "Chief Operating Officer",
      image: "/leader-3.jpg"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) =>
        prevSlide === leaders.length - 1 ? 0 : prevSlide + 1
      );
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === leaders.length - 1 ? 0 : prevSlide + 1
    );
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? leaders.length - 1 : prevSlide - 1
    );
  };

  return (
    <div className='bg-[#BBF7D0] py-4 sm:py-8 md:py-12'>
      <h1 className='mx-auto mt-2 sm:mt-4 md:mt-8 text-gray-600 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-center px-4'>Visionary Leaders</h1>
      <hr className='mx-auto mt-2 sm:mt-4 md:mt-8 h-1 w-[80%] sm:w-[60%] md:w-[40%] lg:w-[20%] bg-[#009879]' />
      
      <div className='max-w-7xl mx-auto px-2 sm:px-4 md:px-6 lg:px-8 mt-4 sm:mt-6 md:mt-8 relative'>
        <button 
          onClick={prevSlide}
          className='absolute left-0 sm:left-4 top-1/2 transform -translate-y-1/2 bg-[#009879] text-white p-1 sm:p-2 rounded-full z-10 hover:bg-[#008069] transition-colors duration-200'
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-6 sm:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        
        <div className='flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8 transition-all duration-500 ease-in-out transform overflow-hidden'>
          {leaders.map((leader, index) => (
            <div 
              key={leader.id}
              className={`w-[280px] sm:w-[300px] md:w-[320px] bg-white rounded-lg shadow-lg p-4 sm:p-6 transform transition-all duration-500 ${
                index === currentSlide ? 'scale-100 sm:scale-105' : 'scale-90 sm:scale-95 opacity-50 sm:opacity-70'
              }`}
            >
              <img 
                src={leader.image} 
                alt={leader.name}
                className='w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-full mx-auto object-cover'
              />
              <h3 className='text-lg sm:text-xl font-semibold text-center mt-3 sm:mt-4 text-gray-800'>
                {leader.name}
              </h3>
              <p className='text-sm sm:text-base text-center text-gray-600 mt-1 sm:mt-2'>
                {leader.position}
              </p>
            </div>
          ))}
        </div>

        <button 
          onClick={nextSlide}
          className='absolute right-0 sm:right-4 top-1/2 transform -translate-y-1/2 bg-[#009879] text-white p-1 sm:p-2 rounded-full z-10 hover:bg-[#008069] transition-colors duration-200'
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-6 sm:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        <div className='flex justify-center mt-3 sm:mt-4 gap-1 sm:gap-2'>
          {leaders.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-1.5 sm:h-2 transition-all duration-300 ${
                index === currentSlide ? 'bg-[#009879] w-3 sm:w-4' : 'bg-gray-300 w-1.5 sm:w-2'
              } rounded-full`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default VisionaryLeaders

