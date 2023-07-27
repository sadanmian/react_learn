import React from "react";
import { Provider } from "react";
import store from "./redux/store";
import "./App.css";
import CakeContainer from "./components/CakeContainer";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <CakeContainer />
      </div>
    </Provider>
  );
}

export default App;
