import React from "react";
import SignInForm from "../../components/auth/SignInForm";
import SignUpForm from "../../components/auth/SignUpForm";
import { Navigation } from "../../components/navigation/Navigation";
import AuthDetails from "../../components/auth/AuthDetails";

const Auth = () => {
  return (
    <>
      <Navigation />
      <div className="background">
        <SignInForm />
        <SignUpForm />
        <AuthDetails />
      </div>
    </>
  );
};

export default Auth;
