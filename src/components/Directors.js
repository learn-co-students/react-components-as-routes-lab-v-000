import React from 'react'
import { directors } from '../data'

const Director = ({ director: { name, movies } }) => {
  return (
    <div className="director">
      {name}
      <ul>
        {movies.map(movie => (
          <li>{movie}</li>
        ))}
      </ul>
    </div>
  )
}

const Directors = () => {
  return (
    <div>
      <h1>Directors Page</h1>
      {directors.map(director => (
        <div className="director-entry">
          <Director director={director} />
        </div>
      ))}
    </div>
  )
}

export default Directors
