import React, { useEffect, useState } from 'react';
import './App.css';

import scale from './assets/radaltback.png';
import cover from './assets/radaltcover.png';
import needle from './assets/radaltneedle.png';
import bugImg from './assets/bug.png';
import flagImg from './assets/radaltflag.png';

function App() {
  const [altitude, setAlt] = useState(0);
  const [bug, setBug] = useState(0);
  const [power, setPower] = useState(false);

  // While power can be handled inline, this handler ensures that the altitude dial is set
  // to the correct value when power is switched back on.
  function powerChange(event){
    setPower(!power);
    if(!power){
      setAlt(document.getElementById("altitudeInput").value);
    }
  }
  
  return (
    <div class="capsule">
      <div class="altimeter">
        <img src={scale} class="scale" />
        <AltitudeDial altitude = {altitude} power = {power}/>
        <BugDial bug = {bug} power = {power}/>
        <img src={cover} class="cover"/>
        <Light altitude = {altitude} bug ={bug} power = {power}/>
        <Flag power = {power}/>   
      </div>
      <div class="inputs">
        <div class="altInput">
          Altitude
          <input id="altitudeInput" type="range" min="0" max="1500" step="1" defaultValue="0" onChange={power ? (event) => setAlt(event.target.value): null} class="slider" />
          {altitude}
        </div>
        <div class="bugInput">
          Bug
          <input type="range" min="0" max="1500" defaultValue='0' onChange={(event) => setBug(event.target.value)} class="slider" />
          {bug}
        </div>
        <div class="powerInput" type="checkbox">
          Power
          <input type="checkbox" class="powerButton" value="false" onChange={powerChange} />  
        </div>
      </div>
    </div>
  );
}

//Determines the neccesary rotation for the altitude needle based on the value passed
function AltitudeDial(props){
  var rotation;
  if(props.altitude <= 500){
    //0.36 = 180/500
    rotation = 0.36 * props.altitude;
  }
  else{
    //0.09 = 90/1000
    rotation = (0.09 * (props.altitude - 500)) +180;
  }
  let style = {
    transform: "rotate(" + rotation + "deg)"
  }
  return(
    <img src={needle} class="needle" style={style}></img>
  );
}

//Same as AltitudeDial but for the DH bug
function BugDial(props){
  var rotation;
  if(props.bug <= 500){
    rotation = 0.36 * props.bug;
  }
  else{
    rotation = (0.09 * (props.bug - 500)) +180;
  }
  let style = {
    transform: "rotate(" + rotation + "deg)"
  }
  return(
    <img src={bugImg} class="bug" style={style}></img>
  );
}

//Shows indicator light when power is on and altitude is lower than the bug
function Light(props){
 if((props.bug - props.altitude >0) && props.power){
  return(<span class="lightOn"/>)
 }
  return(<span class="lightOff"></span>)
}

//Hides the radalt flag if power is on
function Flag(props){
  if(props.power){
    return <img hidden="hidden" src={flagImg} class="flag"/>   
  }
  else{
    return <img src={flagImg} class="flag"/>   
  }
}

export default App;