import React from 'react';
import { actors } from '../data';

const Actors = () => {
  return (
    <div>
        <h1>Actors Page</h1>
        {actors.map((actor, index) =>(
          <div key={index} className="actor">
            <h1> {actor.name} </h1>
            <p> Movies</p>
              {actor.movies.map((movie,index) =>(
                <li key={index}>{movie}</li>
              ))}
          </div>
        ))}
    </div>
  );
};

export default Actors;
