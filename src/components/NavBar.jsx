import { NavLink } from "react-router-dom";

export const NavBar = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <NavLink to="/" className="navBar">
              Home
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
};
