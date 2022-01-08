import { Route, Routes } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

import AppBar from "./components/AppBar/AppBar";
import ContactsView from "./views/ContactsView";
import RegisterView from "./views/RegisterView/RegisterView";
import LoginView from "./views/LoginView/LoginView";
import authOperations from "./redux/auth/auth-operations";

import authSelectors from "./redux/selectors/auth-selector";

import PrivateRouter from "./components/PrivateRoute/PrivateRoute";
import PublicRoute from "./components/PublicRoute/PublicRoute";

import "./index.css";

function App() {
  const dispatch = useDispatch();
  const refreshedStatus = useSelector(authSelectors.getRefreshedStatus);

  useEffect(() => {
    dispatch(authOperations.refreshCurrentUser());
  }, [dispatch]);

  return (
    !refreshedStatus && (
      <div>
        <AppBar />

        <Routes>
          <Route
            path="contacts"
            element={
              <PrivateRouter redirectTo="/login">
                <ContactsView />
              </PrivateRouter>
            }
          />
          <Route
            path="/signup"
            element={
              <PublicRoute redirectTo="/contacts" restricted>
                {" "}
                <RegisterView />{" "}
              </PublicRoute>
            }
          />
          <Route
            path="/login"
            element={
              <PublicRoute redirectTo="/contacts" restricted>
                {" "}
                <LoginView />{" "}
              </PublicRoute>
            }
          />
        </Routes>
      </div>
    )
  );
}

export { App };
