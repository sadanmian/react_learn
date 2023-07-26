import React, { useState } from "react";
import { MemoizedChildTwo } from "./ChildTwo";

export const ParentTwo = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("Sadan");
  console.log("ParentTwo Render");

  return (
    <div>
      <label>{name}</label>
      <button onClick={() => setCount((prev) => prev + 1)}>
        Count-{count}
      </button>
      <button onClick={() => setName("JollyRoger")}>Change Name</button>
      <MemoizedChildTwo name={name} />
    </div>
  );
};
