import React from "react";
import SearchBar from "../components/SearchBar";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { DataContext } from "../contexts/dataContext";
import axios from "axios";
function HomePage(props) {
  const navigate = useNavigate();

  const { locationData, updateLocationData, updateDisasters } = useContext(DataContext);
  const baseUrl = "https://api.geoapify.com/v1/geocode/search?text=";
  const specifications =
    "&filter=countrycode:us&limit=5&format=json&apiKey=8c18e6ad3df8403b9ff3203de82711f9";
  //  var test = "https://api.geoapify.com/v1/geocode/search?text=1214-1224%20West%20Van%20Buren%20Street%2C%20Chicago%2C%20IL%2060607%2C%20United%20States%20of%20America&lang=en&limit=5&format=json&apiKey=" + api_key;
  const DatabaseClient = axios.create({
    baseURL:
      "https://us-east-1.aws.data.mongodb-api.com/app/application-0-mqiit/endpoint",
  });

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
    // console.log(updatedAddress);
    await fetch(updatedAddress, requestOptions)
      .then((response) => response.json())
      .then(async (data) => {
        console.log(data);
        // updateLocationData(data.results[0])
        // console.log(data.results[0].city);
        // console.log(data.results[0].county);


        const request_body = {
          
          county: data.results[0].county,
          lat: data.results[0].lat,
          lon: data.results[0].lon,
          country: data.results[0].country,
          state: data.results[0].state_code,
        };
        updateLocationData({
          formatted: data.results[0].formatted.substring(0,(data.results[0].formatted).length-26),
          county: data.results[0].county,
          lat: data.results[0].lat,
          lon: data.results[0].lon,
          country: data.results[0].country,
          state: data.results[0].state_code,
        });
        // updateLocationData({lat : data.results[0].lat});
        // getData()
        await DatabaseClient.post("/getData", request_body).then((res) => {
          updateDisasters(res.data);
          
        }).then()
        navigate('/information');

        // updateLocationData({county : data.results[0].county, lat: data.results[0].lat, lon: data.results[0].lon , country: data.results[0].country, state: data.results[0].state_code});
        // console.log(locationData)
        // console.log(updateLocationData);
      })
      .catch((error) => console.log("error", error));
  }
  

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="pb-4">Home Risk Calculator</h1>

        <div classname="App">
          <SearchBar onClick={geoFunction} />
        </div>

        
      </header>
    </div>
  );
}

export default HomePage;
