import { EventDetails } from "../../Databases/EventDetails";
import { EventPageComp } from "./EventPage";

export default function Event3() {
  const firstEvent = EventDetails[2];
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
        rules={firstEvent.Rules}
      />
    </div>
  );
}