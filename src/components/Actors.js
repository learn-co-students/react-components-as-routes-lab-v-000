import React from 'react';
import { actors } from '../data';

const Actors = () => {
  const actorList = actors.map(({name, movies}) => {
    const movieList = movies.map(movie => ( <li key={name} > {movie} </li> ))

    return (
      <div key={name} >
        <h4>{name}</h4>
        <ul>
          {movieList}
        </ul>
      </div>
      )
  })

  return (
    <div>
      <h1>Actors Page</h1>
      {actorList}
    </div>
  );
};

export default Actors;
