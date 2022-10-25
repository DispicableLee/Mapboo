import { useState } from "react";
import React from "react";

export default function Search() {
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
    console.log(place)
    //==========  sort by city =================
    let testCity = city.split(" ");
    let cityName = "";
    for (let i = 0; i < testCity.length; i++) {
      cityName = testCity[0] + "%20" + testCity[i];
    }
    //========== sort by state ================
    let testState = state.split(" ");
    console.log(testState);
    let stateName = "";
    for (let i = 1; i < testState.length; i++) {
      stateName = testState[0] + "%20" + testState[i];
    }
    console.log(stateName)
    //============= sort by country =============
    let testCountry = country.split(" ");
    console.log(testCountry);
    let countryName = "";
    for (let i = 0; i < testCountry.length; i++) {
      countryName = countryName + "%20" + testCountry[i];
    }
    var requestOptions = {
      method: "GET",
    };

    fetch(
        `https://api.geoapify.com/v1/geocode/search?text=${place}%2C%20${postCode}%2C%20${cityName}%2C%20${stateName}%2C%20${countryName}&format=json&apiKey=f67baa6095514751976876bc73fb1f06`,
      requestOptions
    )
      .then((response) => response.json())
      .then((json) => console.log(json.results[0]))
      .catch((error) => console.log("error", error));
  }

  //https://api.geoapify.com/v1/geocode/search?name=200%20east%2094th%20street%20&postcode=10128&city=New%20York&state=New%20York&country=United%20States%20of%20America&format=json&apiKey=YOUR_API_KEY
  const testUrl =
    "https://api.geoapify.com/v1/geocode/search?text={place}%2C%20{postCode}%2C%20{cityname}%2C%20{stateName}%2C%20{countryName}&format=json&apiKey=f67baa6095514751976876bc73fb1f06";

  return (
    <div>
      <h2>Please input a location in New York City</h2>
      <form onSubmit={searchLocation}>
        <input
          type="text"
          placeholder="place name"
          onChange={(e) => setPlaceName(e.target.value)}
        />
        <input
          type="text"
          placeholder="city"
          onChange={(e) => setCity(e.target.value)}
        />
        <input
          type="text"
          placeholder="state"
          onChange={(e) => setState(e.target.value)}
        />
        <input
          type="number"
          placeholder="Postal Code"
          onChange={(e) => setPostCode(e.target.value)}
        />
        <input
          type="text"
          placeholder="Country"
          onChange={(e) => setCountry(e.target.value)}
        />
        <input type="submit" />
      </form>
    </div>
  );
}
