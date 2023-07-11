import React, { useState } from "react";
import { auth } from "../../db/Firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

const SignInForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassowrd] = useState("");

  const signIn = (e) => {
    e.preventDefault();

    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        setEmail("")
        setPassowrd("")
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <form onSubmit={signIn}>
      <h1>login</h1>
      <input
        className="input"
        type="text"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      ></input>
      <input
        className="input"
        type="password"
        placeholder="Enter your password"
        value={password}
        onChange={(e) => setPassowrd(e.target.value)}
      ></input>
      <button type="submit" className="btn">Log In</button>
    </form>
  );
};

export default SignInForm;
