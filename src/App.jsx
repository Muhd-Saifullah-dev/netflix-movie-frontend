
import React from 'react'
import { Route,Routes} from "react-router-dom"
import HomePage from "./Pages/home/HomePage"
import SignupPage from "./Pages/SignupPage"
import LoginPage from "./Pages/LoginPage"
import AuthScreen from './Pages/home/AuthScreen'
import Footer from './components/Footer'

const App = () => {
  return (
    <>
    <Routes>
      <Route exact path='/' element={<HomePage/>} />
      <Route exact path='/signup' element={<SignupPage/>} />
      <Route exact path='/login' element={<LoginPage/>} />
      <Route exact path='/home' element={<AuthScreen/>} />
    </Routes>
   <Footer/>
   </>
  )
}

export default App
