import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./design.css";
export default function () {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav className="bg-black p-4 ">
        <div className="container mx-auto ">
          <div className="block lg:hidden">
            <button
              onClick={toggleMenu}
              className="text-white focus:outline-none"
            >
              <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
                {isOpen ? (
                  <path
                    fillRule="evenodd"
                    d="M6 18L18 6M6 6l12 12"
                    clipRule="evenodd"
                  />
                ) : (
                  <path
                    fillRule="evenodd"
                    d="M4 6h16M4 12h16M4 18h16"
                    clipRule="evenodd"
                  />
                )}
              </svg>
            </button>
          </div>
          <ul
            className={`lg:flex lg:items-center lg:space-x-4 ${
              isOpen ? "block" : "hidden"
            } lg:block  md:gap-12 md:flex md:justify-center text-white`}
          >
            <li>
              {" "}
              <NavLink
                className={(e) => {
                  return e.isActive ? "active" : "";
                }}
                to="/"
              >
                Home
              </NavLink>
            </li>
            <li>
              {" "}
              <NavLink
                className={(e) => {
                  return e.isActive ? "active" : "";
                }}
                to="/about"
              >
                About
              </NavLink>
            </li>
            <li>
              {" "}
              <NavLink
                className={(e) => {
                  return e.isActive ? "active" : "";
                }}
                to="/team"
              >
                Team
              </NavLink>
            </li>
            <li>
              {" "}
              <NavLink
                className={(e) => {
                  return e.isActive ? "active" : "";
                }}
                to="/event"
              >
                Event
              </NavLink>
            </li>
            <li>
              {" "}
              <NavLink
                className={(e) => {
                  return e.isActive ? "active" : "";
                }}
                to="/contact"
              >
                Contact Us
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
