import { onAuthStateChanged } from "firebase/auth";
import React from "react";
import { auth, db } from "../../../db/Firebase";
import { doc, getDoc } from "firebase/firestore";
import { Route } from "react-router-dom";

const AdminElement = ({ path, home }) => {
  onAuthStateChanged(auth, async (user) => {
    const docRef = doc(db, "users", `${user.uid}`)
    const docSnap = await getDoc(docRef);

    if (docSnap.get('role') === 'admin') {
      return <Route path={path} element={home} />
    } else {
      return ;
    }
  });
};

export default AdminElement;
