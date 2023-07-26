import "./App.css";
import React from "react";
import ParentComponent from "./components/ParentComponent";
import Counter from "./components/Counter";
import FocusInput from "./components/FocusInput";
import ClassTimer from "./components/ClassTimer";
import HookTimer from "./components/HookTimer";
import DocTitleOne from "./components/DocTitleOne";
import DocTitleTwo from "./components/DocTitleTwo";
import CounterOne from "./components/CounterOne";
import CounterTwo from "./components/CounterTwo";

function App() {
  return (
    <div className="App">
      <CounterOne />
      <CounterTwo />
      {/* <DocTitleOne /> */}
      {/* <DocTitleTwo /> */}
      {/* <HookTimer /> */}
      {/* <ClassTimer /> */}
      {/* <FocusInput /> */}
      {/* <Counter /> */}
      {/* <ParentComponent /> */}
    </div>
  );
}

export default App;
