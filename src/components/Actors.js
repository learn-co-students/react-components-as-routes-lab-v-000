import React from 'react';
import { actors } from '../data';

const Actors = () => {
const actorsList = actors.map(actor => {
const actorsMovies = actor.movies.map(movie => <li>{movie}</li>)

return (
  <div className='actor'>
    <h2>{actor.name}</h2>
    <ul>{actorsMovies}</ul>
  </div>
  )
})

return (
  <div>
    <h1>Actors Page</h1>
    <ul>{actorsList}</ul>   
  </div>
  );
};

export default Actors;
