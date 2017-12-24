import React from 'react';
import { movies } from '../data';

const Movies = () => {

	function listGenres(movie) {
		return movie.genres.map(genre =>
				<li>{genre}</li>
		)
	}

	const listMovies = movies.map(movie =>
		<div>
			<h4>{movie.title}</h4>
			<p>Time: {movie.time}</p>
			<p>Genres</p>
			<ul>
				{listGenres(movie)}
			</ul>
			<p>Metascore: {movie.metascore}</p>
		</div>
	)

  return (
    <div>
    	<h1>Movies Page</h1>
    	{listMovies}
    </div>
  );
};

export default Movies;
