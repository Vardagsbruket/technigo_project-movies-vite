import React, { useState, useEffect } from "react";
import { NavLink, Outlet, useNavigate, useParams } from "react-router-dom";
import { NavBar } from "./NavBar";

export const InfoMovie = () => {
  const { movieId } = useParams();
  const [currentMovie, setCurrentMovie] = React.useState([]);
  const APIKey = import.meta.env.VITE_OPENDB_KEY;
  //console.log(movieId);
  const [movie, setMovie] = useState({});
  const API = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${APIKey}&language=en-US`;

  let navigate = useNavigate();

  const handleFetchData = async () => {
    const response = await fetch(API);
    //console.log(response);
    const data = await response.json();
    console.log(data);

    //If the user gets a 404 error code, then navigate to /404
    if (data.status_code === 34) navigate("/404");

    //console.log(JSON.stringify(data, null, 2));
    // setMovie(data.results);
    setMovie(data);
    setCurrentMovie(data);
    //console.log(data);
  };

  useEffect(() => {
    handleFetchData();
  }, []);

  const backdropIMG = `https://image.tmdb.org/t/p/w1280${movie.backdrop_path}`;
  const posterIMG = `https://image.tmdb.org/t/p/w342${movie.poster_path}`;
  const rating = movie.vote_average;
  const roundedRating = rating.toFixed(1);
  return (
    <>
      <NavBar />
      <div
        className="background"
        style={{ backgroundImage: `url(${backdropIMG})` }}
      >
        <div className="infoInnerContainer">
          <img src={posterIMG} alt="Poster for movie" className="infoPoster" />
          <div className="details">
            <h1>{movie.title}</h1>
            <p>⭐ {movie.vote_average}</p>
            <p>Release date: {movie.release_date}</p>
            <p>{movie.overview}</p>
            <div>
              <NavLink to={`/movie/${movie.id}/learnmore`}>
                <button>Learn More</button>
              </NavLink>
            </div>
          </div>
        </div>
        <Outlet context={[currentMovie]} />
      </div>
    </>
  );
};
