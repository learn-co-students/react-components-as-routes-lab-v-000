import React from 'react';
import { directors } from '../data';

const Directors = () => {
  var directorsDiv = directors.map(director => {
    var movies = director.movies.map(movie => { return <li>{movie}</li>})
    return (<div>{director.name}<ul>{movies}</ul></div>)
  })

  return (
    <div>
      <h1>Directors Page</h1>
      {directorsDiv}
    </div>
  );
};

export default Directors
