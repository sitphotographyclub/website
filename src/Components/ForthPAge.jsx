import { Header } from "./Header"
import { EventDetails } from "../Databases/EventDetails"
import { EventImgComp } from "./EventImgComp"

export const ForthPage = () => {
    return <div className="py-60 bg-neutral-800">
        <div className="container mx-auto px-4">
            <Header text="Get more parctice" subText="Our latest workshops:" />
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 pt-10 lg:grid-cols-4 lg:gap-6 lg:pt-20 sm:gap-4 md:gap-5 ">
                {EventDetails.map((event) => (
                    <div key={event.id}>
                        <EventImgComp img={event.Image} text={event.Title} subText={event.Location} />
                    </div>
                ))}
            </div>
        </div>
        
    </div>
}