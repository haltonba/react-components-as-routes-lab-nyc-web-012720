import React from 'react';
import { actors } from '../data';

const Actors = () => {

  const renderActors = () => {
    return actors.map(actor => {
      return (
        <div>
          <h3>{actor.name}</h3>
          <ul>
            {actor.movies.map((movie, index) => <li key={index}>{movie}</li>)}
          </ul>
        </div>
      )
    })
  }

  return (
    <div>
      <h1>Actors Page</h1>
      {renderActors()}
    </div>
  );
};

export default Actors;
