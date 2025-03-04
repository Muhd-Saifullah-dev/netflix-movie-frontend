import React, { useState } from "react";
import { Link } from "react-router-dom";
import NetflixLogo from "/public/netflix-logo.png";
import { Search, LogOut, Menu } from "lucide-react";
import AvatarImage from "/public/avatar2.jpg";
import { UseContentStore } from "../store/Content";
import { useAuthStore } from "../store/authUser";
const Navbar = () => {
 const {LogoutUser}= useAuthStore()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  const {ContentType, SetContentType}=UseContentStore()
 

  return (
    <header className="max-w-6xl mx-auto flex flex-wrap items-center justify-between p-4 h-20 relative z-50">
      {/* Netflix Logo and Desktop Links */}
      <div className="flex items-center gap-10">
        <Link to={"/"}>
          <img src={NetflixLogo} alt="Netflix Logo" className="w-32 sm:w-40" />
        </Link>

        {/* Desktop Links */}
        <div className="hidden sm:flex gap-2 items-center">
          <Link to="/" className="hover:underline underline-offset-4" onClick={()=>SetContentType("movie")}>
            Movies
          </Link>
          <Link to="/" className="hover:underline" onClick={()=>SetContentType("tv")}>
            Tv Shows
          </Link>
          <Link to="/" className="hover:underline">
            Search History
          </Link>
        </div>
      </div>

      {/* Desktop Icons */}
      <div className="flex gap-2 items-center">
        <Link to={"/search"}>
          <Search className="size-6 cursor-pointer" />
        </Link>
        <img src={AvatarImage} alt="Avatar Image" className="h-8 rounded cursor-pointer" />
        <LogOut className="size-6 cursor-pointer" onClick={()=>LogoutUser()}/>
        {/* Mobile Menu Toggle */}
        <div className="sm:hidden">
          <Menu className="size-6 cursor-pointer" onClick={toggleMobileMenu} />
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`absolute top-full left-0 text-center bg-black h-screen w-full transform transition-transform duration-300 ease-in-out z-40 ${
          isMobileMenuOpen ? "translate-x-0" : "-translate-x-[200%]"
        }`}
      >
        <div className="p-4">
          <Link
            to={"/"}
            className="block hover:underline p-2"
            onClick={toggleMobileMenu}
          >
            Movies
          </Link>
          <Link
            to={"/"}
            className="block hover:underline p-2"
            onClick={toggleMobileMenu}
          >
            Tv Shows
          </Link>
          <Link
            to={"/"}
            className="block hover:underline p-2"
            onClick={toggleMobileMenu}
          >
            Search History
          </Link>
        </div>
      </div>

      {/* Overlay for Mobile Menu */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-30 sm:hidden"
          onClick={toggleMobileMenu}
        ></div>
      )}
    </header>
  );
};

export default Navbar;