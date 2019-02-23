import React from 'react';
import { actors } from '../data';

const Actors = () => {
  const actorList = actors.map(actor => {
    const movieList = actor.movies.map(movie => <li>{movie}</li>)
    return(<div><h3>{actor.name}</h3><ul>{movieList}</ul></div>)
  })

  return (
    <div>
        <h1>Actors Page</h1>
        {actorList}
    </div>
  );
};

export default Actors;
