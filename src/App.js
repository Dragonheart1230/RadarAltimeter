import React, { useEffect, useState } from 'react';
import './App.css';

import scale from './assets/radaltback.png';
import cover from './assets/radaltcover.png';
import needle from './assets/radaltneedle.png';
import bugImg from './assets/bug.png';
import flagImg from './assets/radaltflag.png';

function App() {

  return (
    <div class="capsule">
      <div class="altimeter">
        <img src={scale} class="scale"></img>
        <img src={cover} class="cover"></img>
        <img src={needle} class="needle"></img>
        <img src={bugImg} class="bug"></img>
        <img src={flagImg} class="flag"></img>
        <span class="lightOff"></span>
      </div>
      <div class="inputs">
        <div class="altInput">
          <label for="altitude" type="range">Altitude</label>
          <input type="range" min="0" max="1500" defaultValue={0} class="slider" id="altitude"/>
          <label for="bug" id="altitudeOutput">0</label>
        </div>
        <div class="budInput">
          <label for="bug" type="range"> Bug </label>
          <input type="range" min="00" max="1500" defaultValue={0} class="slider" id="bug"/>
          <label for="bug" id="bugOutput">0</label>
        </div>
        <div class="powerInput" type="checkbox">
          <label for="power" >Power</label>
          <input type="checkbox" class="powerButton" id="power"/>
        </div>
      </div>
    </div>
  );
}


export default App;
