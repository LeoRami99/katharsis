"use client";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="navbar bg-white top-0 sticky z-20 backdrop-blur-md pl-20 pr-20 py-4 flex items-center justify-between">
      <div className="flex-1">
        <img src="/logo_katharsis.png" alt="Logo" className="w-40 md:w-60" />
      </div>
      <div className="flex-none">
        {/* Mobile Menu Button */}
        <button
          className="md:hidden btn btn-outline btn-sm"
          onClick={toggleMenu}
        >
          Menu
        </button>

        {/* Desktop Menu */}
        <ul className="hidden md:flex menu menu-horizontal px-1 gap-4 font-light">
          <li>
            <a
              href="#equipo-k"
              className="relative bg-white text-gray-700 font-light after:absolute after:left-0 after:right-0 after:bottom-0 after:h-[2px] after:bg-gray-900 after:scale-x-0 hover:after:scale-x-100 after:origin-center after:transition-transform after:duration-300"
            >
              Equipo K
            </a>
          </li>
          <li>
            <a
              href="#bitacoras"
              className="relative bg-white text-gray-700 font-light after:absolute after:left-0 after:right-0 after:bottom-0 after:h-[2px] after:bg-gray-900 after:scale-x-0 hover:after:scale-x-100 after:origin-center after:transition-transform after:duration-300"
            >
              Bitacoras
            </a>
          </li>
          <li>
            <a
              href="#conexiones"
              className="relative bg-white text-gray-700 font-light after:absolute after:left-0 after:right-0 after:bottom-0 after:h-[2px] after:bg-gray-900 after:scale-x-0 hover:after:scale-x-100 after:origin-center after:transition-transform after:duration-300"
            >
              Conexiones
            </a>
          </li>
          <li>
            <a
              href="#pin5"
              className="relative  bg-white text-gray-700 font-light after:absolute after:left-0 after:right-0 after:bottom-0 after:h-[2px] after:bg-gray-900 after:scale-x-0 hover:after:scale-x-100 after:origin-center after:transition-transform after:duration-300"
            >
              Pin 5
            </a>
          </li>
        </ul>

        {/* Mobile Menu Dropdown */}
        {isOpen && (
          <ul className="flex md:hidden menu menu-vertical px-1 gap-4 font-light">
            <li>
              <a
                href="#equipo-k"
                className="relative btn btn-sm bg-white text-gray-700 font-light after:absolute after:left-0 after:right-0 after:bottom-0 after:h-[2px] after:bg-gray-900 after:scale-x-0 hover:after:scale-x-100 after:origin-center after:transition-transform after:duration-300"
              >
                Equipo K
              </a>
            </li>
            <li>
              <a
                href="#bitacoras"
                className="relative btn btn-sm bg-white text-gray-700 font-light after:absolute after:left-0 after:right-0 after:bottom-0 after:h-[2px] after:bg-gray-900 after:scale-x-0 hover:after:scale-x-100 after:origin-center after:transition-transform after:duration-300"
              >
                Bitacoras
              </a>
            </li>
            <li>
              <a
                href="#conexiones"
                className="relative btn btn-sm bg-white text-gray-700 font-light after:absolute after:left-0 after:right-0 after:bottom-0 after:h-[2px] after:bg-gray-900 after:scale-x-0 hover:after:scale-x-100 after:origin-center after:transition-transform after:duration-300"
              >
                Conexiones
              </a>
            </li>
            <li>
              <a
                href="#pin5"
                className="relative btn btn-sm bg-white text-gray-700 font-light after:absolute after:left-0 after:right-0 after:bottom-0 after:h-[2px] after:bg-gray-900 after:scale-x-0 hover:after:scale-x-100 after:origin-center after:transition-transform after:duration-300"
              >
                Pin 5
              </a>
            </li>
          </ul>
        )}
      </div>
    </div>
  );
};

export default Navbar;
