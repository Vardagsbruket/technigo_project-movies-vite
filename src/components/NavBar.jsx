import { NavLink } from "react-router-dom";
import { useState } from "react";

export const NavBar = () => {
  const [selectedMovieList, setSelectedMovieList] = useState();

  const selectMovieList = (e) => {
    const selectedMovieList = e.target.value;
    setSelectedMovieList(selectMovieList);
  };

  return (
    <>
      <nav>
        <ul>
          <li>
            <NavLink to="/" className="navBar">
              Home
            </NavLink>
          </li>
        </ul>
        <div className="dropdown">
          <label htmlFor={selectedMovieList}>
            Which movies do you want to see?
          </label>
          <select value={selectedMovieList} onChange={selectMovieList}>
            <option value="">Select Movie List</option>
            <option value="upcoming">Upcoming Movies</option>
            <option value="popular">Popular Movies</option>
            <option value="top-rated">Top Rated Movies</option>
          </select>
        </div>
      </nav>
    </>
  );
};
