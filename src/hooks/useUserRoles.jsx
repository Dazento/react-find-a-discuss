import { doc, onSnapshot } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../db/Firebase";
import Loader from "../components/Loader";
import useUser from "./useUser";

const useUserRoles = () => {
  const [roles, setRoles] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const { user } = useUser();

  const fetchUserRoles = () => {
    if (user) {
      onSnapshot(doc(db, "users", `${user.uid}`), (doc) => {
        setRoles(doc.data().role);
        setIsLoading(false);
      });
    }
  };

  useEffect(() => {
    fetchUserRoles();
  }, [user]);

  if (isLoading) return <Loader />;

  return roles;
};

export default useUserRoles;
