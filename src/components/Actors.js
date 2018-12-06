import React from 'react';
import { actors } from '../data';

const renderActors = (actors) => {
    return actors.map((actor) => {
        return <div>
                    <h4>Title: {actor.name}</h4>
                    <p>Movies{actor.movies}</p>

                </div>
    })
}

const Actors = () => {
  return (
    <div>
    <h1>Actors Page</h1>
        {renderActors(actors)}
    </div>
  );
};

export default Actors;
