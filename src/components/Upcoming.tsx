import React from 'react';

function Upcoming() {
    return (
        <section id="upcoming" className="">
                <div className="container full">
                    <h2 id="section-title">Upcoming Events</h2>
                    <div id="main-slider" className="">
                        <ul className="event-loop ts-ns-4 ts-padding-0 colors">
                            <li>
                                <div id="img-preview">
                                    <img src="img/stock/4.jpg" alt="event preview" />
                                </div>
                                <div id="title">
                                    Durban Spring Fiesta
                                </div>
                                <div id="date">
                                    <span className="month">Jan</span><span className="day">20</span><span className="year">2016</span>
                                </div>
                            </li>
                            <li>
                                <div id="img-preview">
                                    <img src="img/stock/2.jpg" alt="event preview" />
                                </div>
                                <div id="title">
                                    Durban Spring Fiesta
                                </div>
                                <div id="date">
                                    <span className="month">Jan</span><span className="day">20</span><span className="year">2016</span>
                                </div>
                            </li>
                            <li>
                                <div id="img-preview">
                                    <img src="img/stock/6.jpg" alt="event preview" />
                                </div>
                                <div id="title">
                                    Durban Spring Fiesta
                                </div>
                                <div id="date">
                                    <span className="month">Jan</span><span className="day">20</span><span className="year">2016</span>
                                </div>
                            </li>
                            <li>
                                <div id="img-preview">
                                    <img src="img/stock/3.jpg" alt="event preview" />
                                </div>
                                <div id="title">
                                    Durban Spring Fiesta
                                </div>
                                <div id="date">
                                    <span className="month">Jan</span><span className="day">20</span><span className="year">2016</span>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div id="view-more">
                        <a href="#Top">View More</a>
                    </div>
                </div>
            </section>
        );
}

export default Upcoming;