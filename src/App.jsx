import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Home } from "./components/Home";
import { ErrorPage } from "./components/ErrorPage";
import { InfoMovie } from "./components/InfoMovie";
import { LearnMore } from "./pages/LearnMore";

export const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<ErrorPage />} />
          <Route path="/movie/:movieId" element={<InfoMovie />}>
            <Route path="/movie/:movieId/learnmore" element={<LearnMore />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
};
