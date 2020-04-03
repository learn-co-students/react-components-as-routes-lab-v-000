import React from 'react';
import { actors } from '../data';

const Actors = () => {
  return (
    <div className="actors-list">
      <h1>Actors Page</h1>
        {actors.map((actor) =>
          <div className="actor">
            {actor.name}
              <ul>
                {actor.movies.map((movie) =>
                  <li>
                    {movie}
                  </li>
                )}
              </ul>
          </div> 
        )}      
    </div>
  );
};

export default Actors;
