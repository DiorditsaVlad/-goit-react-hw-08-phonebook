import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

import authSelectors from "../../redux/selectors/auth-selector";

function PublicRoute({ children, restricted = false, redirectTo = "/" }) {
  const isLoggedIn = useSelector(authSelectors.getLoggedInStatus);
  const shouldRedirect = isLoggedIn && restricted;

  return shouldRedirect ? <Navigate to={redirectTo} /> : children;
}

export default PublicRoute;
