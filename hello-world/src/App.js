import "./App.css";
import { Greet } from "./components/Greet";
import Welcome from "./components/Welcome";
import Hello from "./components/Hello";
import Msg from "./components/Msg";
import Counter from "./components/Counter";
import FunctionClick from "./components/FunctionClick";
import ClassClick from "./components/ClassClick";
import EventBind from "./components/EventBind";
import ParentComponents from "./components/ParentComponents";
import UserGreeting from "./components/UserGreeting";
import NameList from "./components/NameList";
import StyleSheet from "./components/StyleSheet";
import Inline from "./components/Inline";
import "./appStyle.css";
import styles from "./appStyles.modules.css";
import Form from "./components/Form";
import LifeCycleA from "./components/LifeCycleA";

function App() {
  return (
    <div className="App">
      <LifeCycleA />
      {/* <Form /> */}
      {/* <h1 className="error">Error</h1> */}
      {/* <h1 className={styles.success}>Success</h1> */}
      {/* <Inline /> */}
      {/* <StyleSheet primary={true} /> */}
      {/* <NameList /> */}
      {/* <UserGreeting /> */}
      {/* <ParentComponents /> */}
      {/* <EventBind /> */}
      {/* <FunctionClick /> */}
      {/* <ClassClick /> */}
      {/* <Counter /> */}
      {/* <Msg /> */}
      {/* <Greet name="Bruce" heroName="Batman">
        <p>This is Childern Props</p>
      </Greet> */}
      {/* <Greet name="Clark" heroName="Superman">
        <button>This is Button</button>
      </Greet> */}
      {/* <Greet name="Diana" heroName="Wonder Woman">
        Diana
      </Greet> */}
      {/* <Welcome name="Bruce" heroName="Batman">
        <p>This is Childern Props</p>
      </Welcome> */}
      {/* <Welcome name="Clark" heroName="Superman">
        <button>This is Button</button>
      </Welcome> */}
      {/* <Welcome name="Diana" heroName="Wonder Woman">
        Diana
      </Welcome> */}
      {/* <Hello /> */}
    </div>
  );
}

export default App;
