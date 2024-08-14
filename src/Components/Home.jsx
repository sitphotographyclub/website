import React from "react";
import "./css/Home/animate.css";
import "./css/Home/flex-slider.css";
import "./css/Home/fontawesome.css";
import "./css/Home/owl.css";
import "./css/Home/home.css";
import "./design.css"

export default function Home() {
  return (
    <div className="w-screen">
      <div className="w-full bg-black h-[500px] flex flex-col-reverse md:flex-row">
        <div className="w-full md:w1/2  h-full text-white">
          <p className="text-white text-3xl md:text-5xl leading-normal Heading pt-7 pr-7 pl-7 pb-2">Capture the Moment with Our Photography Club</p>
          <p className="text-white Heading pt-3 pr-7 pl-7 pb-2">Join our vibrant community of photography enthusiasts and explore the art of visual storytelling.</p>
          <p className="text-white Heading pt-2 pr-7 pl-7 pb-2 text-3xl">About PhotoGraphy Club </p>
          <p className="text-white Heading pt-2 pr-7 pl-7 pb-2 ">Our photography club is a community of passionate photographers who come together to share their love of the art. We organize regular meetups, workshops, and photo walks to help our members improve their skills and capture stunning images. Whether you're a beginner or a seasoned pro, you'll find a welcoming and supportive environment at our club.</p>
        </div>
        <div className="w-full md:w1/2  h-full">
        <img  src="./Home/Slider/1.jpg" className="w-full"/>
        </div>
      </div>
      <div className="w-full bg-black  text-center">
        <h2 className="Heading text-white text-5xl ">Moment Captured By Us </h2>
        <div className="flex flex-col-reverse md:flex-row gap-10 pr-10 pl-5 pt-5">
          <img className="md:w-1/3 w-full rounded" src="./Home/Slider/1.jpg" />
          <img className="md:w-1/3 w-full rounded" src="./Home/Slider/1.jpg" />
          <img className="md:w-1/3 w-full rounded" src="./Home/Slider/1.jpg" />
        </div>
        <div className="flex flex-col-reverse md:flex-row gap-10 pr-10 pl-5 pt-4">
          <img className="md:w-1/3 w-full rounded" src="./Home/Slider/1.jpg" />
          <img className="md:w-1/3 w-full rounded" src="./Home/Slider/1.jpg" />
          <img className="md:w-1/3 w-full rounded" src="./Home/Slider/1.jpg" />
        </div>
      </div>
    </div>
  );
}
