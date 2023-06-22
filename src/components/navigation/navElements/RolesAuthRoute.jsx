import React, { Fragment } from "react";
import { Navigate } from "react-router-dom";
import useCanAccess from "../../../hooks/useCanAccess";
import Loader from "../../Loader";

const RolesAuthRoute = ({ children, role }) => {
  const canAccess = useCanAccess(role);

  if (canAccess === null) {
    return <Loader />;
  } else if (canAccess) {
    return <Fragment>{children}</Fragment>;
  } else if (canAccess === false) {
    return <Navigate to={"/login"} />;
  }
};

export default RolesAuthRoute;
