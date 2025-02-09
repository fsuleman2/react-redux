import { createStore, applyMiddleware } from "redux";
import { thunk } from "redux-thunk";
// import cakeReducer from "./cake/cakeReducer";
import rootReducer from "./rootReducer";
import logger from "redux-logger";
// const store = createStore(cakeReducer);//can aceept only one reducer
//we have to use combined reducer fun to handle multiple reduer
const store = createStore(rootReducer, applyMiddleware(logger, thunk));
export default store;
