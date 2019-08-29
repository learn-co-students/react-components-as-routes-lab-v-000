import React from 'react';
import { actors } from '../data';

const Actors = () => {
  return (
    <div>
      <h1>
        Actors Page
      </h1>
      { actors.map((actor, index) =>
        <React.Fragment key={index}>
          <h3>
            { actor.name }
          </h3>              
          <ul>
            { actor.movies.map( movie => 
                <li>
                  {movie}
                </li>
              ) 
            }
          </ul>
        </React.Fragment>
      )}
    </div>
  );
};

export default Actors;