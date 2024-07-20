import React from "react";
import "./Home.css";
import Navbar from "./Navbar";
import SearchForm from "./Home/SearchForm";

const Home = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <section id="hero" className="min-vh-100 text-white">
          {/* //navbar start  */}
          <div className="row">
            <Navbar type="" />
          </div>
          {/* //navbar end  */}

          <div
            className="px-5 d-flex flex-column align-items-center justify-content-center min-vh-100"
            style={{ marginTop: "0rem" }}
          >
            <h1 className="mb-4 text-center">
              Extraordinary Nature and Cultural Charm
            </h1>
            <h5 className="text-center">
              Exploring India is an unforgotable adventure.
            </h5>

            <SearchForm />
          </div>

          <div className="d-flex justify-content-center align-items-center position-absolute top-100 start-0 translate-middle-y px-5 w-100 gap-5">
            {/* item1  */}
            <div className="d-flex flex-column justify-content-center align-items-center bg-glass text-dark py-4 px-5 shadow-lg rounded">
              <h3 className="text-white">10M+</h3>
              <p className="mb-0 text-dark">Total Customer</p>
            </div>
            {/* item2  */}
            <div className="d-flex flex-column justify-content-center align-items-center bg-glass text-dark py-4 px-5 shadow-lg rounded">
              <h3 className="text-white">09+</h3>
              <p className="mb-0 text-dark">Years of Experience</p>
            </div>
            {/* item3  */}
            <div className="d-flex flex-column justify-content-center align-items-center bg-glass text-dark py-4 px-5 shadow-lg rounded">
              <h3 className="text-white">12K+</h3>
              <p className="mb-0 text-dark">Total Destination</p>
            </div>
            {/* item4  */}
            <div className="d-flex flex-column justify-content-center align-items-center bg-glass text-dark py-4 px-5 shadow-lg rounded">
              <h3 className="text-white">4.9+</h3>
              <p className="mb-0 text-dark">Average Rating</p>
            </div>
          </div>
        </section>

        <section style={{ margin: "8rem 0" }} className="px-4 px-lg-5">
          <div className="row d-flex align-items-end mb-4">
            <div className="col-12 col-lg-8 text-center">
              <h6 className="text-secondary">Best Location</h6>
              <h1>Indonesia Tourism</h1>
            </div>
            <div className="col-12 col-lg-4 text-center text-lg-start">
              <p className="text-secondary ">
                Extraordinary natural beauty, enjoy the rich culture, and
                experience the friendless of the local people
              </p>
            </div>
          </div>

          <div className="row">
            <div className="col-12 col-lg-8 mb-4">
              <img
                src="https://media.istockphoto.com/id/485371557/photo/twilight-at-spirit-island.jpg?s=612x612&w=0&k=20&c=FSGliJ4EKFP70Yjpzso0HfRR4WwflC6GKfl4F3Hj7fk="
                alt="img"
                className="img-fluid w-100 rounded"
                style={{ height: "450px" }}
              />
            </div>
            <div className="col-12 col-lg-4 mb-4">
              <img
                src="https://wallpapers.com/images/hd/nature-landscape-pictures-hg4ndx87jp1rsvth.jpg"
                alt="img"
                className="img-fluid w-100 rounded"
                style={{ height: "450px" }}
              />
            </div>
          </div>

          <div className="row">
            <div className="col-12 col-lg-4 mb-4">
              <img
                src="https://images.pexels.com/photos/709552/pexels-photo-709552.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="img"
                className="img-fluid w-100 rounded"
                style={{ height: "450px" }}
              />
            </div>
            <div className="col-12 col-lg-8 mb-4">
              <img
                src="https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg?size=626&ext=jpg&ga=GA1.1.926798413.1721143649&semt=ais_user"
                alt="img"
                className="img-fluid w-100 rounded"
                style={{ height: "450px" }}
              />
            </div>
          </div>
        </section>

        <section className="px-4 px-lg-5 mb-5" id="one-click">
          <div className="row">
            <div className="col-12 col-lg-5 d-flex d-lg-block justify-content-center align-items-center mb-5">
              <div
                style={{
                  background:
                    "url(https://images.pexels.com/photos/9330649/pexels-photo-9330649.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)",
                  maxWidth: "540px",
                  width: "100%",
                  minHeight: "680px",
                  height: "100%",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                  borderRadius: "0.8rem",
                }}
                className="p-3 px-4 d-flex justify-content-end flex-column"
              >
                <div className="w-100 d-flex justify-content-center">
                  <SearchForm />
                </div>
                <p className="text-white text-center mt-3">
                  Embark on a journey to find the dream destination. where
                  advanture awaits, creating unforgotable memories along the
                  way.
                </p>
              </div>
            </div>
            <div className="col-12 col-lg-7 d-flex d-lg-block justify-content-center align-items-center flex-column">
              <h6 className="text-secondary">How it works</h6>
              <h1 className="text-center text-lg-start">One click for you</h1>

              <div className="mt-5" id="one-click-links">
                <a href="/">
                  <div className="bg-light custom-shadow px-4 py-4 rounded d-flex gap-4 mb-4 text-dark one-click-link">
                    <i class="bi bi-search text-dark fs-4 mt-1"></i>
                    <div>
                      <h4>Find your destination</h4>
                      <p className="mb-0 text-secondary">
                        Embark on a journey to find the dream destination. where
                        advanture awaits, creating unforgotable memories along
                        the way.
                      </p>
                    </div>
                  </div>
                </a>

                <a href="/">
                  <div className="bg-light px-4 py-4 rounded d-flex gap-4 mb-4 text-dark one-click-link">
                    <i class="bi bi-back text-dark fs-4 mt-1"></i>
                    <div>
                      <h4>Book a ticket</h4>
                      <p className="mb-0 text-secondary">
                        Embark on a journey to find the dream destination. where
                        advanture awaits, creating unforgotable memories along
                        the way.
                      </p>
                    </div>
                  </div>
                </a>

                <a href="/">
                  <div className="bg-light px-4 py-4 rounded d-flex gap-4 mb-4 text-dark one-click-link">
                    <i class="bi bi-credit-card-fill text-dark fs-4 mt-1"></i>
                    <div>
                      <h4>Make payment</h4>
                      <p className="mb-0 text-secondary">
                        Embark on a journey to find the dream destination. where
                        advanture awaits, creating unforgotable memories along
                        the way.
                      </p>
                    </div>
                  </div>
                </a>

                <a href="/">
                  <div className="bg-light px-4 py-4 rounded d-flex gap-4 mb-4 text-dark one-click-link">
                    <i class="bi bi-puzzle-fill text-dark fs-4 mt-1"></i>
                    <div>
                      <h4>Explore destination</h4>
                      <p className="mb-0 text-secondary">
                        Embark on a journey to find the dream destination. where
                        advanture awaits, creating unforgotable memories along
                        the way.
                      </p>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </section>

        <section style={{ margin: "5rem 0" }} className="px-4 px-lg-5">
          <div className="row d-flex align-items-end mb-4">
            <div className="col-12 col-lg-8 text-center">
              <h6 className="text-secondary">Tour Packages</h6>
              <h1>Our tourist distination</h1>
            </div>
            <div className="col-12 col-lg-4 text-center text-lg-start">
              <p className="text-secondary ">
                Extraordinary natural beauty, enjoy the rich culture, and
                experience the friendless of the local people
              </p>
            </div>
          </div>

          <div className="row">
            <div className="col-12 col-lg-3 mb-4">
              <img
                src="https://images.pexels.com/photos/2104044/pexels-photo-2104044.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="img"
                className="img-fluid w-100 rounded"
                style={{ height: "500px" }}
              />
            </div>

            <div className="col-12 col-lg-3 mb-4">
              <img
                src="https://images.pexels.com/photos/1028225/pexels-photo-1028225.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="img"
                className="img-fluid w-100 rounded"
                style={{ height: "500px" }}
              />
            </div>

            <div className="col-12 col-lg-3 mb-4">
              <img
                src="https://images.pexels.com/photos/2659475/pexels-photo-2659475.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="img"
                className="img-fluid w-100 rounded"
                style={{ height: "500px" }}
              />
            </div>

            <div className="col-12 col-lg-3 mb-4">
              <img
                src="https://images.pexels.com/photos/2412603/pexels-photo-2412603.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="img"
                className="img-fluid w-100 rounded"
                style={{ height: "500px" }}
              />
            </div>
          </div>
          <div className="row mt-3">
            <div className="col-12 d-flex justify-content-center align-items-center">
              <a href="/" className="btn btn-dark rounded-pill px-4 py-2">
                View more
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;
