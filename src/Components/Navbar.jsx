import "react";
import "../style/navbar.css";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <div>
      <nav>
        <NavLink to="/" className="nav-item">
          Home
        </NavLink>
        <NavLink to="/movies" className="nav-item">
          Movies
        </NavLink>
        <NavLink to="/login" className="nav-item">
          Login
        </NavLink>
      </nav>
    </div>
  );
};

export default Navbar;
