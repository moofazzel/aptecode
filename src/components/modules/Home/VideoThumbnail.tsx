"use client";

import { PlayIcon } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

const VideoThumbnail = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const handlePlayClick = () => {
    setIsVideoOpen(true);
    // Small delay to ensure modal is rendered before animation starts
    setTimeout(() => {
      setIsAnimating(true);
    }, 10);
  };

  const handleCloseVideo = () => {
    setIsAnimating(false);
    // Delay closing to allow animation to complete
    setTimeout(() => {
      setIsVideoOpen(false);
    }, 300);
  };

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isVideoOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    // Cleanup on unmount
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isVideoOpen]);

  return (
    <>
      <div className="absolute -bottom-[30px] sm:-bottom-[40px] md:-bottom-[50px] right-[10px] sm:right-[30px] md:right-[50px] lg:right-[70px] hidden sm:block">
        <div
          className="relative group cursor-pointer border-4 sm:border-6 md:border-8 border-[#11151C] border-b-0"
          onClick={handlePlayClick}
        >
          <div className="w-[200px] h-[155px] sm:w-[250px] sm:h-[193px] md:w-[300px] md:h-[232px]">
            <Image
              src="/img/images/req-img.jpg"
              alt="Video thumbnail showing business professionals in office"
              width={270}
              height={232}
              className="w-full h-full object-cover rounded-t-sm"
            />
          </div>

          {/* Play Button */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-full p-2 sm:p-3 group-hover:scale-110 transition-transform duration-300">
            <PlayIcon className="w-6 h-6 sm:w-8 sm:h-8 text-blue-600" />
          </div>
        </div>
      </div>

      {/* YouTube Video Modal */}
      {isVideoOpen && (
        <div
          className={`fixed inset-0 bg-black flex items-center justify-center z-50 transition-all duration-300 ease-out ${
            isAnimating
              ? "bg-opacity-75 backdrop-blur-sm"
              : "bg-opacity-0 backdrop-blur-none"
          }`}
          onClick={handleCloseVideo}
        >
          <div
            className={`relative w-full max-w-4xl mx-4 transition-all duration-300 ease-out transform ${
              isAnimating
                ? "scale-100 opacity-100 translate-y-0"
                : "scale-95 opacity-0 translate-y-4"
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={handleCloseVideo}
              className="absolute -top-12 right-0 text-white text-2xl hover:text-gray-300 transition-all duration-200 hover:scale-110 z-10"
            >
              ✕
            </button>

            {/* YouTube Video */}
            <div className="relative w-full h-0 pb-[56.25%] rounded-lg overflow-hidden shadow-2xl">
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default VideoThumbnail;
