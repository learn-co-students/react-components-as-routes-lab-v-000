import React from 'react';
import { directors } from '../data';

const directorList = directors.map(director => {
  return (
    <div className='director'>
      <h3>Name: {director.name}</h3>
      <h5>Movies</h5>
      <ul>
        {director.movies.map(movie => <li>{movie}</li>)}
      </ul>
    </div>
  )
})

const Directors = () => {
  return (
    <div>
      <h1> Directors Page </h1>
      {directorList}
    </div>
  );
}

export default Directors
