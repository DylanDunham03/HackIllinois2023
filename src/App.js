import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/homePage";
import InformationPage from "./pages/informationPage";
import './App.css'


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
