import React from 'react'
import './TeamCard.css'
import Pic from './pic.png'
import Insta from './instagram.png'
import Linke from './linkedin.png'
export default function TeamCard({ member }) {
  return (
    <div className='bg-black text-white h-full text-center p-10 rounded-xl'>
      <img src={`./images/${member.Image}`} />
      <p className="text-center Name pt-2">{member.Fullname}</p>
      <p className="text-center Position p-4">{member.Position}</p>
      <div className='flex flex-row justify-center items-center gap-4'>
        <img src={Insta} className='Image' href={member.Instagram}></img>
        <img src={Linke} className='Image'></img>
      </div>
    </div>
  )
}
