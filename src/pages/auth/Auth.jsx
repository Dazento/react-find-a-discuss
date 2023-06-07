import React from "react";
import SignInForm from "../../components/auth/SignInForm";
import SignUpForm from "../../components/auth/SignUpForm";
import { Navigation } from "../../components/navigation/Navigation";

const Auth = () => {
  return (
    <>
      <Navigation />
      <SignInForm />
      <SignUpForm />
    </>
  );
};

export default Auth;
