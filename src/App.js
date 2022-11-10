import React, { useEffect, useState } from 'react';
import './App.css';

import scale from './assets/radaltback.png';
import cover from './assets/radaltcover.png';
import needle from './assets/radaltneedle.png';
import bugImg from './assets/bug.png';
import flagImg from './assets/radaltflag.png';

function App() {

  return (
    <div class="altimeter">
      <img src={scale} class="scale"></img>
      <img src={cover} class="cover"></img>
      <img src={needle} class="needle" style="transform: rotate(134deg)"></img>
      <img src={bugImg} class="bug"></img>
      <img src={flagImg} class="flag"></img>
      <span class="lightOff"></span>
      
    </div>
  );
}

/*class Altimeter extends React.component{
  render(){
    return 11;
  };

  
}*/

export default App;
