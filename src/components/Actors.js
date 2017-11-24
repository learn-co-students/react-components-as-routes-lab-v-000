import React from 'react'
import { actors } from '../data'

const actorsRaw = actors.map((actor, index) => {
  return (
    <div key={index}>
      <h3>{actor.name}</h3>
      <ul>
        {actor.movies.map(movie => <li>{movie}</li>)}
      </ul>
    </div>
  )
})

const Actors = () => {
  return (
    <div>
        {actorsRaw}
    </div>
  )
}

export default Actors