import React from 'react';
import { actors } from '../data';

const Actors = () => {

  const renderActors = actors.map((act, i) => {

    const actorsMovies = act.movies.map((mov, i) => <li key={i}>{mov}</li>)

    return(
    <div key={i}>
      <h2>Name: {act.name}</h2>
      <ul>
        {actorsMovies}
      </ul>
    </div>
    )
  })

  return (
    <div>
      <h1>Actors Page</h1>
      {renderActors}
    </div>
  );
};

export default Actors;
