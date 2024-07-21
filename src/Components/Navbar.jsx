import React from "react";
import { NavLink } from "react-router-dom";
import "./design.css";
export default function () {
  return (
    <div>
      <NavLink
        className={(e) => {
          return e.isActive ? "active" : "";
        }}
        to="/"
      >
        Home
      </NavLink>
      <br />
      <NavLink
        className={(e) => {
          return e.isActive ? "active" : "";
        }}
        to="/about"
      >
        About
      </NavLink>
      <br />
      <NavLink
        className={(e) => {
          return e.isActive ? "active" : "";
        }}
        to="/team"
      >
        Team
      </NavLink>
      <br />
      <NavLink
        className={(e) => {
          return e.isActive ? "active" : "";
        }}
        to="/event"
      >
        Event
      </NavLink>
      <br />
      <NavLink
        className={(e) => {
          return e.isActive ? "active" : "";
        }}
        to="/contact"
      >
        Contact Us
      </NavLink>
      <br />
    </div>
  );
}
