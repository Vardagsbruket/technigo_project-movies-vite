import { useState, useEffect } from "react";
import { ListMovies } from "./ListMovies";

export const Home = () => {
  const [movieList, setMovieList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const APIKey = "1e81568b63357a1819899eca74697016";

  const min_date = "2023-11-15";
  const max_date = "2023-12-31";

  const [selectedMovieList, setSelectedMovieList] = useState("");

  const selectMovieList = (e) => {
    const selectedValue = e.target.value;
    setSelectedMovieList(selectedValue);
  };

  useEffect(() => {
    const fetchMovies = async () => {
      let apiUrl = "";

      switch (selectedMovieList) {
        case "upcoming":
          apiUrl = `https://api.themoviedb.org/3/discover/movie?api_key=${APIKey}&include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_release_type=2|3&release_date.gte=${min_date}&release_date.lte=${max_date}`;
          break;
        case "popular":
          apiUrl = `https://api.themoviedb.org/3/movie/popular?api_key=${APIKey}&language=en-US&page=1`;
          break;
        case "top-rated":
          apiUrl = `https://api.themoviedb.org/3/discover/movie?api_key=${APIKey}&include_adult=false&include_video=false&language=en-US&page=1&sort_by=vote_average.desc&without_genres=99,10755&vote_count.gte=200`;
          break;
        default:
          apiUrl = `https://api.themoviedb.org/3/movie/popular?api_key=${APIKey}&language=en-US&page=1`;
          break;
      }
      const response = await fetch(apiUrl);
      const data = await response.json();
      setMovieList(data.results);
      setIsLoading(false);
    };

    fetchMovies();
  }, [selectedMovieList]);

  return (
    <>
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
      <div>
        <h1>{selectedMovieList ? `${selectedMovieList} Movies` : "Movies"}</h1>
      </div>
      <div className="containerListMovies">
        {isLoading ? <p>Loading...</p> : <ListMovies movieList={movieList} />}
      </div>
    </>
  );
};
