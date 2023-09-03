import "./App.css";
import DataFetch from "./components/useEffect/DataFetch";
import HookCounterOne from "./components/useEffect/HookCounterOne";
import HookMouse from "./components/useEffect/HookMouse";
import IntervalHookCounter from "./components/useEffect/IntervalHookCounter";
import MouseContainer from "./components/useEffect/MouseContainer";

function App() {
  return (
    <div className="App">
      {/* <HookCounterOne /> */}
      {/* <HookMouse /> */}
      {/* <MouseContainer /> */}
      {/* <IntervalHookCounter /> */}
      <DataFetch />
    </div>
  );
}

export default App;
