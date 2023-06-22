import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../db/Firebase";
import { useEffect, useState } from "react";
import Loader from "../components/Loader";

const useUser = () => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUser(user);
      setIsLoading(false);
    });
  }, []);

  const logout = async () => {
    await signOut(auth);
  };

  if (isLoading) return <Loader />;

  return { user, logout };
};

export default useUser;
