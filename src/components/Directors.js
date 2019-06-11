import React from 'react';
import { directors } from '../data';

const Directors = () => {
  return (
    <div>
    <h1>Directors Page</h1>
    {directors.map((director, index) => <div key={index + 1} className='director'>{director.name}{director.movies.map((movie, movieIndex) => <p key={movieIndex + 1}>{movie}</p>)}</div>)}
    </div>
  );
}

export default Directors
