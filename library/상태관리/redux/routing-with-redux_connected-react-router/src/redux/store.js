import { applyMiddleware, createStore } from "redux";
import reducer from "./reducer";
import thunk from "redux-thunk";
import history from "../history"
import { routerMiddleware } from "connected-react-router";

const store = createStore(reducer, applyMiddleware(
        thunk.withExtraArgument({history}),
        routerMiddleware(history)
    )
);

export default store