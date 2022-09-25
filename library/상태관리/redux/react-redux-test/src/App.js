import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm"
import TodoListContainer from "./containers/TodoListContainer";
import TodoFormContainer from "./containers/TodoFormContainer";

function App() {
  return (
    <div>
        {/* <TodoList/>
        <TodoForm/> */}
        <TodoListContainer/>
        <TodoFormContainer/>
    </div>
  );
}

export default App;