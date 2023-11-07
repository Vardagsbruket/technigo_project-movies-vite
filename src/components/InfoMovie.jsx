import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export const InfoMovie = () => {
  const { movieId } = useParams();
  const APIKey = "1e81568b63357a1819899eca74697016";
  console.log(movieId);
  const [movie, setMovie] = useState({});
  const API = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${APIKey}&language=en-US`;

  const handleFetchData = async () => {
    const response = await fetch(API);
    const data = await response.json();
    console.log(JSON.stringify(data, null, 2));
    // setMovie(data.results);
    setMovie(data);
    console.log(data);
  };

  useEffect(() => {
    handleFetchData();
  }, []);

  return (
    <>
      <p>Name: {movie.title}</p>
      <p>Release date: {movie.release_date}</p>
    </>
  );
};
