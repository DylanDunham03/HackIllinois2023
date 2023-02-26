import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/homePage";
import InformationPage from "./pages/informationPage";
import './App.css'
// import { useState } from "react";

// export const UserContext = React.createContext();

// let [locationData, updateLocationData] = useState({
//   county: "",
//   lat: "",
//   lon: "",
//   country: "",
//   state: "",
// });

function App() {
  return (

    <div>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/information" element={<InformationPage/>} />
      </Routes>
    </div>
    
  );
}

export default App;
