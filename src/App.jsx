import { BrowserRouter } from "react-router-dom";
import { Home } from "./components/Home";
import { NavBar } from "./components/NavBar";

export const App = () => {
  return (
    <>
      <BrowserRouter>
        <NavBar />
      </BrowserRouter>
    </>
  );
};
