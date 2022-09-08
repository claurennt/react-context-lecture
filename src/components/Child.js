import React from "react";

import Grandchild from "./Grandchild";

const Child = ({ me }) => (
  <div className="Child">
    <h2>Child component</h2>
    <Grandchild me={me} />
  </div>
);

export default Child;
