import React from "react";
import { movies } from "../data";

const Movies = () => {
  return (
    <div>
      <h1>Movies Page</h1>

      {movies.map(movie => (
        <div>
          {movie.title}
          <ul>
            <li>Time: {movie.time}</li>
            <li>
              Genre:{" "}
              <ul>
                {movie.genres.map(genre => (
                  <li>{genre}</li>
                ))}
              </ul>
            </li>
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Movies;
