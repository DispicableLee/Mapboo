import React from "react";

export default function WeatherCard(props) {
  return (
    <div>
      <h1>Hi</h1>
      <h1>{props.aqi}</h1>
      <h1>{props.co}</h1>
      <h1>{props.datetime}</h1>
      <h1>{props.no2}</h1>
      <h1>{props.o3}</h1>
      <h1>{props.pm10}</h1>
      <h1>{props.pm25}</h1>
      <h1>{props.so2}</h1>
      <h1>{props.timestamp_local}</h1>
      <h1>{props.timestamp_utc}</h1>
      <h1>{props.ts}</h1>
    </div>
  );
}
