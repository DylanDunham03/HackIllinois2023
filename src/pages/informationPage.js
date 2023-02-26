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

import ReactDOM from "react-dom";
import ProgressLine from "./ProgressLine";
  


  const risk_num = 66;

  const fire_num = .32;

  export var ProgressBar = ({ width, percent }) => {

    const [value, setValue] = React.useState(0);
  
    React.useEffect(() => {
      setValue(percent * width);
    });
  
    return (
      <div>
        <div className="progress-div" style={{ width: width }}>
          <div style={{ width: `${value}px` }} className="progress" />
        </div>
      </div>
    );
  };

  


function InformationPage(props) {
    
    
    const navigate = useNavigate();
    async function returnHome() {
        navigate('/')
        }
  return (
    <header className="App-header">
    <div class="pb-10 left-0 top-0 " >
    <h2
          style={{
            position: "absolute",
            left: `${0}px`,
            top: `${45}px`,
          }}
        >
            </h2>
        <button  onClick={returnHome}
        class="bg-[#E9E9E9] hover:bg-[#B9B9B9] text-[#282c34] font-bold py-2 px-4 rounded-full">
        Home
        </button>
    </div>
<div>


      <ChangingProgressProvider values={[0, risk_num]}>
        {percentage => (
          <CircularProgressbar value={percentage} text={`${percentage}%`} />
        )}
      </ChangingProgressProvider>
    
</div>

<div class="relative mb-4 flex flex-col items-stretch pt-4">
<div class="pt-4">
<ProgressBar width={400} percent={fire_num} />
</div>

<div class="pt-4">
<ProgressBar width={400} percent={fire_num} />
</div>

<div class="pt-4">
<ProgressBar width={400} percent={fire_num} />
</div>

<div class="pt-4">
<ProgressBar width={400} percent={fire_num} />
</div>

<div class="pt-4">
<ProgressBar width={400} percent={fire_num} />
</div>
</div>


      </header>

    
  );
}

export default InformationPage;
