import React from 'react';
import { movies } from '../data';

const genreMarkUp = (gArr) => {
	return gArr.map((g, idx) => <li key={idx}>{g}</li>)
}

const movieMarkUp = () => {
	return movies.map((m, idx) => <div className="movie">{`${m.title} -- ${m.time}`}
																	<ul className="genres">
																		{genreMarkUp(m.genres)}
																	</ul>
																</div>)
}

const Movies = () => {
  return (
     <div>
      <h1>Movies Page</h1>
			{console.log(movies)}
      {movieMarkUp()}
    </div>
	);
};

export default Movies;
