import React, { useRef, useEffect, useState } from 'react';
import logo from './logo.svg';
import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax

function Map (){

    useEffect(() => {
        if (map.current) return; // initialize map only once
        map.current = new mapboxgl.Map({
          container: mapContainer.current,
          style: 'mapbox://styles/mapbox/streets-v11',
          center: [lng, lat],
          zoom: zoom
        });
      });
      useEffect(() => {
        if (!map.current) return; // wait for map to initialize
        map.current.on('move', () => {
          console.log(lng)
          setLng(map.current.getCenter().lng.toFixed(4));
          console.log(lat)
          setLat(map.current.getCenter().lat.toFixed(4));
          setZoom(map.current.getZoom().toFixed(2));
        });
      });
      mapboxgl.accessToken = 'pk.eyJ1IjoiY21jYWJlZG8iLCJhIjoiY2w5bXdxNGRsMDBiejNwbjBwaWl6OWd5ZiJ9.3ff0gljHhvINuNdRckybOg';
    
      const mapContainer = useRef(null);
      const map = useRef(null);
      const [lng, setLng] = useState(-73.9963);
      const [lat, setLat] = useState(40.7283);
      const [zoom, setZoom] = useState(9);
    
      useEffect(()=>{
        fetch("http://api.openweathermap.org/data/2.5/air_pollution?lat=40.7283&lon=-73.9963&appid=9c71fc95b97199c94da11fab4c0dc691")
        .then(res => res.json())
        .then(data => console.log(data))
      },[])

    return (
        <main className="main">
          <h1>Air Quality Map</h1>
         <div ref={mapContainer} className="map-container" />
         <div className="map-details">map details</div>
        </main>
    );
}

export default Map;