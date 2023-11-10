import { useState, useEffect } from "react";
import { ListMovies } from "./ListMovies";

export const Home = () => {
  const [movieList, setMovieList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const APIKey = import.meta.env.VITE_OPENDB_KEY;

  //Get todays date in "YYYY-MM-DD" format
  const todaysDate = new Date();
  const min_date = todaysDate.toISOString().split("T")[0];

  //Get the date one month from today in "YYYY-MM-DD" format
  const nextMonth = new Date();
  nextMonth.setMonth(todaysDate.getMonth() + 1);
  const max_date = nextMonth.toISOString().split("T")[0];

  //Get input from dropdown menu to make the corresponding api call
  const [selectedMovieList, setSelectedMovieList] = useState("");
  const selectMovieList = (e) => {
    const selectedValue = e.target.value;
    setSelectedMovieList(selectedValue);
  };

  useEffect(() => {
    const fetchMovies = async () => {
      let apiUrl = "";

      switch (selectedMovieList) {
        case "Upcoming":
          apiUrl = `https://api.themoviedb.org/3/discover/movie?api_key=${APIKey}&include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_release_type=2|3&primary_release_date.gte=${min_date}&primary_release_date.lte=${max_date}`;
          break;
        case "Popular":
          apiUrl = `https://api.themoviedb.org/3/movie/popular?api_key=${APIKey}&language=en-US&page=1`;
          break;
        case "Top-rated":
          apiUrl = `https://api.themoviedb.org/3/discover/movie?api_key=${APIKey}&include_adult=false&include_video=false&language=en-US&page=1&sort_by=vote_average.desc&without_genres=99,10755&vote_count.gte=200`;
          break;
        default:
          apiUrl = `https://api.themoviedb.org/3/movie/popular?api_key=${APIKey}&language=en-US&page=1`;
          break;
      }
      const response = await fetch(apiUrl);
      //console.log(response);
      const data = await response.json();
      setMovieList(data.results);
      //console.log(data);
      setIsLoading(false);
    };

    fetchMovies();
  }, [selectedMovieList]);

  return (
    <div className="mainContainer">
      <div className="header">
        <h1>
          {selectedMovieList ? `${selectedMovieList} Movies` : "Popular Movies"}
        </h1>
        <div className="dropdown">
          <label htmlFor={selectedMovieList}>Select movie list</label>
          <select value={selectedMovieList} onChange={selectMovieList}>
            <option value="Popular">Popular Movies</option>
            <option value="Upcoming">Upcoming Movies</option>
            <option value="Top-rated">Top Rated Movies</option>
          </select>
        </div>
      </div>

      <div className="containerListMovies">
        {isLoading ? <p>Loading...</p> : <ListMovies movieList={movieList} />}
      </div>
    </div>
  );
};
