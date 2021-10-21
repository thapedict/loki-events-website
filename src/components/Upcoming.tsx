import React from 'react';
import { useSelector } from 'react-redux';
import { eventsSelector } from '../redux/eventsSlice';
import { IDateObject } from '../Types';

function Upcoming() {
    const { events, loading, hasErrors } = useSelector(eventsSelector);

    if (loading) {
        return <p>
            Loading... Please Wait!
        </p>
    }

    if (hasErrors) {
        return <p>
            An Error occured!
        </p>
    }

    const _Events = events.slice(0,4);

    return (
        <section id="upcoming" className="">
            <div className="container full">
                <h2 id="section-title">Upcoming Events</h2>
                <div id="main-slider" className="">
                    <ul className="event-loop ts-ns-4 ts-padding-0 colors">
                        {
                            _Events.map((event,index) => {
                                const date = DateObject(event.dateStart);

                                return (<li key={event.eventID}>
                                    <div id="img-preview">
                                        <img src={event.featuredImage} alt="event preview" />
                                    </div>
                                    <div id="title">
                                        {event.title}
                                    </div>
                                    <div id="date">
                                        <span className="month">{date.names.monthAbbr}</span>
                                        <span className="day">{date.day}</span>
                                        <span className="year">{date.year}</span>
                                    </div>
                                </li>);
                            })
                        }
                    </ul>
                </div>
                <div id="view-more">
                    <a href="#Top">View More</a>
                </div>
            </div>
        </section>
    );
}

function DateObject(date: string):IDateObject {
    const monthsFull = ['January','February','March','April','May','June','July','August','September','October','November','December'],
    monthsAbbr = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    
    const daysFull = ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'],
    daysAbbr = ['Mon','Tue','Wed','Thu','Fri','Sat','Sun'];

    const _date = new Date(date);
    
    let formatted = {
        day: _date.getDate(),
        month: _date.getMonth(),
        year: _date.getFullYear(),
        names: {
            day: daysFull[_date.getDay()],
            dayAbbr: daysAbbr[_date.getDay()],
            month: monthsFull[_date.getMonth()],
            monthAbbr: monthsAbbr[_date.getMonth()]
        },
        hours: _date.getUTCHours(),
        minutes: _date.getUTCMinutes(),
        seconds: _date.getUTCSeconds()
    };

    return formatted;
}

export default Upcoming;