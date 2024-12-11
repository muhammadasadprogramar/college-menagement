import React from "react";

const Videos = () => {
  const videos = [
    {
      id: 1,
      title: "Video 1",
      url: "https://www.youtube.com/embed/video1"
    },
    {
      id: 2, 
      title: "Video 2",
      url: "https://www.youtube.com/embed/video2"
    },
    {
      id: 3,
      title: "Video 3", 
      url: "https://www.youtube.com/embed/video3"
    },
    {
      id: 4,
      title: "Video 4",
      url: "https://www.youtube.com/embed/video4"
    }
  ];

  return (
    <div className="py-8 px-4">
      <h1 className="mx-auto mt-4 sm:mt-8 text-gray-600 text-2xl sm:text-3xl md:text-4xl font-bold text-center">
      Prodigious of Government Colleges of Sindh
      </h1>
      <hr className="mx-auto mt-4 sm:mt-8 h-1 w-[60%] sm:w-[40%] md:w-[20%] bg-[#009879]" />
      
      <div className="max-w-7xl mx-auto mt-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {videos.map((video) => (
            <div key={video.id} className="w-full aspect-video">
              <iframe
                src={video.url}
                title={video.title}
                className="w-full h-full rounded-lg shadow-lg"
                allowFullScreen
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Videos;
