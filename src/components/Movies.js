import React from 'react'
import { movies } from '../data'

const moviesRaw = movies.map((movie, index) => {
  return (
    <div key={index}>
      <h3>{movie.title}</h3>
      <p>Time: {movie.time} min</p>
      <ul>
        {movie.genres.map(genre => <li>{genre}</li>)}
      </ul>
    </div>
  )
})

const Movies = () => {
  return (
    <div>
        {moviesRaw}
    </div>
  )
}

export default Movies
