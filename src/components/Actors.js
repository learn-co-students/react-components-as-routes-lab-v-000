import React from 'react';
import { actors } from '../data';

const Actors = () => {

  const renderActors = () => {
    return (
      actors.map((actor, i) => {
        return (
          <div key={i}>
            <h4>{actor.name}</h4>
            <ul>
            {
              actor.movies.map((movie, i) => {
                return (
                  <li key={i}>{movie}</li>
                )
              })
            }
            </ul>
          </div>
        )
      })
    )
  }

  return (
    <div>
      <h1>Actors Page</h1>
      {renderActors()}
    </div>
  );
};

export default Actors;
