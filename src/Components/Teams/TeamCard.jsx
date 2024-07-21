import React from 'react'

export default function TeamCard({member}) {
  return (
    <>
    <div>{member.Fullname}</div>
    <div>{member.Position}</div>
    <br />
    </>
  )
}
