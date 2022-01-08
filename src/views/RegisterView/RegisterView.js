import { useState } from "react";
import { useDispatch } from "react-redux";
import authOperations from "../../redux/auth/auth-operations";

import styles from "./RegisterView.module.css";

function RegisterView() {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const inputChange = (e) => {
    switch (e.target.name) {
      case "name":
        return setName(e.target.value);

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
    dispatch(authOperations.register({ name, email, password }));
    setName("");
    setEmail("");
    setPassword("");
  };

  return (
    <div className={styles.registerFormContainer}>
      <form
        className={styles.registerForm}
        onSubmit={formSubmit}
        autoComplete="off"
      >
        <label>
          <span>Name</span>
          <input
            type="text"
            name="name"
            placeholder="enter your name"
            value={name}
            onChange={inputChange}
          />
        </label>

        <label>
          <span>E-mail</span>
          <input
            type="email"
            name="email"
            placeholder="enter your e-mail"
            value={email}
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

        <button className={styles.formSubmitButton} type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}

export default RegisterView;
