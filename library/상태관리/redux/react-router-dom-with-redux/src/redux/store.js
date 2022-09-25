import { applyMiddleware, createStore } from "redux";
import reducer from "./modules/reducer";
import thunk from "redux-thunk";
import history from "../history"

const store = createStore(reducer, applyMiddleware(thunk.withExtraArgument({history})));

export default store