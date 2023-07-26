import React, { useState } from "react";

export const ParentOne = ({ children }) => {
  const [count, setCount] = useState(0);
  console.log("ParentOne Render");

  return (
    <div>
      <button onClick={() => setCount((prev) => prev + 1)}>
        Count-{count}
      </button>
      {children}
    </div>
  );
};
