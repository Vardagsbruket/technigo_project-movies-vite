import { Route } from "react-router-dom";
import { Home } from "../components/Home";
import { InfoMovie } from "../components/InfoMovie";
import { ErrorPage } from "../components/ErrorPage";

export const routes = (
  <>
    <Route path="/" element={<Home />} />
    <Route path="*" element={<ErrorPage />} />
    <Route path="/movie/:movieId" element={<InfoMovie />} />
  </>
);

export default routes;
