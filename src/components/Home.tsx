import React from 'react';
import Header from './Header';

function Home() {
    return (
        <React.Fragment>
            <header>
                <div id="site-header" className="container full">
                    <h1>Loki Events</h1>
                </div>
                <div id="menu-wrap" className="container-full">
                    <div className="">
                        <ul id="main-nav" className="nav-menu colors">
                            <li><a href="#Top">Home</a></li>
                            <li><a href="#Top">Featured Events</a></li>
                            <li><a href="#Top">Events Near Me</a></li>
                            <li><a href="#Top">Past Events</a></li>
                        </ul>
                    </div>
                </div>
            </header>

            <section id="current" className="">
                <div className="container">
                    <h2 id="section-title">Current Events</h2>
                    <div id="current-wrap" className="ts-dl-1-3">
                        <div className="event-loop">
                            <div>
                                <span id="title">Trade Convention</span>
                                <span id="address">22 Mary Street, Braamfontien, Johannesnurg, 0210</span>
                            </div>
                            <div>
                                <span id="title">Trade Convention</span>
                                <span id="address">22 Mary Street, Braamfontien, Johannesnurg, 0210</span>
                            </div>
                            <div>
                                <span id="title">Trade Convention</span>
                                <span id="address">22 Mary Street, Braamfontien, Johannesnurg, 0210</span>
                            </div>
                            <div>
                                <span id="title">Trade Convention</span>
                                <span id="address">22 Mary Street, Braamfontien, Johannesnurg, 0210</span>
                            </div>
                            <div>
                                <span id="title">Trade Convention</span>
                                <span id="address">22 Mary Street, Braamfontien, Johannesnurg, 0210</span>
                            </div>
                            <div>
                                <span id="title">Trade Convention</span>
                                <span id="address">22 Mary Street, Braamfontien, Johannesnurg, 0210</span>
                            </div>
                            <div>
                                <span id="title">Trade Convention</span>
                                <span id="address">22 Mary Street, Braamfontien, Johannesnurg, 0210</span>
                            </div>
                        </div>
                        <div id="map-wrap">
                            <img src="img/map.jpg" />
                        </div>
                    </div>
                </div>
            </section>

            <section id="subscribe" className="container-full">
                <div className="container full align-center">
                    <h3>Subscribe to events in your area</h3>
                    <form id="subscribe" method="post" className="ts-ns-3-1">
                        <input name="email" id="email" />
                        <input type="submit" value="Subscribe Now" />
                    </form>
                </div>
            </section>

            <section id="upcoming" className="">
                <div className="container full">
                    <h2 id="section-title">Upcoming Events</h2>
                    <div id="main-slider" className="">
                        <ul className="event-loop ts-ns-4 ts-padding-0 colors">
                            <li>
                                <div id="img-preview">
                                    <img src="img/stock/4.jpg" />
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
                                    <img src="img/stock/2.jpg" />
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
                                    <img src="img/stock/6.jpg" />
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
                                    <img src="img/stock/3.jpg" />
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

            <footer className="">
                <div className="container">
                    <div id="copyright" className="small align-center">
                        <span>A <a href="https://4theweb.co.za/">4TheWeb Web Services (Pty) Ltd</a> Initiative. Copyright &copy; 2016. All Rights Reserved</span>
                    </div>
                </div>
            </footer>
        </React.Fragment>);
}

export default Home;