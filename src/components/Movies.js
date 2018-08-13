import React from 'react';
import { movies } from '../data';

const Movies = () => {
  return (
    <div>
      <h1>Movies Page</h1>
      {movies.map((movie, index) => (
        <div>
          <h1 key={index}>Name: {movie.title}</h1>
          <h4>Time: {movie.time}</h4>
          {movie.genres.map((genre, index) =>(
            <ul>
            {genre}
            </ul>
          ))}
        </div>
      ))}

    </div>
  )
}

export default Movies;

// let movies = [
//   {
//     title: 'Doctor Strange',
//     time: 115,
//     genres: ['Action', 'Adventure', 'Fantasy'],
//     metascore: 74
//   },
//   {
//     title: 'Trolls',
//     time: 92,
//     genres: ['Animation', 'Adventure', 'Comedy', 'Family', 'Fantasy']
//   },
//   {
//     title: 'Jack Reacher: Never Go Back',
//     time: 118,
//     genres: ['Action', 'Adventure', 'Crime', 'Mystery', 'Thriller']
//   }
// ]
