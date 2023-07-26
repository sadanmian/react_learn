import React, { useState } from "react";
import useCounter from "../hooks/useCounter";

function CounterTwo() {
  const [count, increment, decrement, reset] = useCounter(5,7);
  return (
    <>
      <h2>{count}</h2>
      <div>
        <button onClick={increment}>+</button>
      </div>
      <div>
        <button onClick={decrement}>-</button>
      </div>
      <div>
        <button onClick={reset}>0</button>
      </div>
    </>
  );
}

export default CounterTwo;
