import React, { useEffect, useState } from 'react';
 // Make sure to adjust the import according to your setup
import logo from "../../../public/logo.png"
export const EventPageComp = ({ title, image, des, location, date, timing,link }) => {
    const clk=()=>{
        window.location.href = link;
    }
    const [register,setRegister]=useState("Register Now");
    useEffect(()=>{
        if(link=="")
        {
            setRegister("Registration Closed");
        }
    },[])
    return (
        <div className="relative min-h-screen bg-neutral-900 p-6 flex justify-center items-center">
            <div className="max-w-5xl w-full bg-neutral-800 shadow-2xl rounded-lg overflow-hidden transform transition-transform duration-300 ease-in-out hover:scale-105">
                <div className="lg:flex">
                    <div className="w-full lg:w-2/3">
                        <img
                            src={image}
                            alt="Event"
                            className="w-full h-auto rounded-t-lg lg:rounded-tr-none lg:rounded-bl-lg shadow-md"
                        />
                    </div>
                    <div className="w-full lg:w-1/3 p-6 bg-gray-900">
                        <h1 className="text-3xl font-extrabold mb-2 text-white">{title}</h1>
                        <p className="text-sm text-gray-300 mb-4">SIT Photography Club</p>
                        <div className="mb-4">
                            <p className="text-sm text-gray-400">{date}</p>
                            <p className="text-sm text-gray-400">{timing}</p>
                        </div>
                        <div className="flex items-center mb-4">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                            </svg>
                            <p className="text-md text-gray-300">{location}</p>
                        </div>
                        <button className="w-full bg-teal-600 text-white py-2 px-4 rounded-lg shadow-md hover:bg-teal-500 transition-colors duration-300 ease-in-out mb-6" onClick={clk}>
                            {register}
                        </button>
                        <div className="flex flex-wrap gap-2">
                            {["Content Generation", "Marketing", "SEO", "Writing"].map((tag, index) => (
                                <span key={index} className="bg-teal-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="p-6 bg-gray-900">
                    <div className="md:flex justify-between">
                        <div className="w-full md:w-2/3 pr-6">
                            <h2 className="text-2xl font-bold mb-2 text-white">Event Description</h2>
                            <p className="text-sm text-gray-300 mb-4">{des}</p>
                            <h2 className="text-xl font-bold mb-2 text-white">Rules</h2>
                            <ul className="list-disc pl-6 text-gray-300">
                                <li>Respect the guest speakers and their time.</li>
                                <li>Arrive on time and stay for the full session.</li>
                                <li>Keep your mobile phones on silent mode.</li>
                            </ul>
                        </div>
                        <div className="w-full md:w-1/3 md:px-10">
                            <h3 className="text-lg font-bold mb-2 text-white">Hosted by</h3>
                            <div className="flex items-center">
                                <img src={logo} alt="club logo" className="w-20 h-15 rounded-md mr-4 shadow-lg" />
                                <div>
                                    <p className="text-sm text-gray-300 font-bold">SIT Photography Club</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
