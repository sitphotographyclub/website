// eslint-disable-next-line no-unused-vars
import React from "react";
import TeamCard from "./Teams/TeamCard";
import Footer from "./Footer";

const Team = () => {
  const teamData = [
    {
      first_name: "Rosalynd",
      last_name: "Harms",
      profile_img:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCCyUKI82rttHx9nGEzJFqHvdlZHo9jfJ9Sw&s",
      desg: "Construction Worker",
      desc: "Salter-Harris Type II physeal fracture of upper end of radius, unspecified arm, subsequent encounter for fracture with delayed healing",
      social_links: {
        fb: "https://www.abc.com",
        twitter: "https://www.abc.com",
        linkedin: "https://www.abc.com",
        instagram: "https://www.abc.com",
        github: "https://www.abc.com",
      },
    },
    {
      first_name: "Wait",
      last_name: "Pieper",
      profile_img:
        "https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTA4L3Jhd3BpeGVsX29mZmljZV8zMl9waG90b19vZl9hX3BvcnRyYWl0X29mX2FfbWlkZGxlX2FnZV9vZl93b21hbl80MDgzZjBhZi01OWJlLTQyMzItYmE2ZS0xYWIyYTRmZDk1NjNfMS5qcGc.jpg",
      desg: "Subcontractor",
      desc: "Salter-Harris Type II physeal fracture of upper end of radius, unspecified arm, subsequent encounter for fracture with delayed healing",
      social_links: {
        fb: "https://www.abc.com",
        twitter: "https://www.abc.com",
        linkedin: "https://www.abc.com",
        instagram: "https://www.abc.com",
        github: "https://www.abc.com",
      },
    },
    {
      first_name: "Remy",
      last_name: "Smitheram",
      profile_img:
        "https://media.istockphoto.com/id/1682296067/photo/happy-studio-portrait-or-professional-man-real-estate-agent-or-asian-businessman-smile-for.jpg?s=612x612&w=0&k=20&c=9zbG2-9fl741fbTWw5fNgcEEe4ll-JegrGlQQ6m54rg=",
      desg: "Architect",
      desc: "Salter-Harris Type II physeal fracture of upper end of radius, unspecified arm, subsequent encounter for fracture with delayed healing",
      social_links: {
        fb: "https://www.abc.com",
        twitter: "https://www.abc.com",
        linkedin: "https://www.abc.com",
        instagram: "https://www.abc.com",
        github: "https://www.abc.com",
      },
    },
    {
      first_name: "Marmaduke",
      last_name: "Cerith",
      profile_img:
        "https://img.freepik.com/free-photo/close-up-shot-pretty-woman-with-perfect-teeth-dark-clean-skin-having-rest-indoors-smiling-happily-after-received-good-positive-news_273609-1248.jpg",
      desg: "Construction Foreman",
      desc: "Unspecified fracture of shaft of right tibia, subsequent encounter for open fracture type I or II with delayed healing",
      social_links: {
        fb: "https://www.abc.com",
        twitter: "https://www.abc.com",
        linkedin: "https://www.abc.com",
        instagram: "https://www.abc.com",
        github: "https://www.abc.com",
      },
    },
    {
      first_name: "Roxine",
      last_name: "Hincks",
      profile_img:
        "https://i.pinimg.com/736x/f3/78/4a/f3784adc704a1bc9bcb2e494cd39caee.jpg",
      desg: "Supervisor",
      desc: "Displaced fracture of left radial styloid process, subsequent encounter for open fracture type IIIA, IIIB, or IIIC with delayed healing",
      social_links: "http://mit.edu/non/interdum/in/ante.js?at=mi&diam=sit",
    },
    {
      first_name: "Dionis",
      last_name: "Hemphrey",
      profile_img:
        "https://i.pinimg.com/474x/6c/99/c0/6c99c00f764edf7ab63b1df69d9a1373.jpg",
      desg: "Estimator",
      desc: "Salter-Harris Type II physeal fracture of upper end of radius, unspecified arm, subsequent encounter for fracture with delayed healing",
      social_links: {
        fb: "https://www.abc.com",
        twitter: "https://www.abc.com",
        linkedin: "https://www.abc.com",
        instagram: "https://www.abc.com",
        github: "https://www.abc.com",
      },
    },
    {
      first_name: "Shawnee",
      last_name: "Howbrook",
      profile_img:
        "https://i.pinimg.com/474x/6c/99/c0/6c99c00f764edf7ab63b1df69d9a1373.jpg",
      desg: "Estimator",
      desc: "Salter-Harris Type II physeal fracture of upper end of radius, unspecified arm, subsequent encounter for fracture with delayed healing",
      social_links: {
        fb: "https://www.abc.com",
        twitter: "https://www.abc.com",
        linkedin: "https://www.abc.com",
        instagram: "https://www.abc.com",
        github: "https://www.abc.com",
      },
    },
    {
      first_name: "Dionis",
      last_name: "Hemphrey",
      profile_img:
        "https://i.pinimg.com/474x/6c/99/c0/6c99c00f764edf7ab63b1df69d9a1373.jpg",
      desg: "Estimator",
      desc: "Salter-Harris Type II physeal fracture of upper end of radius, unspecified arm, subsequent encounter for fracture with delayed healing",
      social_links: {
        fb: "https://www.abc.com",
        twitter: "https://www.abc.com",
        linkedin: "https://www.abc.com",
        instagram: "https://www.abc.com",
        github: "https://www.abc.com",
      },
    },
    {
      first_name: "Wait",
      last_name: "Pieper",
      profile_img:
        "https://media.istockphoto.com/id/1303539316/photo/one-beautiful-woman-looking-at-the-camera-in-profile.jpg?s=612x612&w=0&k=20&c=zzAlaDFbbaVuRG3he04Jk7ul7uRcgZMWU65yRfImA94=",
      desg: "Subcontractor",
      desc: "Salter-Harris Type II physeal fracture of upper end of radius, unspecified arm, subsequent encounter for fracture with delayed healing",
      social_links: {
        fb: "https://www.abc.com",
        twitter: "https://www.abc.com",
        linkedin: "https://www.abc.com",
        instagram: "https://www.abc.com",
        github: "https://www.abc.com",
      },
    },
    {
      first_name: "Dionis",
      last_name: "Hemphrey",
      profile_img:
        "https://i.pinimg.com/474x/6c/99/c0/6c99c00f764edf7ab63b1df69d9a1373.jpg",
      desg: "Estimator",
      desc: "Salter-Harris Type II physeal fracture of upper end of radius, unspecified arm, subsequent encounter for fracture with delayed healing",
      social_links: {
        fb: "https://www.abc.com",
        twitter: "https://www.abc.com",
        linkedin: "https://www.abc.com",
        instagram: "https://www.abc.com",
        github: "https://www.abc.com",
      },
    },
    {
      first_name: "Dionis",
      last_name: "Hemphrey",
      profile_img:
        "https://www.shutterstock.com/image-photo/head-shot-serious-goodlooking-young-260nw-2156185987.jpg",
      desg: "Estimator",
      desc: "Salter-Harris Type II physeal fracture of upper end of radius, unspecified arm, subsequent encounter for fracture with delayed healing",
      social_links: {
        fb: "https://www.abc.com",
        twitter: "https://www.abc.com",
        linkedin: "https://www.abc.com",
        instagram: "https://www.abc.com",
        github: "https://www.abc.com",
      },
    },

    {
      first_name: "Wait",
      last_name: "Pieper",
      profile_img:
        "https://i.pinimg.com/originals/3f/e9/fe/3fe9fe7f0573b76d84f1bc313e43c98d.jpg",
      desg: "Subcontractor",
      desc: "Salter-Harris Type II physeal fracture of upper end of radius, unspecified arm, subsequent encounter for fracture with delayed healing",
      social_links: {
        fb: "https://www.abc.com",
        twitter: "https://www.abc.com",
        linkedin: "https://www.abc.com",
        instagram: "https://www.abc.com",
        github: "https://www.abc.com",
      },
    },
  ];

  return (
    <>
      <div className="container-fluid py-5 px-4 px-md-5">
        <div className="row">
          <div className="col-12">
            <h1 className="text-center mb-5 ">Meet The Team</h1>
          </div>
        </div>
        <div className="row row-gap-4">
          {teamData.map((member, index) => {
            return (
              <div
                className="col-xxl-2 col-xl-3 col-lg-3 col-md-4 col-sm-6 col-12"
                key={index}
              >
                <TeamCard member={member} />
              </div>
            );
          })}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Team;
