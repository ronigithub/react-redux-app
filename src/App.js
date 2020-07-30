import React from "react";
import "./App.css";
import { Provider } from "react-redux";
import CakeContainer from "./components/CakeContainer";
import store from "./redux/store";
import HooksCakeContainer from "./components/HooksCakeContainer";
import NewCakeContainer from "./components/NewCakeContainer";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <HooksCakeContainer />
        <CakeContainer />
        <NewCakeContainer />
      </div>
    </Provider>
  );
}

export default App;
