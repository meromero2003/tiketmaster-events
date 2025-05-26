import { useState, useEffect } from "react";
import eventsJSON from "../data/events.json";

const useEventsData = () => {
    const [data, setData] = useState([]);
    //Lista con los eventos
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState();


    useEffect(() => {
        setTimeout(() => {

            try {
                setData(eventsJSON);
                setIsLoading(false)

            } catch (error) {
                setError(error)
            }

        }, 4000);
        //load API Call
    }, [])
    console.log(data)
    return {
        events: data?._embedded?.events || [],
        isLoading,
        error

    };
}

export default useEventsData;