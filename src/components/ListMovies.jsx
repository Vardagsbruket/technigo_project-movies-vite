import { Link } from "react-router-dom";

export const ListMovies = ({ listMovies }) => {
  return (
    <>
      {listMovies.map((movie) => (
        <div key={movie.id} className="containerListMovies">
          <Link to={`/${movie.id}`}>
            <img
              src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`}
              alt="Movie poster"
            />
          </Link>
        </div>
      ))}
    </>
  );
};
