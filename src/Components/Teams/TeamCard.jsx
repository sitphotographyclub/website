import React from 'react'
import './TeamCard.css'
import Pic from './pic.png'
import Insta from './instagram.png'
import Linke from './linkedin.png'
export default function TeamCard({ member }) {
  
  const Ins=()=>{
    window.location.href = `${member.Instagram}`;
  }
  const Lin=()=>{
    window.location.href = `${member.Linkedin}`;
  }
  return (
    <div className='bg-black text-white h-full text-center p-10 rounded-xl border border-solid'>
      <img src={`./images/${member.Image}`} className=' rounded-lg' />
      <p className="text-center Name pt-2 font-sans font-bold lg:text-xl text-white">{member.Fullname}</p>
      <p className="text-center Position p-3 text-xl font-serif">{member.Position}</p>
      <div className='flex flex-row justify-center items-center gap-4'>
        <img src={Insta} className='Image' onClick={Ins}></img>
        <img src={Linke} className='Image' onClick={Lin}></img>
      </div>
    </div>
  )
}
