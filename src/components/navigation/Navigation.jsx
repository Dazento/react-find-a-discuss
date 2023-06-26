import React, { useState } from "react";
import { NavLink } from "react-router-dom";

export const Navigation = () => {
  const [navbarActive, setNavbarActive] = useState(false);

  const toggleMenu = () => {
    setNavbarActive(!navbarActive);
  };

  console.log(navbarActive);

  return (
    <header className="container">
      <nav className={navbarActive ? "navbar navbar--active" : "navbar"}>
        <ul>
          <NavLink to="/">
            <li>Home</li>
          </NavLink>
          <NavLink to="/add-question">
            <li>Add a question</li>
          </NavLink>
          <NavLink to="/dashboard">
            <li>Dashboard</li>
          </NavLink>
          <NavLink to="/login">
            <li>Sign In / Sign Up</li>
          </NavLink>
        </ul>
        <button className="burger-btn" onClick={toggleMenu}>
          <span className="burger-btn_bar burger-btn_bar--active"></span>
        </button>
      </nav>
    </header>
  );
};
