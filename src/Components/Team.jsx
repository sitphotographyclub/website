import React from 'react'
import TeamDetails from '../Databases/TeamDetails'
import TeamCard from './Teams/TeamCard'
export default function Team() {
  return (
    <div>
      {TeamDetails.map((member)=>{
        console.log(member.Fullname);
        return <TeamCard title={member}/>
      })}
    </div>
  )
}
