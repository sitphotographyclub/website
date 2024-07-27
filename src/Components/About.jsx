import React from "react";
import "./css/About.css";

export default function About() {
  const colors = ["#41516C", "#FBCA3E", "#E24A68", "#1B5F8C", "#4CADAD"];
  const leadersData = [
    {
      name: "Rameez Hussain",
      startYear: 2019,
      endYear: 2020,
    },
    {
      name: "Sayantan Ghosh",
      startYear: 2020,
      endYear: 2021,
    },
    {
      name: "Shivam Talukdar",
      startYear: 2021,
      endYear: 2022,
    },
    {
      name: "Parna Das",
      startYear: 2022,
      endYear: 2023,
    },
    {
      name: "Shreya Prasad",
      startYear: 2023,
      endYear: 2024,
    },
  ];
  const activities = [
    {
      year: 2020,
      desc: "Despite the late start due to lockdowns, we held a Republic Day contest where beginners showcased their talent. Our member who won this contest was promoted to the main group.",
    },
    {
      year: 2021,
      desc: "Organized Independence Day and Durga Puja contests.",
    },
    {
      year: 2022,
      desc: "Launched the February Diary series with four weekly contests and SITEX FLAMES, a photography exhibition. This year also marked the inclusion of our club's activities on the official website.",
    },
    {
      year: 2023,
      desc: "Participated in an international conference, GDSC SIT events, and hosted multiple contests including Holi Contest, April Pristine, and May's Snapshot Showdown. Our major events included Photowalks and Travel Talks.",
    },
  ];
  return (
    <div className="container" id="about-us">
      {/* ############################################################### About Us  section start  */}
      <div className="row">
        <div className="col-12 text-center">
          <h1 className="text-center display-4 mb-3">About Us</h1>
          <p>
            Welcome to the SIT Photography Club, your gateway to exploring the
            world through the lens. Founded in July 2019, our club has grown to
            be a vibrant community of photography enthusiasts, guided by a
            shared passion for capturing moments that matter.
          </p>
        </div>
      </div>
      {/* ############################################################### Our Journey  section start  */}
      <div className="row">
        <div className="col-12 text-center">
          <h1 className="text-center display-6 mt-4 mb-3 ">Our Journey</h1>
          <p>
            The SIT Photography Club started with a WhatsApp group on 11th July
            2019, expanding to Facebook and Instagram by February 2020. Despite
            the challenges posed by the COVID-19 pandemic, we kept our spirit
            alive through various online activities and competitions. Our
            community is divided into two groups: SIT PHOTO CLUB and SIT PHOTO
            CLUB (BEGINNERS), ensuring that both seasoned photographers and
            novices have a space to learn and grow.
          </p>
        </div>
      </div>
      {/* ############################################################### Leadership and Guidance  section start  */}
      <div className="row">
        <div className="col-12 text-center">
          <h1 className="text-center display-6 mt-5 mb-2 ">
            Leadership and Guidance
          </h1>
          <p className="text-center mb-5">
            Our leadership has evolved over the years:
          </p>

          <ul>
            {leadersData.map((leader, index) => {
              return (
                <li
                  key={index}
                  style={{ "--accent-color": `${colors[index]}` }}
                >
                  <div className="date">
                    {leader.startYear} - {leader.endYear}
                  </div>
                  <div className="title">{leader.name}</div>
                </li>
              );
            })}
          </ul>
          <p className="text-center mt-5">
            Initially,{" "}
            <em>
              <b>Amlan Sir</b>
            </em>{" "}
            from the MCA department was our teacher coordinator. Since 2022,{" "}
            <em>
              <b>
                Rishi Sir, Subhajit Sir, Pinaki Sir, Sathi Ma'am, and Debayan
                Nandy Sir
              </b>
            </em>{" "}
            have been our guiding lights.
          </p>
        </div>
      </div>

      {/* ############################################################### activities  section start  */}
      <div className="row my-5">
        <div className="col-12 text-justify mt-5">
          <h1 className="text-center display-6 mt-5 mb-5 ">
            Key Activities and Milestones
          </h1>

          <div id="activities">
            <div className="container-fluid ">
              {/* {console.log([...Array(activities.length / 2)])} */}
              {[...Array(activities.length / 2).keys()].map((num, i) => {
                {
                  /* <!--first section--> */
                }
                let numPlusI = num + i;
                let zeroTHColor = colors[numPlusI % colors.length];
                let fristTHColor = colors[(numPlusI + 1) % colors.length];
                let secondTHColor = colors[(numPlusI + 2) % colors.length];

                return (
                  <div key={i}>
                    <div className="row align-items-center how-it-works">
                      <div className="col-2 text-center bottom">
                        <div
                          className="circle"
                          style={{ "--accent-color": zeroTHColor }}
                        >
                          {numPlusI + 1}
                        </div>
                      </div>
                      <div className="col-6">
                        <h5
                          className="fw-bold rounded-pill px-4 py-2 mb-2 text-white d-inline-flex align-items-center"
                          style={{ background: zeroTHColor }}
                        >
                          <i className="bi bi-calendar3 me-2"></i>
                          {activities[numPlusI].year}
                        </h5>
                        <p>{activities[numPlusI].desc}</p>
                      </div>
                    </div>
                    {/* <!--path between 1-2--> */}
                    <div className="row timeline">
                      <div className="col-2">
                        <div
                          className="corner top-right"
                          style={{ "--accent-color": zeroTHColor }}
                        ></div>
                      </div>
                      <div className="col-8">
                        <hr />
                      </div>
                      <div className="col-2">
                        <div
                          className="corner left-bottom"
                          style={{ "--accent-color": fristTHColor }}
                        ></div>
                      </div>
                    </div>
                    {/* <!--second section--> */}
                    <div className="row align-items-center justify-content-end how-it-works">
                      <div className="col-6 text-right">
                        <h5
                          className="fw-bold rounded-pill d-inline-block px-4 py-2 mb-2 text-white"
                          style={{ background: fristTHColor }}
                        >
                          <i className="bi bi-calendar3 me-2"></i>
                          {activities[numPlusI + 1].year}
                        </h5>
                        <p>{activities[numPlusI + 1].desc}</p>
                      </div>
                      <div className="col-2 text-center full">
                        <div
                          className="circle"
                          style={{ "--accent-color": fristTHColor }}
                        >
                          {numPlusI + 2}
                        </div>
                      </div>
                    </div>
                    {/* <!--path between 2-3--> */}
                    <div className="row timeline">
                      <div className="col-2">
                        <div
                          className="corner right-bottom"
                          style={{ "--accent-color": secondTHColor }}
                        ></div>
                      </div>
                      <div className="col-8">
                        <hr />
                      </div>
                      <div className="col-2">
                        <div
                          className="corner top-left"
                          style={{ "--accent-color": fristTHColor }}
                        ></div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      {/* ############################################################### Core Team and Achievements  section start  */}
      <div className="row">
        <div className="col-12 text-center">
          <h1 className="text-center display-6 mt-4 mb-3 ">
            Core Team and Achievements
          </h1>
          <p>
            Every July, we open applications for the core team, followed by
            interviews to select dedicated members. Our team members have taken
            on roles such as PR and content writers, contributing to the club's
            success.
          </p>
        </div>
      </div>
      {/* ############################################################### Our Vision  section start  */}
      <div className="row">
        <div className="col-12 text-center">
          <h1 className="text-center display-6 mt-5 mb-3 ">Our Vision</h1>
          <p>
            At SIT Photography Club, we believe in nurturing talent, fostering
            creativity, and providing a platform for photographers to showcase
            their work. Whether you are a beginner or a seasoned photographer,
            our club offers a supportive environment to learn, share, and grow.
          </p>
        </div>
      </div>

      <div className="mt-5 text-center d-flex justify-content-center align-items-center gap-2">
        {/* love icon start */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          fill="currentColor"
          className="bi bi-chat-right-heart text-danger"
          viewBox="0 0 16 16"
        >
          <path d="M2 1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h9.586a2 2 0 0 1 1.414.586l2 2V2a1 1 0 0 0-1-1zm12-1a2 2 0 0 1 2 2v12.793a.5.5 0 0 1-.854.353l-2.853-2.853a1 1 0 0 0-.707-.293H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2z" />
          <path d="M8 3.993c1.664-1.711 5.825 1.283 0 5.132-5.825-3.85-1.664-6.843 0-5.132" />
        </svg>
        {/* love icon end */}
        <p>
          <b>Join us</b> as we continue to capture the world, one frame at a
          time.
        </p>
      </div>
    </div>
  );
}
