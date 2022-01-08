import { useSelector, useDispatch } from "react-redux";

import { FaUserCircle } from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";
import authSelectors from "../../redux/selectors/auth-selector";
import authOperations from "../../redux/auth/auth-operations";

import styles from "./UserMenu.module.css";

function UserMenu() {
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.getUserName);

  return (
    <div className={styles.userBlockContainer}>
      <div className={styles.userBlock}>
        <div className={styles.UserIconWrapper}>
          <FaUserCircle className={styles.userIcon} />
        </div>
        <p className={styles.name}>{name}</p>
      </div>
      <div type="button" onClick={() => dispatch(authOperations.signOut())}>
        <FiLogOut className={styles.logOutIcon} />
      </div>
    </div>
  );
}

export default UserMenu;
