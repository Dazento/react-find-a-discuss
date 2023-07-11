import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import useUserRoles from "../../hooks/useUserRoles";

export const Navigation = () => {
  const [navbarActive, setNavbarActive] = useState(false);
  const userRoles = useUserRoles();

  const toggleMenu = () => {
    setNavbarActive(!navbarActive);
  };

  return (
    <header className="container">
      <nav className={navbarActive ? "navbar navbar--active" : "navbar"}>
        <ul>
          <NavLink to="/">
            <li>Home</li>
          </NavLink>
          {userRoles[1] == ["admin"] ? (
            <>
              <NavLink to="/add-question">
                <li>Add a question</li>
              </NavLink>
            </>
          ) : null}
          {userRoles[2] == ["super-admin"] ? (
            <>
              <NavLink to="/dashboard">
                <li>Dashboard</li>
              </NavLink>
            </>
          ) : null}
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
