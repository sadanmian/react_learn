import logo from "./logo.svg";
import "./App.css";
import { UseState } from "./components/UseState/UseState";
import { UseReducer } from "./components/UseReducer/UseReducer";
import { ObjectUseState } from "./components/Immutable State/ObjectUseState";
import { ArrayUseState } from "./components/Immutable State/ArrayUseState";
import { Parent } from "./components/Parent Child/Parent";
import { ParentOne } from "./components/Optimization/ParentOne";
import { ChildOne } from "./components/Optimization/ChildOne";
import { GrandParent } from "./components/Optimization/GrandParent";

function App() {
  return (
    <div className="App">
      <GrandParent />
      {/* <ParentOne>
        <ChildOne />
      </ParentOne> */}
      {/* <Parent /> */}
      {/* <ObjectUseState /> */}
      {/* <ArrayUseState /> */}
      {/* <UseReducer /> */}
      {/* <UseState /> */}
    </div>
  );
}

export default App;
