import React, { useState } from "react";
import { set, ref } from "firebase/database";
import Firebase from "../Databases/Firebase";
import { CurrentDate, CurrentTime } from "../Databases/DateTime";

export default function Contact() {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const submit = () => {
    set(
      ref(Firebase, `ContactForm /${CurrentDate} ${firstname} ${lastname} `),
      {
        FullName: firstname + lastname,
        Phone: phone,
        Email: email,
        Message: message,
        Date: CurrentDate,
        Time: CurrentTime,
      }
    );
  };

  return (
    <>
      {/* <div>Contact</div>
      <input
        value={firstname}
        onChange={(e) => {
          setFirstname(e.target.value);
        }}
        placeholder="First Name"
      ></input>
      <input
        value={lastname}
        onChange={(e) => {
          setLastname(e.target.value);
        }}
        placeholder="Last Name"
      ></input>
      <input
        value={phone}
        onChange={(e) => {
          setPhone(e.target.value);
        }}
        placeholder="Phone"
      ></input>
      <input
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
        }}
        placeholder="Email"
      ></input>
      <input
        value={message}
        onChange={(e) => {
          setMessage(e.target.value);
        }}
        placeholder="Message"
      ></input>
      <button onClick={submit}>Submit</button> */}

      {/* <!-- Contact form --> */}
      <section className="bg-gray-900 py-3 py-md-5">
        <div className="container">
          <div className="row justify-content-md-center">
            <div className="col-12 col-md-10 col-lg-8 col-xl-7 col-xxl-6">
              <h3 className="fs-6 text-gray-400 mb-2 text-uppercase text-center">
                Get in Touch
              </h3>
              <h2 className="display-5 mb-4 mb-md-5 text-center text-white">
                We're always on the lookout to work with new visitors.
              </h2>
              <hr className="w-50 mx-auto mb-5 mb-xl-9 border-gray-600" />
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row gy-3 gy-md-4 gy-lg-0 align-items-xl-center">
            <div className="col-12 col-lg-6">
              <img
                className="img-fluid rounded"
                loading="lazy"
                src="https://burst.shopifycdn.com/photos/contact-us-image.jpg?width=1000&format=pjpg&exif=0&iptc=0"
                alt="Get in Touch"
              />
            </div>
            <div className="col-12 col-lg-6">
              <div className="row justify-content-xl-center">
                <div className="col-12 col-xl-11">
                  <div className="bg-gray-800 border border-gray-700 rounded-lg shadow-lg overflow-hidden">
                    <form action="/" method="POST">
                      <div className="row gy-3 p-4 p-xl-5">
                        <div className="col-12 col-md-6">
                          <label htmlFor="firstname" className="form-label text-white">
                            First Name <span className="text-danger">*</span>
                          </label>
                          <input
                            type="text"
                            className="form-control bg-gray-700 text-white border-gray-600 placeholder-gray-500 focus:border-blue-500 focus:ring-blue-500"
                            id="firstname"
                            name="firstname"
                            placeholder="First Name"
                            required
                          />
                        </div>
                        <div className="col-12 col-md-6">
                          <label htmlFor="lastname" className="form-label text-white">
                            Last Name <span className="text-danger">*</span>
                          </label>
                          <input
                            type="text"
                            className="form-control bg-gray-700 text-white border-gray-600 placeholder-gray-500 focus:border-blue-500 focus:ring-blue-500"
                            id="lastname"
                            name="lastname"
                            placeholder="Last Name"
                            required
                          />
                        </div>
                        <div className="col-12 col-md-6">
                          <label htmlFor="email" className="form-label text-white">
                            Email <span className="text-danger">*</span>
                          </label>
                          <div className="input-group">
                            <span className="input-group-text bg-gray-700 text-gray-300">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                fill="currentColor"
                                className="bi bi-envelope"
                                viewBox="0 0 16 16"
                              >
                                <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z" />
                              </svg>
                            </span>
                            <input
                              type="email"
                              className="form-control bg-gray-700 text-white border-gray-600 placeholder-gray-500 focus:border-blue-500 focus:ring-blue-500"
                              id="email"
                              name="email"
                              placeholder="Email"
                              required
                            />
                          </div>
                        </div>
                        <div className="col-12 col-md-6">
                          <label htmlFor="phone" className="form-label text-white">
                            Phone Number
                          </label>
                          <div className="input-group">
                            <span className="input-group-text bg-gray-700 text-gray-300">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                fill="currentColor"
                                className="bi bi-telephone"
                                viewBox="0 0 16 16"
                              >
                                <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z" />
                              </svg>
                            </span>
                            <input
                              type="tel"
                              className="form-control bg-gray-700 text-white border-gray-600 placeholder-gray-500 focus:border-blue-500 focus:ring-blue-500"
                              id="phone"
                              name="phone"
                              placeholder="Phone"
                            />
                          </div>
                        </div>

                        <div className="col-12">
                          <label htmlFor="message" className="form-label text-white">
                            Message <span className="text-danger">*</span>
                          </label>
                          <textarea
                            className="form-control bg-gray-700 text-white border-gray-600 placeholder-gray-500 focus:border-blue-500 focus:ring-blue-500"
                            id="message"
                            name="message"
                            rows="3"
                            placeholder="Your message here..."
                            required
                          ></textarea>
                        </div>
                        <div className="col-12">
                          <div className="d-grid">
                            <button
                              type="submit"
                              className="btn btn-primary text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors duration-300 ease-in-out"
                            >
                              Submit
                            </button>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
