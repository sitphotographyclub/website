import { useEffect, useState } from "react";
import { EventDetails } from "../../Databases/EventDetails";
import { EventPageComp } from "./EventPage";
import { useParams } from "react-router-dom";
export default function Event1() {
    const [firstEvent,setfirstEvent]=useState([]);
    const params=useParams();
    useEffect(()=>{
        const data=params.id;
        const user = EventDetails.find(user =>user.id==data)
        setfirstEvent(user);
        console.log(user);
    },[])

    return (
        <div>
<EventPageComp
                key={firstEvent.id}
                title={firstEvent.Title}
                image={firstEvent.Image}
                des={firstEvent.Description}
                location={firstEvent.Location}
                timing={firstEvent.Timing}
                date={firstEvent.Date}
                link={firstEvent.Link}
            />
        </div>
    );
}