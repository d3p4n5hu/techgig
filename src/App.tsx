import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import CssBaseline from "@material-ui/core/CssBaseline";

export default function App() {
  const [auth, setAuth] = useState(true);

  return (
    <>
      <CssBaseline />

      <Router>
        <Switch>
          <Route
            path="/home"
            render={({ location }) =>
              auth ? (
                <Home setAuth={setAuth} />
              ) : (
                <Redirect
                  to={{
                    pathname: "/",
                    state: { from: location },
                  }}
                />
              )
            }
          />
          <Route
            path="/"
            render={({ location }) =>
              !auth ? (
                <Login setAuth={setAuth} />
              ) : (
                <Redirect
                  to={{
                    pathname: "/home",
                    state: { from: location },
                  }}
                />
              )
            }
          />
          <Route path="*">
            <Login setAuth={setAuth} />
          </Route>
        </Switch>
      </Router>
    </>
  );
}
