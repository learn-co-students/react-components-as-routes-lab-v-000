import React from 'react';
import { movies } from '../data';

const Movies = () => {
  return (
    <div>
    <h1>Movies Page</h1>
        {movies.map((x, i) => {
          return(
            <div key={i}><br></br>
              <h3> Title: {x.title} </h3>
              <h4> Time: {x.time} </h4>
              <h4> Genres: {x.genres} </h4>
            </div>
          )
        })}
    </div>
  );
};

export default Movies;
