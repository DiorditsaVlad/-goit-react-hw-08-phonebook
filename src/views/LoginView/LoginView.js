import { useState } from "react";
import { useDispatch } from "react-redux";

import authOperations from "../../redux/auth/auth-operations";
import styles from "./LoginView.module.css";

function LoginView() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const inputChange = (e) => {
    switch (e.target.name) {
      case "email":
        return setEmail(e.target.value);

      case "password":
        return setPassword(e.target.value);

      default:
        return;
    }
  };

  const formSubmit = (e) => {
    e.preventDefault();
    dispatch(authOperations.signIn({ email, password }));
    setEmail("");
    setPassword("");
  };

  return (
    <div className={styles.loginFormContainer}>
      <form
        autoComplete="off"
        onSubmit={formSubmit}
        className={styles.loginForm}
      >
        <label>
          <span>E-mail</span>
          <input
            type="email"
            name="email"
            value={email}
            placeholder="enter your e-mail"
            onChange={inputChange}
          />
        </label>

        <label>
          <span>Password</span>
          <input
            type="password"
            name="password"
            value={password}
            onChange={inputChange}
          />
        </label>

        <button type="submit" className={styles.formSubmitButton}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default LoginView;
