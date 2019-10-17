import React from "react";
import { directors } from "../data";

const Directors = () => {
  return (
    <div>
      <h1>Directors Page</h1>
      {directors.map((director, index) => (
        <div key={index}>
          <p>Name: {director.name}</p>
          <p>Movies:</p>
          {director.movies.map((movie, index) => (
            <ul>
              <li key={index}>{movie}</li>
            </ul>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Directors;
