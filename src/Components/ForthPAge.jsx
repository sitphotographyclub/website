import { Header } from "./Header"
import { EventDetails } from "../Databases/EventDetails"
import { EventImgComp } from "./EventImgComp"
import { NavLink } from "react-router-dom"

export const ForthPage = () => {
    return <div className=" bg-neutral-800">
        <div className="container mx-auto px-4">
            <Header text="Enhance Your Craft" subText="Join Our Latest Workshops and Competitions" />
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 pt-10 lg:grid-cols-4 lg:gap-6 lg:pt-20 sm:gap-4 md:gap-5 ">
                {EventDetails.map((event) => (
                    <div key={event.id}>
                        <NavLink to={`/event/event${event.id}`}>
                        <EventImgComp img={event.Image} text={event.Title} subText={event.Location} />
                        </NavLink>
                    </div>
                ))}
            </div>
        </div>
        
    </div>
}