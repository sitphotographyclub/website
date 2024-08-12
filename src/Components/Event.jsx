import { EventDetails } from '../Databases/EventDetails'
import { EventCard } from './Events/EventCard'
import { NavLink } from 'react-router-dom'
export default function Event() {
  return (
    <div style={{ backgroundColor: 'black' }}>
      <div className="max-w-7xl mx-auto px-2">
        <div className="flex justify-center text-2xl md:text-3xl text-white font-bold mb-4">
          Events
        </div>
        <div className='grid gap-8 sm:grid-cols-2 lg:grid-cols-3 p-2 xl:p-5'>
          {EventDetails.map((event) => (
            <div key={event.id}>
              <NavLink to={`/event/event${event.id}`}>
                <EventCard
                  id={event.id}
                  title={event.Title}
                  image={event.Image}
                  des={event.Description}
                  location={event.Location}
                  date={event.Date}
                />
              </NavLink>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
