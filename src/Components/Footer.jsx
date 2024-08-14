import React from "react";
import "./css/Footer.css";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-dark text-secondary py-5 px-4 px-lg-5 border-top border-secondary mt-0">
      <div className="container">
        <div className="row">
          {/* footer left side start  */}
          <div className="col-12 col-lg-6 mb-4 mb-lg-0">
            <div className="row">
              <div className="col-6">
                <h5 className="text-white mb-3">Pages</h5>
                <ul className="list-unstyled">
                  <li><NavLink className={(e) => e.isActive ? "active" : ""} to="/">Home</NavLink></li>
                  <li><NavLink className={(e) => e.isActive ? "active" : ""} to="/about">About Us</NavLink></li>
                  <li><NavLink className={(e) => e.isActive ? "active" : ""} to="/team">Team</NavLink></li>
                  <li><NavLink className={(e) => e.isActive ? "active" : ""} to="/event">Event</NavLink></li>
                  <li><NavLink className={(e) => e.isActive ? "active" : ""} to="/contact">Contact</NavLink></li>
                </ul>
              </div>
              <div className="col-6">
                <h5 className="text-white mb-3">Socials</h5>
                <ul className="list-unstyled">
                  <li><NavLink className={(e) => e.isActive ? "active" : ""} to="/contact">Contact</NavLink></li>
                  <li>
              <a href="/">Instagram</a>
            </li>
            <li>
              <a href="/">Facebook</a>
            </li>
            <li>
              <a href="/">Linkedin</a>
            </li>
          </ul>
              </div>
            </div>
          </div>
          {/* footer left side end  */}
          
          {/* footer right side start  */}
          <div className="col-12 col-lg-6 ps-lg-5 text-lg-start">
            <h5 className="text-white mb-3">SIT Photography Club</h5>
            <p>Capture stunning moments, showcase your talent, and compete for amazing awards.</p>
            <div className="mt-4">
              <ul className="list-unstyled d-flex justify-content-center justify-content-lg-start gap-3 fs-4">
                <li><a href="https://www.facebook.com/sitphotographyclubofficial/" target="_blank" rel="noopener noreferrer"><i className="bi bi-facebook"></i></a></li>
                <li><a href="https://www.instagram.com/sitphotoclub/" target="_blank" rel="noopener noreferrer"><i className="bi bi-instagram"></i></a></li>
                <li><a href="https://www.linkedin.com/company/sit-photography-club/" target="_blank" rel="noopener noreferrer"><i className="bi bi-linkedin"></i></a></li>
              </ul>
            </div>
          </div>
          {/* footer right side end  */}
        </div>
        
        {/* Copyright text */}
        <div className="row mt-5">
          <div className="col-12">
            <p className="text-center mb-0">
              &copy; {new Date().getFullYear()} SIT Photography Club. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
