import React from 'react'
import SearchBar from "../components/SearchBar";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function HomePage(props) {
  const navigate = useNavigate();
  let [locationData, updateLocationData] = useState({
    county: "",
    lat: "",
    lon: "",
    country: "",
    state: "",
  });
  const baseUrl = "https://api.geoapify.com/v1/geocode/search?text=";
  const specifications =
    "&filter=countrycode:us&limit=5&format=json&apiKey=8c18e6ad3df8403b9ff3203de82711f9";

  var test = baseUrl + "Main%20St.%2C%20Berlin" + specifications;

  var requestOptions = {
    method: "GET",
    // body: lon
  };

  function makeAddress(e) {
    let finalString = "";
    for (let i = 0; i < e.length; i++) {
      if (e[i] == " ") {
        finalString += "%20";
      } else finalString += e[i];
    }
    return baseUrl + finalString + specifications;
  }

  async function geoFunction(e, input) {
    let updatedAddress = makeAddress(input);
    console.log(updatedAddress);
    await fetch(updatedAddress, requestOptions)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        // updateLocationData(data.results[0])
        console.log(data.results[0].city);
        console.log(data.results[0].county);

        updateLocationData({
          county: data.results[0].county,
          lat: data.results[0].lat,
          lon: data.results[0].lon,
          country: data.results[0].country,
          state: data.results[0].state_code,
        });
        // updateLocationData({lat : data.results[0].lat});
        console.log("asl;dkfj");
        console.log(locationData);
        navigate('/information')

        // updateLocationData({county : data.results[0].county, lat: data.results[0].lat, lon: data.results[0].lon , country: data.results[0].country, state: data.results[0].state_code});
        // console.log(locationData)
        // console.log(updateLocationData);
      })
      .catch((error) => console.log("error", error));
  }

  return (
    <div className="App">
      <header className="App-header" >
        <h1 className='pb-4'>Home Risk Calculator</h1>

        <div classname="App">
          <SearchBar onClick={geoFunction} />
        </div>

        <h2>{locationData.lon}</h2>
        <h2>{locationData.country}</h2>

      </header>
    </div>
  );
}

export default HomePage;
