const EventItem = ({id,info,name,image, onEventClick}) => {

    function handelSeeMoreClick (event) {
        event.stopPropagation();
        onEventClick(id)
    }

    return (
        <div >
            <img src= {image} alt = {name}/>
            <h4>{name}</h4>
            <p>{info}</p>
            <button onClick={handelSeeMoreClick}>Ver mas</button>
        </div>
    );

};

export default EventItem;