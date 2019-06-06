import React from 'react';
import { movies } from '../data';

const genreMarkUp = (gArr) => {
	return gArr.map((g, idx) => <li key={idx}>{g}</li>)
}

const movieMarkUp = () => {
	return movies.map((m, idx) => <div className="movie">{m.title}
																	<ul className="genres">
																		{genreMarkUp(m.genres)}
																	</ul>
																</div>)
}

const Movies = () => {
  return (
		<div id="top">
			<div className="spacer"><br></br></div>
			<div id="movies">
				{movieMarkUp()}
			</div>
		</div>
  );
};

export default Movies;
