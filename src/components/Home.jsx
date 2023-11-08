import { useState, useEffect } from "react";
import { ListMovies } from "./ListMovies";

export const Home = () => {
  const [listMovies, setListMovies] = useState([]);
  const APIKey = "1e81568b63357a1819899eca74697016";
  const API = `https://api.themoviedb.org/3/movie/popular?api_key=${APIKey}&language=en-US&page=1`;

  const handleFetchData = async () => {
    const response = await fetch(API);
    const data = await response.json();
    console.log(JSON.stringify(data, null, 2));
    setListMovies(data.results);
  };

  useEffect(() => {
    handleFetchData();
  }, []);
  return (
    <>
      <div>
        <h1>Popular Movies</h1>
      </div>
      <div className="containerListMovies">
        <ListMovies listMovies={listMovies} />
      </div>
    </>
  );
};
