import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

import authSelectors from "../../redux/selectors/auth-selector";

function PrivateRouter({ children, redirectTo = "/login" }) {
  const isLoggedIn = useSelector(authSelectors.getLoggedInStatus);

  return isLoggedIn ? children : <Navigate to={redirectTo} />;
}

export default PrivateRouter;
