import { Link } from "react-router-dom";

export const ErrorPage = () => {
  return (
    <div>
      <h1>It seems like the movie you are trying to view does not exist...</h1>
      <Link to="/">Go back to Home Page</Link>
    </div>
  );
};
