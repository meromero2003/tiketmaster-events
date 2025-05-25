import { useState } from "react";
import EventItem from "./Components/EventItem";
import eventsJSON from "../../data/events.json";

//searchText viene desde app
const Events = ({searchText}) => {

    const [data] = useState(eventsJSON);
    //Lista con los eventos
    const events = data._embedded.events;

    function handleEventItemClick(id) {
        console.log("Evento Clickeado", id);
    }

    function renderEvents() {
        let eventsFiltered = events;

        if (searchText.length > 0) {
            eventsFiltered = eventsFiltered.filter((item)=> item.name.toLocaleLowerCase().includes(searchText));
        }
        //else
        return eventsFiltered.map((eventItem) => (
            <EventItem
               key={`event-item-${eventItem.id}`}
               id={eventItem.id}
               name={eventItem.name}
               info={eventItem.info}
               image={eventItem.images[0].url}
               onEventClick={handleEventItemClick}

             />
        ));
    };

return (
    <div>
        <p>Eventos</p>
        {renderEvents()}

    </div>
);

};

export default Events;