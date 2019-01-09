import React from 'react';
import { movies } from '../data';

const Movies = () => {
  return (
    <div>
    <h1> Movies Page </h1>
        {movies.map(x => <div className={x.title}> <h1> Name: {x.title} </h1> Time: {x.time} Genres: <ul>  {x.genres.map(y => <li> {y} </li>)} </ul></div>)}
    </div>
  );
};

export default Movies;
