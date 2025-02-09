import { createStore } from "redux";
// import cakeReducer from "./cake/cakeReducer";
import rootReducer from "./rootReducer";

// const store = createStore(cakeReducer);//can aceept only one reducer
//we have to use combined reducer fun to handle multiple reduer
const store = createStore(rootReducer);
export default store;