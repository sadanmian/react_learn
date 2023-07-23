import "./App.css";
import { Greet } from "./components/Greet";
import Welcome from "./components/Welcome";
import Hello from "./components/Hello";
import Msg from "./components/Msg";
import Counter from "./components/Counter";

function App() {
  return (
    <div className="App">
      <Counter />
      {/* <Msg /> */}
      {/* <Greet name="Bruce" heroName="Batman">
        <p>This is Childern Props</p>
      </Greet>
      <Greet name="Clark" heroName="Superman">
        <button>This is Button</button>
      </Greet>
      <Greet name="Diana" heroName="Wonder Woman">
        Diana
      </Greet> */}
      {/* <Welcome name="Bruce" heroName="Batman">
        <p>This is Childern Props</p>
      </Welcome>
      <Welcome name="Clark" heroName="Superman">
        <button>This is Button</button>
      </Welcome>
      <Welcome name="Diana" heroName="Wonder Woman">
        Diana
      </Welcome> */}
      {/* <Hello /> */}
    </div>
  );
}

export default App;
