import React, { useContext } from "react";
import { CountContext } from "../../App";

export default function ComponentA() {
  const countContext = useContext(CountContext);
  return (
    <div>
      ComponentA : {countContext.count}
      <button onClick={() => countContext.dispatch("increment")}>
        Increment
      </button>
      <button onClick={() => countContext.dispatch("decrement")}>
        Decrement
      </button>
      <button onClick={() => countContext.dispatch("reset")}>Reset</button>
    </div>
  );
}
