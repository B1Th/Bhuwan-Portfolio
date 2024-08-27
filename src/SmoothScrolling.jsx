import React from "react";
import { ReactLenis } from "@studio-freight/react-lenis";

const SmoothScrolling = ({ children }) => {
  return (
    <ReactLenis options={{ duration: 2 }} root>
      {children}
    </ReactLenis>
  );
};

export default SmoothScrolling;
