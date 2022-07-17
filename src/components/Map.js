import React from 'react';
import {GoogleMap} from "@react-google-maps/api";
import {useLoadScript} from "@react-google-maps/api";

const mapContainerStyle = {
    width: 'full',
    height: '500px',
    borderRadius: '25px',
}
const center = {
    lat: 30.2672,
    lng: -97.7431,
}

export default function GoogleMaps() {
    const{isLoaded, loadError} = useLoadScript({
        // Uncomment the line below and add your API key
        googleMapsApiKey: 'AIzaSyDMZL2u5x6Z5gMMgawUznZ2TOWAYONQsTE',
    });

    if (loadError) return "Error loading Maps";
    if (!isLoaded) return "Loading Maps";

    return(
        <GoogleMap

        mapContainerStyle={mapContainerStyle} 
        zoom={11} 
        center={center} 
        >
            
        </GoogleMap>
    )
}