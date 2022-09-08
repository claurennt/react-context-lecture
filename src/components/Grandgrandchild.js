import React from "react";

import Grandgrandgrandchild from "./Grandgrandgrandchild";
const Grandgrandchild = ({ me }) => (
  <div className="Grandgrandchild">
    <h4>Grandgrandchild</h4>

    <Grandgrandgrandchild me={me} />
  </div>
);

export default Grandgrandchild;
