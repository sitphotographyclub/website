import React from 'react';
import { NavLink } from 'react-router-dom';
const NavigationBar = () => {
  return (
    <nav className="absolute top-0 left-0 right-0 flex justify-between items-center px-12 py-8 text-white z-50">
      <div className="flex items-center">
        <span className="font-semibold text-lg tracking-widest">SIT Photography</span>
      </div>
      <div className="flex space-x-8 text-sm uppercase tracking-wide">
      <NavLink
                className={(e) => {
                  return e.isActive ? "active" : "";
                }}
                to="/"
              >
                Home
              </NavLink>
              <NavLink
                className={(e) => {
                  return e.isActive ? "active" : "";
                }}
                to="/about"
              >
                About
              </NavLink>
              <NavLink
                className={(e) => {
                  return e.isActive ? "active" : "";
                }}
                to="/team"
              >
                Team
              </NavLink>
              <NavLink
                className={(e) => {
                  return e.isActive ? "active" : "";
                }}
                to="/event"
              >
                Event
              </NavLink>
              <NavLink
                className={(e) => {
                  return e.isActive ? "active" : "";
                }}
                to="/contact"
              >
                Contact Us
              </NavLink>
      </div>
    </nav>
  );
};

export default NavigationBar;
