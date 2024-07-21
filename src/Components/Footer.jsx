import React from "react";
import "./css/Footer.css";

const Footer = () => {
  return (
    <footer className="bg-dark text-secondary py-5 px-4 px-lg-5 mt-5">
      <div className="row my-3 mt-4">
        {/* footer left side start  */}
        <div className="col-12 col-lg-6 d-md-flex justify-content-between text-center text-md-start ">
          <ul>
            <h5 className="text-white mb-2">About</h5>
            <li>
              <a href="/">About us</a>
            </li>
            <li>
              <a href="/">Blog</a>
            </li>
            <li>
              <a href="/">Carrers</a>
            </li>
            <li>
              <a href="/">Jobs</a>
            </li>
            <li>
              <a href="/">Press</a>
            </li>
            <li>
              <a href="/">Gallary</a>
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
          <h5 className="text-white">Newsletter</h5>
          <p>
            Don't miss out the world tours! - Subscribe now and become a memeber
            and enjoy a journey of discovery with us
          </p>
          <form id="newsletter-form" className="my-4">
            <div class="form-group">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                fill="currentColor"
                class="bi bi-envelope-paper-heart-fill ms-3"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="m3 7.5 3.5 2L8 8.75l1.5.75 3.5-2v-6A1.5 1.5 0 0 0 11.5 0h-7A1.5 1.5 0 0 0 3 1.5zM2 3.133l-.941.502A2 2 0 0 0 0 5.4v.313l2 1.173zm12 3.753 2-1.173V5.4a2 2 0 0 0-1.059-1.765L14 3.133zm-3.693 3.324L16 6.873v6.5zm5.634 4.274L8 10.072.059 14.484A2 2 0 0 0 2 16h12a2 2 0 0 0 1.941-1.516M5.693 10.21 0 13.372v-6.5zM8 1.982C9.664.309 13.825 3.236 8 7 2.175 3.236 6.336.31 8 1.982"
                />
              </svg>
              <input
                type="email"
                class="form-control"
                aria-describedby="emailHelp"
                placeholder="Enter email"
                name="email"
              />
              {/* <small
                    id="emailHelp"
                    class="form-text text-mute text-secondary"
                  >
                    We'll never share your email with anyone else.
                  </small> */}
              <input
                type="submit"
                value="Subscribe"
                className="sit_btn bg-dark text-white"
              />
            </div>
          </form>
          <div className="text-end mt-5">
            <ul className="d-flex align-items-center justify-content-center justify-content-lg-end gap-3 fs-4">
              <li>
                <a href="">
                  <i class="bi bi-facebook"></i>
                </a>
              </li>
              <li>
                <a href="">
                  <i class="bi bi-twitter"></i>
                </a>
              </li>
              <li>
                <a href="">
                  <i class="bi bi-instagram"></i>
                </a>
              </li>
              <li>
                <a href="">
                  <i class="bi bi-github"></i>
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
            &copy; {new Date().getFullYear()} Indotravi. All Right Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
