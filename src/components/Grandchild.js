import React from "react";
import Grandgrandchild from "./Grandgrandchild";

const Grandchild = () => {
  return (
    <div className="Grandchild">
      <h3>Grandchild</h3>

      <Grandgrandchild />
    </div>
  );
};

export default Grandchild;
