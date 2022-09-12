import React from "react";
import { useContext } from "react";
import UserContext from "../context/UserContext";
const Grandgrandgrandchild = () => {
  const me = useContext(UserContext);
  return (
    <div className="Grandgrandgrandchild">
      <h5>Grandgrandgrandchild</h5>
      <div>
        <h6> Props should be displayed here:</h6>
        <p>Username: {me.username}</p>
        <p>Email: {me.email}</p>
        <p>{me.isAdmin ? "admin" : "user"}</p>
      </div>
    </div>
  );
};

export default Grandgrandgrandchild;
