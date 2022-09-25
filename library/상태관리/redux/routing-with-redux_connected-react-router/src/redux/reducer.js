import {combineReducers} from 'redux';
import todos from "./modules/todos";
import filter from "./modules/filter";
import users from "./modules/users";
import {connectRouter} from "connected-react-router";
import history from "../history";

const reducer = combineReducers({
    todos, 
    filter, 
    users,
    router: connectRouter(history)
});

export default reducer;
