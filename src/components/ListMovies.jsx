import { useState } from "react";
import { Link } from "react-router-dom";

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
          <Link to={`/${movie.id}`} className="movie-link">
            <div className="movie-container">
              <img
                src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`}
                alt="Movie poster"
              />
              {hoveredMovie === movie.id && (
                <div className="additionalInfo">
                  <h1>{movie.title}</h1>
                  <p>Release date: {movie.release_date}</p>
                </div>
              )}
            </div>
          </Link>
        </div>
      ))}
    </>
  );
};
