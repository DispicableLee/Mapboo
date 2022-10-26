import { useState } from "react";
import React from "react";

export default function Search({setRenderWeather}) {
  const [lati, setLati] = useState(0);
  const [longi, setLongi] = useState(0);
  const [placeName, setPlaceName] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [postCode, setPostCode] = useState("");
  const [country, setCountry] = useState("");

  function searchLocation(e) {
    e.preventDefault();
    //=============sort by place ==================
    let testPlace = placeName.split(" ");
    let place = testPlace[0];
    for (let i = 1; i <= testPlace.length - 1; i++) {
      place = place + "%20" + testPlace[i];
    }
    //==========  sort by city =================
    let testCity = city.split(" ");
    let cityName = "";
    for (let i = 0; i < testCity.length; i++) {
      cityName = testCity[0] + "%20" + testCity[i];
    }
    //========== sort by state ================
    let testState = state.split(" ");
    let stateName = "";
    for (let i = 1; i < testState.length; i++) {
      stateName = testState[0] + "%20" + testState[i];
    }
    console.log(stateName);
    //============= sort by country =============
    let testCountry = country.split(" ");
    let countryName = "";
    for (let i = 0; i < testCountry.length; i++) {
      countryName = countryName + "%20" + testCountry[i];
    }
//======================== searching GeoLocation API ==============================================
    var requestOptions = {
      method: "GET",
    };

    fetch(
      `https://api.geoapify.com/v1/geocode/search?text=${place}%2C%20${postCode}%2C%20${cityName}%2C%20${stateName}%2C%20${countryName}&format=json&apiKey=f67baa6095514751976876bc73fb1f06`,
      requestOptions
    )
      .then((response) => response.json())
      .then((json) => {
        console.log(json.results[0]);
        setLati(json.results[0].lat);
        setLongi(json.results[0].lon);
      })
      .catch((error) => console.log("error", error));
//===================== searching airQuality API ===========================================
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '7610dada3bmsh61f05a1a07c8822p1b4f32jsnfe2ddedeac0b',
		'X-RapidAPI-Host': 'air-quality.p.rapidapi.com'
	}
};

fetch(`https://air-quality.p.rapidapi.com/forecast/airquality?lat=${lati}&lon=${longi}&hours=3`, options)
	.then(response => response.json())
	.then(json => setRenderWeather(json.data))
	.catch(err => console.error(err));
  }

  return (
    <div className="form-container">
      <h2 className="search-title">Please input a location in New York City</h2>
      <form onSubmit={searchLocation}>
        <input
          type="text"
          placeholder="Street"
          onChange={(e) => setPlaceName(e.target.value)}
        />
        <input
          type="text"
          placeholder="City"
          onChange={(e) => setCity(e.target.value)}
        />
        <input
          type="text"
          placeholder="State"
          onChange={(e) => setState(e.target.value)}
        />
        <input
          type="number"
          placeholder="Zip Code"
          onChange={(e) => setPostCode(e.target.value)}
        />
        <input
          type="text"
          placeholder="Country"
          onChange={(e) => setCountry(e.target.value)}
        />
        <input className="search" type="submit" />
      </form>
    </div>
  );
}
