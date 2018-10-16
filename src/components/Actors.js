import React from 'react';
import { actors } from '../data';

const data = () => {
  return actors.map(function (actor) {
    return <div key={actor.name} className="actor"><h3>{actor.name}</h3><p>Movies</p><ul>{movies(actor.movies)}</ul></div>
  })
}

const movies = (array) => {
  return array.map(function (movie) {
    return <li key={movie}>{movie}</li>
  })
}

const Actors = () => {
  return (
    <div>
      <h1>Actors Page!</h1>
      {data()}
    </div>
  );
};

export default Actors;
