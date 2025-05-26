import { useState } from "react";
import EventItem from "./Components/EventItem";
import useEventsData from "../../hooks/useEventsData";

//searchText viene desde app
const Events = ({ searchText }) => {

    const {events, isLoading, error} = useEventsData();

    function handleEventItemClick(id) {
        console.log("Evento Clickeado", id);
    }

    function renderEvents() {
        let eventsFiltered = events;

        if (searchText.length > 0) {
            eventsFiltered = eventsFiltered.filter((item) => item.name.toLocaleLowerCase().includes(searchText));
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

    if (error) {
        return <div>Ha ocurrido un error</div>;
    }
    if (isLoading) {
        return <div>Cargando resultados...</div>;
    }

    return (
        <div>
            <p>Eventos</p>
            {renderEvents()}

        </div>
    );

};

export default Events;