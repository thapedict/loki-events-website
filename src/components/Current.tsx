import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { eventsSelector, fetchEvents } from '../redux/eventsSlice';
import { useAppDispatch } from '../redux/hooks';
import GMap from "./GMap";

function Current() {
    const { events, loading, hasErrors } = useSelector(eventsSelector);
    const dispatch = useAppDispatch();

    useEffect( () => {
        dispatch(fetchEvents())
    }, [dispatch] )

    if(loading) {
        return <p>
            Loading... Please Wait!
        </p>
    }

    if(hasErrors) {
        return <p>
            An Error occured!
        </p>
    }

    return (
        <section id="current" className="">
            <div className="container">
                <h2 id="section-title">Current Events</h2>
                <div id="current-wrap" className="ts-dl-1-3">
                    <div className="event-loop">
                        {
                            events.map(event => {
                                return (<div key={event.eventID}>
                                    <h5 className="title">{event.title}</h5>
                                    <span className="address">{event.address.street}</span>
                                </div>)
                            })
                        }                        
                    </div>
                    <GMap events={events} />
                </div>
            </div>
        </section>)
}

export default Current;