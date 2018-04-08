import React from 'react';
import { actors } from '../data';

const Actors = () => {
  
  return (
    
    <div>
      
      <h1>Actors Page</h1>
      
      <div className="actor">
        Benedict Cumberbatch
        <ul>
          <li>Doctor Strange</li>
          <li>The Imitation Game</li>
          <li>Black Mass</li>
        </ul>
      </div>

      <div className="actor">
        Justin Timberlake
        <ul>
          <li>Trolls</li>
          <li>Friends with Benefits</li>
          <li>The Social Network</li>
        </ul>
      </div>

      <div className="actor">
        Anna Kendrick
        <ul>
          <li>Trolls</li>
          <li>Pitch Perfect</li>
          <li>Into The Wood</li>
        </ul>
      </div>
      <div className="actor">
        Tom Cruise
        <ul>
          <li>Jack Reacher: Never Go Back</li>
          <li>Mission Impossible 4</li>
          <li>War of the Worlds</li>
        </ul>
      </div>
     
    </div>
  );
};

export default Actors;
