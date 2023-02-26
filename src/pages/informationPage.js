import React from 'react'


import SearchBar from "../components/SearchBar";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import '../App.css'

import {
    CircularProgressbar,
    CircularProgressbarWithChildren,
    buildStyles
  } from "react-circular-progressbar";
  import "react-circular-progressbar/dist/styles.css";
  import { easeQuadInOut } from "d3-ease";
  import AnimatedProgressProvider from "./AnimatedProgressProvider";
  import ChangingProgressProvider from "./ChangingProgressProvider";
  import RadialSeparators from "./RadialSeparators";
  


  const risk_num = 66;



function InformationPage(props) {

    const navigate = useNavigate();
    async function returnHome() {
        navigate('/')
        }

  return (
      <header className="App-header">
<div>


      <ChangingProgressProvider values={[0, risk_num]}>
        {percentage => (
          <CircularProgressbar value={percentage} text={`${percentage}%`} />
        )}
      </ChangingProgressProvider>
    
</div>

<div>
<button  onClick={returnHome}
class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
  Home
</button>

    </div>
      </header>

    
  );
}

export default InformationPage;
