import React from 'react';
import { actors } from '../data';

// const BuildActorsList = () => {
//   return (
//     actors.map((actor, key)=> (
//     <div className="actor" key={key}>
//       <h2>Name: {actor.name}</h2>
//       <h3>Movies:</h3>
//       <ul><BuildMoviesList movies={actor.movies}/></ul>
//     </div>))
//   )
// }

// const BuildMoviesList = ({movies}) => {
//   return (
//     movies.map((movie, key )=> <li key={key}>{movie}</li>)
//   )
// }


const Actors = () => {
  return (
    <div>
      <h1>Actors Page</h1>
      {actors.map((actor, key)=> (
        <div className="actor" key={key}>
          <h2>Name: {actor.name}</h2>
          <h3>Movies:</h3>
          <ul>{actor.movies.map((movie, key )=> <li key={key}>{movie}</li>)}</ul>
        </div>))}
    </div>
  );
};

export default Actors;
