import logo from "./logo.svg";
import "./App.css";
import SearchBar from "./components/SearchBar";
import { useContext, useState } from "react";
import { DataContext, DataProvider } from "./contexts/dataContext";
// comment
import axios from "axios";
var current_input = "";

// var queryURL = "https://api.geoapify.com/v1/geocode/search?text=" + city + "&appid=" + APIKey;

// const sleep = ms => new Promise(r => setTimeout(r, ms));

// let obj = geoFunction();
// sleep(2000)
// while (obj == null) {
//   await sleep(1000);
// }
// console.log("anythong?")
// console.log(obj)

// async function renderData() {
//   let obj = geoFunction();

//   let html = '';
//   obj.forEach(user => {
//       let htmlSegment = `<div class="user">
//                           <img src="${user.profileURL}" >
//                           <h2>${user.firstName} ${user.lastName}</h2>
//                           <div class="email"><a href="email:${user.email}">${user.email}</a></div>
//                       </div>`;

//       html += htmlSegment;
//   });

//   let container = document.querySelector('.container');
//   container.innerHTML = html;
// }

// renderData()

function App() {
  // let [locationData, updateLocationData] = useState({county: "", lat: "", lon: "", country:"", state:""});

  const { locationData, updateLocationData } = useContext(DataContext);
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

  const getData = async () => {
    // const request_body = {

    // }
    await DatabaseClient.post("/getData", locationData).then((res) => {
      console.log(res);
    });
  };
  async function geoFunction(e, input) {
    let updatedAddress = makeAddress(input);
    console.log(updatedAddress);
    await fetch(updatedAddress, requestOptions)
      .then((response) => response.json())
      .then(async (data) => {
        console.log(data);
        // updateLocationData(data.results[0])
        console.log(data.results[0].city);
        console.log(data.results[0].county);
        const request_body = {
          county: data.results[0].county,
          lat: data.results[0].lat,
          lon: data.results[0].lon,
          country: data.results[0].country,
          state: data.results[0].state_code,
        };
        updateLocationData({
          county: data.results[0].county,
          lat: data.results[0].lat,
          lon: data.results[0].lon,
          country: data.results[0].country,
          state: data.results[0].state_code,
        });
        // updateLocationData({lat : data.results[0].lat});
        // getData()
        await DatabaseClient.post("/getData", request_body).then((res) => {
          console.log(res);
        });

        // updateLocationData({county : data.results[0].county, lat: data.results[0].lat, lon: data.results[0].lon , country: data.results[0].country, state: data.results[0].state_code});
        // console.log(locationData)
        // console.log(updateLocationData);
      })
      .catch((error) => console.log("error", error));
  }

  return (
    
      <div className="App">
        <header className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js123</code> and save to reload.
        </p> */}

          {/* <h1 className="text-3xl font-bold underline">
          Hello world!
        </h1> */}

          <div classname="App">
            <SearchBar onClick={geoFunction} />
          </div>

          <h2>{locationData.lon}</h2>
          <h2>{locationData.country}</h2>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
   
  );
}

export default App;
