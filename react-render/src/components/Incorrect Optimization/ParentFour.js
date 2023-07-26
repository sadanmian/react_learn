import React, { useCallback, useMemo, useState } from "react";
import { MemoizedChildFive } from "./ChildFive";

export const ParentFour = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("Sadan");

  const person = {
    fname: "Bruce",
    lname: "Wayne",
  };

  const memoizedPerson = useMemo(() => person, []);

  const handleClick = () => {};

  const memoizedHandleClick = useCallback(handleClick, []);

  console.log("ParentFour Render");

  return (
    <div>
      <label>{name}</label>
      <button onClick={() => setCount((prev) => prev + 1)}>
        Count-{count}
      </button>
      <button onClick={() => setName("JollyRoger")}>Change Name</button>
      {/* <MemoizedChildFive name={name} person={memoizedPerson} /> */}
      <MemoizedChildFive name={name} handleClick={memoizedHandleClick} />
    </div>
  );
};
