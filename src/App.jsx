import { BrowserRouter } from "react-router-dom";
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
