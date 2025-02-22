import React, { useState } from "react";
import { Link } from "react-router-dom";
import NetflixLogo from "/public/netflix-logo.png";
import { Search, UserPen, LogOut, Menu } from "lucide-react";
import AvatarImage from "/public/avatar2.jpg"

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="max-w-6xl mx-auto flex flex-wrap items-center justify-between p-4 h-20 relative">
      {/* Netflix Logo and Desktop Links */}
      <div className="flex items-center gap-10 z-50">
        <Link to={"/"}>
          <img src={NetflixLogo} alt="Netflix Logo" className="w-32 sm:w-40" />
        </Link>

        {/* Desktop Links */}
        <div className="hidden sm:flex gap-2 items-center">
          <Link to={"/"} className="hover:underline">
            Movies
          </Link>
          <Link to={"/"} className="hover:underline">
            Tv Shows
          </Link>
          <Link to={"/"} className="hover:underline">
            Search History
          </Link>
        </div>
      </div>

      {/* Desktop Icons */}
      <div className="flex gap-2 items-center z-50">
        <Link to={"/search"}>
          <Search className="size-6 cursor-pointer" />
        </Link>
        <img src={AvatarImage} alt="Avatar Image" className="h-8 rounded cursor-pointer" />
        <LogOut className="size-6 cursor-pointer" />
        {/* Mobile Menu Toggle */}
        <div className="sm:hidden">
          <Menu className="size-6 cursor-pointer" onClick={toggleMobileMenu} />
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`absolute top-full left-0 w-64 bg-black   transform transition-transform duration-300 ease-in-out z-40 ${
          isMobileMenuOpen ? "translate-x-0 " : "-translate-x-[200%]"
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