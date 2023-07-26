import "./App.css";
import React from "react";
import ParentComponent from "./components/ParentComponent";
import Counter from "./components/Counter";

function App() {
  return (
    <div className="App">
      <Counter />
      {/* <ParentComponent /> */}
    </div>
  );
}

export default App;
