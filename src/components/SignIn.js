import React, { useState } from "react";
import history from "./history";
import { Link, useHistory } from "react-router-dom";
import Title from "./Title";
import { auth } from "../firebase";

function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  let history = useHistory();

  const handleSubmit = (event) => {
    event.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        return history.push("/");
      })
      .catch((error) => {
        setEmail("");
        setPassword("");
        setError(error.message);
      });
  };
  const isInValid = password === "" || email === "";

  return (
    <div className="registration-form">
      <form onSubmit={handleSubmit}>
        <Title title="Sign In" />

        <input
          placeholder="Enter your Email Address"
          value={email}
          onChange={({ target }) => setEmail(target.value)}
        />
        <input
          placeholder="Password"
          autoComplete="off"
          value={password}
          onChange={({ target }) => setPassword(target.value)}
          type="password"
        />
        <button disabled={isInValid} type="submit" className="btn-primary">
          Sign In
        </button>
        <p>
          Don't have an account? Sign Up <Link to="/signup">here</Link>
        </p>
      </form>
    </div>
  );
}

export default SignIn;
