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
<<<<<<< HEAD
            {movie.genres.map((genre, index) => <li key={index}>{genre}</li>)}
=======
            return movie.genres.map((genre, index) => {
             <li key={index}>{genre}</li>
            })
>>>>>>> 3940e90efde2cdb3424ce8366ca97dbe3f4b8afa
          </ul>
        </div>
      )
    })
  }

  return (
    <div>
        <h1>Movies Page</h1>
        {renderMovies()}
<<<<<<< HEAD
=======

>>>>>>> 3940e90efde2cdb3424ce8366ca97dbe3f4b8afa
    </div>
  );
};

export default Movies;
