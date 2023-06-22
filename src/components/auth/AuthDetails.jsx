import React from "react";
import useUser from "../../hooks/useUser";

const AuthDetails = () => {
  const { user, logout } = useUser();

  return (
    <div>
      {user ? (
        <>
          <p>{`Signed In as ${user.email}`}</p>{" "}
          <button onClick={logout} className="btn">
            Sign Out
          </button>
        </>
      ) : (
        <p>Signed Out</p>
      )}
    </div>
  );
};

export default AuthDetails;
