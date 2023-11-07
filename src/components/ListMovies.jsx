import { Link } from "react-router-dom";

export const ListMovies = ({ listMovies }) => {
  return (
    <>
      {listMovies.map((movie) => (
        <li key={movie.id}>
          <Link to={`/${movie.id}`}>{movie.title}</Link>
        </li>
      ))}
    </>
  );
};
