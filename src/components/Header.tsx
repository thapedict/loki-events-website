import React from 'react';

function Header() {
    return (
        <header>
            <div id="site-header" className="container-full">
                <div className="container-full">
                    <h1>Loki Events</h1>
                </div>
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
        </header>)
}

export default Header;