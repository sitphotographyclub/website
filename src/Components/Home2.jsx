import React from 'react';
import { SecondPage } from './SecondPage';
import { ThirdPage } from './ThirdPage';
import { ForthPage } from './ForthPAge';
import ReviewComp from './LastPage';
import NavigationBar from './Navbar2'; // Import your Navbar component
import './design.css'; // Import the CSS file


const LandscapePhotographyMain = () => {
  return (
    <div className='bg-neutral-800'>
      <div className="relative h-screen">
        <div className="absolute inset-0 background-container">
          <div className="absolute inset-0 bg-black opacity-30"></div>
        </div>
        <div className="relative z-10 flex flex-col justify-center items-center text-white h-full">
          <h2 className="text-xl sm:text-2xl mb-2 tracking-wide uppercase text-white font-serif">Showcase & Events</h2>
          <h1 className="text-4xl sm:text-7xl font-bold mb-8 text-white font-serif">SIT Photography Club</h1>
          
          {/* Pricing and info section 
          <div className="flex space-x-8 mb-16">
            <div className="text-center">
              <p className="text-3xl font-bold">149 €</p>
              <p className="text-sm tracking-wide">PRICE</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold">EXPERT</p>
              <p className="text-sm tracking-wide">LEVEL</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold">3h 55m</p>
              <p className="text-sm tracking-wide">DURATION</p>
            </div>
          </div>*/}
          
          {/* Details section 
          <div className="flex space-x-16">
            <div className="text-center">
              <p className="text-3xl font-bold">11</p>
              <p className="text-sm tracking-wide">CHAPTERS</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold">55</p>
              <p className="text-sm tracking-wide">LESSONS</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold">100%</p>
              <p className="text-sm tracking-wide">EXCLUSIVE</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold">4K</p>
              <p className="text-sm tracking-wide">QUALITY</p>
            </div>
          </div>*/}
          
        </div>
      </div>
      <div className='container'>
        <div className='bg-neutral-700 h-1'></div>
      </div>
      <div className='py-20'>
        <SecondPage/>
      </div>
      <div className='container'>
        <div className='bg-neutral-700 h-1'></div>
      </div>
      <div className='py-20'>
        <ThirdPage/>
      </div>
      <div className='container'>
        <div className='bg-neutral-700 h-1'></div>
      </div>
      <div className='py-20'>
        <ForthPage/>
      </div>
      <div className='container'>
        <div className='bg-neutral-700 h-1'></div>
      </div>
      <div className='py-20'>
        <ReviewComp/>
      </div>
    </div>
  );
};

export default LandscapePhotographyMain;