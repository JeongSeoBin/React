import TodoListContainer from "./containers/TodoListContainer";
import TodoFormContainer from "./containers/TodoFormContainer";
import UserListContainer from "./containers/UserListContainer";

function App() {
  return (
    <div>
        <TodoListContainer/>
        <TodoFormContainer/>
        <UserListContainer/>
    </div>
  );
}

export default App;