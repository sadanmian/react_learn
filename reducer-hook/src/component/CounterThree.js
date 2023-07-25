import React, { useReducer } from "react";

const intialState = 0;
const reducer = (state, action) => {
  switch (action) {
    case "increment":
      return state + 1;
      break;
    case "decrement":
      return state - 1;
      break;
    case "reset":
      return intialState;
      break;

    default:
      return state;
      break;
  }
};

function CounterThree() {
  const [count, dispatch] = useReducer(reducer, intialState);
  const [countTwo, dispatchTwo] = useReducer(reducer, intialState);
  return (
    <>
      <div>
        <div>Count - {count}</div>
        <button onClick={() => dispatch("increment")}>+</button>
        <button onClick={() => dispatch("decrement")}>-</button>
        <button onClick={() => dispatch("reset")}>0</button>
      </div>
      <div>
        <div>Count Two - {countTwo}</div>
        <button onClick={() => dispatchTwo("increment")}>+</button>
        <button onClick={() => dispatchTwo("decrement")}>-</button>
        <button onClick={() => dispatchTwo("reset")}>0</button>
      </div>
    </>
  );
}

export default CounterThree;
