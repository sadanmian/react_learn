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
import { Fragment } from "react";
import FragmentsDemo from "./components/FragmentsDemo";
import Table from "./components/Table";
import PureComp from "./components/PureComp";
import ParentComp from "./components/ParentComp";
import RefsDemo from "./components/RefsDemo";
import FocusInput from "./components/FocusInput";
import FRParentInput from "./components/FRParentInput";
import PortalDemo from "./components/PortalDemo";
import Hero from "./components/Hero";
import ErrorBoundary from "./components/ErrorBoundary";
import ClickCounter from "./components/ClickCounter";
import HoverCounter from "./components/HoverCounter";
import ClickCounterTwo from "./components/ClickCounterTwo";
import HoverCounterTwo from "./HoverCounterTwo";
import User from "./components/User";
import Counterrr from "./components/Counterrr";

function App() {
  return (
    <div className="App">
      <Counterrr>
        {(count, incrementCount) => (
          <ClickCounterTwo count={count} incrementCount={incrementCount} />
        )}
      </Counterrr>
      <Counterrr>
        {(count, incrementCount) => (
          <HoverCounterTwo count={count} incrementCount={incrementCount} />
        )}
      </Counterrr>
      {/* <ClickCounterTwo />
      <HoverCounterTwo />
      <User
        render={(isLoggedIn) => (isLoggedIn ? "Sadan Mian From Rampur" : "Guest")}
      /> */}
      {/* <HoverCounter /> */}
      {/* <ClickCounter name={"sadan"} /> */}
      {/* <ErrorBoundary>
        <Hero heroName={"Batman"} />
      </ErrorBoundary>
      <ErrorBoundary>
        <Hero heroName={"Superman"} />
      </ErrorBoundary>
      <ErrorBoundary>
        <Hero heroName={"Joker"} />
      </ErrorBoundary> */}
      {/* <PortalDemo /> */}
      {/* <FRParentInput /> */}
      {/* <FocusInput /> */}
      {/* <RefsDemo /> */}
      {/* <ParentComp /> */}
      {/* <PureComp /> */}
      {/* <Table /> */}
      {/* <FragmentsDemo /> */}
      {/* <LifeCycleA /> */}
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
