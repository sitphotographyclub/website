import { EventDetails } from '../Databases/EventDetails'
import { EventCard } from './Events/EventCard'
import { NavLink } from 'react-router-dom'
import "./design.css"
export default function Event() {
  return (
    <div style={{ backgroundColor: 'black' }}>
      <div className="max-w-7xl mx-auto px-2">
        <div className="flex justify-center text-5xl md:text-3xl text-white font-bold mb-4 ">
          <p className='text-5xl Heading text-white p-2'>Events</p>
        </div>
        <div className='grid gap-8 sm:grid-cols-2 lg:grid-cols-3 p-2 xl:p-5'>
          {EventDetails.map((event,key) => (
            <div key={event.id}>
              <NavLink to={`/event/${event.id}`}>
                <EventCard
                  key={key}
                  id={event.id}
                  title={event.Title}
                  image={event.Image}
                  des={event.Description}
                  location={event.Location}
                  date={event.Date}
                  link={event.Link}
                />
              </NavLink>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
