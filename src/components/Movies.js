import React from 'react';
import { movies } from '../data';

const Movies = () => {

  const renderMovies = movies.map( (movie, i) => {

    const genres = movie.genres.map( (genre, i) => {
      return(
        <li key={i}>{genre}</li>
      )
    });

    return(
      <div key={i}>
        <h2>{movie.title}</h2>
        <p>Time: {movie.time}</p>
        <p>Genres:</p>
        <ul>
          {genres}
        </ul>
      </div>
    )

  })


  return (
    <div>
      <h1>Movies Page</h1>
        {renderMovies}
    </div>
  );
};

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
