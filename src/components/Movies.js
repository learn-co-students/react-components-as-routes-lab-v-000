import React from 'react';
import { movies } from '../data';

const genreMarkUp = (gArr) => {
	return gArr.map((g, idx) => <li key={idx}>{g}</li>)
}

const movieMarkUp = () => {
	return movies.map((m, idx) => <li key={idx}>{m.title}
																	<ul>
																		{genreMarkUp(m.genres)}
																	</ul>
																</li>)
}

const Movies = () => {
  return (
    <div>
      {console.log(movies)}
			<ul>
				{movieMarkUp()}
			</ul>
    </div>
  );
};

export default Movies;
