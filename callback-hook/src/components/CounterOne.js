import React, { useState } from "react";
import useCounter from "../hooks/useCounter";

function CounterOne() {
  const [count,increment,decrement,reset] = useCounter()
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

export default CounterOne;
