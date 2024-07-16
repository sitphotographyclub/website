import React from 'react'
import { NavLink } from 'react-router-dom'
export default function Event() {
  return (
    <div> Events
      <br />
      <NavLink to='/event/event1'>Event 1</NavLink>
      <br />
      <NavLink to='/event/event2'>Event 2</NavLink>
    </div>
  )
}