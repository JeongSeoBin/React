import { Route, Router } from "react-router-dom";
import Home from "./pages/Home";
import Todos from "./pages/Todos";
import Users from "./pages/Users";
import history from "./history";

function App() {
  return (
    <Router history={history}>
      <Route exact path="/" component={Home}/>
      <Route exact path="/todos" component={Todos}/>
      <Route exact path="/users" component={Users}/>
    </Router>
  );
}

export default App;