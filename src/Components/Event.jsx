import { EventDetails } from '../Databases/EventDetails'
import {EventCard} from './Events/EventCard'
import { NavLink } from 'react-router-dom'
export default function Event() {
  return (
    <div>
      <div className="max-w-7xl mx-auto my-8 px-2">
          <div className="flex justify-center text-2xl md:text-3xl font-bold mb-4">
              Events
          </div>
          <div className='grid gap-8 sm:grid-cols-2 lg:grid-cols-3 p-2 xl:p-5'>
              {EventDetails.map((event) => (
                  <EventCard
                      id={event.id}
                      title={event.Title}
                      image={event.Image}
                      des={event.Description}
                      location={event.Location}
                    />
              )
              )}
          </div>

      </div>

      {/* <br />
      <NavLink to='/event/event1'>Event 1</NavLink>
      <br />
      <NavLink to='/event/event2'>Event 2</NavLink> */}
    </div>
  )
}