import React, { useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Snackbar from "@material-ui/core/Snackbar";
import LoginStyles from "../styles/Login";
import Copyright from "../components/Copyright";
import Alert from "../components/Alert";
import { useHistory } from "react-router-dom";

interface LoginProps {
  setAuth: React.Dispatch<React.SetStateAction<boolean>>;
}

const Login = ({ setAuth }: LoginProps) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const history = useHistory();
  const classes = LoginStyles();

  const onLoginHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (username === "foo" && password === "bar") {
      setAuth(true);
      history.push("/home");
    } else {
      setError(true);
    }
  };

  const onUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };
  const onPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };
  const handleClose = () => {
    setError(false);
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form onSubmit={onLoginHandler} className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="username"
            label="Username"
            value={username}
            onChange={onUsernameChange}
            placeholder="foo"
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="password"
            label="Password"
            type="password"
            value={password}
            onChange={onPasswordChange}
            placeholder="bar"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign In
          </Button>
        </form>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
      <Snackbar
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        open={error}
        onClose={handleClose}
      >
        <Alert onClose={handleClose} severity="error">
          Oops! Invalid credentials.
        </Alert>
      </Snackbar>
    </Container>
  );
};

export default Login;
