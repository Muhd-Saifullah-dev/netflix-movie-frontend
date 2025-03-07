import React from 'react';
import Navbar from '../../components/Navbar';
import EXtractionPng from "../../../public/extraction.jpg";
import { Link } from 'react-router-dom';
import { Play, Info } from 'lucide-react';

const HomeScreen = () => {
  return (
    <div className='relative h-screen text-white'>
      {/* Navbar */}
      <Navbar />

      {/* Background Image */}
      <img
        src={EXtractionPng} // Correct usage
        alt="Extraction Image"
        className='absolute top-0 left-0 w-full h-full object-cover -z-50'
      />

      {/* Overlay */}
      <div className='absolute top-0 left-0 w-full h-full bg-black/50 -z-50' aria-hidden='true'></div>

      {/* Gradient Overlay */}
      <div className='bg-gradient-to-b from-black via-transparent to-transparent absolute w-full h-full top-0 left-0 -z-10'></div>

      {/* Content Container */}
      <div className='absolute top-0 left-0 w-full h-full flex flex-col px-8 md:px-16 lg:px-32 justify-center'>
        <div className='max-w-2xl'>
          <h1 className='text-4xl md:text-5xl lg:text-6xl font-extrabold text-balance'>
            Extraction
          </h1>
          <p className='mt-2 text-lg'>2014 | 18+</p>
          <p className='mt-4 text-lg'>
            Chris Hemsworth stars in this nonstop action-thriller with Rudraksh Jaiswal, Randeep Hooda, and Golshiften Farahani.
          </p>
        </div>

        <div className='flex mt-8'>
          <Link to={'/watch/123'} className='bg-white hover:bg-white/80 text-black font-bold py-2 px-4 rounded mr-4 flex items-center'>
            <Play className='size-6 mr-2 fill-black hover:fill-amber-700' />
            Play
          </Link>
          <Link to={'/watch/123'} className='bg-gray-500/70 hover:bg-gray-500 text-white py-2 px-4 rounded flex items-center'>
            <Info className='size-6 mr-2' />
            More Info
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomeScreen;