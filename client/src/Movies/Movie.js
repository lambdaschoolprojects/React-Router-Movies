import React from 'react';

import MovieCard from './MovieCard';

const Movie = ({movies, match}) => {
    return (
      <div className="save-wrapper">
        {
          getMovie(movies, match)
        }
        <div className="save-button">Save</div>
      </div>
    );
}

const getMovie = (movies, match) => {
  let movieData;
  if(movies === null) {
    return (
        <h2>Loading...</h2>
    )
  }
  else {
   movieData = movies.find(movie => movie.id === Number(match.params.id));
  }

  //console.log(movieComponent);

  return <MovieCard {...movieData} />;
}

export default Movie;
