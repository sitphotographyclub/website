import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = (props) => {
  const topNav = useRef();
  const navbarItems = useRef();

  useEffect(() => {
    window.onscroll = (e) => {
      if (window.scrollY >= 77) {
        topNav.current.style.backgroundColor = "rgba(14,17,17, 0.9)";
      } else {
        topNav.current.style.backgroundColor = "transparent";
      }
    };
  });

  const menuHandler = (flag = false) => {
    if (flag) {
      navbarItems.current.style.right = "0";
    } else {
      navbarItems.current.style.right = "-340px";
    }
  };

  return (
    <nav id="navbar" className={`px-5 py-3 bg-${props.type}`} ref={topNav}>
      <div
        id="navbar-items"
        className="d-flex align-items-center justify-content-between w-100"
        ref={navbarItems}
      >
        <h2 className={`mb-0 text-light `}>Indotravi</h2>
        <ul className="bg-glass d-flex align-item-center justify-content-between rounded-pill mb-0">
          <li className="active">
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/">About</Link>
          </li>
          <li>
            <Link to="/">Services</Link>
          </li>
          <li>
            <Link to="/">Event</Link>
          </li>
          <li>
            <Link to="/">Contact</Link>
          </li>
        </ul>

        <Link to="/" className="sit_btn">
          Login
        </Link>

        <i
          className="bi bi-x-square text-white d-none cursor-pointer"
          id="menu-close-btn"
          onClick={() => menuHandler(false)}
        ></i>
      </div>
      <div
        className="d-flex align-items-center justify-content-between d-none"
        id="menu-with-handle-btn"
      >
        <h2 className={`mb-0 text-light `}>Indotravi</h2>
        <i
          className="bi bi-list text-white fs-3 cursor-pointer"
          id="menu-btn"
          onClick={() => menuHandler(true)}
        ></i>
      </div>
    </nav>
  );
};

export default Navbar;

// import React from "react";
// import { NavLink } from "react-router-dom";
// import "./design.css";
// export default function () {
//   return (
//     <div>
//       <NavLink
//         className={(e) => {
//           return e.isActive ? "active" : "";
//         }}
//         to="/"
//       >
//         Home
//       </NavLink>
//       <br />
//       <NavLink
//         className={(e) => {
//           return e.isActive ? "active" : "";
//         }}
//         to="/about"
//       >
//         About
//       </NavLink>
//       <br />
//       <NavLink
//         className={(e) => {
//           return e.isActive ? "active" : "";
//         }}
//         to="/team"
//       >
//         Team
//       </NavLink>
//       <br />
//       <NavLink
//         className={(e) => {
//           return e.isActive ? "active" : "";
//         }}
//         to="/event"
//       >
//         Event
//       </NavLink>
//       <br />
//       <NavLink
//         className={(e) => {
//           return e.isActive ? "active" : "";
//         }}
//         to="/contact"
//       >
//         Contact Us
//       </NavLink>
//       <br />
//     </div>
//   );
// }
