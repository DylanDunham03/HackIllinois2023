import React, { useContext, useEffect } from "react";

import SearchBar from "../components/SearchBar";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import "../App.css";

import {
  CircularProgressbar,
  CircularProgressbarWithChildren,
  buildStyles,
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { easeQuadInOut } from "d3-ease";
import AnimatedProgressProvider from "./AnimatedProgressProvider";
import ChangingProgressProvider from "./ChangingProgressProvider";
import RadialSeparators from "./RadialSeparators";

import ReactDOM from "react-dom";
import ProgressLine from "./ProgressLine";
import { DataContext } from "../contexts/dataContext";

const risk_num = 66;

const fire_num = 0.32;



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
    navigate("/");
  }
  const { disasters, locationData } = useContext(DataContext);
  let total = 1;
  for(let i = 0 ; i < disasters.length; i++){
    total += disasters[i].average
  }
  
  if(disasters){
    total = parseInt(((total/disasters.length).toFixed(2))*100);
  }
  
  
  //   background-color: #282c34;
  //   min-height: 100vh;
  //   display: flex;
  //   font-size: calc(10px + 2vmin);
  //   color: white;
  
  return (
    <div
      style={{
        backgroundColor: "#282c34",
        height: "100vh",
        width: "100vw",
        fontSize: "calc(10px + 2vmin)",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <button
        style={{
          position: "relative",
          alignSelf: "flex-start",
          marginLeft: 5,
          marginTop: 5,
        }}
        onClick={returnHome}
        class="bg-[#E9E9E9] hover:bg-[#B9B9B9] text-[#282c34] font-bold py-2 px-4 rounded-full"
      >
        Home
      </button>

      <h3 style={{textAlign:"center", fontWeight:"bold", color:"white", marginBottom:5, fontSize:40 }}>
      Address : {locationData.formatted}
          </h3>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: 60,
          marginLeft:40
        }}
      >
        <div style={{ flex:1, display: "flex", flexDirection:"column", alignItems: "center" }}>
          <h1 style={{textAlign:"center", fontWeight:"bold", color:"white", marginBottom:5, fontSize:50 }}>
            RISK INDEX
          </h1>
          <ChangingProgressProvider values={[0, total]}>
            {(percentage) => (
              <CircularProgressbar value={percentage} text={`${percentage}%`} />
            )}
          </ChangingProgressProvider>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems:"center",
            
            flex: 3,
          }}
        >
          <h1 style={{ fontWeight:"bold", color:"white", marginBottom:5, fontSize:50 }}>
            Risk of Disasters
          </h1>
          {disasters.slice(0,6).map((d, idx) => {
            return (
              <div style={{ marginTop: 30 }}>
                <h2 style={{ color: "white" }}>{d.type}</h2>

                <ProgressBar width={300} percent={d.average} />
              </div>
            );
          })}

          {/* <ProgressBar width={400} percent={fire_num} />

          <ProgressBar width={400} percent={fire_num} />

          <ProgressBar width={400} percent={fire_num} /> */}
          {/* <div >
            
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
          </div> */}
        </div>
      </div>
    </div>
    //     <header className="App-header">

    // </header>
  );
}

export default InformationPage;
