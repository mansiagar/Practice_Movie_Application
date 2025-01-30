import "react";
import { useContext, useEffect } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../Create";

// eslint-disable-next-line react/prop-types
const PrivateRouter = ({ children }) => {
  const location = useLocation();
  const { isAutheticate } = useContext(AuthContext);
  useEffect(() => {
    console.log(location);
  }, [location]);

  if (!isAutheticate) {
    return <Navigate to="/login" state={{ from: location }} />;
  }
  return children;
};

export default PrivateRouter;
