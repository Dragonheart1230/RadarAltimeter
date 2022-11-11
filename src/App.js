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


  return (
    <div class="capsule">
      <div class="altimeter">
        <img src={scale} class="scale" />
        <img src={cover} class="cover"/>
        <AltitudeDial altitude = {altitude}/>
        <BugDial bug = {bug}/>
        <Light/>
        <img src={flagImg} class="flag"/>     
      </div>
      <div class="inputs">
        <div class="altInput">
          <label for="altitude" type="range">Altitude</label>
          <input type="range" min="0" max="1500" defaultValue="0" onChange={(event) => setAlt(event.target.value)} class="slider" />
          <label for="bug" id="altitudeOutput">{altitude}</label>
        </div>
        <div class="bugInput">
          <label for="bug" type="range"> Bug </label>
          <input type="range" min="0" max="1500" defaultValue='0' onChange={(event) => setBug(event.target.value)} class="slider" />
          <label for="bug" id="bugOutput">{bug}</label>
        </div>
        <div class="powerInput" type="checkbox">
          <label for="power" >Power</label>
          <input type="checkbox" class="powerButton" id="power" checked='false' />
        </div>
      </div>
    </div>
  );
}

function AltitudeDial(props){
  var rotation;
  console.log(props.altitude);
  if(props.altitude <= 500){
    rotation = 0.36 * props.altitude;
  }
  else{
    rotation = (0.09 * (props.altitude - 500)) +180;
  }
  let style = {
    transform: "rotate(" + rotation + "deg)"
  }
  console.log(rotation);
  return(
    <img src={needle} class="needle" style={style}></img>
  );
}

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
  console.log(rotation);
  return(
    <img src={bugImg} class="bug" style={style}></img>
  );
}

function Light(props){
  var [power, setPower] = useState(false);
  return(
    <span class="lightOff"></span>
  );
}




export default App;
