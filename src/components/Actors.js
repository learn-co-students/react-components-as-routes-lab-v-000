import React from 'react';
import { actors } from '../data';

const renderActors = () => {
  return actors.map((actor, index) => {
    return (
      <div key={index}>
        <p>
          {actor.name}
        </p>
        <ul>
          {renderMovies(actor)}
        </ul>
      </div>
    )
  })
};

const renderMovies = actor => {
  return actor.movies.map((movie, index) => {
    return (
      <li key={index}>
        {movie}
      </li>
    )
  })
}

const Actors = () => {
  return (
    <div>
      <h1>
        Actors Page
      </h1>
      {renderActors()}
    </div>
  );
};

export default Actors;
