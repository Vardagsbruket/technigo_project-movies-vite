import { useNavigate, useOutletContext } from "react-router-dom";

export const LearnMore = () => {
  const [currentMovie] = useOutletContext();
  let navigate = useNavigate();

  let productionsCompanies = "";
  let arrayCompanies = currentMovie.production_companies
    ? currentMovie.production_companies
    : [];
  arrayCompanies.forEach((company, index) => {
    productionsCompanies += company.name;
    if (index !== arrayCompanies.length - 1) {
      productionsCompanies += ", ";
    }
  });
  return (
    <div className="learnMore-container">
      <p>Original language: {currentMovie.original_language}</p>
      <p>Tagline: {currentMovie.tagline}</p>
      <p>Runtime: {currentMovie.runtime} min</p>
      <p>Production company: {productionsCompanies}</p>
      <a href={currentMovie.homepage}>Homepage for {currentMovie.title}</a>

      <div className="navLink">
        <button onClick={() => navigate(-1)}> Hide extra info</button>
      </div>
    </div>
  );
};
