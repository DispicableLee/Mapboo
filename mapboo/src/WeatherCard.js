import React from "react";

export default function WeatherCard(props) {
  return (
    <div className="weatherCard">
      <h1 className="details">Details</h1>
      <h3>AQI: {props.aqi}</h3>
      <h3>Co: {props.co}</h3>
      <h3>Date & Time: {props.datetime}</h3>
      <h3>No2: {props.no2}</h3>
      <h3>O3: {props.o3}</h3>
      <h3>Pm10: {props.pm10}</h3>
      <h3>Pm25: {props.pm25}</h3>
      <h3>So2: {props.so2}</h3>
      <h3>Timestamp Local: {props.timestamp_local}</h3>
      <h3>Timestamp Utc: {props.timestamp_utc}</h3>
      <h3>TS: {props.ts}</h3>
    </div>    
  );
}
