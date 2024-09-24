import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./design.css";
import logo from "../../public/logo.svg";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav className="bg-black p-2 relative">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center justify-between w-full lg:w-auto">
            <img src={logo} alt="Club Logo" className="h-14 w-14" />
            <div className="block lg:hidden">
              <button
                onClick={toggleMenu}
                type="button"
                className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                aria-controls="navbar-default"
                aria-expanded={isOpen}
              >
                <span className="sr-only">Open main menu</span>
                <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
                </svg>
              </button>
            </div>
          </div>
          <div className={`hidden lg:flex lg:items-center lg:w-auto`} id="navbar-default">
            <ul className={`lg:flex lg:items-center lg:space-x-4 md:gap-12 md:flex md:justify-center text-white`}>
              <li>
                <NavLink
                  className={(e) => (e.isActive ? "active" : "")}
                  to="/"
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={(e) => (e.isActive ? "active" : "")}
                  to="/about"
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={(e) => (e.isActive ? "active" : "")}
                  to="/team"
                >
                  Team
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={(e) => (e.isActive ? "active" : "")}
                  to="/event"
                >
                  Event
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={(e) => (e.isActive ? "active" : "")}
                  to="/contact"
                >
                  Contact Us
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
        {isOpen && (
          <div className="absolute top-full right-0 mt-2 w-64 bg-black z-40 rounded-lg shadow-lg">
            <ul className="flex flex-col items-center text-white space-y-4 p-4">
              <li>
                <NavLink
                  className={(e) => (e.isActive ? "active" : "")}
                  to="/"
                  onClick={toggleMenu}
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={(e) => (e.isActive ? "active" : "")}
                  to="/about"
                  onClick={toggleMenu}
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={(e) => (e.isActive ? "active" : "")}
                  to="/team"
                  onClick={toggleMenu}
                >
                  Team
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={(e) => (e.isActive ? "active" : "")}
                  to="/event"
                  onClick={toggleMenu}
                >
                  Event
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={(e) => (e.isActive ? "active" : "")}
                  to="/contact"
                  onClick={toggleMenu}
                >
                  Contact Us
                </NavLink>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </>
  );
}