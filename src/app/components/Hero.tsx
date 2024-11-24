import Image from 'next/image';
import { FaSearch } from 'react-icons/fa';

export default function HeroSection() {
  return (
    <div className="relative bg-gray-50 py-12 px-4 text-center overflow-hidden md:py-24 md:px-6">
      {/* Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover z-0"
        src="/veg.hd.mp4" // Update with your actual video file path
        autoPlay
        loop
        muted
        playsInline
      />

      <div className="relative max-w-2xl mx-auto z-10">
        <h1 className="text-4xl md:text-6xl font-bold text-white">
          Groceries Delivered in 90 Minutes
        </h1>
        <p className="text-white mt-2 text-base md:mt-4 md:text-lg">
          Get your healthy foods & snacks delivered at your doorstep all day, every day
        </p>

        <div className="flex justify-center mt-6 md:mt-9">
          <div className="flex items-center w-full max-w-lg border border-black rounded-md">
            <input
              type="text"
              placeholder="Search your products from here"
              className="w-full px-4 py-2 rounded-l-md focus:outline-none"
            />
            <button className="px-6 bg-green-600 text-white rounded-md rounded-r-md hover:bg-green-700 transition-all duration-300 flex items-center justify-center">
              <FaSearch className="text-white mr-2 " /> {/* Search Icon */}
              Search
            </button>
          </div>
        </div>
      </div>

      
    </div>
  );
}
