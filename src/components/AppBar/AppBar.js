import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

import UserMenu from "../UserMenu/UserMenu";
import styles from "./AppBar.module.css";
import authSelectors from "../../redux/selectors/auth-selector";

function AppBar() {
  const loggedStatus = useSelector(authSelectors.getLoggedInStatus);

  return (
    <div className={styles.navContainer}>
      {loggedStatus && (
        <div>
          <NavLink
            to="/contacts"
            className={styles.navLink}
            // activeClassName={styles.navLink_active}
          >
            Contacts
          </NavLink>
        </div>
      )}

      {loggedStatus ? (
        <UserMenu />
      ) : (
        <div className={styles.authBlock}>
          <NavLink
            to="/signup"
            className={styles.navLink}
            // activeClassName={styles.navLink_active}
          >
            Registration
          </NavLink>

          <NavLink
            to="/login"
            className={styles.navLink}
            // activeClassName={styles.navLink_active}
          >
            Log in
          </NavLink>
        </div>
      )}
    </div>
  );
}

export default AppBar;
