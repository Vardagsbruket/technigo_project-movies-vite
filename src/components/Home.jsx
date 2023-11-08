import { useState, useEffect } from "react";
import { ListMovies } from "./ListMovies";

export const Home = ({ selectedMovieList }) => {
  const [movieList, setMovieList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const APIKey = "1e81568b63357a1819899eca74697016";

  useEffect(() => {
    const fetchMovies = async () => {
      let apiUrl = "";

      switch (selectedMovieList) {
        case "upcoming":
          apiUrl = ``;
          break;
        case "popular":
          apiUrl = `https://api.themoviedb.org/3/movie/popular?api_key=${APIKey}&language=en-US&page=1`;
          break;
        case "top-rated":
          apiUrl = ``;
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

  //   //Popular Movies
  //   const APIPopular = `https://api.themoviedb.org/3/movie/popular?api_key=${APIKey}&language=en-US&page=1`;

  //   const fetchPopularMovies = async () => {
  //     const response = await fetch(APIPopular);
  //     const data = await response.json();
  //     console.log(JSON.stringify(data, null, 2));
  //     setListPopularMovies(data.results);
  //     if (data) {
  //       setIsLoading(false);
  //     }
  //   };
  //   useEffect(() => {
  //     fetchPopularMovies();
  //   }, []);

  return (
    <>
      <div>
        <h1>{selectedMovieList ? `${selectedMovieList} Movies` : "Movies"}</h1>
      </div>
      <div className="containerListMovies">
        {isLoading ? <p>Loading...</p> : <ListMovies movieList={movieList} />}
      </div>
    </>
  );
};
