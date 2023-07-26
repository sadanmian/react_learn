import React, { useState } from "react";
import { MemoizedChildThree } from "./ChildThree";
import { MemoizedChildFour } from "./ChildFour";

export const ParentThree = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("Sadan");
  console.log("ParentThree Render");

  return (
    <div>
      <label>{name}</label>
      <button onClick={() => setCount((prev) => prev + 1)}>
        Count-{count}
      </button>
      <button onClick={() => setName("JollyRoger")}>Change Name</button>
      <MemoizedChildFour name={name} />
      {/* <MemoizedChildThree name={name}>
        <strong>Hello</strong>
      </MemoizedChildThree> */}
    </div>
  );
};
