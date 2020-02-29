import React from 'react';
import { actors } from '../data';

const Actors = () => {
  return (
    <div>
      <h1>Actors Page</h1>
      {actors.map((act, idx) => {
        return <div key={idx}>
          <h3>{act.name}</h3>
          <ul>
            {act.movies.map(mov => <li>{mov}</li>)}
          </ul>
        </div>
      })}
    </div>
  );
};

export default Actors;
