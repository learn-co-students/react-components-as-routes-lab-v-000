import React from 'react';
import { actors } from '../data';
import MoviesListItem from './MoviesListItem';

const Actors = () => {
  const buildList = (movies) => {
    return movies.map((movie, index) => {
      return <MoviesListItem movie={movie} key={index} />
    })
  }

  let actorsList = actors.map((actor, index) => {
    return (
      <div key={index} className="actor">
        <strong>Name: {actor.name}</strong>
        <p>Movies:</p>
        <ul>
          {buildList(actor.movies)}
        </ul>
      </div>
    )
  });

  return (
    <div>
      <h1>Actors Page</h1>
      {actorsList}
    </div>
  );
};

export default Actors;
