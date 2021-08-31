import React from 'react';

function Subscribe() {
    return (
        <section id="subscribe" className="container-full">
            <div className="container full align-center">
                <h3>Subscribe to events in your area</h3>
                <form id="subscribe" method="post" className="ts-ns-3-1">
                    <input name="email" id="email" />
                    <input type="submit" value="Subscribe Now" />
                </form>
            </div>
        </section>)
}

export default Subscribe;