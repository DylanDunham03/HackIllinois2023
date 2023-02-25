import logo from './logo.svg';
import './App.css';
import SearchBar from './components/SearchBar'

// comment

var current_input = ""

// var queryURL = "https://api.geoapify.com/v1/geocode/search?text=" + city + "&appid=" + APIKey;

var api_key = "8c18e6ad3df8403b9ff3203de82711f9"
var test = "https://api.geoapify.com/v1/geocode/search?text=1214-1224%20West%20Van%20Buren%20Street%2C%20Chicago%2C%20IL%2060607%2C%20United%20States%20of%20America&lang=en&limit=5&format=json&apiKey=" + api_key;



var requestOptions = {
  method: 'GET',
};

var answer;

fetch(test, requestOptions)
  .then(response => response.json())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));


function App() {
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

        <div classname='App'>
        <SearchBar/>
        </div> 



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
