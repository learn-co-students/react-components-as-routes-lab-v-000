import React from 'react';
import { movies } from '../data';

const Movies = () => {
	const moviesDivs = movies.map(movie=>
		<div className="movie">
			<h3>{movie.title}</h3>
			<p>time: {movie.time}</p>
			genres:
			<ul>
				{movie.genres.map(genre=> <li>{genre}</li>)}
			</ul>
		</div>)

  return (
    <div>
        <h1>Movies Page</h1>
				{moviesDivs}
    </div>
  );
};

export default Movies;
