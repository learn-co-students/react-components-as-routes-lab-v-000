import React from 'react';
import { actors } from '../data';

const Actors = () => {
  let actorList = actors.map((actor) => {
    return <div className="actor">
              <h3>Name: {actor.name}</h3>
              <h4>Movies:</h4>
              <ul>
                {actor.movies.map(movie => <li key={movie}>{movie}</li>)}
              </ul>
            </div>;
      })

  return (
    <div>
      <h1>Actors Page</h1>
        {actorList}
    </div>
  );
};

export default Actors;
