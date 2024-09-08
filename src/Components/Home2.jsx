import React from 'react';
import { SecondPage } from './SecondPage';
import { ThirdPage } from './ThirdPage';
import { ForthPage } from './ForthPAge';
import ReviewComp from './LastPage';
import NavigationBar from './Navbar2'; // Import your Navbar component

const LandscapePhotographyMain = () => {
  const backgroundImage = "/Home/images/portfolio-03.jpg"; // Ensure this path is correct

  return (
    <div className='bg-neutral-800'>
      {/* Navbar */}


      <div className="relative h-screen">
        {/* Background Container */}
        <div className="absolute inset-0 bg-cover bg-center" style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: 'cover', // Adjusts the size of the background image
          backgroundRepeat: 'no-repeat', // Ensures the image does not repeat
          backgroundPosition: 'center', // Centers the image
        }}>
          {/* Overlay for darker effect */}
          <div className="absolute inset-0 bg-black opacity-30"></div>
        </div>

        {/* Main content */}
        <div className="relative z-10 flex flex-col justify-center items-center text-white h-full">
          {/* Title and photographer */}
          <h2 className="text-xl sm:text-2xl mb-2 tracking-wide uppercase text-white font-serif">Aniket Ghosh</h2>
          <h1 className="text-4xl sm:text-7xl font-bold mb-8 text-white font-serif">SIT Photography</h1>
          
          {/* Pricing and info section */}
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
          </div>
          
          {/* Details section */}
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
          </div>
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