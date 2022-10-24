import { useState } from "react";
import React from "react";

export default function Search() {
    const [placeName, setPlaceName] = useState("")
    const [city, setCity] = useState("")
    const [state, setState] = useState("")
    const [postCode, setPostCode] = useState("")
    const [country, setCountry] = useState("")

    function searchLocation(e){
        e.preventDefault()
        let test = placeName.split(" ")
        let testing = test[0]
        for(let i = 1; i<=test.length-1; i++){
            testing = testing + "%20" + test[i] 
        }
        console.log(testing)
    }


  var requestOptions = {
    method: "GET",
  };

  fetch(
    "https://api.geoapify.com/v1/geocode/search?name=200%20east%2094th%20Street&city=New%20York&country%20United%20States%of%20America&format=json&apiKey=f67baa6095514751976876bc73fb1f06",
    requestOptions
  )
    .then((response) => response.json())
    .then(console.log)
    .catch((error) => console.log("error", error));
  return (
    <div>
        <h2>Please input a location in New York City</h2>
      <form onSubmit={searchLocation}>
        <input 
        type="text" 
        placeholder="place name"
        onChange={(e)=> setPlaceName(e.target.value)}
        />
        <input 
        type="text" 
        placeholder="city"
        onChange={(e)=> setCity(e.target.value)}
        />
        <input 
        type="text" 
        placeholder="state"
        onChange={(e)=> setState(e.target.value)}
        />
        <input 
        type="number" 
        placeholder="Postal Code"
        onChange={(e)=> setPostCode(e.target.value)}
        />
        <input 
        type="text" 
        placeholder="Country"
        onChange={(e)=> setCountry(e.target.value)}
        />
        <input type="submit"
        />
      </form>
    </div>
  );
}
