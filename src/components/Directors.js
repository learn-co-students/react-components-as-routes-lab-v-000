import React from 'react'
import { directors } from '../data'

const directorsRaw = directors.map((director, index) => {
  return (
    <div key={index}>
      <h3>{director.name}</h3>
      <ul>
        {director.movies.map(movie => <li>{movie}</li>)}
      </ul>
    </div>
  )
})

const Directors = () => {
  return (
    <div>
        {directorsRaw}
    </div>
  )
}

export default Directors
