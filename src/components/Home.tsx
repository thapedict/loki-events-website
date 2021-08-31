import React from 'react';
import Current from './Current';
import Footer from './Footer';
import Header from './Header';
import Subscribe from './Subscribe';
import Upcoming from './Upcoming';

function Home() {
    return (
        <React.Fragment>

            <Header />

            <Current />

            <Subscribe />

            <Upcoming />

            <Footer />

        </React.Fragment>);
}

export default Home;