"use client";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="navbar bg-base-100/50 top-0 sticky z-20 backdrop-blur-md">
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
        <ul className="hidden md:flex menu menu-horizontal px-1 gap-2">
          <li>
            <a href="#equipo-k" className="btn btn-outline btn-sm">
              Equipo K
            </a>
          </li>
          <li>
            <a href="#bitacoras" className="btn btn-outline btn-sm">
              Bitácoras
            </a>
          </li>
          <li>
            <a href="#conexiones" className="btn btn-outline btn-sm">
              Conexiones
            </a>
          </li>
          <li>
            <a href="#matriz" className="btn btn-outline btn-sm">
              Matriz
            </a>
          </li>
          <li>
            <a href="#pin5" className="btn btn-outline btn-sm">
              Pin 5
            </a>
          </li>
        </ul>

        {/* Mobile Menu Dropdown */}
        {isOpen && (
          <ul className="menu menu-compact gap-2 p-2 bg-base-100 rounded-box mt-2 shadow md:hidden">
            <li>
              <a href="#equipo-k" className="btn btn-outline btn-sm">
                Equipo K
              </a>
            </li>
            <li>
              <a href="#bitacoras" className="btn btn-outline btn-sm">
                Bitácoras
              </a>
            </li>
            <li>
              <a href="#conexiones" className="btn btn-outline btn-sm">
                Conexiones
              </a>
            </li>
            <li>
              <a href="#matriz" className="btn btn-outline btn-sm">
                Matriz
              </a>
            </li>
            <li>
              <a href="#pin5" className="btn btn-outline btn-sm">
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
