import React from "react";
import GoogleMapReact from "google-map-react";
import { IEvent } from "../Types";


export default function App(props: { events: IEvent[] }) {
    const defaultProps = {
        center: {
            lat: -25.747868,
            lng: 28.229271
        },
        zoom: 13
    };

    return (
        <div style={{ height: "80vh" }}>
            <GoogleMapReact
                defaultCenter={defaultProps.center}
                center={{
                    lat: -25.747868,
                    lng: 28.229271
                }}
                yesIWantToUseGoogleMapApiInternals
                defaultZoom={defaultProps.zoom}
                onGoogleApiLoaded={({ map, maps }) => {
                    props.events.forEach((e,i) => {
                        new maps.Marker({
                            label: { text: (i+1) + `. ${e.title}`, color: 'white' },
                            position: { lat: e.address.gps.lat, lng: e.address.gps.long },
                            map
                        })
                    })
                }}
            >
            </GoogleMapReact>
        </div>
    );
}

