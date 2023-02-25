import logo from './logo.svg';
import './App.css';
import SearchBar from './components/SearchBar'

// comment

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
