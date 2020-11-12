import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import Title from "./Title";

import { auth } from "../firebase";

function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  let history = useHistory();

  const handleSubmit = (event) => {
    event.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((authUser) => {
        // return authUser.user.updateProfile({ displayName: username });
        return history.push("/");
      })
      .catch((error) => alert(error.message));
  };
  const isInValid = password === "" || email === "";

  return (
    <div className="registration-form">
      <form onSubmit={handleSubmit}>
        <Title title="Create Account" />
        <input
          placeholder="Enter your Username"
          value={username}
          onChange={({ target }) => setUsername(target.value)}
        />
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
          Sign Up
        </button>
        <p>
          Already hvae account? Sign In <Link to="/signin">here</Link>
        </p>
      </form>
    </div>
  );
}

export default SignUp;
