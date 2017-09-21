import React from 'react';
import { actors } from '../data';

const Actors = () => {
  
  const actorLi = actors.map((actor, i) => {
    const movieLi = actor.movies.map(movie => <li>{movie}</li>)
    return (
      <div>
        <li key={i}>{actor.name}</li>
        Movies
        <ul>
          {movieLi}
        </ul>
      </div>  
    )
  })
  
  return (
    <div>
      <h1>Actors Page</h1>
      <ul>
        {actorLi}
      </ul>
    </div>
  );
};

export default Actors;
