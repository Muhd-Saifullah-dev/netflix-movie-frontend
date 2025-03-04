import React, { useState } from "react";
import Logo from "/netflix-logo.png";
import { Link, useNavigate } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import TvPng from "/tv.png";
import HeroVideo from "/hero-vid.m4v";
import StrangeImage from "/stranger-things-lg.png";
import StrangerThingSm from "/stranger-things-sm.png";
import DownloadGif from "/download-icon.gif";
import DevicePile from "/device-pile.png";
import VideoDevice from "/video-devices.m4v";
import KidPng from "/kids.png";

const AuthScreen = () => {
  const [email,setEmail]=useState("")
  const navigate=useNavigate()
  const handlerFromSubmit=(e)=>{
    e.preventDefault()
    navigate("/signup?email="+email)
    if(email.length === 0){
      navigate('/')
    }
  }
  return (
    <>
      {/* Hero Section */}
      <div className="hero-bg bg-cover bg-center relative">
        <header className="max-w-6xl mx-auto flex items-center justify-between p-4 pb-10">
          <img src={Logo} alt="Logo" className="w-32 md:w-52" />
          <Link
            to={"/login"}
            className="px-2 py-1 rounded bg-red-500 text-white font-semibold hover:text-red-500 hover:bg-white"
          >
            Sign In
          </Link>
        </header>

        {/* Hero Content */}
        <div className="flex flex-col items-center justify-center text-center max-w-6xl mx-auto py-40 text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Unlimited movies, TV shows, and more
          </h1>
          <p className="text-lg mb-4 text-white/85">
            Watch anywhere. Cancel anytime.
          </p>
          <p className="mb-4 text-white/85">
            Ready to watch? Enter your email to create or restart your
            membership.
          </p>
          <form onSubmit={handlerFromSubmit} className="flex flex-col md:flex-row gap-4 w-1/2">
            <input
              type="email"
              placeholder="Email address"
              className="bg-black/80 p-2 rounded border border-gray-600 flex-1 focus:outline-none text-gray-200"
               value={email}
              onChange={(e)=>setEmail(e.target.value)}
            />
            <button type="submit" className="bg-red-600 text-xl py-1 px-2 lg:text-xl lg:px-6 md:py-2 rounded flex justify-center items-center">
              Get started
              <ChevronRight className="size-6" />
            </button>
          </form>
        </div>

        {/* Separator */}
        <div className="h-4 w-full bg-[#232323]" aria-hidden="true"></div>

        {/* First Section */}
        <div className="py-10 bg-black text-white">
          <div className="flex max-w-6xl mx-auto items-center justify-center md:flex-row flex-col px-4 md:px-2">
            {/* Left Side */}
            <div className="flex-1 text-center md:text-left">
              <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
                Enjoy on your TV
              </h2>
              <p className="text-lg md:text-xl">
                Watch on Smart TVs, PlayStation, Xbox, Chromecast, Apple TV,
                Blu-ray players, and more.
              </p>
            </div>
            {/* Right Side */}
            <div className="flex-1 relative">
              <img src={TvPng} alt="Tv Image" className="mt-4 z-20 relative" />
              <video
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-1/2 z-10"
                playsInline
                autoPlay={true}
                muted
                loop
              >
                <source src={HeroVideo} type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
      </div>

      {/* Separator */}
      <div className="h-2 w-full bg-[#232323]" aria-hidden="true"></div>

      {/* Second Section */}
      <div className="py-10 bg-black text-white">
        <div className="flex max-w-6xl mx-auto justify-center items-center md:flex-row flex-col-reverse px-4 md:px-2">
          {/* Left Side */}
          <div className="flex-1">
            <div className="relative">
              <img src={StrangeImage} alt="stranger Image" className="mt-4" />

              <div className="flex items-center gap-2 absolute bottom-5 left-1/2 -translate-x-1/2 bg-black w-3/4 lg:w-1/2 h-24 border border-slate-500 rounded-md px-2">
                <img
                  src={StrangerThingSm}
                  alt="Stranger Image"
                  className="h-full"
                />
                <div className="flex justify-between items-center w-full">
                  <div className="flex flex-col gap-0">
                    <span className="text-md lg:text-lg font-bold">
                      Stranger Things
                    </span>
                    <span className="text-sm text-blue-500">
                      Downloading...
                    </span>
                  </div>
                  <img src={DownloadGif} alt="Download Gif" className="h-12" />
                </div>
              </div>
            </div>
          </div>
          {/* Right Side */}
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-balance leading-tight ">
              Download your shows to watch offline
            </h2>
            <p className="text-lg md:text-xl">
              save your favourites easily and always something to watch.
            </p>
          </div>
        </div>
      </div>

      {/*  sepeartor  */}
      <div className="h-2 w-full bg-[#232323]" aria-hidden="true"></div>
      {/* 3rd seperator  */}
      <div className="py-10 bg-black text-white">
        <div className="flex max-w-6xl mx-auto items-center justify-center md:flex-row flex-col px-4 md:px-2">
          {/* Left Side */}
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
              Watch everywhere
            </h2>
            <p className="text-lg md:text-xl">
              stream unlimited movies and TV shows on your phone, tablet, laptop
              and TV.
            </p>
          </div>
          {/* Right Side */}
          <div className="flex-1 relative overflow-hidden">
            <img
              src={DevicePile}
              alt="Tv Image"
              className="mt-4 z-20 relative"
            />
            <video
              className="absolute top-2 left-1/2 -translate-x-1/2  h-4/6 z-10 max-w-[63%]"
              playsInline
              autoPlay={true}
              muted
              loop
            >
              <source src={VideoDevice} type="video/mp4" />
            </video>
          </div>
        </div>
      </div>

      <div className="h-2 w-full bg-[#232323]" aria-hidden="true"></div>
      <div className="py-10 bg-black text-white">
        <div className="flex max-w-6xl mx-auto justify-center items-center flex-col-reverse md:flex-row px-4 md:px-2">
          {/* left side */}
          <div className="flex-1 relative ">
            <img src={KidPng} alt="kid Image " className="mt-4" />
          </div>
          {/* right side  */}
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
              Creates profile for kids
            </h2>
            <p className="text-lg md:text-xl">
              Send kids on adventures with their favourites characters in a
              space made just for them-free with your membership.{" "}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AuthScreen;
