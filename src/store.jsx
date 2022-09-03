import { createStore } from "redux";
// import thunk from "redux-thunk";
// import { composeWithDevTools } from "redux-devtools-extension";
import reducer from "./reducers/index";

const store = createStore(reducer);

export default store;
