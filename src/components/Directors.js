import React from 'react';
import { directors } from '../data';

const Directors = () => {
  const directorList = directors.map(({name, movies}) => {
    const movieList = movies.map(movie => ( <li key={name} > {movie} </li> ))

    return (
    <div key={name} >
      <h4>{name}</h4>
      <ul>
        {movieList}
      </ul>
    </div>
    )
  })

  return (
    <div>
      <h1>Directors Page</h1>
      {directorList}
    </div>
  )
}

export default Directors
