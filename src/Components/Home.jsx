import React from "react";
import "./css/Home/animate.css";
import "./css/Home/flex-slider.css";
import "./css/Home/fontawesome.css";
import "./css/Home/owl.css";
import "./css/Home/home.css";
import "./design.css"
import TeamDetails from "../Databases/TeamDetails";
import TeamCard from "./Teams/TeamCard";
import img2 from "../../public/Home/Slider/3.jpeg";
import img3 from "../../public/Home/Slider/4.jpeg";
import img4 from "../../public/Home/Slider/5.jpeg";
import img5 from "../../public/Home/Slider/6.jpeg";
import img6 from "../../public/Home/Slider/7.jpeg";
import img7 from "../../public/Home/Slider/8.jpeg";

export default function Home() {
  const TeamGB2 = [{
    Fullname: "Shreya Prasad"
    , Image: "shreyaprasad.jpg"
    , Position: "President"
    , Instagram: "https://www.instagram.com/_justtt.shreya_"
    , Linkedin: "https://www.linkedin.com/in/shreya-prasad-0b1397252p"
  },
  {
    Fullname: "Arijit Bhattacharyya"
    , Image: "arijitbhattacharyya.jpg"
    , Position: "Secretary"
    , Instagram: "https://www.instagram.com/darshanxarijit_dz?igsh=M21pcWtqOHZnZTBq"
    , Linkedin: "https://www.linkedin.com/in/arijit-bhattacharyya-517312282"
  },
  {
    Fullname: "Swarnadeep S P"
    , Image: "swarnadeeppoddar.jpg"
    , Position: "Organizer"
    , Instagram: "https://www.instagram.com/swarnadeepsahapoddar"
    , Linkedin: "https://www.linkedin.com/in/swarnadeep-saha-poddar"
  }]
  const TeamGB = [{
    Fullname: "Rounak Pramanik"
    , Image: "rounakpramanik.jpg"
    , Position: "Content Team"
    , Instagram: "https://www.instagram.com/rounak.jpeg"
    , Linkedin: "https://www.linkedin.com/in/rounak-pramanik-90128a227"
  },
  {
    Fullname: "Biswarup Das"
    , Image: "biswarupdas.jpg"
    , Position: "Media Team"
    , Instagram: "https://www.instagram.com/qt_uwuman"
    , Linkedin: "https://www.linkedin.com/in/biswarup-das-a76606236"
  },
  {
    Fullname: "Urbi Goswami"
    , Image: "urbigoswami.jpg"
    , Position: "PR/Marketing Team"
    , Instagram: ""
    , Linkedin: "https://www.linkedin.com/in/urbi-goswami-734b36255"
  },
  {
    Fullname: "Agniva Ghosh"
    , Image: "agnivaghosh.jpg"
    , Position: "Social Media Executive"
    , Instagram: ""
    , Linkedin: ""
  }]
  return (
    <div className="w-screen bg-black">
      <div className="w-full bg-black h-[500px] flex flex-col md:flex-row">
        <div className="w-full md:w1/2  h-full text-white">
          <p className="text-white text-3xl md:text-5xl leading-normal Heading pt-7 pr-7 pl-7 pb-2 font-sans font-bold">Capture the Moment with Our Photography Club</p>
          <p className="text-white Heading pt-3 pr-7 pl-7 pb-2 font-sans text-lg">Join our vibrant community of photography enthusiasts and explore the art of visual storytelling.</p>
          <p className="text-white Heading pt-2 pr-7 pl-7 pb-2 text-3xl font-sans">About PhotoGraphy Club </p>
          <p className="text-white Heading pt-2 pr-7 pl-7 pb-2 font-sans text-lg">Our photography club is a community of passionate photographers who come together to share their love of the art. We organize regular meetups, workshops, and photo walks to help our members improve their skills and capture stunning images. Whether you're a beginner or a seasoned pro, you'll find a welcoming and supportive environment at our club.</p>
        </div>
        <div className="w-full md:w1/2  h-full mt-16">
          <img src="./Home/Slider/1.jpg" className="w-full h-full" />
        </div>
      </div>
      <div className="w-full bg-black text-center pt-4 mt-96 lg:mt-24">
        <h2 className="Heading text-white text-4xl font-serif font-bold">Moment Captured By Us </h2>
        <div className="flex flex-col-reverse md:flex-row gap-10 pr-10 pl-5 pt-5">
          <img className="md:w-1/3 w-full rounded" src={img2} />
          <img className="md:w-1/3 w-full rounded" src={img3}/>
          <img className="md:w-1/3 w-full rounded" src={img4} />
        </div>
        <div className="flex flex-col-reverse md:flex-row gap-10 pr-10 pl-5 pt-4">
          <img className="md:w-1/3 w-full rounded" src={img5} />
          <img className="md:w-1/3 w-full rounded" src={img6} />
          <img className="md:w-1/3 w-full rounded" src={img7} />
        </div>
      </div>
      <h1 className="text-white Heading text-center p-4">Our G.B. Member</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-24 pl-4 pr-4 bg-black p-4">
        {TeamGB2.map((member, indx) => {
          console.log(member.Fullname);
          return <TeamCard key={indx} member={member} />;
        })}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 pl-4 pr-4 bg-black">
        {TeamGB.map((member, indx) => {
          console.log(member.Fullname);
          return <TeamCard key={indx} member={member} />;
        })}
      </div>

    </div>
  );
}
