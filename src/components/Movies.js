import React from 'react';
import { movies } from '../data';

const Movies = () => {
  return (
    <div>
      <h1>Movies Page</h1>
			{
				movies.map((movie, index) =>(
					<div key={index}>
						<h3>{movie.title}</h3>
						<p>{movie.time} minutes</p>
						<p>{movie.metascore}</p>
						<p>Genres: { movie.genres.map(genre => genre).join(', ')}</p>
					</div>
				))
			}
    </div>
  );
};

export default Movies;