import { connect, useSelector } from "react-redux";
import TodoList from "../components/TodoList";

/* connect 함수를 이용하여 컨테이너 작성 */
// const mapStateToProps = (state) => {
//     return {
//         todos: state.todos
//     }
// }

// const mapDispatchToProps = (dispatch) => {
//     return {}
// }

// const TodoListContainer = connect(
//     mapStateToProps,
//     mapDispatchToProps
// )(TodoList)

// export default TodoListContainer

/* useSelector를 이용하여 컨테이너 작성 */
function TodoListContainer() {
  const todos = useSelector((state) => state.todos);

  return <TodoList todos={todos} />;
}

export default TodoListContainer;
