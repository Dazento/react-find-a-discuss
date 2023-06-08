import React from "react";
import { NavLink } from "react-router-dom";

export const Navigation = () => {
  return (
    <nav className="navigation">
      <ul>
        <NavLink to="/">
          <li>Home</li>
        </NavLink>
        <NavLink to="/add-question">
          <li>Add a question</li>
        </NavLink>
        <NavLink to="/login">
          <li>Sign In / Sign Up</li>
        </NavLink>
      </ul>
    </nav>
  );
};
