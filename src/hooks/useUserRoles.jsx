import { doc, getDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../db/Firebase";
import { getAuth } from "firebase/auth";

const useUserRoles = () => {
  const [roles, setRoles] = useState([]);
  const [isLoading, setIsLoading] = useState(true); // Nouvelle variable d'état

  const auth = getAuth();
  const user = auth.currentUser;

  const fetchUserRoles = async () => {
    const docRef = doc(db, "users", `${user.uid}`);
    const docSnap = await getDoc(docRef);

    setRoles(docSnap.get("role"));
    setIsLoading(false); // Définir isLoading sur false une fois les rôles récupérés
  };

  useEffect(() => {
    fetchUserRoles();
  }, []);

  if (isLoading) {
    // Si les rôles sont en cours de récupération, vous pouvez retourner un indicateur de chargement ou une valeur par défaut
    return "Loading..."; // Exemple avec un indicateur de chargement
  }
  
  return roles;
};

export default useUserRoles;
