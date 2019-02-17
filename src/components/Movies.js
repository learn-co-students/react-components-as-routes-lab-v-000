import React from 'react'
import { movies } from '../data'

const Movies = () => {
  return (
    <div>
      <h1>Movies Page</h1>
      {movies.map(({ title, time, genres }) => (
        <div className="movie-entry">
          {title}
          {time}
          <ul>
            {genres.map(genre => (
              <li>{genre}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  )
}

export default Movies
