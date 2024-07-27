import React from 'react'
import Pic from './pic.png'
import Insta from './instagram.png'
import Linke from  './linkedin.png'
export default function TeamCard({member}) {
  return (
    <>
 <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="max-w-sm bg-black rounded-lg shadow-md overflow-hidden">
        <img 
          src={`./pic.png`} 
          alt="Technical Executive" 
          className="w-full h-48 object-cover object-center"
        />  
        <div className="p-4">
          <h2 className="text-2xl font-bold text-center mb-2">{member.Position}</h2>
          <div className="flex justify-center space-x-4">
            <a href={member.Instagram} target="_blank" rel="noopener noreferrer">
              <img src={Insta} alt="Instagram" className="h-8 w-8" />
            </a>
            <a href={member.Instagram} target="_blank" rel="noopener noreferrer">
              <img src={Linke} alt="LinkedIn" className="h-8 w-8" />
            </a>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}
