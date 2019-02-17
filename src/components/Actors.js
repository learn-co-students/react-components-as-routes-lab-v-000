import React from 'react'
import { actors } from '../data'

// nested destructuring <3
const Actor = ({ actor: { name, movies } }) => {
  return (
    <div className="actor">
      {name}
      <ul>
        {movies.map(movie => (
          <li>{movie}</li>
        ))}
      </ul>
    </div>
  )
}

const Actors = () => {
  return (
    <div>
      <h1>Actors Page</h1>
      {actors.map(actor => (
        <div className="actor-entry">
          <Actor actor={actor} />
        </div>
      ))}
    </div>
  )
}

export default Actors
