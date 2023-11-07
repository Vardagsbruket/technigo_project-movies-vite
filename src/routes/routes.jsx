import { Route } from "react-router-dom";
import { Home } from "../components/Home";
import { InfoMovie } from "../components/InfoMovie";

export const routes = (
  <>
    <Route path="/" element={<Home />} />
    <Route path="/:movieId" element={<InfoMovie />} />
  </>
);

export default routes;
