import "react";
import "../style/navbar.css";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../Create";
import { useNavigate } from "react-router-dom";
const Navbar = () => {
  const { isAutheticate, logout } = useContext(AuthContext);
  const navigate = useNavigate();
  const handlelogut = () => {
    logout();
    navigate("/login");
  };
  return (
    <div>
      <nav>
        <NavLink to="/" className="nav-item">
          Home
        </NavLink>
        <NavLink to="/movies" className="nav-item">
          Movies
        </NavLink>
        {isAutheticate ? (
          <button onClick={handlelogut}>Logout</button>
        ) : (
          <button onClick={() => navigate("/login")}>Login</button>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
