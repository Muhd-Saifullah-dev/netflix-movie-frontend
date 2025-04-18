import React from 'react'
import { useEffect,useState } from "react";
import { UseContentStore } from "../store/Content";
import axios from 'axios';


const UseGetTrendingContent = () => {
    const [trendingContent,setTrendingContent]=useState(null)
    const {ContentType}=UseContentStore()

    useEffect(()=>{
        const getTrendingcontent=async()=>{
            const response=await axios.get(`/api/v1/${ContentType}/trending`)
            const data=await response.data
           
            setTrendingContent(data.response.data)
            
        }
        getTrendingcontent()
    },[ContentType])


  return {trendingContent}
}

export default UseGetTrendingContent