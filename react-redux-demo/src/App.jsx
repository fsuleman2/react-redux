import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import CakeContainer from "./components/CakeContainer";
import { Provider } from "react-redux";
import store from "./redux/store";
import IceCreamContainer from "./components/IceCreamContainer";
function App() {
  return (
    <Provider store={store}>
      <CakeContainer />
      <IceCreamContainer />
    </Provider>
  );
}

export default App;
