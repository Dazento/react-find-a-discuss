import React, { Fragment, useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import useUserRoles from "../../../hooks/useUserRoles";

const RolesAuthRoute = ({ children, roles }) => {
  const [canAccess, setCanAccess] = useState(false);

  const userRoles = useUserRoles();

  const compareRoles = () => {
    if (userRoles !== "Loading...") {
      setCanAccess(userRoles.some((userRole) => roles.includes(userRole)));
    }
  };

  useEffect(() => {
    compareRoles();
  }, [userRoles]);

  if (canAccess) {
    return <Fragment>{children}</Fragment>;
  }
  // else if (userRoles !== "Loading..." && !canAccess) {
  //   console.log(userRoles);
  //   console.log(canAccess);

  //   return <Navigate to={"/login"} />;
  // }
};

export default RolesAuthRoute;
