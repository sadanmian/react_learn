import React, { useReducer } from "react";

const intialState = {
  firstCounter: 0,
  secondCounter: 10,
};
const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { ...state, firstCounter: state.firstCounter + action.value };
      break;
    case "decrement":
      return { ...state, firstCounter: state.firstCounter - action.value };
      break;
    case "increment2":
      return { ...state, secondCounter: state.secondCounter + action.value };
      break;
    case "decrement2":
      return { ...state, secondCounter: state.secondCounter - action.value };
      break;
    case "reset":
      return intialState;
      break;

    default:
      return state;
      break;
  }
};

function CounterTwo() {
  const [count, dispatch] = useReducer(reducer, intialState);
  return (
    <div>
      <div>First Counter - {count.firstCounter}</div>
      <div>Second Counter - {count.secondCounter}</div>
      <div>
        <button onClick={() => dispatch({ type: "increment", value: 1 })}>
          +1 to Counter 1
        </button>
        <button onClick={() => dispatch({ type: "decrement", value: 1 })}>
          -1 to Counter 1
        </button>
        <button onClick={() => dispatch({ type: "increment", value: 5 })}>
          +5 to Counter 1
        </button>
        <button onClick={() => dispatch({ type: "decrement", value: 5 })}>
          -5 to Counter 1
        </button>
      </div>
      <div>
        <button onClick={() => dispatch({ type: "increment2", value: 1 })}>
          +1 to Counter 2
        </button>
        <button onClick={() => dispatch({ type: "decrement2", value: 1 })}>
          -1 to Counter 2
        </button>
      </div>
      <button onClick={() => dispatch({ type: "reset" })}>
        Reset to initial value
      </button>
    </div>
  );
}

export default CounterTwo;
