import React, { useState, useEffect } from 'react';
import EventsAPI from '../services/EventsAPI';
import '../css/Event.css';
// import dates from 'your-date-library-path'; // Import the date library

const Event = (props) => {
    const [event, setEvent] = useState(null);
    const [time, setTime] = useState('');
    const [remaining, setRemaining] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            try {
                console.log("prop id: " + props.id);
                const eventData = await EventsAPI.getEventsById(props.id);
                console.log(eventData);
                setEvent(eventData[0]);
            } catch (error) {
                console.error('Error fetching event data:', error);
            }
        };

        fetchData();
    }, [props.id]);

    useEffect(() => {
        const formatEventTime = async () => {
            try {
                const result = Date(event.time);
                setTime(result);
            } catch (error) {
                console.error('Error formatting event time:', error);
            }
        };

        if (event) {
            formatEventTime();
        }
    }, [event]);

    // useEffect(() => {
    //     const formatRemainingTime = async () => {
    //         try {
    //             //const now = new Date();
    //             const timeRemaining = Date(event.remaining);
    //             setRemaining(timeRemaining);
    //             dates.formatNegativeTimeRemaining(remaining, event.id); // Not sure what you intend to do here
    //         } catch (error) {
    //             console.error('Error formatting remaining time:', error);
    //         }
    //     };

    //     if (event) {
    //         formatRemainingTime();
    //     }
    // }, [event, remaining]);

    return (
        <article className='event-information'>
            {event && (
                <>
                    <img src={event.img_url} alt='Event' />
                    <div className='event-information-overlay'>
                        <div className='text'>
                            <h3>{event.name}</h3>
                            <p>
                                <i className="fa-regular fa-calendar fa-bounce"></i> {event.date} <br /> {event.time}
                            </p>
                            {/* <p id={`remaining-${event.id}`}>{remaining}</p> */}
                        </div>
                    </div>
                </>
            )}
        </article>
    );
};

export default Event;
