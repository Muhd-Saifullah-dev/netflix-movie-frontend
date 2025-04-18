import axios from "axios";
import { create } from "zustand";
import toast from "react-hot-toast";



export const useAuthStore=create((set)=>({
    user:null,
    loading:false,
    error:null,
    isAuth:false,
    isCheckingAuth:true,
    Signup:async(credientials)=>{
        set({loading:true, error:null})
        
        try{
            const response=await axios.post("/api/v1/auth/signup",credientials)
            const data=await response.data
          
            const userData=data.response.data.user
            set({user:userData,loading:false,isAuth:true})
            toast.success(data.response.message)
           
        }catch(error){
           if(error.response?.data?.response?.status !==201){
            toast.error(error.response?.data?.response?.message)
            set({error:error.response.data.response.message, loading:false,user:null,isAuth:false})
           }
           else{
           toast.error("An error occured")
            set({error:error.message, loading:false,user:null,isAuth:false})
           }
        }
    },
    Login:async(credientials)=>{
        set({loading:true,error:null})
        try {
            const response=await axios.post("/api/v1/auth/login",credientials)
            const data=await response.data
           
            const userData=data.response.data.user
            set({user:userData,loading:false,isAuth:true})
            toast.success(data.response.message)
        } catch (error) {
            if(error.response?.data?.response?.status !==201){
                toast.error(error.response?.data?.response?.message)
                set({error:error.response.data.response.message, loading:false,user:null,isAuth:false})
               }
               else{
               toast.error("An error occured")
                set({error:error.message, loading:false,user:null,isAuth:false})
               }
        }
    },
    LogoutUser:async()=>{
        try {
            const response=await axios.post("/api/v1/auth/logout")
    set({isAuth:false,user:null})
    const data=await response.data
   toast.success(data.response.message)
        } catch (error) {
            toast.error("in logout function some issue occured")
            console.log("error in logout :: ",error)
            set({isAuth:true})
        }
    },
    authCheck:async()=>{
        set({isCheckingAuth:true})
        try {
            const response=await axios.get('/api/v1/auth/auth-check')
            const data=await response.data
          
            set({user:data.response.data,isAuth:true,isCheckingAuth:false})
            toast.success(data.response.message)
        } catch (error) {
            console.log("eror in authCheck :: ",error)
            set({isCheckingAuth:false})
         }
    }
}))

