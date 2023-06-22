import { useEffect, useState } from "react";
import useUserRoles from "./useUserRoles";
import Loader from "../components/Loader";

const useCanAccess = (role) => {
  const [canAccess, setCanAccess] = useState(false);
  const userRoles = useUserRoles();

  useEffect(() => {
    if (userRoles instanceof Array) {
      setCanAccess(userRoles.some((userRole) => role.includes(userRole)));
    }
  }, [userRoles, role]);

  if (userRoles === null) return <Loader />;

  return canAccess;
};

export default useCanAccess;
