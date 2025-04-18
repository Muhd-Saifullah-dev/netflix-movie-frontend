import React, { useState } from 'react';
import Navbar from '../../components/Navbar';
import EXtractionPng from "../../../public/extraction.jpg";
import { Link } from 'react-router-dom';
import { Play, Info, LoaderPinwheel } from 'lucide-react';
import UseGetTrendingContent from '../../hooks/UseGetTrendingContent';
import {MOVIE_CATEGORIES, ORIGINAL_IMG_BASE_URL, TV_CATEGORIES } from "../../utils/Contants"
import { UseContentStore } from '../../store/Content';
import MovieSlider from "../../components/MovieSlider"
const HomeScreen = () => {
 const {trendingContent}= UseGetTrendingContent()
 const{ContentType}=UseContentStore()
 const [imgLoad,setImgLoad]=useState(true)

 // add loading spinner 
 {if(trendingContent===null || trendingContent===undefined || trendingContent.length===0){
  return(
    <div className='h-screen text-white relative'>
      <Navbar/>
      <div className='absolute top-0 left-0 w-full h-full bg-black/70 flex items-center justify-center -z-10 shimmer'>
       {/* loading spinner is div */}
      </div>
    </div>
  )
 }}
  return (
    <>
    <div className='relative h-screen text-white'>
      {/* Navbar */}
      <Navbar />

      {imgLoad &&(
         <div className='absolute top-0 left-0 w-full h-full bg-black/70 flex items-center justify-center -z-10 shimmer'>
         {/* loading spinner is div */}
        </div>
      )}
      <img
        src={`${ORIGINAL_IMG_BASE_URL}/${trendingContent?.backdrop_path}`} // Correct usage
        alt="Extraction Image"
        className='absolute top-0 left-0 w-full h-full object-cover -z-50'
        onLoad={()=>setImgLoad(false)}
      />

      {/* Overlay */}
      <div className='absolute top-0 left-0 w-full h-full bg-black/50 -z-50' aria-hidden='true'></div>

      {/* Gradient Overlay */}
      <div className='bg-gradient-to-b from-black via-transparent to-transparent absolute w-full h-full top-0 left-0 -z-10'></div>

      {/* Content Container */}
      <div className='absolute top-0 left-0 w-full h-full flex flex-col px-8 md:px-16 lg:px-32 justify-center'>
        <div className='max-w-2xl'>
          <h1 className='text-4xl md:text-5xl lg:text-6xl font-extrabold text-balance'>
          {trendingContent?.title || trendingContent?.original_title || trendingContent.name}
          </h1>
          <p className='mt-2 text-lg'>{trendingContent?.release_date?.split("-")[0] || "2024"} | {trendingContent?.adult? "18+" :"PG-13"}</p>
          <p className='mt-4 text-lg'>
          {trendingContent?.overview.length > 200 ? trendingContent?.overview.slice(0,200)+"..." :trendingContent?.overview}
          </p>
        </div>

        <div className='flex mt-8'>
          <Link to={`/watch/${trendingContent?.id}`} className='bg-white hover:bg-white/80 text-black font-bold py-2 px-4 rounded mr-4 flex items-center'>
            <Play className='size-6 mr-2 fill-black hover:fill-amber-700' />
            Play
          </Link>
          <Link to={`/watch/${trendingContent?.id}`} className='bg-gray-500/70 hover:bg-gray-500 text-white py-2 px-4 rounded flex items-center'>
            <Info className='size-6 mr-2' />
            More Info
          </Link>
        </div>
      </div>
    </div>
        <div className='flex flex-col gap-10 bg-black py-10'>
          {ContentType==="movie"?(
            MOVIE_CATEGORIES.map((category)=><MovieSlider key={category} category={category}/>)
          ):(TV_CATEGORIES.map((category)=><MovieSlider key={category} category={category}/>))}
        </div>
    </>
  );
};

export default HomeScreen;