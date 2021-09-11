import React from "react";
import GoogleMapReact from "google-map-react";


export default function App() {
    const defaultProps = {
        center: {
            lat: -25.747868,
            lng: 28.229271
        },
        zoom: 14
    };

    return (
        <div style={{ height: "80vh" }}>
            <GoogleMapReact
                defaultCenter={defaultProps.center}
                center={{
                    lat: -25.747868,
                    lng: 28.229271
                }}
                defaultZoom={defaultProps.zoom}
            >
            </GoogleMapReact>
        </div>
    );
}
