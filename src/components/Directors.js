import React from 'react';
import { directors } from '../data';

const Directors = () => {
  return (
    <div>
      <h1>Directors Page</h1>
      {directorList()}
    </div>
  );
}

const directorList = () => {
  return directors.map(d => {
    return(
      <div key={d.name}>
        <h2>{d.name}</h2><br/>
        <h4>Movies: </h4>
        <ul>{d.movies.map(movie => {
          return <React.Fragment><li key={movie}>{movie}</li><br /></React.Fragment>;
        })}</ul>
      </div>
    )
  })
}

export default Directors
