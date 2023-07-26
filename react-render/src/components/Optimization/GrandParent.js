import React, { useState } from "react";
import { ParentOne } from "./ParentOne";
import { ChildOne } from "./ChildOne";

export const GrandParent = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>
        GrandParent Count - {count}
      </button>
      <ParentOne count={count}>
        <ChildOne />
      </ParentOne>
    </div>
  );
};
