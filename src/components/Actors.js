import React from 'react';
import { actors } from '../data';

const Actors = () => {
  return (
    <div>
      <h1>Actors Page</h1>
      {actors.map((a, i) => 
        <div key={i} className="actor">
          <h2>Name: {a.name}</h2>
          <h3>Movies:</h3>
          <ul>
            {a.movies.map((m, i) => 
              <li key={i}>{m}</li>
            )}
          </ul>
        </div>
        )}
    </div>
  );
};

export default Actors;
