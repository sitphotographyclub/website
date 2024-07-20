import React from "react";
import "./Home.css";
import Navbar from "./Navbar";
import SearchForm from "./Home/SearchForm";

const Home = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <header id="hero" className="min-vh-100 text-white">
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
        </header>

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
                    <i className="bi bi-search text-dark fs-4 mt-1"></i>
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
                    <i className="bi bi-back text-dark fs-4 mt-1"></i>
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
                    <i className="bi bi-credit-card-fill text-dark fs-4 mt-1"></i>
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
                    <i className="bi bi-puzzle-fill text-dark fs-4 mt-1"></i>
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

        <section className="px-4 px-lg-5 py-4">
          <div className="row">
            <div className="col-12 text-center">
              <h6 className="text-secondary">Our Blogs</h6>
              <h1>Our travel memories</h1>
            </div>
          </div>
          <div className="row mt-5 row-gap-4">
            <div className="col-12 col-md-6 col-lg-3 d-flex justify-content-center d-md-block">
              <div class="card pb-2" style={{ maxWidth: "25rem" }}>
                <img
                  class="card-img-top w-100"
                  style={{ height: "200px" }}
                  src="https://media.istockphoto.com/id/1500563478/photo/traveler-asian-woman-relax-and-travel-on-thai-longtail-boat-in-ratchaprapha-dam-at-khao-sok.webp?b=1&s=170667a&w=0&k=20&c=PL6F9_KtlUx4E6pl9ryJxR3kLSv-l6aiHAi1DLw84vk="
                  alt="Card image cap"
                />
                <div class="card-body">
                  <p className="text-secondary">Nov 20,2024</p>
                  <h5 class="card-title">
                    2024 Travel Trends - What you need to know
                  </h5>
                  <p class="card-text text-secondary">
                    2023 taught us valuable life lessons. Plans don't always
                    work out, flexibility in life is key, a...
                  </p>
                  <div className="text-end">
                    <a href="/" class="btn btn-dark rounded-pill px-4">
                      Read
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-3 d-flex justify-content-center d-md-block">
              <div class="card pb-2" style={{ maxWidth: "25rem" }}>
                <img
                  class="card-img-top w-100"
                  style={{ height: "200px" }}
                  src="https://plus.unsplash.com/premium_photo-1663090499126-b4fe1dcf515c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8c3VtbWVyJTIwdHJhdmVsfGVufDB8fDB8fHww"
                  alt="Card image cap"
                />
                <div class="card-body">
                  <p className="text-secondary">Nov 20,2024</p>
                  <h5 class="card-title">
                    2024 Travel Trends - What you need to know
                  </h5>
                  <p class="card-text text-secondary">
                    2023 taught us valuable life lessons. Plans don't always
                    work out, flexibility in life is key, a...
                  </p>
                  <div className="text-end">
                    <a href="/" class="btn btn-dark rounded-pill px-4">
                      Read
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-3 d-flex justify-content-center d-md-block">
              <div class="card pb-2" style={{ maxWidth: "25rem" }}>
                <img
                  class="card-img-top w-100"
                  style={{ height: "200px" }}
                  src="https://images.unsplash.com/photo-1618946467973-a5105efa83eb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8c3VtbWVyJTIwdHJhdmVsfGVufDB8fDB8fHww"
                  alt="Card image cap"
                />
                <div class="card-body">
                  <p className="text-secondary">Nov 20,2024</p>
                  <h5 class="card-title">
                    2024 Travel Trends - What you need to know
                  </h5>
                  <p class="card-text text-secondary">
                    2023 taught us valuable life lessons. Plans don't always
                    work out, flexibility in life is key, a...
                  </p>
                  <div className="text-end">
                    <a href="/" class="btn btn-dark rounded-pill px-4">
                      Read
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-3 d-flex justify-content-center d-md-block">
              <div class="card pb-2" style={{ maxWidth: "25rem" }}>
                <img
                  class="card-img-top w-100"
                  style={{ height: "200px" }}
                  src="https://media.istockphoto.com/id/1176439818/photo/making-a-memory.webp?b=1&s=170667a&w=0&k=20&c=2mwLfHkStZe1ydXMBq9dKlCQQfb991bSZU52j6PI7yY="
                  alt="Card image cap"
                />
                <div class="card-body">
                  <p className="text-secondary">Nov 20,2024</p>
                  <h5 class="card-title">
                    2024 Travel Trends - What you need to know
                  </h5>
                  <p class="card-text text-secondary">
                    2023 taught us valuable life lessons. Plans don't always
                    work out, flexibility in life is key, a...
                  </p>
                  <div className="text-end">
                    <a href="/" class="btn btn-dark rounded-pill px-4">
                      Read
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-12 d-flex justify-content-center align-items-center">
              <a href="/" className="btn btn-dark rounded-pill px-4 py-2">
                View more
              </a>
            </div>
          </div>
        </section>

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
                Don't miss out the world tours! - Subscribe now and become a
                memeber and enjoy a journey of discovery with us
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
      </div>
    </div>
  );
};

export default Home;
