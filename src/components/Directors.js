import React from 'react';
import { directors } from '../data';

const Directors = () => {

  const directorElements = directors.map((directorObj) => {

    const directorsMovies = directorObj.movies.map((movieString) => {
      return <li>{movieString}</li>
    });

    return <div>
      <div>
        <h3>{directorObj.name}</h3>
      </div>
      <div>
        <ul>
          {directorsMovies}
        </ul>
      </div>
      <hr/>
    </div>
  })
  return (
    <div className='container'>
      <h2>Directors Page</h2>
      <hr/>
      <div>
        {directorElements}
      </div>
    </div>
  );
}

export default Directors
