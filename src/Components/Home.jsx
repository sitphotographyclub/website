import React from "react";
import { Helmet } from "react-helmet";
import "./css/Home/animate.css";
import "./css/Home/flex-slider.css";
import "./css/Home/fontawesome.css";
import "./css/Home/owl.css";
import "./css/Home/home.css";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <Helmet>
        {/* <link
          rel="stylesheet"
          href="https://unpkg.com/swiper@7/swiper-bundle.min.css"
        /> */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css"
          integrity="sha512-Kc323vGBEqzTmouAECnVceyQqyqdsSiqLQISBL29aUW4U/M7pSPA/gEUZQqv1cwx4OnYxTxve5UMg5GT6L4JJg=="
          crossorigin="anonymous"
          referrerpolicy="no-referrer"
        />
        <script
          src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.7.1/jquery.min.js"
          integrity="sha512-v2CJ7UaYy4JwqLDIrZUI/4hqeoQieOmAZNXBeQyjo21dadnwR+8ZaIJVT8EE2iyI61OV8e6M8PP2/4hpQINQ/g=="
          crossorigin="anonymous"
          referrerpolicy="no-referrer"
        ></script>
      </Helmet>
      {/* <!-- ***** Main Banner Area Start ***** --> */}
      <div className="main-banner">
        <div className="container">
          <div className="row">
            <div className="col-lg-10 offset-lg-1">
              <div className="header-text">
                <h2>
                  Enter a world of <em>Photos</em> &amp; Amazing <em>Awards</em>
                </h2>
                <p>
                  Join the SIT Photography Club, where creativity meets passion.
                  Capture stunning moments, showcase your talent, and compete
                  for amazing awards. Whether you're a beginner or a pro, our
                  club offers endless opportunities to explore and grow.
                </p>
                <div className="buttons">
                  <div className="big-border-button">
                    <Link to="/event">Explore SitX Events</Link>
                  </div>
                  <div className="icon-button">
                    <Link
                      to="https://www.instagram.com/sitphotoclub/"
                      target="_blank"
                    >
                      <i className="fa fa-play"></i> Watch Our Video Now
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- ***** Main Banner Area End ***** --> */}

      <section className="popular-categories">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-6">
              <div className="section-heading">
                <h6>Our Categories</h6>
                <h4>
                  Check Out <em>Popular</em> Event <em>Categories</em>
                </h4>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="main-button">
                <Link to="/event">Discover All Categories</Link>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="popular-item">
                <div className="top-content">
                  <div className="icon">
                    <img src="./Home/images/icon-01.png" alt="" />
                  </div>
                  <div className="right">
                    <h4>Nature Pic Contest</h4>
                    <span>
                      <em>126</em> Available Contests
                    </span>
                  </div>
                </div>
                <div className="thumb">
                  <img src="./Home/images/popular-01.png" alt="" />
                  <span className="category">Top Contest</span>
                  <span className="likes">
                    <i className="fa fa-heart"></i> 256
                  </span>
                </div>
                <div className="border-button">
                  <Link to="/event">Browse Nature Pic Contests</Link>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="popular-item">
                <div className="top-content">
                  <div className="icon">
                    <img src="./Home/images/icon-02.png" alt="" />
                  </div>
                  <div className="right">
                    <h4>Random Pic Contest</h4>
                    <span>
                      <em>116</em> Available Contests
                    </span>
                  </div>
                </div>
                <div className="thumb">
                  <img src="./Home/images/popular-02.png" alt="" />
                  <span className="category">Top Contest</span>
                  <span className="likes">
                    <i className="fa fa-heart"></i> 256
                  </span>
                </div>
                <div className="border-button">
                  <Link to="/event">Browse Random Pic Contests</Link>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="popular-item">
                <div className="top-content">
                  <div className="icon">
                    <img src="./Home/images/icon-03.png" alt="" />
                  </div>
                  <div className="right">
                    <h4>Portrait Pic Contest</h4>
                    <span>
                      <em>164</em> Available Contests
                    </span>
                  </div>
                </div>
                <div className="thumb">
                  <img src="./Home/images/popular-03.png" alt="" />
                  <span className="category">Top Contest</span>
                  <span className="likes">
                    <i className="fa fa-heart"></i> 256
                  </span>
                </div>
                <div className="border-button">
                  <Link to="/event">Browse Portrait Pic Contests</Link>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="popular-item">
                <div className="top-content">
                  <div className="icon">
                    <img src="./Home/images/icon-04.png" alt="" />
                  </div>
                  <div className="right">
                    <h4>Space Pic Contest</h4>
                    <span>
                      <em>135</em> Available Contests
                    </span>
                  </div>
                </div>
                <div className="thumb">
                  <img src="./Home/images/popular-04.png" alt="" />
                  <span className="category">Top Contest</span>
                  <span className="likes">
                    <i className="fa fa-heart"></i> 256
                  </span>
                </div>
                <div className="border-button">
                  <Link to="/event">Browse Space Pic Contests</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="closed-contests">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-heading text-center">
                <h6>Closed Photography Events</h6>
                <h4>
                  <em>Previous Events</em> With Handpicked <em>Winners</em>
                </h4>
              </div>
            </div>
            <div className="col-lg-12 ">
              <div className="row d-flex justify-content-center align-item-center ">
                {Array(4)
                  .fill()
                  .map((_, index) => {
                    return (
                      <div className="col-12 col-md-6 col-lg-4 col-xl-3 mt-4">
                        <div className="card p-0" key={index}>
                          <img
                            src={`./Home/images/closed-0${index + 1}.jpg`}
                            className="card-img-top"
                            alt="..."
                            style={{ height: "300px" }}
                          />
                          <div className="card-body">
                            <div className="down-content">
                              <div className="row">
                                <div className="col-7">
                                  <h4 className="fw-bold my-2">
                                    74 Participants
                                  </h4>
                                  <span className="text-secondary fw-bold">
                                    Raju Das
                                  </span>
                                </div>
                                <div className="col-5">
                                  <h4 className="fw-bold my-2">284 Pictures</h4>
                                  <span className="text-secondary fw-bold">
                                    Winner
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
              </div>
            </div>
            <div className="col-lg-12">
              <div className="border-button text-center">
                <Link to={"/event"}>Browse Events</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <section className="pricing-plans">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-heading text-center">
                <h6>Our Pricing</h6>
                <h4>
                  Photography <em>Contest Plans</em> and Price <em>Awards</em>
                </h4>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="pricing-item text-center">
                <img
                  src="./Home/images/pricing-01.jpg"
                  className="mx-auto"
                  alt=""
                />
                <h4>Basic Plan</h4>
                <ul className="first-plan">
                  <li>Lorem Ipsum Dolores Sonte</li>
                  <li>Songe Lorem Ipsum Dol</li>
                  <li>Matrios Venga Heptuss</li>
                  <li>Denim Sriracha Kogi</li>
                  <li>Digital Photography Awards</li>
                </ul>
                <span className="price">$25 USD</span>
                <div className="border-button">
                  <a href="#">Choose This Plan</a>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="pricing-item">
                <img
                  src="./Home/images/pricing-02.jpg"
                  className="mx-auto"
                  alt=""
                />
                <h4>Standard Plan</h4>
                <ul className="second-plan">
                  <li>Lorem Ipsum Dolores Sonte</li>
                  <li>Songe Lorem Ipsum Dol</li>
                  <li>Matrios Venga Heptuss</li>
                  <li>Denim Sriracha Kogi</li>
                  <li>Digital Photography Awards</li>
                </ul>
                <span className="price">$45 USD</span>
                <div className="border-button">
                  <a href="#">Choose This Plan</a>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="pricing-item">
                <img
                  src="./Home/images/pricing-03.jpg"
                  className="mx-auto"
                  alt=""
                />
                <h4>Advanced Plan</h4>
                <ul className="third-plan">
                  <li>Lorem Ipsum Dolores Sonte</li>
                  <li>Songe Lorem Ipsum Dol</li>
                  <li>Matrios Venga Heptuss</li>
                  <li>Denim Sriracha Kogi</li>
                  <li>Digital Photography Awards</li>
                </ul>
                <span className="price">$85 USD</span>
                <div className="border-button">
                  <a href="#">Choose This Plan</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
    </>
  );
}
