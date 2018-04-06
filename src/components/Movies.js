import React from 'react';
import { movies } from '../data';

class Movies extends React.Component {

	renderMovies(movies) {
		return movies.map((movie,index) => {
			return(
				<div key={index}>
					<h3>Name: {movie.title}</h3>
					<p>Time: {movie.time}</p>
					<p>Genre: </p>
					<ul>
						{this.renderMoviesGenres(movie)}
					</ul>
				</div>
			);
		});
	};

	renderMoviesGenres(movie) {
		return movie.genres.map((genre,index) => {
			return(<li key={index}>{genre}</li>)
		});
	};
  
	render() {
		return (
		<div>
			<h1>Movies Page</h1>
			{this.renderMovies(movies)}
		</div>
		);
	};
};

export default Movies;
