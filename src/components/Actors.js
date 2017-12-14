import React from 'react';
import { actors } from '../data';

const Actor = ({name, movies}) => {
  return (
    <div>
      <h2>{name}</h2>
      {movies.map(movie => <ul key={movie}>{movie}</ul>)}
  </div>
)}


const Actors = () => {

  return (
    <div>
      <h1>Actors Page</h1>
      {actors.map(actor =><div className="actor"><Actor key={actor.name} name={actor.name} movies={actor.movies} /></div>)}
    </div>
  );
};

export default Actors;
