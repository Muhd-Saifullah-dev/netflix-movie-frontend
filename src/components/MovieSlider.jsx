import React,{useState,useEffect, useRef} from 'react'
import { UseContentStore } from '../store/Content'
import axios from "axios"
import  {Link } from "react-router-dom"
import {SMALL_IMG_BASE_URL } from "../utils/Contants"
import { ChevronLeft, ChevronRight } from 'lucide-react'
const MovieSlider = ({category}) => {
  const {ContentType}=UseContentStore()
  const [content,setContent]=useState([])
  const [showArrows,setShowArrows]=useState(false)

  const sliderRef=useRef()

    useEffect(() => {
    const getContent=async()=>{
      const response=await axios.get(`/api/v1/${ContentType}/${category}`)
      const data=await response.data
     
      
      const movieData=data.response.data.results
      setContent(movieData)
    
    }

    getContent()
  }, [ContentType,category])
  
  const scrollLeft=()=>{
    if(sliderRef.current){
      sliderRef.current.scrollBy({left:-sliderRef.current.offsetWidth, behavior:'smooth'})
    }
  }
  const scrollRight=()=>{
    if(sliderRef.current){
      sliderRef.current.scrollBy({left:sliderRef.current.offsetWidth, behavior:'smooth'})
    }
  }


const formatedCategory=category.replaceAll("_"," ")[0].toUpperCase() + category.replaceAll("_"," ").slice(1)
  
  const formatedContentType=ContentType==='movie'?"Movie":"Tv Shows"
  return (
    <div className='text-white relative px-5 md:px-20'
    onMouseEnter={()=>setShowArrows(true)}
    onMouseLeave={()=>setShowArrows(false)}
    >
      <h2 className='mb-4 text-2xl font-bold'>
        {formatedCategory} {formatedContentType}
      </h2>

      <div className='flex space-x-4 overflow-x-scroll scrollbar-hide ' ref={sliderRef}>
        {content.filter((item)=>item.backdrop_path!==null).map((item)=>{
         return(
          <Link to={`/watch/${item.id}`} className="min-w-[250px] relative group " key={item.id}>
            <div className='rounded-lg overflow-hidden'>
             <img src={`${SMALL_IMG_BASE_URL}${item.backdrop_path}`} alt="Movie Image" loading='lazy'
             className='transition-transform duration-300 ease-in-out group-hover:scale-125' />
            </div>
            <p className='mt-2 text-center'>
              {item.title || item.name}
            </p>
          </Link>
          ) 
        })}
       
      </div>
      {showArrows &&(
        <>
          <button className='absolute top-1/2 -translate-y-1/2 left-5 md:left-24 flex items-center justify-center size-12 rounded-full bg-black bg-opacity-50 hover:bg-opacity-75 text-white z-10' 
          onClick={scrollLeft}>
          <ChevronLeft size={17}/>
          </button> 
           <button className='absolute top-1/2 -translate-y-1/2 right-5 md:right-24 flex items-center justify-center size-12 rounded-full bg-black bg-opacity-50 hover:bg-opacity-75 text-white z-10' 
           onClick={scrollRight}
           >
          <ChevronRight size={17}/>
          </button>
        </>
      )}
      </div>
  )
}

export default MovieSlider