import React from 'react';
import { directors } from '../data';

const Directors = () => {
  return (
    <div>
      <h1>Directors Page</h1>
      {generateDirectors()}
    </div>
  );

}

const generateDirectors = () => {
  return directors.map(director => {
    return(
      <div key={director.name}>
        <h2>{director.name}</h2><br/>
        <ul>{director.movies.map(movie => {
          return <React.Fragment><li key={movie}>{movie}</li><br /></React.Fragment>;
        })}</ul>
      </div>
    );
  });
}
export default Directors
