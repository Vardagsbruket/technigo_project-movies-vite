import { useState } from "react";
import { NavLink } from "react-router-dom";

export const ListMovies = ({ movieList }) => {
  const [hoveredMovie, setHoveredMovie] = useState(null);
  return (
    <>
      {movieList.map((movie) => (
        <div
          key={movie.id}
          className="containerListMovies"
          onMouseEnter={() => setHoveredMovie(movie.id)}
          onMouseLeave={() => setHoveredMovie(null)}
        >
          <NavLink to={`/movie/${movie.id}`} className="movie-link">
            <div className="movie-container">
              <img
                src={`https://image.tmdb.org/t/p/w185${movie.poster_path}`}
                alt="Movie poster"
              />
              {hoveredMovie === movie.id && (
                <div className="additionalInfo">
                  <h3>{movie.title}</h3>
                  <p>Release date: {movie.release_date}</p>
                </div>
              )}
            </div>
          </NavLink>
        </div>
      ))}
    </>
  );
};
