import React from 'react';
import { Link } from "react-router-dom";

import MovieCard from './MovieCard';

const MovieList = ({ movies }) => {

    return (
      <div className="movie-list">
        {movies && movies.map(movie => (
          <MovieDetails key={movie.id} movie={movie} />
        ))}
      </div>
    );
}

function MovieDetails({ movie }) {
  const { id } = movie;
  return (
      <Link to={`/movies/${id}`}>
        <MovieCard {...movie} />
      </Link>
  );
}

export default MovieList;
