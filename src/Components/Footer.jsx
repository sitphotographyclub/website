import React from "react";
import "./css/Footer.css";
import { NavLink } from "react-router-dom";
const Footer = () => {
  return (
    <footer className="bg-dark text-secondary py-5 px-4 px-lg-5 mt-5">
      <div className="row my-3 mt-4">
        {/* footer left side start  */}
        <div className="col-12 col-lg-6 d-md-flex justify-content-between text-center text-md-start ">
          <ul>
            <h5 className="text-white mb-2">Pages</h5>
            <li>
              <NavLink className={(e) => { return e.isActive ? "active" : ""; }} to="/">Home</NavLink>
            </li>
            <li>
              <NavLink className={(e) => { return e.isActive ? "active" : ""; }} to="/about">About Us</NavLink>
            </li>
            <li>
              <NavLink className={(e) => { return e.isActive ? "active" : ""; }} to="/team">Team</NavLink>
            </li>
            <li>
              <NavLink className={(e) => { return e.isActive ? "active" : ""; }} to="/event">Event</NavLink>
            </li>
            <li>
              <NavLink className={(e) => { return e.isActive ? "active" : ""; }} to='/contact'>Contact</NavLink>
            </li>
          </ul>
          <ul>
            <h5 className="text-white mb-2 mt-5 mt-md-0">Support</h5>
            <li>
              <a href="/">Contact us</a>
            </li>
            <li>
              <a href="/">Online Chat</a>
            </li>
            <li>
              <a href="/">Whatsapp</a>
            </li>
            <li>
              <a href="/">Telegram</a>
            </li>
            <li>
              <a href="/">Ticketing</a>
            </li>
            <li>
              <a href="/">Call Center</a>
            </li>
          </ul>
          <ul>
            <h5 className="text-white mb-2 mt-5 mt-md-0">FAQ</h5>
            <li>
              <a href="/">Account</a>
            </li>
            <li>
              <a href="/">Banking</a>
            </li>
            <li>
              <a href="/">Payments</a>
            </li>
            <li>
              <a href="/">Returns</a>
            </li>
            <li>
              <a href="/">Privacy Policy</a>
            </li>
            <li>
              <a href="/">Terms & Conditions</a>
            </li>
          </ul>
        </div>
        {/* footer left side end  */}
        {/* footer right side start  */}
        <div className="col-12 col-lg-6 px-4 ps-lg-5 mt-5 mt-lg-0 text-center text-lg-start">
          <h5 className="text-white">SIT Photography Club</h5>
          <p>
            Don't miss out the world tours! - Subscribe now and become a memeber
            and enjoy a journey of discovery with us
          </p>
          <div className="text-end mt-5">
            <ul className="d-flex align-items-center justify-content-center justify-content-lg-end gap-3 fs-4">
              <li>
                <a href="">
                  <i className="bi bi-facebook"></i>
                </a>
              </li>
              <li>
                <a href="">
                  <i className="bi bi-twitter"></i>
                </a>
              </li>
              <li>
                <a href="">
                  <i className="bi bi-instagram"></i>
                </a>
              </li>
              <li>
                <a href="">
                  <i className="bi bi-github"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
        {/* footer right side end  */}
      </div>
      <div className="row mt-5">
        <div className="col-12">
          <p className="text-center">
            &copy; {new Date().getFullYear()} SIT Photography Club. All Right
            Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
