import React from 'react';

const NavigationBar = () => {
  return (
    <nav className="absolute top-0 left-0 right-0 flex justify-between items-center px-12 py-8 text-white z-10">
      <div className="flex items-center">
        <span className="font-semibold text-lg tracking-widest">GreaterPhoto</span>
      </div>
      <div className="flex space-x-8 text-sm uppercase tracking-wide">
        <a href="/" className="hover:text-gray-300 transition-colors">Home</a>
        <a href="/masterclass" className="hover:text-gray-300 transition-colors">Masterclass</a>
        <a href="/classes" className="hover:text-gray-300 transition-colors">Classes</a>
        <a href="/events" className="hover:text-gray-300 transition-colors">Events</a>
        <a href="#" className="hover:text-gray-300 transition-colors">Login</a>
      </div>
    </nav>
  );
};

export default NavigationBar;
