import React from "react";

import Lorem from "../Lorem";
import ViewportBox from "./ViewportBox";

const ComponentUsesViewport: React.FC<{}> = () => {
  return (
    <div>
      <Lorem />
      <ViewportBox />
      <Lorem />
    </div>
  );
};

export default ComponentUsesViewport;
