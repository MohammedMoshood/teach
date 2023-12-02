import { Navigate } from "react-router-dom";
const PrivateRoute = ({ isAuth, children }) => {
  return isAuth === true ? children : <Navigate to="/" replace />;
};
export default PrivateRoute;
