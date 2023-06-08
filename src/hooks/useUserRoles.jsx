import { doc, getDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../db/Firebase";
import { getAuth } from "firebase/auth";

const useUserRoles = () => {
  const [roles, setRoles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const auth = getAuth();
  const user = auth.currentUser;

  const fetchUserRoles = async () => {
    const docRef = doc(db, "users", `${user.uid}`);
    const docSnap = await getDoc(docRef);

    setRoles(docSnap.get("role"));
    setIsLoading(false);
  };

  useEffect(() => {
    if (user) {
      fetchUserRoles();
    }
  }, []);

  if (isLoading) {
    return "Loading..."; // Exemple avec un indicateur de chargement
  }

  return roles;
};

export default useUserRoles;
