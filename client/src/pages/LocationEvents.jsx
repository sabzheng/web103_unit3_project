import React, { useState, useEffect } from 'react';
import LocationsAPI from '../services/LocationsAPI'
import EventsAPI from '../services/EventsAPI'

import { useParams } from 'react-router-dom'

import Event from '../components/Event';
import '../css/LocationEvents.css';
//import EventsAPI from '../services/EventsAPI';

const LocationEvents = (props) => {
    const [location, setLocation] = useState({ id: 0, name: 'name', address: 'add', img_url: 'url' });
    const [events, setEvents] = useState([]);
    const id = props.index;
    useEffect(() => {
        const fetchData = async () => {
            try {
                // Fetch location data
                const locationResponse = await LocationsAPI.getLocationsById(id);
                console.log('Location data:', locationResponse);
                setLocation(locationResponse[0]);
    
                // Fetch event data
                const eventResponse = await LocationsAPI.getEventsByLocation(id);
                console.log('Event data:', eventResponse);
                setEvents(eventResponse);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
    
        fetchData();
    }, [id]);
    
    

    return (
        <div className='location-events'>
            <header>
            {/* {location && location.id > 0 ? (
  <div className='location-container'>
    <div className='location-image'>
      <img src={location.img_url} alt='Location' /> 
    </div>

    <div className='location-info'>
      <h2>{location.name}</h2>
      <p>{location.address}</p>
    </div>
  </div>
) : null} */}
            <div className='location-container'>
            {/* <div className='location-image'>
            <img src={location.img_url} alt='Location' /> 
            </div> */}

            <div className='location-info'>
            <h2>{location.name}</h2>
            <p>{location.address}</p>
            </div>
  </div>

            </header>

            <main>
                {events && events.length > 0 ? (
                    events.map((event) => (
                        <Event
                            key={event.id}
                            id={event.id}
                            title={event.name}
                            date={event.date}
                            time={event.time}
                            image={event.img_url}
                        />
                    ))
                ) : (
                    <h2>
                        <i className='fa-regular fa-calendar-xmark fa-shake'></i>{' '}
                        {'No events scheduled at this location yet!'}
                    </h2>
                )}
            </main>
        </div>
    );
};

export default LocationEvents;