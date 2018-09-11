import React from 'react';
import { actors } from '../data';

const Actors = () => {
  return (
    <div>
      <h1>Actors Page</h1>
      {actorList()}
    </div>
  );
};

const actorList = () => {
  return actors.map(a => {
    return(
      <div key={a.name}>
        <h2>{a.name}</h2><br/>
        <h4>Movies: </h4>
        <ul>{a.movies.map(movie => {
          return <React.Fragment><li key={movie}>{movie}</li><br /></React.Fragment>;
        })}</ul>
      </div>
    )
  })
}

export default Actors;
