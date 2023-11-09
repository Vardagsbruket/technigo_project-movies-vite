import { useState } from "react";

export const DropdownMenu = () => {
  const [selectedMovieList, setSelectedMovieList] = useState("");

  const selectMovieList = (e) => {
    const selectedValue = e.target.value;
    setSelectedMovieList(selectedValue);
  };
  return (
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
  );
};
