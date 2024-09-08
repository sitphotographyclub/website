import React from 'react';
import { Header } from './Header';
import backImg from '/Home/images/banner-bg.jpg';

const ReviewComp = () => {
  return (
    <div className="bg-neutral-800 text-white min-h-screen">
      <div className="container mx-auto px-4 py-12">
        <div className="mb-16">
          <Header text="Check their experiences" subText="What our students say about us" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-20">
            {['Gabriele Schumann', 'Angela Davis', 'Jane Levine'].map((name, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-1 bg-yellow-500 mx-auto mb-4"></div>
                <p className="mb-4 text-sm text-gray-200">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <p className="font-semibold text-gray-100">{name}</p>
                <p className="text-gray-500 text-xs uppercase tracking-wide">STUDENT</p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          {/* Apply gradient overlay to fade top and bottom */}
          <div 
            className="absolute inset-0 bg-gradient-to-b from-neutral-800 via-transparent to-neutral-800 rounded-lg z-10"
          ></div>
          
          {/* Background image */}
          <img 
            src={backImg} 
            alt="Photographer in field" 
            className="w-full h-full object-cover rounded-lg"
          />
          
          <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-8 z-20">
            <h3 className="text-sm uppercase tracking-wider mb-2 text-gray-200">LEARN FROM THE BEST</h3>
            <h2 className="text-4xl font-bold mb-4 text-white">Take Classes and Get Inspired</h2>
            <p className="mb-6 text-gray-200">Visit our classes for a deeper dive into all things creative!</p>
            <button className="bg-yellow-500 text-black py-3 px-6 rounded-full hover:bg-yellow-600 transition duration-300">
              EXPLORE CLASSES →
            </button>
          </div>
        </div>

        <div className="flex justify-around mt-12 text-center">
          {[
            { count: '1500+', label: 'ONLINE COURSES' },
            { count: '650+', label: 'EXPERT INSTRUCTORS' },
            { count: '7000+', label: 'ACTIVE STUDENTS' },
          ].map((item, index) => (
            <div key={index} className="text-center">
              <p className="text-4xl font-bold text-white mb-2">{item.count}</p>
              <p className="text-sm text-gray-400">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ReviewComp;
