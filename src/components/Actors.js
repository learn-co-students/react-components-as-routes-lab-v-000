import React from 'react';
import { actors } from '../data';

const Actors = () => {
  return (
    <div>
      <h1>Actors Page</h1>
      {actors.map((actor,index)=>(
        <div key={index}>
          name: {actor.name}
          <ul>
            {actor.movies.map((movie,index)=>(
              <li key={index}>{movie}</li>
            ))}
          </ul>
          <hr/>
        </div>
      ))}
    </div>
  );
};

export default Actors;
