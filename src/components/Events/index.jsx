import { useState } from "react";
import EventItem from "./Components/EventItem";
import eventsJSON from "../../data/events.json";


const Events = () => {
    
    const [data] = useState(eventsJSON);
    //Lista con los eventos
    const events = data._embedded.events;

    function handleEventItemClick(id){
        console.log("Evento Clickeado", id);
    }

    const eventsComponent = events.map((eventItem)=> 
        <EventItem 
            key={`event-item-${eventItem.id}`}
            id={eventItem.id}
            name={eventItem.name}
            info={eventItem.info}
            image={eventItem.images[0].url}
            onEventClick={handleEventItemClick}
                     
        />
    );

    return (
        <div>
            <p>Eventos</p>
            {eventsComponent}
            
        </div>
    );

};

export default Events;