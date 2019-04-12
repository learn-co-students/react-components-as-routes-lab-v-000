import React from 'react';
import { movies } from '../data';

const genreList = (genres) => {
	return genres.map( genre => <li>{genre}</li>)
}

const movieDivs = (movies) => {
	return movies.map( (movie, i) => {
		
		return <div className="movie" key={i}>
			<h3>{movie.title}</h3>
			Time: {movie.time} <br/>
			<ul>{genreList(movie.genres)}</ul>
			{movie.metascore} <hr/>
		</div>
	})
}

const Movies = () => {
  return (
    <div>
    	<h1>Movies Page</h1>
    	{movieDivs(movies)}
    </div>
  );
};

export default Movies;
