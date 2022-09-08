import React from "react";

const Grandgrandgrandchild = ({ me }) => (
  <div className="Grandgrandgrandchild">
    <h5>Grandgrandgrandchild</h5>
    <div>
      <h6> Props should be displayed here:</h6>
      <p>Username: {me.username}</p>
      <p>Email: {me.email}</p>
      <p>Admin: {me.admin}</p>
    </div>
  </div>
);

export default Grandgrandgrandchild;
