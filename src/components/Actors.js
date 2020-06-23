import React from 'react';
import { actors } from '../data';

const Actors = () => {
  return (
    <div>
      <h1>Actors Page</h1>
      {/*{code here}*/
        actors.map((actor,idx) => (
        <div key={idx}>{actor.name}
          <ul key={idx}>
            {actor.movies.map(movie => <li key={movie}>{movie}</li>)}
          </ul>
        </div>
        ))
      }
    </div>
  );
};

export default Actors;
