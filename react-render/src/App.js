import logo from "./logo.svg";
import "./App.css";
import { UseState } from "./components/UseState/UseState";
import { UseReducer } from "./components/UseReducer/UseReducer";
import { ObjectUseState } from "./components/Immutable State/ObjectUseState";
import { ArrayUseState } from "./components/Immutable State/ArrayUseState";

function App() {
  return (
    <div className="App">
      <ObjectUseState />
      <ArrayUseState />
      {/* <UseReducer /> */}
      {/* <UseState /> */}
    </div>
  );
}

export default App;
