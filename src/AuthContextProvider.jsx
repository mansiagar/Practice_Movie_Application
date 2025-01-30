import "react";
import { AuthContext } from "./Create";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
// eslint-disable-next-line react/prop-types
const AuthContextProvider = ({ children }) => {
  // check authenticate or not
  const [isAutheticate, setAuthenticate] = useState(() => {
    return localStorage.getItem("token") ? true : false;
  });

  const location = useLocation();
  // set Token
  const [token, setToken] = useState(null);

  // navigation
  const navigate = useNavigate();
  // check token
  useEffect(() => {
    console.log(token);
  }, [token]);

  const login = (authToken) => {
    //set the token
    setToken(authToken);

    // set authentication true
    setAuthenticate(true);
    // set vlaue in localstorage
    localStorage.setItem("token", authToken);
    // navigate to authenticate page
    navigate(location.state.from || "/");
  };
  const logout = () => {
    setToken(null);
    setAuthenticate(false);
    localStorage.removeItem("token");
    navigate("/");
  };
  return (
    <AuthContext.Provider value={{ token, login, isAutheticate, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
