
import React,{useEffect} from 'react'
import { Navigate, Route,Routes} from "react-router-dom"
import HomePage from "./Pages/home/HomePage"
import SignupPage from "./Pages/SignupPage"
import LoginPage from "./Pages/LoginPage"
import AuthScreen from './Pages/home/AuthScreen'
import Footer from './components/Footer'
import Toastify from './hooks/toastify'
import { useAuthStore } from './store/authUser'
import { Loader } from 'lucide-react'

const App = () => {
 const {user,isCheckingAuth,authCheck}= useAuthStore()
 

 useEffect(()=>{
  authCheck()
 },[authCheck])

 if(isCheckingAuth){
  return (
    <div className='h-screen'>
      <div className='flex justify-center items-center bg-black/50 h-full'>
     <Loader className='animate-spin text-red-600 size-10' />
      </div>
    </div>
  )
 }
  return (
    <>
    <Routes>
     
      <Route exact path='/' element={<HomePage/>} />
      <Route exact path='/signup' element={ !user ? <SignupPage/> : <Navigate to={"/"} /> } />
      <Route exact path='/login' element={!user ?<LoginPage/>: <Navigate to={"/"} /> } />
      <Route exact path='/home' element={<AuthScreen/>} />
    </Routes>
    <Footer/>

   <Toastify/>
   </>
  )
}

export default App
