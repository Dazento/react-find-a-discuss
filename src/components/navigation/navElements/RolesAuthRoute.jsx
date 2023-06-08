import React, { Fragment, useEffect } from "react";
import { Navigate } from "react-router-dom";
import useUserRoles from "../../../hooks/useUserRoles";

const RolesAuthRoute = ({ children, roles }) => {
  const userRoles = useUserRoles();

  useEffect(() => {
    if (userRoles != "Loading...") {
      console.log(userRoles.some((userRole) => roles.includes(userRoles)));
      const canAccess = userRoles.some((userRole) => roles.includes(userRoles));
    
      if (canAccess) return <Fragment>{children}test</Fragment>;
    
      // return <Navigate to={"/login"} />;
    }
  }, [userRoles])
};

export default RolesAuthRoute;
