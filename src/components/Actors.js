import React from 'react';
import { actors } from '../data';

const Actors = () => {

  //console.log(actors)

  var actorsDiv = actors.map(actor => {
    var movies = actor.movies.map(movie => { return <li>{movie}</li>})
    return (<div>{actor.name}<ul>{movies}</ul></div>)
  })

  return (
    <div>
      <h1>Actors Page</h1>
      {actorsDiv}
    </div>
  );
};

export default Actors;
