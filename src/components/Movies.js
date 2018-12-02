import React from 'react';
import { movies } from '../data';

const Movies = () => {

  const movieCards = movies.map((movie, index)  => <div key={index} >Title: {movie.title}, Time: {movie.time}, Genres: {movie.genres.map(genre => <ul>{genre}</ul>)} </div>)

  return (
    <div>
	<h1>Movies Page</h1>
        {movieCards}
    </div>
  );
};

export default Movies;
//title: 'Doctor Strange',
//    time: 115,
//    genres: ['Action', 'Adventure', 'Fantasy'],
//    metascore: 74
