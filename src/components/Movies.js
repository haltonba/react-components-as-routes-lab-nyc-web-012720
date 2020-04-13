import React from 'react';
import { movies } from '../data';

const Movies = () => {

  const renderMovies = () => {
    return movies.map(movie => {
      return (
        <div>
          <h3>{movie.title}</h3>
          <h3>{movie.time}</h3>
          <ul>
            {movie.genres.map((genre, index) => <li key={index}>{genre}</li>)}
          </ul>
        </div>
      )
    })
  }

  return (
    <div>
        <h1>Movies Page</h1>
        {renderMovies()}
    </div>
  );
};

export default Movies;
