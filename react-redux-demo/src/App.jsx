import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import CakeContainer from "./components/CakeContainer";
import { Provider } from "react-redux";
import store from "./redux/store";
import IceCreamContainer from "./components/IceCreamContainer";
import NewCakeContainer from "./components/NewCakeContainer";
import ItemContainer from "./components/ItemContainer";
import UserContainer from "./components/UserContainer";
function App() {
  return (
    <Provider store={store}>
      {/* <CakeContainer />
      <IceCreamContainer />
      <h2>New Cake Container</h2>
      <NewCakeContainer />
      <h2>Item Container</h2>
      <ItemContainer/>
      <ItemContainer cake/> */}
      <UserContainer/>
    </Provider>
  );
}

export default App;
