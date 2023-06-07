import React from "react";
import { NavLink } from "react-router-dom";
import AdminElement from "./navElements/AdminElement";

export const Navigation = () => {
  return (
    <nav className="navigation">
      <ul>
        <NavLink to="/">
          <li>Home</li>
        </NavLink>
        <NavLink to="/add-discuss">
          <li>Add discuss</li>
        </NavLink>
        <NavLink to="/login">
          <li>Sign In / Sign Up</li>
        </NavLink>
      </ul>
    </nav>
  );
};
