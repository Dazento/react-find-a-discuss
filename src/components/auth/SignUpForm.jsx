import React, { useState } from "react";
import { auth, db, collection } from "../../db/Firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { setDoc, doc } from "firebase/firestore";

const SignUpForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassowrd] = useState("");

  const signUp = (e) => {
    e.preventDefault();

    createUserWithEmailAndPassword(auth, email, password)
      .then(userCredential => {
        return setDoc(doc(db, "users", `${userCredential.user.uid}`), {
          role: "user"
        });
      })
      .then(userCredential => {
        console.log(userCredential);
      })
      .catch(error => {
        console.log(error);
      });
  };
  return (
    <form onSubmit={signUp}>
      <h1>Create Account</h1>
      <input
        type="text"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      ></input>
      <input
        type="password"
        placeholder="Enter your password"
        value={password}
        onChange={(e) => setPassowrd(e.target.value)}
      ></input>
      <button type="submit">Sign Up</button>
    </form>
  );
};

export default SignUpForm;
