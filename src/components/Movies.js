import React from 'react';
import { movies } from '../data';

const Movies = () => {
	return (
		//   title: 'Doctor Strange',
		//   time: 115,
		//   genres: ['Action', 'Adventure', 'Fantasy'],
		//   metascore: 74
		// },
		<div>
			<h1>Movies Page</h1>
			{movies.map((movie) => (
				<div key="movie" className="movie">
					<h3>{movie.title}</h3>
					<p>{movie.time} </p>
					<p>{movie.genres} </p>
					<p>{movie.metascore} </p>
				</div>
			))}
		</div>
	);
};

export default Movies;
