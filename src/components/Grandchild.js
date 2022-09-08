import React from "react";

import Grandgrandchild from "./Grandgrandchild";

const Grandchild = ({ me }) => (
  <div className="Grandchild">
    <h3>Grandchild</h3>

    <Grandgrandchild me={me} />
  </div>
);

export default Grandchild;
