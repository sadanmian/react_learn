import React, { useReducer } from "react";

const initialState = {
  firstConter: 0,
  secondCounter: 10,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "Increment":
      return { ...state, firstConter: state.firstConter + action.value };
      break;
    case "Decrement":
      return { ...state, firstConter: state.firstConter - action.value };
      break;
    case "Increment2":
      return { ...state, secondCounter: state.secondCounter + action.value };
      break;
    case "Decrement2":
      return { ...state, secondCounter: state.secondCounter - action.value };
      break;
    case "Reset":
      return initialState;
      break;

    default:
      return state;
      break;
  }
};

export default function CounterTwo() {
  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <div>First Count : {count.firstConter}</div>
      <div>Second Count : {count.secondCounter}</div>
      <button onClick={() => dispatch({ type: "Increment", value: 1 })}>
        Increment First Counter
      </button>
      <button onClick={() => dispatch({ type: "Decrement", value: 1 })}>
        Decrement First Counter
      </button>
      <button onClick={() => dispatch({ type: "Increment", value: 5 })}>
        Increment First Counter by 5
      </button>
      <button onClick={() => dispatch({ type: "Decrement", value: 5 })}>
        Decrement First Counter by 5
      </button>
      <div>
        <button onClick={() => dispatch({ type: "Increment2", value: 1 })}>
          Increment Second Counter
        </button>
        <button onClick={() => dispatch({ type: "Decrement2", value: 1 })}>
          Decrement Second Counter
        </button>
        <button onClick={() => dispatch({ type: "Increment2", value: 5 })}>
          Increment Second Counter by 5
        </button>
        <button onClick={() => dispatch({ type: "Decrement2", value: 5 })}>
          Decrement Second Counter by 5
        </button>
      </div>
      <button onClick={() => dispatch({ type: "Reset" })}>Reset</button>
    </div>
  );
}
