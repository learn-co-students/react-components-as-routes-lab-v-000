import React from 'react';
import { directors } from '../data';

const Directors = () => {
  return (
    <div>
      
      <h1>Directors Page</h1>
      
      <div>
        Scott Derrickson
        <ul>
          <li>Doctor Strange</li>
          <li>Sinister</li>
          <li>The Exorcism of Emily Rose</li>
        </ul>
      </div>

      <div>
        Mike Mitchell
        <ul>
          <li>Trolls</li>
          <li>Alvin and the Chipmunks: Chipwrecked</li>
          <li>Sky High</li>
        </ul>
      </div>

      <div>
        Edward Zwick
        <ul>
          <li>Jack Reacher: Never Go Back</li>
          <li>Blood Diamon</li>
          <li>The Siege</li>
        </ul>
      </div>

    </div>
  );
}

export default Directors
