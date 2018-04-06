import React from 'react';
import { directors } from '../data';

class Directors extends React.Component {
	renderDirectors(directors) {
		return directors.map((director,index) => {
			return (
				<div key={index}>
				<h3>{director.name}</h3>
				<ul>
					{this.renderDirectorsMovies(director)}
				</ul>
				</div>
			);
		});
	};

	renderDirectorsMovies(director) {
		return director.movies.map((movie,index) => {
			return (<li key={index}>{movie}</li>);
		});
	};

	render() {
		return (
	   		<div>
	      <h1>Directors Page</h1>
	      {this.renderDirectors(directors)}
	   		</div>
 	 	);
	};
};

export default Directors
