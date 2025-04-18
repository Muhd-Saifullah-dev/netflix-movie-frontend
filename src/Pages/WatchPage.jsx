import React, { useEffect, useState,useRef } from 'react'
import { UseContentStore } from '../store/Content'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'
import toast from 'react-hot-toast'
import Navbar from '../components/Navbar'
import { ChevronLeft, ChevronRight, Space } from 'lucide-react'
import ReactPlayer from 'react-player'
import {ORIGINAL_IMG_BASE_URL,SMALL_IMG_BASE_URL} from "../utils/Contants"
import {formatedReleaseDate } from "../utils/dateFunction"
import WatchPageSkeleton from '../components/WatchPageSkeleton'


const WatchPage = () => {
   const{id}= useParams()
   const [trailers,setTrailers]=useState([])
   const [currentTrailerId,setTrailerId]=useState(0)
   const [loading,setLoading]=useState(true)
    const [content,setContent]=useState({})
    const [similar,setSimilar]=useState([])
    const playerRef = useRef(null);
    const [duration, setDuration] = useState(null);
  const sliderRef=useRef(null)
    const handleGetDuration = () => {
      if (playerRef.current) {
        const duration = playerRef.current.getDuration();
       
        setDuration(duration);
      }
    };

    const {ContentType}=UseContentStore()


    useEffect(()=>{
        const getTrailer=async()=>{
          try {
              const response=await axios.get(`/api/v1/${ContentType}/trailer/${id}`)
              const data=await response.data
              const TrailerData=data.response.data.results
              
              setTrailers(TrailerData)
          } catch (error) {
            if(error.message.includes('401')){
                toast.error("No movie trailer found sorry !")
            }
            else{
                toast.error("movie trailer not found !!")
            }
            setTrailers([])
          }
            }
            getTrailer()
    },[ContentType,id])

    useEffect(()=>{
        const getSimlarMovie=async()=>{
            try {
                const response=await axios.get(`/api/v1/${ContentType}/similar/${id}`)
                const data=await response.data
                const SimilarData=data.response.data.results
                console.log("data in Similar :: ",SimilarData)
                setSimilar(SimilarData)
            } catch (error) {
              if(error.message.includes('401')){
                  toast.error("No Similar movie found sorry !")
              }
              else{
                  toast.error("no similar movie found  !!")
              }
              setSimilar([])
            }
              }
              getSimlarMovie()
    },[ContentType,id])


     useEffect(()=>{
        const getMovieDetails=async()=>{
            try {
                const response=await axios.get(`/api/v1/${ContentType}/detail/${id}`)
                const data=await response.data
                const movieDetailData=data.repsonse.data
                console.log("data in details :: ",movieDetailData)
                setContent(movieDetailData)
            } catch (error) {
              if(error.message.includes('401')){
                  toast.error("No movie detail found sorry !")
              }
              else{
                  toast.error("movie  not found !!")
              }
              setContent(null)
            }
            finally{
                setLoading(false)
            }
              }
              getMovieDetails()
    },[ContentType,id])


    const handlePrev=()=>{
        if(currentTrailerId >0)
        setTrailerId(currentTrailerId-1)
    }
    const handleNext=()=>{
        if(currentTrailerId<trailers.length-1)
            setTrailerId(currentTrailerId+1)
    }

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

      if(loading) return (
        <div className='min-h-screen bg--black p-10 '>
            <WatchPageSkeleton/>
        </div>
      )
  return (
    <div className='bg-black min-h-screen text-white'>
        <div className='mx-auto container px-4 py-8 h-full'>
            <Navbar/>
            {trailers.length > 0 &&(
                <div className='flex justify-between items-center mb-4'>
                    <button className={`bg-gray-500/70 hover:bg-gray-500 text-white py-2 px-4 rounded ${currentTrailerId===0? "opacity-50 cursor-not-allowed ":"" }`}
                    disabled={currentTrailerId===0}
                    onClick={handlePrev}
                    >
                        <ChevronLeft size={24}/>
                    </button> 
                    <button className={`bg-gray-500/70 hover:bg-gray-500 text-white py-2 px-4 rounded ${currentTrailerId===trailers.length-1? "opacity-50 cursor-not-allowed ":"" }`}
                    disabled={currentTrailerId=== trailers.length-1}
                    onClick={handleNext}
                    >
                        <ChevronRight size={24}/>
                    </button>
                </div>
            )}

            <div className='aspect-video mb-8 p-2 sm:px-10 md:px-32'>
                {trailers.length > 0 &&(
                    <ReactPlayer controls={true} 
                    width={"100%"}
                    height={"70vh"}
                    className="mx-auto overflow-hidden rounded-lg"
                    url={`https://www.youtube.com/watch?v=${trailers[currentTrailerId].key}`}
                   
                    ref={playerRef}
                    onReady={() => {
                        console.log("Player is ready");
                        handleGetDuration(); // Call getDuration only after the player is ready
                      }}
                      onError={(e) => console.error("Player error:", e)}
                    />
                )}
                {trailers.length===0 || trailers.length===null || trailers.length===undefined &&(
                    <h2 className='text-xl text-center mt-5'>
                        No Trailer available for
                        <span className='font-bold text-red-600'>{content?.title || content?.name}</span>
                    </h2>
                )}
            </div>

            {/* movie details  */}
                <div className='flex flex-col md:flex-row items-center justify-between gap-20 max-w-6xl mx-auto'>
                    <div className='mb-4 md:mb-0'>
                        <h2 className='text-5xl  font-bold text-balance'>{content?.title || content?.name}</h2>
                        <p className='mt-2 text-lg'>
                            {formatedReleaseDate(content?.release_date || content?.first_air_date)} |{""}
                            {content?.adult?(
                                <span className='text-red-600'>18+</span>
                            ):(
                                <span className='text-green-600'>PG-13</span>
                            )}
                        </p>
                        <p className='mt-4 text-lg'>{content?.overview}</p>
                    </div>
                   {content.poster_path &&(
                     <img src={ORIGINAL_IMG_BASE_URL+content?.poster_path} alt="Poster Image" 
                     className='max-h-[600px] rounded-md' loading='lazy'/>
                   )}
                </div>

                            {/* similar content  */}

                            { similar.length>0 &&(
                                <div className='mt-12 max-w-5xl mx-auto relative'>
                                    <h3 className='text-3xl font-bold mb-4'>
                                        Similar Movies/TV show
                                    </h3>
                                    <div className='flex overflow-x-scroll  scrollbar-hide gap-4 pb-4 group' ref={sliderRef}>
                                        {similar.filter(item => item.poster_path!==null).map((content)=>(
                                            <Link  key={content.id} to={`/watch/${content.id}`}
                                            className='w-52 flex-none'
                                            >
                                                
                                                <img src={`${SMALL_IMG_BASE_URL}${content.poster_path}`} alt="Poster Path" 
                                             className='w-full h-auto rounded-md'   />

                                            <h4 className='mt-2 text-lg font-semibold'>{content?.title || content?.name}</h4>
                                            </Link>
                                        ))}
                                          <ChevroInLeft className='absolute top-1/2 -translate-y-1/2 left-5 md:left-24 flex items-center justify-center size-12 rounded-full bg-red-600 bg-opacity-50 hover:bg-opacity-75 text-white z-10'   onClick={scrollLeft}/>
                                                 
                                                  <ChevronRight className='absolute top-1/2 -translate-y-1/2 right-5 md:right-24 flex items-center justify-center size-12 rounded-full bg-red-600 bg-opacity-50 hover:bg-opacity-75 text-white z-10' 
                                                   onClick={scrollRight} />
                                                
                                    </div>
                                </div>
                            )}

        </div>
    </div>
  )
}

export default WatchPage