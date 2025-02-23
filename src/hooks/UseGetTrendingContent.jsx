import React from 'react'
import { useEffect,useState } from "react";
import { UseContentStore } from "../store/Content";


const UseGetTrendingContent = () => {
    const [trendingContent,setTrendingContent]=useState(null)
    const {ContentType}=UseContentStore()

    useEffect(()=>{
        const getTrendingcontent=async()=>{
            
        }
    },[ContentType])
  return (
    <div>UseGetTrendingContent</div>
  )
}

export default UseGetTrendingContent