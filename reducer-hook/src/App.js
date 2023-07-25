import logo from "./logo.svg";
import React, { useReducer } from "react";
import "./App.css";
import CounterOne from "./component/CounterOne";
import CounterTwo from "./component/CounterTwo";
import CounterThree from "./component/CounterThree";
import ComponentA from "./component/ComponentA";
import ComponentB from "./component/ComponentB";
import ComponentC from "./component/ComponentC";
import DataFetchingOne from "./component/DataFetchingOne";
import DataFetchingTwo from "./component/DataFetchingTwo";

// export const CountContext = React.createContext();

// const intialState = 0;
// const reducer = (state, action) => {
//   switch (action) {
//     case "increment":
//       return state + 1;
//       break;
//     case "decrement":
//       return state - 1;
//       break;
//     case "reset":
//       return intialState;
//       break;

//     default:
//       return state;
//       break;
//   }
// };

function App() {
  // const [count, dispatch] = useReducer(reducer, intialState);
  return (
    <div>
      <DataFetchingTwo />
      {/* <DataFetchingOne /> */}
    </div>
    // <>
    //   <CountContext.Provider
    //     value={{
    //       countState: count,
    //       countDispatch: dispatch,
    //     }}
    //   >
    //     <div className="App">
    //       Count - {count}
    //       <ComponentA />
    //       <ComponentB />
    //       <ComponentC />
    //     </div>
    //   </CountContext.Provider>
    //   {/* <CounterThree /> */}
    //   {/* <CounterTwo /> */}
    //   {/* <CounterOne /> */}
    // </>
  );
}

export default App;
