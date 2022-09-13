import React from "react";

import { useUserContext } from "../context/UserContext";
const Grandgrandgrandchild = () => {
  const { me } = useUserContext();

  return (
    <div className="Grandgrandgrandchild">
      <h5>Grandgrandgrandchild</h5>
      <h6> Props should be displayed here:</h6>
      {me && (
        <div>
          <p>Username: {me.username}</p>
          <p>Email: {me.email}</p>
          <p>{me.isAdmin ? "admin" : "user"}</p>
        </div>
      )}
    </div>
  );
};

export default Grandgrandgrandchild;
