import React from 'react';
import { actors } from '../data';
//data coming from file, access using actors

const Actors = () => {

  const renderActors = () => {
    return actors.map((actor, id) => {

      const movies = actor.movies.map((movie, id) => {
        return <li key={id}>{movie}</li>
      })

      return (
        <div key={id}>
        {actor.name}
          <ul>
            {movies}
          </ul>
        </div>
      )
    })
  }

  return (
    <div>
      <h1>Actors Page</h1>
      {renderActors()}
    </div>
  );
};

export default Actors;
