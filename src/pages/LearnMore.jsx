import { useNavigate, useOutletContext } from "react-router-dom";

export const LearnMore = () => {
  const [currentMovie] = useOutletContext();
  let navigate = useNavigate();
  return (
    <div className="learnMore-container">
      <h2>About {currentMovie.title}</h2>
      <p>Original language: {currentMovie.original_language}</p>
      <p>Tagline: {currentMovie.tagline}</p>
      <p>Runtime: {currentMovie.runtime}</p>
      <a href={currentMovie.homepage}>Homepage for {currentMovie.title}</a>

      <div className="navLink">
        <button onClick={() => navigate(-1)}> Go Back</button>
      </div>
    </div>
  );
};
