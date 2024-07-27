import { EventDetails } from "../../Databases/EventDetails";
import { EventPageComp } from "./EventPage";

export default function Event2() {
  const firstEvent = EventDetails[1];
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