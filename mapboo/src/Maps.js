import logo from './logo.svg';
import React, { useRef, useEffect, useState } from 'react';
import './App.css';
import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax
import Search from './Search';
import WeatherCard from './WeatherCard';



 export default function Map(){
    useEffect(() => {
        if (map.current) return; // initialize map only once
        map.current = new mapboxgl.Map({
          container: mapContainer.current,
          style: 'mapbox://styles/mapbox/streets-v11',
          center: [lng, lat],
          zoom: zoom
        });
      });
    
      
      mapboxgl.accessToken = 'pk.eyJ1IjoiY21jYWJlZG8iLCJhIjoiY2w5bXdxNGRsMDBiejNwbjBwaWl6OWd5ZiJ9.3ff0gljHhvINuNdRckybOg';
    
      const mapContainer = useRef(null);
      const map = useRef(null);
      const [lng, setLng] = useState(-73.9963);
      const [lat, setLat] = useState(40.7283);
      const [zoom, setZoom] = useState(9);
    //================ weatherInfo states ===================================
    const [renderWeather, setRenderWeather] = useState([])
    console.log(renderWeather)
    const renderedWeather = renderWeather.map((w)=>{
      return (
        <WeatherCard
            aqi={w.aqi}
            co={w.co}
            datetime={w.datetime}
            no2={w.no2}
            o3={w.o3}
            pm10={w.pm10}
            pm25={w.pm25}
            so2={w.so2}
            timestamp_local={w.timestamp_local}
            timestamp_utc={w.timestamp_utc}
            ts={w.ts}
        
        />

      )
    })
    return (
        <main className="main">
        <div className="map-container">
            <Search setRenderWeather={setRenderWeather}/>
            <div ref={mapContainer} className="map-container" />
            {renderedWeather}
        </div>
        </main>
    )

 }